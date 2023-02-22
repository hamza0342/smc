frappe.pages['smc-dashboard'].on_page_load = function (wrapper) {
  var page = frappe.ui.make_app_page({
    parent: wrapper,
    title: 'SMC Dashboard',
    single_column: true
  });
  filters.add(page);
}
filters = {
  add: async function (page) {
    let division
    let district
    let district_by_user
    let division_by_user
    let read_only = false;
    var system_manager = frappe.user_roles.includes('System Manager');
    var lsu = frappe.user_roles.includes('LSU');

  if (lsu == true && system_manager == false) {
      await frappe.call({
            method: "smc.smc.page.smc_dashboard.smc_dashboard.district_for_lsu",
            args: { user: frappe.session.user },
            callback: function (r) {
              division_by_user = r.message[1].division;

              district_by_user = r.message[0].district;
              read_only = true;
            }
        });
    }
  else {
    division_by_user = '';
    district_by_user = '';
  }
  let year = page.add_field({
    label: "Year",
    fieldtype: "Link",
    fieldname: "Year",
    options: "Year",
    default: "2021-22",
    reqd: 1,
  });

  if (read_only == true) {
    division = page.add_field({
      label: "Division",
      fieldtype: "Link",
      fieldname: "division",
      options: "Division",
      read_only: 1,
      default: `${division_by_user}`,
    });
    district = page.add_field({
      label: "District",
      fieldtype: "Link",
      fieldname: "district",
      options: "District",
      read_only: 1,

      default: `${district_by_user}`,
      "get_query": function () {
          if (!school.get_value()) {
              return
          }
          else {
              return {
                  "filters": { "district": district.get_value() }
              }
          }
      },
      read_only: 1
    });

  }
  else{
    division = page.add_field({
      label: "Division",
      fieldtype: "Link",
      fieldname: "division",
      options: "Division",
    });
    district = page.add_field({
			label: "District",
			fieldtype: "Link",
			fieldname: "district",
			options: "District",
      default: `${district_by_user}`,
      "get_query": function() {
				return {
					"filters": {
						"division": division.get_value("division"),
					}
				}
			}
		});
  }

  let taluka = page.add_field({
    label: "Taluka",
    fieldtype: "Link",
    fieldname: "taluka",
    options: "Taluka",
    "get_query": function() {
      return {
        "filters": {
          "district": district.get_value("division"),
        }
      }
    }
  });
  
  let fiterbtn = page.add_field({
    label: "View",
    fieldtype: "Button",
    fieldname: "filter",
    async click() {
      await frappe.call({
        method: "smc.smc.page.smc_dashboard.smc_dashboard.get_data",
        args: {
          year: year.get_value(),
          division: division.get_value(),
          district: district.get_value(),
          taluka: taluka.get_value(),
        },
        freeze: true,
        callback: function (r) {
          $('#smc_dashcoard').remove();
          $(frappe.render_template("smc_dashboard", r.message.data)).appendTo(page.main);
          $('#girls_bar').css('width', r.message.data.girls_school_percentage + '%')
          $('#boys_bar').css('width', r.message.data.boys_school_percentage + '%')
          $('#mixed_bar').css('width', r.message.data.mixed_school_percentage + '%')
          columnChart(r.message.gender_and_level_data);
          pieGenderChart(r.message.amount_gender_data[0]);
          categorycontainer(r.message.amount_level_data[0]);
          draw_map(r.message.draw_map);
        },
      });
    },
  });
  
  await frappe.call({
    method: "smc.smc.page.smc_dashboard.smc_dashboard.get_data",
    args: {
      year: year.get_value(),
      division: division.get_value(),
      district: district.get_value(),
      taluka: taluka.get_value(),
    },
    freeze: true,
    callback: function (r) {
      $('#smc_dashcoard').remove();
      $(frappe.render_template("smc_dashboard", r.message.data)).appendTo(page.main);
      $('#girls_bar').css('width', r.message.data.girls_school_percentage + '%')
      $('#boys_bar').css('width', r.message.data.boys_school_percentage + '%')
      $('#mixed_bar').css('width', r.message.data.mixed_school_percentage + '%')
      columnChart(r.message.gender_and_level_data);
      pieGenderChart(r.message.amount_gender_data[0]);
      categorycontainer(r.message.amount_level_data[0]);
      draw_map(r.message.draw_map);
    },
  });
  }
}

