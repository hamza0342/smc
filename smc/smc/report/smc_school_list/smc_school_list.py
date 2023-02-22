# Copyright (c) 2013, Frappe Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe import _

def execute(filters=None):
    columns, data = [], []
    columns = get_columns()
    conditions, filters = get_conditions(filters)
    data = get_data(conditions,filters)
    return columns, data

def get_columns():
    columns = [
        _("SEMIS Code") + "::120",
        _("Region") + "::160",
        _("District") + "::250",
		_("Taluka") + "::120",
		_("UC") + "::120",
        _("School Name") + "::160",
        _("Present Address") + "::250",
		_("Level") + "::120",
        _("Location") + "::160",
        _("DDO Cost Center") + "::250",
		_("School Gender") + "::120",
        _("School Phone No.") + "::160",
        _("School Administration") + "::250",
        _("Availability of Building") + "::250",
        _("Is SMC received for the year current year?") + "::250",
        _("Total SMC funds available Rs") + "::250",
        _("Infrastructure Maintenance Rs") + "::250",
        _("Covid-19 Essential Items Rs") + "::250",
        _("Learning Teaching Material Rs") + "::250",
        _("Total Utilized") + "::250",
        _("Male Enrollment") + "::250",
        _("Female Enrollment") + "::250",
        _("Total Enrollment") + "::250",
    ]
    return columns

def get_conditions(filters):
	# default_year = frappe.db.get_single_value("ASC Panel", "default_year")
	conditions=""
	if filters.get("year"):
		conditions += "  and year = %(year)s"
	if filters.get("division"):
		conditions += "  and region = %(division)s"
	if filters.get("district"):
		conditions += "  and district = %(district)s"
	if filters.get("taluka"):
		conditions += "  and taluka = %(taluka)s"
	if filters.get("school_gender"):
		conditions += "  and school_gender = %(school_gender)s"
					
	return conditions, filters        

def get_data(conditions, filters):
	year_ = filters.get("year")
	temp_query = """Select 
					CONCAT('<a school=''', semis_code ,'''  years =''', '%s' ,'''  type=''button''  onClick=''open_report(this.getAttribute("school"), this.getAttribute("years") )''>',`semis_code`,'</a>') as ":Data:100",
					region,
					district, 
					taluka, 
					uc, 
					school_name, 
					present_address, 
					`level` , 
					location, 
					ddo_cost_center , 
					school_gender, 
					school_phone_no, 
					school_administration,
					availability_of_building, 
					smc_received_detail , 
					t_r_smc, 
					m_repair, 
					covid_essential_items, 
					learning_teacher_material, 
					total_utilized, 
					male_enrollment, 
					female_enrollment,
					total_enrollment   
					FROM ( Select name from tabSchool where smc_criteria = 'Yes' and enabled = 1 ) s
					inner join
					(Select semis_code, 
					region,
					district, 
					taluka, 
					uc, 
					school_name, 
					present_address, 
					`level` , 
					location, 
					ddo_cost_center , 
					school_gender, 
					school_phone_no, 
					school_administration,
					availability_of_building, 
					smc_received_detail , 
					t_r_smc, 
					m_repair, 
					covid_essential_items, 
					learning_teacher_material, 
					total_utilized, 
					male_enrollment, 
					female_enrollment,
					total_enrollment 
					from tabASC where docstatus != 2 %s) a   
					on a.semis_code = s.name
					order by district, taluka """%(year_,conditions)
	data = frappe.db.sql(temp_query, filters)
	return data