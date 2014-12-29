'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function($scope, $location, uiGmapGoogleMapApi) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.options = {
      scrollwheel: false
    };

    $scope.locations = [{
      id: "ceremony",
      loc: {
        latitude: 42.366001,
        longitude: -83.483981
      }
    }, {
      id: "reception",
      loc: {
        latitude: 42.277671,
        longitude: -83.742632
      }
    }];

    $scope.map = {
      center: {
        latitude: 42.333497,
        longitude: -83.604605
      },
      zoom: 12
    }

    $scope.pictures = _.range(20);

    uiGmapGoogleMapApi.then(function(maps) {
      console.log("Maps loaded");

      //console.log(maps);
    });

  });
