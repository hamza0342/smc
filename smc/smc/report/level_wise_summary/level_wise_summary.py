# Copyright (c) 2013, Frappe Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.utils import cstr, cint, getdate, get_first_day, get_last_day, date_diff, add_days
from frappe import msgprint, _
from calendar import monthrange

def execute(filters=None):
	
	columns = get_columns(filters)
	conditions, filters = get_conditions(filters)
	data = get_data(conditions, filters)
	
	return columns, data

def get_data(conditions, filters):
	smc_fund = frappe.db.sql("""SELECT level,
	sum(case when gender = "Girls" then 1 else 0 end) as of_girls_schools,
	sum(case when gender = "Boys" then  1 else 0 end) as of_boys_schools,
	sum(case when gender = "Mixed" then  1 else 0 end) as of_mixed_school,
	round(sum(case when gender = "Girls" then 1 else 0 end)+sum(case when gender = "Boys" then  1 else 0 end)+sum(case when gender = "Mixed" then  1 else 0 end)) as total_school,
	sum(total_enrolment) as total_enrolment,
	sum(total_budget) as total_amount

	FROM `tabSMC Application Form` 
	WHERE docstatus =1 %s group by level_order"""% conditions, filters)
	return smc_fund

def get_conditions(filters):
	conditions=""
	if filters.get("year"):
		conditions = "  and year = %(year)s"
		user = frappe.session.user
		district = frappe.db.sql("select for_value from `tabUser Permission` where user='{0}' and allow='District' ".format(user), as_dict=True)
		if district:
			conditions += "  and district = '%s'"%(district[0].for_value)
	# if filters.get("year") and filters.get("district"):
	# 	conditions = "  and year = %(year)s and district = %(district)s"
	
	return conditions, filters

def get_columns(filters):
	columns = [
		_("Level") + "::160",
		_("# of Girls Schools") + "::180",
		_("# of Boys Schools") + "::180",
		_("# of Mixed Schools") + "::180",
		_("Total School") + "::180",
		_("# Total Enrolment") + "::180",
		 _("Total Amount") + ":Currency:180"
		]
		
	return columns
# @frappe.whitelist()
# def user_district(user):
# 	district = frappe.db.sql("select for_value from `tabUser Permission` where user=%s", (user), as_dict=True)[0]
# 	return district