// Copyright (c) 2022, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('SMC Panel', {
	// refresh: function(frm) {

	// }
	// onload: function (frm) {
	// 	frappe.call({
	// 		method: "smc.smc.doctype.smc_panel.smc_panel.level",
	// 		callback: function (r) {
	// 			var data=r.message
	// 			for (let i = 0; i < data.length; i++) {
	// 				const element = data[i];
	// 				var row = frappe.model.add_child(cur_frm.doc, "SMC Panel", "fixed_factors");
	// 				row.level = element;

	// 			}
	// 			refresh_field("fixed_factors");
	// 			$(".grid-add-row").hide();
	// 		}		
	// 	});
	// },
	// validate: function (frm) {
	// 	frm.get_field("fixed_factors").grid.cannot_add_rows = true;
	// }
	from_date: function (frm) {
		var doc = frm.doc
		if (doc.from_date) {
			var from_date = Date.parse(String(doc.from_date).split(" ")[0]);
			var to_date = Date.parse(doc.to_date);
			if (from_date > to_date) {
				frm.set_value("from_date", "")
				frappe.msgprint("Start Date should be lesss or equal to End Date")
			}
			// else {
			// 		frappe.call({
			// 		method: "smc.smc.doctype.smc_panel.smc_panel.start_date_check",
			// 		callback: function (r) {
			// 			var data=r.message
			// 		}		
			// 	});	
			// }
		}
	},
	to_date: function (frm) {
		var doc = frm.doc
		if (doc.to_date) {
			var to_date = Date.parse(String(doc.to_date).split(" ")[0]);
			var from_date = Date.parse(doc.from_date);
			if (to_date < from_date) {
				frm.set_value("to_date", "")
				frappe.msgprint("End Date should be greater or equal to Start Date")
			}
			// else {
			// 		frappe.call({
			// 		method: "smc.smc.doctype.smc_panel.smc_panel.end_date_check",
			// 		callback: function (r) {
			// 			var data=r.message
			// 		}		
			// 	});	
			// }
		}
	},
});
