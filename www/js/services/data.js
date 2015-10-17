var app = angular.module('chaminder');

app.service(function($http, $q) {

	function Session() {
		this.next = function () {
			// return the next choice 
		};

		this.pick = function (place) {
				// session ends
		};

		this.giveup = function () {
				// session ends
		}
	}

	return {
		start: function(type) {
			return new Session();
		}
	}
});
