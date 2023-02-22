# Copyright (c) 2022, Frappe Technologies and contributors
# For license information, please see license.txt

from dataclasses import asdict

import frappe
from frappe.model.document import Document

class SMCApplicationForm(Document):
	def validate(self):
		self.posting_date_check_()
		if self.secretary_cnic == self.chairperson_cnic:
			frappe.throw("Head Teacher and Chairperson's CNIC can't be same")
		# if self.secretary_cell == self.chairperson_cell:
		# 	frappe.throw("Head Teacher and Chairperson's Cell no. can't be same")
		if self.iban:
			import re
			regex = r"^PK\d{2}[A-Z]{4}[A-Z0-9]{16}$"
			# test_string = 'PK55SCBL0000001719439201'
			result = re.match(regex, self.iban)
			if result:
				print("Search successful.")
			else:
				frappe.throw("Please Enter Valid IBAN")	
		if self.name_5_cnic or self.name_6_cnic or  self.name_7_cnic or self.name_8_cnic or self.name_9_cnic or self.name_10_cnic or self.name_11_cnic or self.name_12_cnic or self.secretary_cnic or self.chairperson_cnic:
			values =[]
			if self.name_5_cnic:
				values.append(self.name_5_cnic)
			if self.name_6_cnic:
				values.append(self.name_6_cnic)
			if self.name_7_cnic:
				values.append(self.name_7_cnic)
			if self.name_8_cnic:
				values.append(self.name_8_cnic)
			if self.name_9_cnic:
				values.append(self.name_9_cnic)
			if self.name_10_cnic:
				values.append(self.name_10_cnic)
			if self.name_11_cnic:
				values.append(self.name_11_cnic)
			if self.name_12_cnic:
				values.append(self.name_12_cnic)
			if self.secretary_cnic:
				values.append(self.secretary_cnic)
			if self.chairperson_cnic:
				values.append(self.chairperson_cnic)
			for x in values:
				res = values.count(x)
				if res > 1:
					frappe.throw("CNIC# Already Entered, Please Try Another")

		# if self.is_new():
		# 	check = semis_check(self.semis_code, self.year)
		# 	if check==2:
		# 		frappe.throw("School Not Functional")
		# 	if check == 1:
		# 		frappe.throw("SMC Application Form against this SEMIS Code is already exist for select year")
		if self.is_new():
			if self.smc_account_nocomplete and self.bank_name:
				self.check_bank()
		self.calculate_totals()
	def calculate_totals(self):
		if not self.soaps:
			self.soaps = 0.0
		if not self.washable_face_mask:
			self.washable_face_mask = 0.0
		if not self.sanitizers:
			self.sanitizers = 0.0
		if not self.thermal_gun:
			self.thermal_gun = 0.0
		if not self.room_disinfectants:
			self.room_disinfectants = 0.0
		self.total_covid_essentials = self.soaps + self.washable_face_mask + self.sanitizers + self.thermal_gun + self.room_disinfectants
		
	def posting_date_check_(self):
		res = frappe.db.sql(""" select name from `tabSMC Panel` where name= %s and %s between from_date and to_date """,(self.year, self.posting_date))
		if len(res) == 0:
			frappe.throw("Posting date for SMC Application should be in Academic Year")
	def check_bank(self):
		duplicate_account_no = frappe.db.sql(""" select  count(name) as already_exist from `tabSMC Application Form` where smc_account_nocomplete=%s and bank_name=%s """,(self.smc_account_nocomplete, self.bank_name),as_dict=1)
		if duplicate_account_no[0].already_exist>=1:
			return frappe.throw("Account No. should be unique within same Bank")		
	
@frappe.whitelist()
def check_account_no(bank_name=None,smc_account=None ):
	if bank_name and smc_account: 
		duplicate_account_no = frappe.db.sql(""" select  count(name) as already_exist from `tabSMC Application Form` where smc_account_nocomplete=%s and bank_name=%s """,( smc_account, bank_name),as_dict=1)
		if duplicate_account_no[0].already_exist>=1:
			return 1
		else:
			return 0

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
	# print("in")
	# school = frappe.db.sql(""" select name from `tabSchool` where semis_code=%s and enabled=1 and smc_criteria='Yes' """,(semis_code))
	# if school:
	if frappe.db.exists("SMC Application Form", {"semis_code": semis_code}):
		result = frappe.db.sql(""" select name from `tabSMC Application Form` where year= %s and semis_code=%s and docstatus != 2 """,(year, semis_code),as_dict= True)[0]
		if result:
			return result
	# else:
	# 	return 2

@frappe.whitelist()
def smc_panel(year):
	res = frappe.db.sql(""" select per_enrolled_boys from `tabSMC Panel` where name= %s""",(year))[0][0]
	return res

@frappe.whitelist()
def posting_date_check(posting_date, year):
	res = frappe.db.sql(""" select name from `tabSMC Panel` where name= %s and %s between from_date and to_date """,(year, posting_date))
	if len(res) >= 1:
		return 1
	else:
		return 0

@frappe.whitelist()
def secretary_cnic_check(year, cnic):
	# res = frappe.db.sql(""" select name from `tabSMC Application Form` where year= %s and secretary_cnic= %s """,(year, cnic))
	if frappe.db.exists("SMC Application Form", {"year": year, "secretary_cnic": cnic}):
		return 1
	else:
		return 0

@frappe.whitelist()
def chairperson_cnic_check(year, cnic):
	# res = frappe.db.sql(""" select name from `tabSMC Application Form` where year= %s and secretary_cnic= %s """,(year, cnic))
	if frappe.db.exists("SMC Application Form", {"year": year, "chairperson_cnic": cnic}):
		return 1
	else:
		return 0