function columnChart(data) {
  var boys = Array(5).fill(0);
  var girls = Array(5).fill(0);
  var mixed = Array(5).fill(0);
  for (i = 0; i <= 4; i++) {
    if (data[i]) {
      if (data[i].name == "Primary") {
        boys[0] = data[i].boys_schools;
        girls[0] = data[i].girls_schools;
        mixed[0] = data[i].mixed_schools;
      }
      if (data[i].name == "Middle") {
        boys[1] = data[i].boys_schools;
        girls[1] = data[i].girls_schools;
        mixed[1] = data[i].mixed_schools;
      }
      if (data[i].name == "Elementary") {
        boys[2] = data[i].boys_schools;
        girls[2] = data[i].girls_schools;
        mixed[2] = data[i].mixed_schools;
      }
      if (data[i].name == "Secondary") {
        boys[3] = data[i].boys_schools;
        girls[3] = data[i].girls_schools;
        mixed[3] = data[i].mixed_schools;
      }
      if (data[i].name == "Higher Secondary") {
        boys[4] = data[i].boys_schools;
        girls[4] = data[i].girls_schools;
        mixed[4] = data[i].mixed_schools;
      }
    }
  }


  Highcharts.chart("levelcontainer", {
    chart: {
      type: "bar",
      height: 270,
    },
    colors: ["#454d66", "#0091F7", "#F740A9"],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "",

    },
    xAxis: {
      categories: [
        "Primary",
        "Middle",
        "Elementary",
        "Secondary",
        "Higher Secondary",
      ],
      "labels": {

        style: {
          fontSize: '12px',
          fontWeight: '500'
        }

      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },

    legend: {
      reversed: true,
      align: "center",


    },
    plotOptions: {

      series: {
        pointWidth: 25,
        stacking: "percent",
        dataLabels: {
          style: {
            fontSize: '10px',
          },
          enabled: true,
          formatter: function () {
            if (this.y) {
              return this.y;
            }
          },
          position: "left",
          allowOverlap: true,
          crop: false,
          padding: 0,

        },

      },
    },

    series: [
      {
        name: "Mixed Schools",
        data: mixed
      },
      {
        name: "Boys Schools",
        data: boys
      },
      {
        name: "Girls Schools",
        data: girls
      },
    ],
  });

}
function pieGenderChart(data) {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
  // Build the chart
  Highcharts.chart('gendercontainer', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: 320,
      height: 320
    },
    colors: ["#454d66", "#0091F7", "#F740A9"],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: '{series.name}: <b>Rs {point.y}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: "",
          distance: -50,

        },
        showInLegend: true
      }
    },
    series: [{
      name: '',
      colorByPoint: true,
      data: [{
        name: 'Mixed Schools',
        y: data.mixed_schools,
        sliced: false,
        selected: true
      },
      {
        name: 'Boys Schools',
        y: data.boys_schools
      }, {
        name: 'Girls Schools',
        y: data.girls_schools
      }]
    }]
  });
}
function categorycontainer(data) {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
  // Build the chart
  Highcharts.chart('categorycontainer', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      width: 340,
      height: 340
    },
    colors: ["#e27309", "#454d66", "#0083ac", "#f6d100", "#f6008f"],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: '{series.name}: <b>Rs {point.y}</b>'
    },
    accessibility: {
      point: {
        valueSuffix: "Rs",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: "",
          distance: -50,

        },
        showInLegend: true
      }
    },
    series: [{
      name: '',
      colorByPoint: true,
      data: [{
        name: 'Primary',
        y: data.primary_schools,
        sliced: false,
        selected: true
      },
      {
        name: 'Middle',
        y: data.middle_schools
      }, {
        name: 'Elementary',
        y: data.elementry_schools
      },
      {
        name: 'Secondary',
        y: data.secondary_schools
      },
      {
        name: 'Higher Secondary',
        y: data.higher_secondary_schools
      }]
    }]
  });
}
function draw_map(adata) {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
  var series = [{
    type: 'map',
    enableMouseTracking: true,
    showInLegend: false,
    animation: {
      duration: 1000
    },
    data: adata,
    dataLabels: {
      enabled: true,
      color: '#FFFFFF',
      format: '{point.name} <br />Rs {point.value} '
    },
    name: 'Provincial View',
    states: {
      hover: {
        borderColor: '#FFFFFF'
      }
    },
    tooltip: {
      pointFormat: 'District: {point.name} <br /> SMC Forms: {point.forms_created}<br />Amount : {point.value}<br />'
    }
  }];
  Highcharts.mapChart('mapContainer', {
    title: {
      text: ''
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
        x: 10
      }
    },
    colorAxis: {
      // dataClasses: [{
      //   from: 0,
      //   to: 5,
      //   color: '#F80000',
      //   name: 'Below 5%'
      // }, {
      //   from: 5,
      //   to: 20,
      //   color: '#F7C10B',
      //   name: '5%-20%'
      // }, {
      //   from: 20,
      //   to: 40,
      //   color: '#4a9957',
      //   name: '21%-40%'
      // }, {
      //   from: 40,
      //   to: 100,
      //   color: '#345C0C',
      //   name: 'Above 40%'
      // }]
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: true,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true
    },
    series: series
  });
}
