// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["SMC School List"] = {
	"filters": [
		{
			"fieldname":"year",
			"label": __("Year"),
			"fieldtype": "Link",
			"options": "Year",
			"default":"2021-22",
			// "hidden":1
		},
		{
			"fieldname":"division",
			"label": __("Division"),
			"fieldtype": "Link",
			"options": "Division",
			// "reqd":1
			// "hidden":1
		},
		{
			"fieldname":"district",
			"label": __("District"),
			"fieldtype": "Link",
			"options": "District",
			// "hidden":1
		},
		{
			"fieldname":"taluka",
			"label": __("Taluka"),
			"fieldtype": "Link",
			"options": "Taluka",
			// "hidden":1
		},
		{
			"fieldname":"school_gender",
			"label": __("School Gender"),
			"fieldtype": "Link",
			"options": "School Gender",
			// "hidden":1
		}
	]
};
function open_report(school, year) {
	if (year && school) {
		frappe.set_route("school-page",year, school );
	}
}