//
// Main js
//


'use strict';
(function() {

    // Menu toggle for admin dashboard

    if ($("#nav-toggle").length) {
        $("#nav-toggle").on("click", function(e) {
            e.preventDefault();
            $("#db-wrapper").toggleClass("toggled");
        });

    }




    //  slimscroll for sidebar nav

    if ($(".nav-scroller").length) {
        $(".nav-scroller").slimScroll({
            height: "90%",
        });
    }



      // Notification dropdown scroll List

  if ($('.notification-list-scroll').length) {
    $(".notification-list-scroll").slimScroll({
      height: 300,
    });
  }


  // Multi level menu dropdown

  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this)
        .next()
        .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }





  // Default Tooltip

  if ($('[data-bs-toggle="tooltip"]').length) {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }






  // Default Popover

  if ($('[data-bs-toggle="popover"]').length) {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
  }

    // Scrollspy

    if ($('[data-bs-spy="scroll"]').length) {
      var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})

    }

    // Toast

    if ($('.toast').length) {

    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})

    }


// Perfomance Chart

    if ($("#perfomanceChart").length) {
    var options = {
        series: [89, 78, 100],
        chart: {
        height: 220,
        type: 'radialBar',
      },
      colors: ['#28a745', '#ffc107', '#dc3545'],
      stroke: {
  lineCap: "round",
},
      plotOptions: {

        radialBar: {
          startAngle: -168,
        endAngle: -450,
          hollow: {

            size: '55%',
          },
          track: {


            background: 'transaprent',},
          dataLabels: {
              show: false,

          }
        }
      },

      };

      var chart = new ApexCharts(document.querySelector("#perfomanceChart"), options);
      chart.render();

    }

// Perfomance Chart coor

if ($("#perfomanceChart-coor").length) {
  var options = {
      series: [89, 78, 100],
      chart: {
      height: 400,
      type: 'radialBar',
    },
    colors: ['#28a745', '#ffc107', '#dc3545'],
    stroke: {
lineCap: "round",
},
    plotOptions: {

      radialBar: {
        startAngle: -168,
      endAngle: -450,
        hollow: {

          size: '55%',
        },
        track: {


          background: 'transaprent',},
        dataLabels: {
            show: false,

        }
      }
    },

    };

    var chart = new ApexCharts(document.querySelector("#perfomanceChart-coor"), options);
    chart.render();

  }


// offcanvas
if ($(".offcanvas").length) {
  var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})

  }





  // Sidenav fixed for docs

  if ($(".sidebar-nav-fixed a").length) {
    $(".sidebar-nav-fixed a")
      // Remove links that don't actually link to anything
      .on("click", function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 90
            }, 1000, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        };
        $('.sidebar-nav-fixed a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
      });
  }



})();

$(document).ready(function(){

  var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
  removeItemButton: true,
  maxItemCount:5,
  searchResultLimit:5,
  renderChoiceLimit:5
  });
  
  
  });

  //bargraph
  window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	
	title:{
		text:"Fortune 500 Companies by Country"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 3, label: "Sweden" },
			{ y: 7, label: "Taiwan" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 9, label: "Italy" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 15, label: "South Korea" },
			{ y: 12, label: "Netherlands" },
			{ y: 15, label: "Switzerland" },
			{ y: 25, label: "Britain" },
			{ y: 28, label: "Germany" },
			{ y: 29, label: "France" },
			{ y: 52, label: "Japan" },
			{ y: 103, label: "China" },
			{ y: 134, label: "US" }
		]
	}]
});
chart.render();

}

//bar 2
const labels = [
  'Gen.',
  'HR',
  'Marketing',
  'BA',
  'Mgmt',

];
const data = {
  labels: labels,
  datasets: [{
    label: 'Sch. Of Business Ed v/s Email Sent',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)'
    ],
    borderWidth: 1,
    data: [105, 32, 55, 122, 60, 20],
  }]
};const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
  },
};
const config2 = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);
var myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);