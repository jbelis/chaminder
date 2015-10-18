(function() {
	"use strict";

	var app = angular.module('chaminder');

	app.controller('ChooseController', function ($scope, $state, Data) {

		$scope.cards = [];

		$scope.cardDestroyed = function(index) {
			$scope.cards.splice(index, 1);
		};

		$scope.cardSwiped = function(index) {
			var card = Data.next();
			if (card) {
				$scope.cards.push(card);
			} else {
				if (!$scope.cards.length) {
					$state.go("home");
				}
			}
		};

		$scope.pick = function() {
			$state.go("map");
		};

		$scope.cards.push(Data.next());
	//	$scope.cards.push(Data.next());
	//	$scope.cards.push(Data.next());

	});
})();