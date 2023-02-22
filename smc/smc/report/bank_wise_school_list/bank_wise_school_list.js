// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Bank Wise School List"] = {
	"filters": [
		{
			"fieldname":"year",
			"label": __("Year"),
			"fieldtype": "Link",
			"options": "Year",
			"default":"2021-22",
			"reqd": 1
		},
		{
			"fieldname":"bank_name",
			"label": __("Bank Name"),
			"fieldtype": "Link",
			"options": "Bank detail",
			"reqd": 1
		},
		{
			"fieldname":"district",
			"label": __("District"),
			"fieldtype": "Link",
			"options": "District",
			// "reqd": 1
		},
		// {
		// 	"fieldname":"school",
		// 	"label": __("School Name"),
		// 	"fieldtype": "Link",
		// 	"options": "School",
		// },
		{
			"fieldname":"school_level",
			"label": __("School Level"),
			"fieldtype": "Link",
			"options": "Level",
		}
	]
};
