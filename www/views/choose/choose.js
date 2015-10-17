(function() {
	"use strict";

	var app = angular.module('chaminder');

	app.controller('ChooseController', function ($scope, Data) {

		$scope.cards = [];


		//for (var i = 0 ; i < 3 ; i++) {
			$scope.cards.push(Data.next());
		//}


		$scope.cardDestroyed = function(index) {
			$scope.cards.splice(index, 1);
		};

		$scope.cardSwiped = function(index) {
			$scope.cards.push(Data.next());
		};


	});
})();