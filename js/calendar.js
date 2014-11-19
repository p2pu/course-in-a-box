/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';
	function parseData(data) {
		var section = $('.calendar'),
			days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			events = data.items;
		if (data && data.items) {
			$.each(events, function (i, e) {
				var sdate = new Date(e.start.dateTime),
					edate = new Date(e.end.dateTime),
					currentdate = new Date();

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
				e.title = e.organizer.displayName + ' - ' +e.summary;
				e.passed = currentdate > edate;
				e.not_passed = edate > currentdate;
				e.location_set = e.location !== undefined;
				e.where = e.location;
				e.description = e.summary;
			});

			$("#calendar-data").html(can.view("app-template", {events: new can.List(events)}));
			$.getScript("/js/addThisEvent.js");
		} else {
			section.html('')
				.removeClass('calendar')
				.next().removeClass('dark-section')
				.addClass('light-section');
		}
	}


	function makeRequest() {
		var request = gapi.client.calendar.events.list({
			'calendarId': 'p2pu.org_bdbg1p5olhp0eo83mnqi7fvpfs@group.calendar.google.com',
			'singleEvents': true,
			'orderBy': 'startTime'
		});
		request.then(function (response) {
			parseData(response.result);

		}, function (reason) {
			$("#calendar-data").html('<h1>Oh dear, something went wrong, could you try again please? Or tell us about this <a href="http://community.p2pu.org/category/tech/support">here</a></h1>');
		});
	}


	var init = function () {
		$(function () {
			gapi.client.setApiKey('AIzaSyAs69MGQu7Bp8LCpeGZlhsoUwkFoD3sUro');
			gapi.client.load('calendar', 'v3').then(makeRequest);

		});
	};

	P2PU.ciab = {};
	P2PU.ciab.calendar = init;

}(jQuery, P2PU));