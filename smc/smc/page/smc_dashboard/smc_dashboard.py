import frappe

@frappe.whitelist()
def get_data(year = None, division = None, district = None, taluka= None):
    cons = ""
    if year:
        cons += " and year = '%s' "%(year)
    if division:
        cons += " and  division = '%s' "%(division)
    if district:
        cons += " and  district = '%s' "%(district)
    if taluka:
        cons += " and  tehsil = '%s' "%(taluka)

    conds = ""
    if year:
        conds += " and k.year = '%s' "%(year)
    if division:
        conds += " and  d.division = '%s' "%(division)
    if district:
        conds += " and  d.name = '%s' "%(district)

    condi = ""
    if year:
        condi += " and s.year = '%s' "%(year)
    if division:
        condi += " and s.division = '%s' "%(division)
    if district:
        condi += " and s.district = '%s' "%(district)
    if taluka:
        condi += " and s.tehsil = '%s' "%(taluka)
    
    #Filters For School
    sch_condi = ""
    if division:
        sch_condi += " and division = '%s' "%(division)
    if district:
        sch_condi += " and district = '%s' "%(district)
    if taluka:
        sch_condi += " and taluka = '%s' "%(taluka)

    eligible_schools = frappe.db.sql(""" Select Count(*)  from `tabSchool` where smc_criteria = 'Yes' %s """%sch_condi)

    temp_query = """SELECT Count(*) as forms_created, 
                    IFNULL(SUM(total_enrolment),0) as total_enrollment, 
                    IFNULL(SUM(total_budget), 0) as amount_disburssed,
                    IFNULL(SUM(CASE WHEN gender = 'Boys' then 1 else 0 end),0) as  boys_schools,
                    IFNULL(SUM(CASE WHEN gender = 'Girls' then 1 else 0 end),0) as  girls_schools,
                    IFNULL(SUM(CASE WHEN gender = 'Mixed' then 1 else 0 end),0) as  mixed_schools from `tabSMC Application Form` where docstatus =1 %s """%(cons)

    data = frappe.db.sql(temp_query, as_dict=1 )
    if data:
        if eligible_schools and data[0]['forms_created']:
            data[0]['forms_percentage'] = round(data[0]['forms_created'] / eligible_schools[0][0] *100 , 2)
        else:
            data[0]['forms_percentage'] = 0

        if data[0]['girls_schools'] and data[0]['forms_created']:
            data[0]['girls_school_percentage'] = round(data[0]['girls_schools'] /data[0]['forms_created'] *100 , 2)
        else:
            data[0]['girls_school_percentage'] = 0
            
        if data[0]['boys_schools'] and data[0]['forms_created']:
            data[0]['boys_school_percentage'] = round(data[0]['boys_schools'] /data[0]['forms_created'] *100 , 2)
        else:
            data[0]['boys_school_percentage'] = 0

        if data[0]['mixed_schools'] and data[0]['forms_created']:
            data[0]['mixed_school_percentage'] = round(data[0]['mixed_schools'] /data[0]['forms_created'] *100 , 2)
        else:
            data[0]['mixed_school_percentage'] = 0

    temp_query1 = """SELECT lt.name,
                        IFNULL(SUM(CASE WHEN (s.gender = 'Boys' and lt.name = s.level) then 1 else 0 end),0) as  boys_schools,
                        IFNULL(SUM(CASE WHEN (s.gender = 'Girls' and lt.name = s.level) then 1 else 0 end),0) as  girls_schools,
                        IFNULL(SUM(CASE WHEN (s.gender = 'Mixed' and lt.name = s.level) then 1 else 0 end),0) as  mixed_schools 
                        from `tabLevel` lt, `tabSMC Application Form` s
                        where s.docstatus =1 %s 
                        group by lt.name
                    """%(condi)
    gender_and_level_data = frappe.db.sql(temp_query1, as_dict=1)

    temp_query2 = """SELECT COUNT(*) as forms_created,
    IFNULL(SUM(CASE WHEN level = 'Primary' then IFNULL(total_budget,0) else 0 end),0) as  primary_schools,
    IFNULL(SUM(CASE WHEN level = 'Middle' then IFNULL(total_budget,0) else 0 end),0) as  middle_schools,
    IFNULL(SUM(CASE WHEN level = 'Elementary' then IFNULL(total_budget,0) else 0 end),0) as  elementry_schools,
    IFNULL(SUM(CASE WHEN level = 'Secondary' then IFNULL(total_budget,0) else 0 end),0) as  secondary_schools,
    IFNULL(SUM(CASE WHEN level = 'Higher Secondary' then IFNULL(total_budget,0) else 0 end),0) as  higher_secondary_schools
    from `tabSMC Application Form` 
    where docstatus =1 %s 
    """%(cons)
    amount_level_data = frappe.db.sql(temp_query2, as_dict=1 )

    temp_query3 = """SELECT COUNT(*) as forms_created,
    IFNULL(SUM(CASE WHEN gender = 'Boys' then IFNULL(total_budget,0) else 0 end),0) as  boys_schools,
    IFNULL(SUM(CASE WHEN gender = 'Girls' then IFNULL(total_budget,0) else 0 end),0) as  girls_schools,
    IFNULL(SUM(CASE WHEN gender = 'Mixed' then IFNULL(total_budget,0) else 0 end),0) as  mixed_schools 
    from `tabSMC Application Form` 
    where docstatus=1 %s 
    """%(cons)
    amount_gender_data = frappe.db.sql(temp_query3, as_dict=1 )

    temp_query4 = """Select d.name as name,  
    IFNULL(SUM(CASE WHEN k.district = d.name then 1 else 0 end),0) as forms_created,
    IFNULL(SUM(CASE WHEN k.district = d.name then IFNULL(total_budget,0) else 0 end),0) as value,
    d.path_features as path
    from `tabSMC Application Form` k,
    tabDistrict d 
     where k.docstatus =1 and d.name != 'Keamari Karachi' %s group by d.name """%(conds)
    draw_map = frappe.db.sql(temp_query4, as_dict=1) 
    draw_map = sorted(draw_map, key=lambda x: x['value'], reverse=True)

    obj ={
        "data": data[0],
        "gender_and_level_data":gender_and_level_data,
        "amount_level_data":amount_level_data,
        "amount_gender_data":amount_gender_data,
        "draw_map": draw_map,
    }
    return obj

