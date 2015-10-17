(function() {
	"use strict";

	var app = angular.module('chaminder');

	app.controller('HomeController', function ($scope, Data) {

		Data.start();
		$scope.startDrink = function() {
			console.log("start beer");
		};

		$scope.startFood = function() {
			console.log("start food");
		};

	});
})();