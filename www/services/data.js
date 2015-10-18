(function() {
	"use strict";


	var app = angular.module('chaminder');

	app.service("Data", function ($http, $q) {

		var baseUrl = "https://chamonix-hackathon-2015.herokuapp.com";
		
	
		function Session() {
			var _places = [];
		var _tags = {
			food:   ["pizza", "burger", "fries", "bird", "wings"],
			drink:  ["drink", "cocktails", "beer", "shots", "tequila", "genepi"],
			coffee: ["coffee", "cafe"]
		};
		

			function getOffer(place) {
				if (typeof place.offer === 'undefined') {
					return $http.get(baseUrl + "/bars/" + place.id).then(function (response) {
						var offers = response.data.length && response.data[0].offers;
						if (offers) {
							place.offer = (offers.length && offers[0].type) || null;
						}
						return true;
					});
				} else {
					var deferred = $q.defer();
					deferred.resolve(true);
					return deferred.promise;
				}
			}

			this.start = function(type) {
				return $http.get(baseUrl + "/bars").then(function(response) {
					var _possibleTags = _tags[type];
					_places = response.data.reduce(function(arr, pl) {
					    var found = false;
						pl.tagged.forEach(function(tag) {
							if (_possibleTags.indexOf(tag) >= 0) {
								found = true;
							}
						});
						if (found) {
							arr.push(pl);
						}
						return arr;
					}, []);

					// food, drink, coffee
					
					
					// get offer data for the first one
					return getOffer(_places[0]).then(function() {
						return _places;
					});

				}.bind(this))
					.catch(function (error) {
						return [
							{"id":1,"name":"Monkey Bar","image_url":"http://media-cdn.tripadvisor.com/media/photo-s/02/9f/05/48/spring-terrace.jpg"},
							{"id":2,"name":"Munster","image_url":"http://www.irishpubsglobal.com/wp-content/uploads/2015/10/Munster-Bar5.jpeg"},
							{"id":3,"name":"Bard Up","image_url":"http://static1.chamonet.com/image_uploader/photos/large/bar-d-up-snow-sign-1_7700.jpg"},
							{"id":4,"name":"Boogie Woogie","image_url":"https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-0/s480x480/11027435_450267481803017_1587677382271231108_n.jpg?oh=cb83cbf3f5ef78d71dd20c3d7db8bb7a&oe=56A01D74&__gda__=1449340228_a64e50c83f141a8b256de4f3b6e958da"},
							{"id":5,"name":"MBC","image_url":"http://images.chamonix.net/images/originals/14775-original/image-chamonix.jpg"},
							{"id":6,"name":"Chambre Neuf","image_url":"http://www.peaktransfer.com/blog/wp-content/uploads/2014/02/chamonix-nightlife.jpg"},
							{"id":7,"name":"Poco Loco","image_url":"http://media-cdn.tripadvisor.com/media/photo-s/08/22/c6/f8/photo1jpg.jpg"}
						];
					});
			};

			var _offset = 0;
			this.next = function() {
				if (_offset >= _places.length) {
					return null;
				} else {
					var place = _places[_offset];
					_offset++;
					getOffer(_places[_offset]);
					return place;
				}
			};
		}

		var _session = null;

		return {
			start: function (type) {
				_session = new Session();
				return _session.start(type);
			},
			next: function () {
				return _session.next();
			},
			junk: function (place) {
				return place.junk = true;
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