@frappe.whitelist()
def district_for_lsu(user):
    district = frappe.db.sql("select for_value as district from `tabUser Permission` where allow='District' and user=%s", (user), as_dict=True)[0]
    division = frappe.db.sql("select for_value as division from `tabUser Permission` where allow='Division' and user=%s", (user), as_dict=True)[0]
    return district, division

# @frappe.whitelist()
# def gender_and_level_data(year = None, division = None, district = None, taluka= None):
#     cons = ""
#     if year:
#         cons += " and year = '%s' "%(year)
#     if division:
#         cons += " and  division = '%s' "%(division)
#     if district:
#         cons += " and  district = '%s' "%(district)
#     if taluka:
#         cons += " and  tehsil = '%s' "%(taluka)

#     temp_query = """SELECT level,
#     IFNULL(SUM(CASE WHEN gender = 'Boys' then 1 else 0 end),0) as  boys_schools,
#     IFNULL(SUM(CASE WHEN gender = 'Girls' then 1 else 0 end),0) as  girls_schools,
#     IFNULL(SUM(CASE WHEN gender = 'Mixed' then 1 else 0 end),0) as  mixed_schools 
#     from `tabSMC Application Form` 
#     where docstatus =1 %s 
#     Group by level
#     """%(cons)

#     data = frappe.db.sql(temp_query, as_dict=1 )

#     return data

# @frappe.whitelist()
# def amount_level_data(year = None, division = None, district = None, taluka= None):
#     cons = ""
#     if year:
#         cons += " and year = '%s' "%(year)
#     if division:
#         cons += " and  division = '%s' "%(division)
#     if district:
#         cons += " and  district = '%s' "%(district)
#     if taluka:
#         cons += " and  tehsil = '%s' "%(taluka)

