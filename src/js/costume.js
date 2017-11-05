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
	};
	
	var trigger = $('.btn-toggle-sidebar'),
	sidebar = $('#sidebar-wrapper'),
	konten = $('#konten'),
	isClosed = false;
	trigger.click(function () {
		hamburger_cross();      
	});
	hamburger_cross();
	function hamburger_cross() {
		if (isClosed == true) {          
			sidebar.removeClass("col-md-2");
			konten.removeClass("col-md-10");
			konten.addClass("col-md-12");
			isClosed = false;
		} else {   
			sidebar.addClass("col-md-2");
			konten.addClass("col-md-10");
			konten.removeClass("col-md-12");
			isClosed = true;
		};
		if ($('#spline-chart').length > 0) {
			chart.render();
		};
	};

	$('[data-toggle="offcanvas"]').click(function () {
		$('#sidebar-wrapper').toggleClass('hide');
	});    
	
	$('#sidebar-wrapper').height($(document).height() - $('.navbar').height());
};

jQuery(document).ready(function($) {
	
	row = $('.clickable-table');
    for (i = 0; i < row.length; i++){
    	col = $($('.clickable-table')[i]).children('td').slice(1);
    	$(col).addClass('clickable-row');
    	$(col).data('href', $($(row)[i]).data('href'));
    }
    $(row).removeClass('clickable-table');

    $(".clickable-row").click(function() {
    	// console.log($(this).data("href"));
		window.location = $(this).data("href");
	});

    checkBox = $('td input');
	checked = false;
	$($(checkBox)).change(function () {
		if ($($(checkBox)).is(':checked')) {
			$('.glyphicon-pencil').parent('a.btn').attr("disabled", true);
		} else {
			$('.glyphicon-pencil').parent('a.btn').attr("disabled", false);
		};
	});
	
	$('.glyphicon-check').parent().click(function() {
		if (checked){
			$('td input').attr("checked", false);
			$('.glyphicon-pencil').parent('a.btn').attr("disabled", true);
		}else {
			$('td input').attr("checked", true);	
			$('.glyphicon-pencil').parent('a.btn').attr("disabled", false);
		};
		checked = !checked;
	});
});