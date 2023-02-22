# Copyright (c) 2022, Frappe Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class SMCPanel(Document):
	def validate(self):
		# self.recalculate()
		self.hard_recalculate()
	
	# def recalculate(self):
	# 	smc_init = frappe.db.sql("""update 
	# 									`tabSMC Application Form`
	# 									set fund_eligibility = 'Not Eligible', total_budget = 0
	# 									where year='%s' 
	# 								"""%(self.year),as_dict=1)
	# 	school_init = frappe.db.sql(""" update 
	# 									`tabSchool`
	# 									set smc_year='{0}', smc_criteria = 'No'
	# 									where smc_year='{0}'
	# 								""".format(self.year))	

	# 	for l in self.fixed_factors:
	# 		smc_forms = frappe.db.sql("""update 
	# 									`tabSchool`
	# 									set smc_criteria = 'Yes', smc_year='%s'
	# 									where level='%s'
	# 								"""%(self.year, l.level))
	# 		enrol = frappe.db.sql("""select
	# 									semis_code as semis_code,
	# 									gender as gender,
	# 									boys_enrolment as boys,
	# 									girls_enrolment as girls
	# 									from `tabSMC Application Form`
	# 									where year='{0}' and level='{1}'
	# 								""".format(self.year, l.level),as_dict=1)
	# 		for en in enrol:
	# 			if en.gender == 'Boys':
	# 				total_boys = (en.boys * self.per_enrolled_boys) + l.boys
	# 				smc_init = frappe.db.sql("""update 
	# 											`tabSMC Application Form`
	# 											set fund_eligibility = 'Eligible', total_budget = '{1}'
	# 											where year='{0}' and level='{2}' and semis_code='{3}'
	# 										""".format(self.year, total_boys, l.level, en.semis_code))
	# 			if en.gender == 'Girls':
	# 				total_girls = (en.girls * self.per_enrolled_girls) + l.girls
	# 				smc_init = frappe.db.sql("""update 
	# 											`tabSMC Application Form`
	# 											set fund_eligibility = 'Eligible', total_budget = '{1}'
	# 											where year='{0}' and level='{2}' and semis_code='{3}'
	# 										""".format(self.year, total_girls, l.level, en.semis_code))
	# 			if en.gender == 'Mixed':
	# 				total_b = en.boys * self.per_enrolled_boys
	# 				total_g = en.girls * self.per_enrolled_girls
	# 				toatl_mixed = total_b + total_g + l.mixed
	# 				smc_init = frappe.db.sql("""update 
	# 											`tabSMC Application Form`
	# 											set fund_eligibility = 'Eligible', total_budget = '{1}'
	# 											where year='{0}' and level='{2}' and semis_code='{3}'
	# 										""".format(self.year, toatl_mixed, l.level, en.semis_code))

	def hard_recalculate(self):
		school_init = frappe.db.sql(""" update 
								`tabSchool`
								set smc_year='{0}', smc_criteria = 'No'
								where smc_year='{0}'
							""".format(self.year))	
		smc_init = frappe.db.sql("""update 
									`tabSchool` sch inner join `tabASC` a
									on a.semis_code = sch.name
									set sch.smc_criteria = 'Yes', sch.smc_year='2021-22'
									where a.year='2021-22' and a.status_detail='Functional' and a.name not like 'ASC-1%'
								""")

@frappe.whitelist()
def level():
	level_list = frappe.db.sql(""" select name  from `tabLevel` """,as_dict=1)
	list = []
	for x in level_list:
		list.append(x.name)
	return list



				# smc_init = frappe.db.sql("""UPDATE 
			# 						`tabSMC Application Form` smc join `tabSchool` sch on smc.semis_code = sch.name
			# 						SET smc.fund_eligibility = 'Eligible', smc.total_budget = '{1}', 
			# 						sch.smc_criteria = 'Yes', sch.smc_year='{0}'
			# 						WHERE smc.level = sch.level and smc.year = sch.smc_year and smc.level ='{2}' and sch.level ='{2}'
			# 					""".format(self.year, total, l.level))