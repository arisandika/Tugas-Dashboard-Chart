// Sidebar Toggle
$("#sidebarToggle").on("click", function () {
  $("#sidebar").toggleClass("collapsed");
  $("#main").toggleClass("expanded");
});

// Responsive Sidebar
function checkWidth() {
  if ($(window).width() <= 768) {
    $("#sidebar").addClass("collapsed");
    $("#main").addClass("expanded");
  } else {
    $("#sidebar").removeClass("collapsed");
    $("#main").removeClass("expanded");
  }
}

checkWidth();

$(window).on("resize", checkWidth);

// Karyawan Table
if (document.getElementById("employeeTable")) {
  $(document).ready(function () {
    // Initialize DataTable
    $("#employeeTable").DataTable({
      language: {
        search: "Search:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
        },
      },
      columnDefs: [{ orderable: false, targets: 6 }],
      order: [[0, "asc"]],
      pageLength: 10,
      responsive: true,
    });

    $("[title]").each(function () {
      new bootstrap.Tooltip(this);
    });
  });
}

if (document.getElementById("jabatanTable")) {
  $(document).ready(function () {
    // Initialize DataTable
    $("#jabatanTable").DataTable({
      language: {
        search: "Search:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_ to _END_ of _TOTAL_ entries",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
        },
      },
      columnDefs: [{ orderable: false, targets: 3 }],
      order: [[0, "asc"]],
      pageLength: 10,
      responsive: true,
    });

    $("[title]").each(function () {
      new bootstrap.Tooltip(this);
    });
  });
}

if (document.getElementById("chart")) {
  $(document).ready(function () {
    var options = {
      series: [{
        name: '2022',
        data: [4017, 6135, 7091, 5841, 5063, 4547, 3467, 3970, 6313, 3595, 9207, 5945]
      }, {
        name: '2023',
        data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8789]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          borderRadius: 0,
          borderRadiusApplication: 'end'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  });
}