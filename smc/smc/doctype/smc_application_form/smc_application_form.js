// Copyright (c) 2022, Frappe Technologies and contributors
// For license information, please see license.txt
frappe.require([
	'/assets/semis_theme/js/personal_detail_validation.js',
]);
frappe.ui.form.on('SMC Application Form', {

	onload_post_render: function (frm) {
		$("input[data-fieldname='smc_account_nocomplete']").attr("placeholder", "000000000000000000000")
		$("input[data-fieldname='boys_enrolment']").attr("placeholder", "0000")
		$("input[data-fieldname='girls_enrolment']").attr("placeholder", "0000")
		$("input[data-fieldname='boys_enrolment']").attr("placeholder", "000")
		$("input[data-fieldname='secretary_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='chairperson_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_5_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_6_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_7_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_8_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_9_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_10_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_11_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_12_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='secretary_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='chairperson_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_5_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_6_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_7_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_8_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_9_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_10_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_11_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_12_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_5_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_6_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_7_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_8_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_9_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_10_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_11_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_12_cell']").mask('0000-0000000');
		$("input[data-fieldname='secretary_cell']").mask('0000-0000000');
		$("input[data-fieldname='chairperson_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_5_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_6_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_7_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_8_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_9_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_10_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_11_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_12_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='secretary_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='chairperson_cnic']").mask('00000-0000000-0');
	},

	refresh: function (frm) {
		$("input[data-fieldname='smc_account_nocomplete']").attr("placeholder", "000000000000000000000")
		$("input[data-fieldname='last_smc_amount_created_to_school']").attr("placeholder", "0000000")
		$("input[data-fieldname='boys_enrolment']").attr("placeholder", "0000")
		$("input[data-fieldname='girls_enrolment']").attr("placeholder", "0000")
		$("input[data-fieldname='secretary_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='chairperson_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_5_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_6_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_7_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_8_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_9_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_10_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_11_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='name_12_cnic']").attr("placeholder", "xxxxx-xxxxxxx-x")
		$("input[data-fieldname='secretary_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='chairperson_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_5_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_6_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_7_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_8_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_9_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_10_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_11_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_12_cell']").attr("placeholder", "03xx-xxxxxxx")
		$("input[data-fieldname='name_5_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_6_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_7_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_8_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_9_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_10_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_11_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_12_cell']").mask('0000-0000000');
		$("input[data-fieldname='secretary_cell']").mask('0000-0000000');
		$("input[data-fieldname='chairperson_cell']").mask('0000-0000000');
		$("input[data-fieldname='name_5_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_6_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_7_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_8_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_9_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_10_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_11_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='name_12_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='secretary_cnic']").mask('00000-0000000-0');
		$("input[data-fieldname='chairperson_cnic']").mask('00000-0000000-0');
	},

	// }	frm.set_df_property("is_this_branch_school",'reqd', 1);
	// level:function(frm){
	// 	if(frm.doc.level=='Primary'){
	// 		frm.toggle_display("name_5", false);
	// 	}

	// },
	semis_code: function (frm) {
		if (frm.doc.semis_code) {
			if (frm.doc.gender == 'Girls') {
				frm.toggle_display("boys_enrolment", false);
			}
			if (frm.doc.gender == 'Boys') {
				frm.toggle_display("girls_enrolment", false);
			}
			if (frm.doc.gender == 'Mixed') {
				frm.toggle_display("girls_enrolment", true);
				frm.toggle_display("boys_enrolment", true);
			}
			frappe.call({
				method: "smc.smc.doctype.smc_application_form.smc_application_form.semis_check",
				args: {
					semis_code: frm.doc.semis_code,
					year: frm.doc.year
				},
				callback: function (r) {
					if (r.message >= 1) {
						frappe.msgprint("SMC Application Form against this SEMIS Code is already exist for select year")
						frm.set_value("semis_code", '');
						frm.set_value("district", '');
						frm.set_value("tehsil", '');
						frm.set_value("uc", '');
						frm.set_value("school_name", '');
						frm.set_value("school_address", '');
						frm.set_value("level", '');
						frm.set_value("gender", '');
						frm.set_value("status", '');
						frm.set_value("calculated_amount", '');
						frm.set_value("girls_enrolment", '');
						frm.set_value("boys_enrolment", '');
						frm.set_value("total_enrolment", '');
					}
				}
			});
		}
	},

	validate: function (frm) {
		frappe.call({
			method: "smc.smc.doctype.smc_application_form.smc_application_form.factor_value",
			args: {
				gender: frm.doc.gender,
				level: frm.doc.level,
				year: frm.doc.year,
				boys: frm.doc.boys_enrolment,
				girls: frm.doc.girls_enrolment
			},
			callback: function (r) {
				var data = r.message
				frm.set_value("total_budget", data);

			}
		});
	},
	last_smc_amount_created_to_school: function (frm) {
		$("input[data-fieldname='last_smc_amount_created_to_school']").focusout(function () {
			var account = frm.doc.last_smc_amount_created_to_school
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("last_smc_amount_created_to_school", '')
			}
		});
	},
	infrastructure_maintenance: function (frm) {
		$("input[data-fieldname='infrastructure_maintenance']").focusout(function () {
			var account = frm.doc.infrastructure_maintenance
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("infrastructure_maintenance", '')
			}
		});
	},
	learning_material: function (frm) {
		$("input[data-fieldname='learning_material']").focusout(function () {
			var account = frm.doc.learning_material
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("learning_material", '')
			}
		});
	},
	sanitizers: function (frm) {
		$("input[data-fieldname='sanitizers']").focusout(function () {
			var account = frm.doc.sanitizers
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("sanitizers", '')
			}
		});
	},
	soaps: function (frm) {
		$("input[data-fieldname='soaps']").focusout(function () {
			var account = frm.doc.soaps
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("soaps", '')
			}
		});
	},
	washable_face_mask: function (frm) {
		$("input[data-fieldname='washable_face_mask']").focusout(function () {
			var account = frm.doc.washable_face_mask
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("washable_face_mask", '')
			}
		});
	},
	balance_amount_in_smc_ac: function (frm) {
		$("input[data-fieldname='balance_amount_in_smc_ac']").focusout(function () {
			var account = frm.doc.balance_amount_in_smc_ac
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("balance_amount_in_smc_ac", '')
			}
		});
	},
	room_disinfectants: function (frm) {
		$("input[data-fieldname='room_disinfectants']").focusout(function () {
			var account = frm.doc.room_disinfectants
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("room_disinfectants", '')
			}
		});
	},
	thermal_gun: function (frm) {
		$("input[data-fieldname='thermal_gun']").focusout(function () {
			var account = frm.doc.thermal_gun
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("thermal_gun", '')
			}
		});
	},
	if_yes_amount_in_rs: function (frm) {
		$("input[data-fieldname='if_yes_amount_in_rs']").focusout(function () {
			var account = frm.doc.if_yes_amount_in_rs
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("if_yes_amount_in_rs", '')
			}
		});
	},
	balance_amount_in_smc_ac: function (frm) {
		$("input[data-fieldname='balance_amount_in_smc_ac']").focusout(function () {
			var account = frm.doc.balance_amount_in_smc_ac
			if (!(account < 9999999)) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Value Between 0 to 9999999")
				frm.set_value("balance_amount_in_smc_ac", '')
			}
		});
	},
	date_of_last_smc_election: function (frm) {
		if (frm.doc.date_of_last_smc_election) {
			var census_date = Date.parse(String(frm.doc.date_of_last_smc_election).split(" ")[0]);
			var today_date = Date.parse(frappe.datetime.nowdate());
			if (census_date > today_date) {
				frm.set_value("date_of_last_smc_election", "")
				frappe.msgprint("Please Enter Valid Date")
			}
		}


	},
	boys_enrolment: function (frm) {
		if (!Number.isInteger(frm.doc.boys_enrolment)) {
			frm.set_value("boys_enrolment", '')
		}
		if (frm.doc.boys_enrolment < 0 || frm.doc.boys_enrolment > 9999) {
			frm.set_value("boys_enrolment", '')
			frappe.msgprint("Must be a valid Number.")
		}
		if (!frm.doc.boys_enrolment) {
			frm.doc.boys_enrolment = 0;
		}
		if (!frm.doc.girls_enrolment) {
			frm.doc.girls_enrolment = 0;
		}
		var total = frm.doc.boys_enrolment + frm.doc.girls_enrolment;
		frm.set_value("total_enrolment", total);

	},
	girls_enrolment: function (frm) {
		if (!Number.isInteger(frm.doc.girls_enrolment)) {
			frm.set_value("girls_enrolment", '')
		}
		if (frm.doc.girls_enrolment < 0 || frm.doc.girls_enrolment > 9999) {
			frm.set_value("girls_enrolment", '')
			frappe.msgprint("Must be a valid Number.")
		}
		if (!frm.doc.girls_enrolment) {
			frm.doc.girls_enrolment = 0;
		}
		if (!frm.doc.boys_enrolment) {
			frm.doc.boys_enrolment = 0;
		}
		var total = frm.doc.boys_enrolment + frm.doc.girls_enrolment;
		frm.set_value("total_enrolment", total);

	},
	bank_name: function (frm) {
		if (frm.doc.bank_name) {
			frm.toggle_display("swift_code", true);
			frm.toggle_display("bic_code", true);
		}
		else {
			frm.toggle_display("swift_code", false);
			frm.toggle_display("bic_code", false);
		}
	},
	received_funds_year_wise: function (frm) {
		if (frm.doc.received_funds_year_wise == 'No') {
			frm.set_value("if_yes_amount_in_rs", '')
		}
	},
	no_of_classrooms: function (frm) {
		if (frm.doc.no_of_classrooms < 0 || frm.doc.no_of_classrooms > 999) {
			frm.set_value("no_of_classrooms", '')
			frappe.msgprint("Must be a valid Number.")
		}
	},
	onload: function (frm) {
		// frm.set_query("semis_code", function () {
		// 	return {
		// 		"filters": [
		// 			["SMC Criteria History", "smc_criteria", "=", "Yes"]
		// 			["SMC Criteria History", "year", "=", "2021-22"],
		// 		]
		// 	};
		// });
		frm.set_df_property("received_funds_year_wise", "reqd", 1);
	},
	// smc_account_nocomplete:function(frm){
	// 	if (frm.doc.smc_account_nocomplete){
	// 		console.log(frm.doc.smc_account_nocomplete)
	// 		frappe.call({
	// 			method: "smc.smc.doctype.smc_application_form.smc_application_form.check_account_no",
	// 			args: {
	// 				bank_name: frm.doc.bank_name,
	// 				smc_account:frm.doc.smc_account_nocomplete,
	// 				year:frm.doc.year
	// 			},
	// 		});
	// 	}
	// },
	smc_account_nocomplete: function (frm) {
		$("input[data-fieldname='smc_account_nocomplete']").focusout(function () {
			var account = frm.doc.smc_account_nocomplete
			if (!(account_no(account))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid SMC Account No.")
				frm.set_value("smc_account_nocomplete", '')
			}
			else {
				frappe.call({
					method: "smc.smc.doctype.smc_application_form.smc_application_form.check_account_no",
					args: {
						bank_name: frm.doc.bank_name,
						smc_account: frm.doc.smc_account_nocomplete,
						year: frm.doc.year
					},
					callback: function (r) {
						if (r.message >= 1) {
							frm.set_value("smc_account_nocomplete", '');
						}
					}
				});
			}
		});
		// var accouunt_format = /^(SMC[\-][a-zA-Z0-9]{16})+$/;
		// if(accouunt_format.test(frm.doc.smc_account_nocomplete)){
		// 	return (true)
		// }else{
		// 	return (false)
		// }
	},
	account_title: function (frm) {
		$("input[data-fieldname='account_title']").focusout(function () {
			var name = frm.doc.account_title
			if ((name.includes("SMC") || name.includes("smc")) || (name.includes("S.M.C") || name.includes("s.m.c") || name.includes("SCHOOL MANAGEMENT COMMITTEE") || name.includes("School Management Committee") || name.includes("school management committee"))) {
				console.log(name);
			}
			else {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Account Title")
				frm.set_value("account_title", '')
			}
		});
	},
	secretary_name: function (frm) {
		$("input[data-fieldname='secretary_name']").focusout(function () {
			var name = frm.doc.secretary_name
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Secretary Name")
				frm.set_value("secretary_name", '')
			}
		});
	},
	head_teacher_stamp: function (frm) {
		$("input[data-fieldname='head_teacher_stamp']").focusout(function () {
			var name = frm.doc.head_teacher_stamp
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Head Teacher")
				frm.set_value("head_teacher_stamp", '')
			}
		});
	},
	teo_stamp: function (frm) {
		$("input[data-fieldname='teo_stamp']").focusout(function () {
			var name = frm.doc.teo_stamp
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid TEO Name")
				frm.set_value("teo_stamp", '')
			}
		});
	},
	counter_signed: function (frm) {
		$("input[data-fieldname='counter_signed']").focusout(function () {
			var name = frm.doc.counter_signed
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Counter Signed Name")
				frm.set_value("counter_signed", '')
			}
		});
	},
	secretary_cell: function (frm) {
		$("input[data-fieldname='secretary_cell']").focusout(function () {
			var num = frm.doc.secretary_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Secretary Cell#")
				frm.set_value("secretary_cell", '')
			}
		});
	},
	secretary_cnic: function (frm) {
		$("input[data-fieldname='secretary_cnic']").focusout(function () {
			var cnic = frm.doc.secretary_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Secretary CNIC#")
				frm.set_value("secretary_cnic", '')
			}
		});
	},
	chairperson_name: function (frm) {
		$("input[data-fieldname='chairperson_name']").focusout(function () {
			var name = frm.doc.chairperson_name
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Chairperson Name")
				frm.set_value("chairperson_name", '')
			}
		});
	},
	chairperson_cell: function (frm) {
		$("input[data-fieldname='chairperson_cell']").focusout(function () {
			var num = frm.doc.chairperson_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Secretary Cell#")
				frm.set_value("chairperson_cell", '')
			}
		});
	},
	chairperson_cnic: function (frm) {
		$("input[data-fieldname='chairperson_cnic']").focusout(function () {
			var cnic = frm.doc.chairperson_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Chairperson CNIC#")
				frm.set_value("chairperson_cnic", '')
			}
		});
	},

	child_1_name: function (frm) {
		$("input[data-fieldname='child_1_name']").focusout(function () {
			var name = frm.doc.child_1_name
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 1 Name")
				frm.set_value("child_1_name", '')
			}
		});
	},
	child_1_s_o: function (frm) {
		$("input[data-fieldname='child_1_s_o']").focusout(function () {
			var name = frm.doc.child_1_s_o
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 1 Father Name")
				frm.set_value("child_1_s_o", '')
			}
		});
	},
	child_2_name: function (frm) {
		$("input[data-fieldname='child_2_name']").focusout(function () {
			var name = frm.doc.child_2_name
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 2 Name")
				frm.set_value("child_2_name", '')
			}
		});
	},
	child_2_s_o: function (frm) {
		$("input[data-fieldname='child_2_s_o']").focusout(function () {
			var name = frm.doc.child_2_s_o
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 2 Father Name")
				frm.set_value("child_2_s_o", '')
			}
		});
	},
	child_3_name: function (frm) {
		$("input[data-fieldname='child_3_name']").focusout(function () {
			var name = frm.doc.child_3_name
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 3 Name")
				frm.set_value("child_3_name", '')
			}
		});
	},
	child_3_s_o: function (frm) {
		$("input[data-fieldname='child_3_s_o']").focusout(function () {
			var name = frm.doc.child_3_s_o
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 3 Father Name")
				frm.set_value("child_3_s_o", '')
			}
		});
	},
	name_5: function (frm) {
		$("input[data-fieldname='name_5']").focusout(function () {
			var name = frm.doc.name_5
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 5 Name")
				frm.set_value("name_5", '')
			}
		});
	},
	name_5_cell: function (frm) {
		$("input[data-fieldname='name_5_cell']").focusout(function () {
			var num = frm.doc.name_5_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 5 Cell#")
				frm.set_value("name_5_cell", '')
			}
		});
	},
	name_5_cnic: function (frm) {
		$("input[data-fieldname='name_5_cnic']").focusout(function () {
			var cnic = frm.doc.name_5_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 5 CNIC#")
				frm.set_value("name_5_cnic", '')
			}
		});
	},

	name_6: function (frm) {
		$("input[data-fieldname='name_6']").focusout(function () {
			var name = frm.doc.name_6
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 6 Name")
				frm.set_value("name_6", '')
			}
		});
	},
	name_6_cell: function (frm) {
		$("input[data-fieldname='name_6_cell']").focusout(function () {
			var num = frm.doc.name_6_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 6 Cell#")
				frm.set_value("name_6_cell", '')
			}
		});
	},
	name_6_cnic: function (frm) {
		$("input[data-fieldname='name_6_cnic']").focusout(function () {
			var cnic = frm.doc.name_6_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 6 CNIC#")
				frm.set_value("name_6_cnic", '')
			}
		});
	},

	name_7: function (frm) {
		$("input[data-fieldname='name_7']").focusout(function () {
			var name = frm.doc.name_7
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 7 Name")
				frm.set_value("name_7", '')
			}
		});
	},
	name_7_cell: function (frm) {
		$("input[data-fieldname='name_7_cell']").focusout(function () {
			var num = frm.doc.name_7_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 7 Cell#")
				frm.set_value("name_7_cell", '')
			}
		});
	},
	name_7_cnic: function (frm) {
		$("input[data-fieldname='name_7_cnic']").focusout(function () {
			var cnic = frm.doc.name_7_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 7 CNIC#")
				frm.set_value("name_7_cnic", '')
			}
		});
	},
	name_8: function (frm) {
		$("input[data-fieldname='name_8']").focusout(function () {
			var name = frm.doc.name_8
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 8 Name")
				frm.set_value("name_8", '')
			}
		});
	},
	name_8_cell: function (frm) {
		$("input[data-fieldname='name_8_cell']").focusout(function () {
			var num = frm.doc.name_8_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 8 Cell#")
				frm.set_value("name_8_cell", '')
			}
		});
	},
	name_8_cnic: function (frm) {
		$("input[data-fieldname='name_8_cnic']").focusout(function () {
			var cnic = frm.doc.name_8_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 8 CNIC#")
				frm.set_value("name_8_cnic", '')
			}
		});
	},
	name_9: function (frm) {
		$("input[data-fieldname='name_9']").focusout(function () {
			var name = frm.doc.name_9
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 9 Name")
				frm.set_value("name_9", '')
			}
		});
	},
	name_9_cell: function (frm) {
		$("input[data-fieldname='name_9_cell']").focusout(function () {
			var num = frm.doc.name_9_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 9 Cell#")
				frm.set_value("name_9_cell", '')
			}
		});
	},
	name_9_cnic: function (frm) {
		$("input[data-fieldname='name_9_cnic']").focusout(function () {
			var cnic = frm.doc.name_9_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 9 CNIC#")
				frm.set_value("name_9_cnic", '')
			}
		});
	},
	name_10: function (frm) {
		$("input[data-fieldname='name_10']").focusout(function () {
			var name = frm.doc.name_10
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 10 Name")
				frm.set_value("name_10", '')
			}
		});
	},
	name_10_cell: function (frm) {
		$("input[data-fieldname='name_10_cell']").focusout(function () {
			var num = frm.doc.name_10_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 10 Cell#")
				frm.set_value("name_10_cell", '')
			}
		});
	},
	name_10_cnic: function (frm) {
		$("input[data-fieldname='name_10_cnic']").focusout(function () {
			var cnic = frm.doc.name_10_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 10 CNIC#")
				frm.set_value("name_10_cnic", '')
			}
		});
	},
	name_11: function (frm) {
		$("input[data-fieldname='name_11']").focusout(function () {
			var name = frm.doc.name_11
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 10 Name")
				frm.set_value("name_11", '')
			}
		});
	},
	name_11_cell: function (frm) {
		$("input[data-fieldname='name_11_cell']").focusout(function () {
			var num = frm.doc.name_11_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid  Child 11 Cell#")
				frm.set_value("name_11_cell", '')
			}
		});
	},
	name_11_cnic: function (frm) {
		$("input[data-fieldname='name_11_cnic']").focusout(function () {
			var cnic = frm.doc.name_11_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 11 CNIC#")
				frm.set_value("name_11_cnic", '')
			}
		});
	},
	name_12: function (frm) {
		$("input[data-fieldname='name_12']").focusout(function () {
			var name = frm.doc.name_12
			if (!(name_validate(name))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 12 Name")
				frm.set_value("name_12", '')
			}
		});
	},
	name_12_cell: function (frm) {
		$("input[data-fieldname='name_12_cell']").focusout(function () {
			var num = frm.doc.name_12_cell
			if (!(phone_validate(num))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 12 Cell#")
				frm.set_value("name_12_cell", '')
			}
		});
	},
	name_12_cnic: function (frm) {
		$("input[data-fieldname='name_12_cnic']").focusout(function () {
			var cnic = frm.doc.name_12_cnic
			if (!(cnic_validate(cnic))) {
				$(".msgprint").empty()
				frappe.msgprint("Please Enter Valid Child 12 CNIC#")
				frm.set_value("name_12_cnic", '')
			}
		});
	},
});

frappe.ui.form.on("SIP", {
	work_start_date: function (frm, cdt, cdn) {
		var doc = locals[cdt][cdn];
		if (doc.work_start_date) {
			console.log("work_start_date");
			var work_start_date = Date.parse(String(doc.work_start_date).split(" ")[0]);
			var work_end_date = Date.parse(doc.work_end_date);
			if (work_start_date > work_end_date) {
				frappe.model.set_value(cdt, cdn, "work_start_date", "")
				frappe.msgprint("Work Start Date should be lesser or equal to Work End Date")
			}
		}
	},
	work_end_date: function (frm, cdt, cdn) {
		var doc = locals[cdt][cdn];
		if (doc.work_end_date) {
			console.log("work_end_date");
			var work_end_date = Date.parse(String(doc.work_end_date).split(" ")[0]);
			var work_start_date = Date.parse(doc.work_start_date);
			if (work_end_date < work_start_date) {
				frappe.model.set_value(cdt, cdn, "work_end_date", "")
				frappe.msgprint("Work End Date should be greater or equal to Work Start Date")
			}
		}
	},
});