#     temp_query = """SELECT COUNT(*) as forms_created,
#     IFNULL(SUM(CASE WHEN level = 'Primary' then IFNULL(total_budget,0) else 0 end),0) as  primary_schools,
#     IFNULL(SUM(CASE WHEN level = 'Middle' then IFNULL(total_budget,0) else 0 end),0) as  middle_schools,
#     IFNULL(SUM(CASE WHEN level = 'Elementary' then IFNULL(total_budget,0) else 0 end),0) as  elementry_schools,
#     IFNULL(SUM(CASE WHEN level = 'Secondary' then IFNULL(total_budget,0) else 0 end),0) as  secondary_schools,
#     IFNULL(SUM(CASE WHEN level = 'Higher Secondary' then IFNULL(total_budget,0) else 0 end),0) as  higher_secondary_schools

#     from `tabSMC Application Form` 
#     where docstatus =1 %s 
#     """%(cons)

#     data = frappe.db.sql(temp_query, as_dict=1 )
#     # if data:
#     #     if data[0]['forms_created'] and data[0]['primary_schools']:
#     #         data[0]['primary_schools'] = round(data[0]['primary_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['primary_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['middle_schools']:
#     #         data[0]['middle_schools'] = round(data[0]['middle_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['middle_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['elementry_schools']:
#     #         data[0]['elementry_schools'] = round(data[0]['elementry_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['elementry_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['secondary_schools']:
#     #         data[0]['secondary_schools'] = round(data[0]['secondary_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['secondary_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['higher_secondary_schools']:
#     #         data[0]['higher_secondary_schools'] = round(data[0]['higher_secondary_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['higher_secondary_schools'] = 0

#     return data

# @frappe.whitelist()
# def amount_gender_data(year = None, division = None, district = None, taluka= None):
#     cons = ""
#     if year:
#         cons += " and year = '%s' "%(year)
#     if division:
#         cons += " and  division = '%s' "%(division)
#     if district:
#         cons += " and  district = '%s' "%(district)
#     if taluka:
#         cons += " and  tehsil = '%s' "%(taluka)

#     temp_query = """SELECT COUNT(*) as forms_created,
#     IFNULL(SUM(CASE WHEN gender = 'Boys' then IFNULL(total_budget,0) else 0 end),0) as  boys_schools,
#     IFNULL(SUM(CASE WHEN gender = 'Girls' then IFNULL(total_budget,0) else 0 end),0) as  girls_schools,
#     IFNULL(SUM(CASE WHEN gender = 'Mixed' then IFNULL(total_budget,0) else 0 end),0) as  mixed_schools 

#     from `tabSMC Application Form` 
#     where docstatus=1 %s 
#     """%(cons)

#     data = frappe.db.sql(temp_query, as_dict=1 )
#     # if data:
#     #     if data[0]['forms_created'] and data[0]['boys_schools']:
#     #         data[0]['boys_schools'] = round(data[0]['boys_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['boys_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['girls_schools']:
#     #         data[0]['girls_schools'] = round(data[0]['girls_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['girls_schools'] = 0
#     #     if data[0]['forms_created'] and data[0]['mixed_schools']:
#     #         data[0]['mixed_schools'] = round(data[0]['mixed_schools'] / data[0]['forms_created'] *100 ,1)
#     #     else:
#     #         data[0]['mixed_schools'] = 0
      
#     return data

# @frappe.whitelist()
# def draw_map(year = None, division = None, district = None, taluka= None):
#     cons = ""
#     if year:
#         cons += " and k.year = '%s' "%(year)
#     if division:
#         cons += " and  d.division = '%s' "%(division)
#     if district:
#         cons += " and  d.name = '%s' "%(district)
#     # if taluka:
#     #     cons += " and  tehsil = '%s' "%(taluka)

#     temp_query = """Select d.name as name,  
#     IFNULL(SUM(CASE WHEN k.district = d.name then 1 else 0 end),0) as forms_created,
#     IFNULL(SUM(CASE WHEN k.district = d.name then IFNULL(total_budget,0) else 0 end),0) as value,
#     d.path_features as path
#     from `tabSMC Application Form` k,
   
#     tabDistrict d 

#      where k.docstatus =1 and d.name != 'Keamari Karachi' %s group by d.name """%(cons)
#     data = frappe.db.sql(temp_query, as_dict=1) 
#     data = sorted(data, key=lambda x: x['value'], reverse=True)

#     return data
