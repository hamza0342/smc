# Copyright (c) 2022, Frappe Technologies and contributors
# For license information, please see license.txt

from dataclasses import asdict

import frappe
from frappe.model.document import Document

class SMCApplicationForm(Document):
	pass
	# def validate(self):
	# 	if "SMC" not in self.account_title:
	# 		frappe.throw("Please Enter Valid Account Title")
	# 	elif "S.M.C"  not in self.account_title:
	# 		frappe.throw("Please Enter Valid Account Title")
	# 	elif "smc" not in self.account_title:
	# 		frappe.throw("Please Enter Valid Account Title")
	# 	elif "s.m.c" not in self.account_title:
	# 		frappe.throw("Please Enter Valid Account Title")
@frappe.whitelist()
def check_account_no(bank_name=None, smc_account=None, year=None):
	if year and bank_name and smc_account: 
		duplicate_account_no = frappe.db.sql(""" select  count(name) as already_exist from `tabSMC Application Form` where year = %s and smc_account_nocomplete=%s and bank_name=%s """,(year, smc_account, bank_name),as_dict=1)
		if duplicate_account_no[0].already_exist>=1:
			frappe.msgprint(frappe.as_json("multiple time used this Account No In this Bank and In this year"))
			return duplicate_account_no[0].already_exist
@frappe.whitelist()
def factor_value(gender=None,level=None,year=None,total=None, boys=None, girls=None):
	totalfund = 0
	amount = frappe.db.sql(""" Select 
							s.per_enrolled_boys,
							s.per_enrolled_girls,
							f.%s 
							from `tabSMC Panel` s 
							inner join `tabSMC Fixed Factors` f 
							on s.name = f.parent 
							where f.level = "%s" and f.parent = "%s" 
						"""%(gender,level,year),as_dict=1)
	if amount[0].Mixed:
		cal = amount[0]['per_enrolled_girls'] * int(girls) + amount[0]['per_enrolled_boys'] * int(boys)
		
		totalfund= cal + amount[0].Mixed
	elif amount[0].Boys:
		cal = amount[0]['per_enrolled_boys'] * int(boys)
		totalfund=cal+amount[0].Boys
	elif amount[0].Girls:
		cal = amount[0]['per_enrolled_girls'] * int(girls)
		totalfund=cal+amount[0].Girls	
	return totalfund
	# list = []
	# for x in level_list:
	# 	list.append(x.name)
	# return list
@frappe.whitelist()
def semis_check(semis_code, year):
	result = frappe.db.sql(""" select semis_code from `tabSMC Application Form` where year= %s and semis_code=%s """,(year, semis_code))
	if len(result) >= 1:
		return 1
	else:
		return 0

@frappe.whitelist()
def smc_panel(year):
	res = frappe.db.sql(""" select per_enrolled_boys from `tabSMC Panel` where name= %s""",(year))[0][0]
	return res