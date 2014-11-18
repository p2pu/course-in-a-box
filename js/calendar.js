/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {
			var section = $('.calendar');
			$.ajax({
				url: 'https://www.google.com/calendar/feeds/p2pu.org_bdbg1p5olhp0eo83mnqi7fvpfs%40group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&futureevents=true&alt=json', //document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent("https://www.google.com/calendar/feeds/p2pu.org_bdbg1p5olhp0eo83mnqi7fvpfs%40group.calendar.google.com/public/full"),
				dataType: 'json',
				cache: false,
				success: function (data) {
					if (data.feed && data.feed.entry) {
						var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
							months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
						var events = data.feed.entry;
						$.each(events, function (i, e) {

							var sdate = new Date(e.gd$when[0].startTime),
								edate = new Date(e.gd$when[0].endTime),
								currentdate = new Date();

							console.log(currentdate > edate);

							sdate.getTimezoneOffset();
							edate.getTimezoneOffset();

							e.year = sdate.getFullYear();
							e.monthnumber = sdate.getMonth() + 1;
							e.month = months[sdate.getMonth()];
							e.day = days[sdate.getDay()];
							e.date = sdate.getDate();
							e.start_hour = sdate.getHours();
							e.start_minutes = (sdate.getMinutes() < 10 ? '0' : '') + sdate.getMinutes();
							e.end_hour = edate.getHours();
							e.end_minutes = (edate.getMinutes() < 10 ? '0' : '') + edate.getMinutes();
							e.title = e.title.$t;
							e.passed = currentdate > edate;
							e.not_passed = edate > currentdate;
							e.location_set = e.gd$where[0].valueString !== "";
							e.location = e.gd$where[0].valueString;
							e.description = e.content.$t;

						});

						$("#calendar-data").html(can.view("app-template", {events: new can.List(events)}));
					}else{
						section.html('')
							.removeClass('calendar')
							.next().removeClass('dark-section')
							.addClass('light-section');
					}
				},
				error: function () {
					$("#calendar-data").html('<h1>Oh dear, something went wrong, could you try again please? Or tell us about this <a href="http://community.p2pu.org/category/tech/support">here</a></h1>');
				}
			});

		});
	};

	P2PU.ciab = {};
	P2PU.ciab.calendar = init;

}(jQuery, P2PU));