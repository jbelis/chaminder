(function() {
	"use strict";


	var app = angular.module('chaminder');

	app.service("Data", function ($http) {

		function Session() {

		}

		console.log("in Data");
		var _session = null;

		return {
			start: function (type) {
				_session = new Session();
				return _session;
			},
			next: function () {
				// return the next choice
			},

			pick: function (place) {
				// session ends
			},
			giveup: function () {
				// session ends
			}
		};

	});
})();