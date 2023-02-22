// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["School List"] = {
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
			"fieldname":"district",
			"label": __("District"),
			"fieldtype": "Link",
			"options": "District",
		},
		{
			"fieldname":"tehsil",
			"label": __("Tehsil"),
			"fieldtype": "Link",
			"options": "Taluka",
			"get_query": function() {
				var district = frappe.query_report.get_filter_value('district');
				return {
					    "filters": {"district": district}
				}   
            }

		},
		{
			"fieldname":"uc",
			"label": __("UC"),
			"fieldtype": "Link",
			"options": "Union Council",
			"get_query": function() {
				var tehsil = frappe.query_report.get_filter_value('tehsil');
				return {
					    "filters": {"taluka_name": tehsil}
				}   
            }
		},
		// {
		// 	"fieldname":"bank_name",
		// 	"label": __("Bank Name"),
		// 	"fieldtype": "Link",
		// 	"options": "Bank detail",
		// },
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
		},
		{
			"fieldname":"school_gender",
			"label": __("School Gender"),
			"fieldtype": "Select",
			"options": ["","Boys","Girls","Mixed"],
		}
	]
};
