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
	
	smc_fund = frappe.db.sql("""select 
								lt.name, 
								sum(case when lt.name = a.district then if_yes_amount_in_rs else 0 end) as total 
								from `tabDistrict` lt,`tabSMC Application Form` a 
								WHERE a.docstatus =1 %s  group by lt.name
							"""% conditions, filters)
	

	return smc_fund

def get_conditions(filters):
	conditions=""
	if filters.get("year"):
		conditions = "  and year = %(year)s"
	# if filters.get("a.district"):
	# 	conditions = "  and a.district = %(district)s"
	# if filters.get("year") and filters.get("a.district"):
	# 	conditions = "  and year = %(year)s and a.district = %(district)s"
	
	return conditions, filters

def get_columns(filters):
	columns = [
		_("District") + "::300",
		_("Received Amount") + ":Currency:200"
		]
		
	return columns
