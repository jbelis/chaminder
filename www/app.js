(function() {
    "use strict";

    var app = angular.module('chaminder', ['ionic']);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
//        $httpProvider.defaults.withCredentials = true;
//        $httpProvider.defaults.useXDomain = true;

        //$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|tel|geo|file|javascript|comgooglemaps):/);

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'HomeController'
            })

            .state('choose', {
                url: '/choose',
                templateUrl: 'views/choose/choose.html',
                controller: 'ChooseController'
            })

            .state('map', {
                url: '/map',
                templateUrl: 'views/map/map.html',
                controller: 'MapController'
            })
        ;

        $urlRouterProvider.otherwise('/home');

    });

    app.controller('AppController', function() {
        console.log("app controller");
    });

})();

