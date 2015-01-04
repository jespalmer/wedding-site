'use strict';

/**
 * @ngdoc overview
 * @name weddingSiteApp
 * @description
 * # weddingSiteApp
 *
 * Main module of the application.
 */
angular
  .module('weddingSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer',
    'uiGmapgoogle-maps',
    'duScroll'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: '' //weather,geometry,visualization'
    });
  }).run(function($rootScope, $location, $anchorScroll, $routeParams) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    });
  }).value('duScrollOffset', 30);;
