# Copyright (c) 2013, Frappe Technologies and contributors
# For license information, please see license.txt

from this import s
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
	
	smc_fund = frappe.db.sql("""SELECT 
								district,
								tehsil,
								uc,
								semis_code,
								school_name,
								level,
								gender,
								total_enrolment,
								smc_account_nocomplete,
								bank_name,
								branch_code,
								bank_branch,
								account_title,
								total_budget as total 
								FROM `tabSMC Application Form` 
								WHERE docstatus =1 %s order by district
							"""% conditions, filters)
	return smc_fund

def get_conditions(filters):
	conditions=""
	if filters.get("year"):
		conditions += "  and year = %(year)s"
	# if filters.get("bank_name"):
	# 	conditions += "  and bank_name = %(bank_name)s"
	if filters.get("district"):
		conditions += "  and district = %(district)s"
	if filters.get("tehsil"):
		conditions += "  and tehsil = %(tehsil)s"
	if filters.get("uc"):
		conditions += "  and uc = %(uc)s"
	# if filters.get("school"):
	# 	conditions += "  and semis_code = %(school)s"
	if filters.get("school_level"):
		conditions += "  and level = %(school_level)s"
	if filters.get("school_gender"):
		conditions += "  and gender = %(school_gender)s"
	return conditions, filters

def get_columns(filters):
	columns = [
		_("District") + ":Link/District:120",
		_("Tehsil") + "::120",
		_("UC") + "::120",
		_("SEMIS Code") + "::100",
		_("School Name") + "::250",
		_("School Level") + "::130",
		_("School Gender") + "::130",
		_("Enrolment") + "::120",
		_("Account No.") + "::160",
		_("Bank Name") + "::160",
		_("Branch Code") + "::110",
		_("Branch Name") + ":Data:180",
		_("Account Title") + ":Data:200",
		_("Received Amount") + ":Currency:160"
		]
		
	return columns
