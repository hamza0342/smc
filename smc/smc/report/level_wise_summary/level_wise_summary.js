// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Level Wise Summary"] = {
	"filters": [
		{
			"fieldname":"year",
			"label": __("Year"),
			"fieldtype": "Link",
			"options": "Year",
			"default":"2021-22",
			"reqd": 1
		},
		// {
		// 	"fieldname":"district",
		// 	"label": __("District"),
		// 	"fieldtype": "Link",
		// 	"options": "District",
		// 	// "hidden":1, 
		// 	"get_query": async function() {
		// 		let district_by_user;
		// 		var lsu = frappe.user_roles.includes('LSU');
		// 		var system_manager = frappe.user_roles.includes('System Manager');

		// 		if (lsu == true && system_manager == false) {
		// 			await frappe.call({
		// 				method: 'frappe.smc.report.level_wise_summary.level_wise_summary.user_district',
		// 				args: { user: frappe.session.user },
		// 				callback: function(r) {
		// 					district_by_user = r.message.for_value;
		// 					alert(r.message.for_value)
							
		// 				}
		// 			});
		// 		}	
		// 		return district_by_user
		// 	}
		// }
	]
};
