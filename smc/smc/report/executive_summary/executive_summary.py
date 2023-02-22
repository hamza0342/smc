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
        _("District") + ":Link/District:120",
        _("No. of Schools") + "::160",
        _("Amount") + ":Currency:250",
    ]
    return columns

def get_conditions(filters):
	conditions=""
	if filters.get("district"):
		conditions += "  and district = %(district)s"
	return conditions, filters        
def get_data(conditions, filters):
    temp_query = """Select district , count(semis_code), SUM(total_budget) from `tabSMC Application Form` where docstatus =1 %s group by district order by district"""
    data = frappe.db.sql(temp_query%conditions, filters)
    return data
