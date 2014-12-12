'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function ($scope, $location, uiGmapGoogleMapApi) {
    $scope.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.options = {
      scrollwheel: false
    };

    $scope.ceremony = {
      center: {
        latitude: 42.366001,
        longitude: -83.483981
      },
      marker: {
        latitude: 42.366001,
        longitude: -83.483981
      },
      zoom: 13
    };

    $scope.reception = {
      center: {
        latitude: 42.277704,
        longitude: -83.742639
      },
      marker: {
        latitude: 42.277704,
        longitude: -83.742639
      },
      zoom: 13
    };

    uiGmapGoogleMapApi.then(function (maps) {
      console.log("Maps loaded");

      //console.log(maps);
    });

  });
