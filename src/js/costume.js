window.onload = function () {
	var chart;
	if ($('#spline-chart').length > 0) {
		chart = new CanvasJS.Chart("spline-chart", {
			animationEnabled: true,  
			title:{
				text: "Pendapatan per Bulan"
			},
			axisY: {
				title: "Pendapatan per Bulan",
				valueFormatString: "#0,,.",
				suffix: ".000",
				prefix: "Rp "
			},
			data: [{
				type: "splineArea",
				color: "rgba(54,158,173,.7)",
				markerSize: 5,
				xValueFormatString: "MMMM",
				yValueFormatString: "Rp #,###,###",
				dataPoints: [
				{ x: new Date(2000, 1), y: 3289000 },
				{ x: new Date(2000, 2), y: 3830000 },
				{ x: new Date(2000, 3), y: 2009000 },
				{ x: new Date(2000, 4), y: 2840000 },
				{ x: new Date(2000, 5), y: 2396000 },
				{ x: new Date(2000, 6), y: 1613000 },
				{ x: new Date(2000, 7), y: 2821000 },
				{ x: new Date(2000, 8), y: 2000000 },
				{ x: new Date(2000, 9), y: 1397000 },
				{ x: new Date(2000, 10), y: 2506000 },
				{ x: new Date(2000, 11), y: 2798000 },
				{ x: new Date(2000, 12), y: 3386000 },
				{ x: new Date(2001, 1), y: 6704000},
				{ x: new Date(2001, 2), y: 6026000 },
				{ x: new Date(2001, 3), y: 2394000 },
				{ x: new Date(2001, 4), y: 1872000 },
				{ x: new Date(2001, 5), y: 2140000 }
				]
			}]
		});
		chart.render();
	}
	

	var trigger = $('.hamburger'),
	sidebar = $('#sidebar-wrapper'),
	isClosed = false;
	trigger.click(function () {
		hamburger_cross();      
	});
	hamburger_cross();
	function hamburger_cross() {
		if (isClosed == true) {          
			sidebar.removeClass("col-md-2");
			// sidebar.addClass("hide");
			isClosed = false;
		} else {   
			sidebar.addClass("col-md-2");
			// sidebar.removeClass('hide');
			isClosed = true;
		}
		if ($('#spline-chart').length > 0) {

		}
		if ($('#spline-chart').length > 0) {
			chart.render();
		}

	}

	$('[data-toggle="offcanvas"]').click(function () {
		$('#sidebar-wrapper').toggleClass('hide');
	});
}