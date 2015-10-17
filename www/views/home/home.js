(function() {
	"use strict";

	var app = angular.module('chaminder');

	app.controller('HomeController', function ($scope, $state, Data) {

		$scope.start = function(type) {
			Data.start(type).then(function(session) {
				console.log(session);
				$state.go('choose');
			})
		};

	});
})();