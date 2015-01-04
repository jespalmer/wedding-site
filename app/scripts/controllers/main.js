'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function($scope, $location, uiGmapGoogleMapApi, $rootScope, $http, $window, $routeParams) {

    if ($routeParams.scrollTo) {
      $location.hash($routeParams.scrollTo);
      $anchorScroll();
    }

    $rootScope.$on('duScrollspy:becameInactive', function($event, $element) {
      $('#nav-collapse').collapse('hide');
    });

    $scope.locations = [{
      id: 'ceremony',
      show: true,
      text: '<b>Ceremony</b><br><a target="_blank" href="https://maps.google.com?daddr=44809+Gov.+Bradford+Plymouth+MI+48170">The Palgut Residence</a>',
      loc: {
        latitude: 42.366001,
        longitude: -83.483981
      }
    }, {
      id: 'reception',
      show: true,
      text: '<b>Reception</b><br><a target="_blank" href="https://maps.google.com?saddr=44809+Gov.+Bradford+Plymouth+MI+48170&daddr=512+East+William+Street+Ann+Arbor+MI+48104">The Original Cottage Inn</a>',
      loc: {
        latitude: 42.277671,
        longitude: -83.742632
      }
    }];

    var zoom = 9; //Phone
    var draggable = false;
    var center = {
      latitude: 42.348090,
      longitude: -83.542621
    };

    if ($window.innerWidth > 992) { //Desktop
      zoom = 12;
      draggable = true;
      center = {
        latitude: 42.344625,
        longitude: -83.599521
      };
    } else if ($window.innerWidth > 768) { //Tablet
      zoom = 11;
      center = {
        latitude: 42.344625,
        longitude: -83.599521
      };
    }

    $scope.map = {
      center: center,
      zoom: zoom
    };

    $http({
      url: 'photos.json',
      method: 'GET'
    }).success(function(photos) {
      $scope.photos = photos;
    });

    $scope.options = {
      scrollwheel: false,
      labelContent: 'label',
      draggable: draggable,
      styles: [{ //Really long generated data after this point
        'stylers': [{
          'saturation': -45
        }, {
          'lightness': 13
        }]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#8fa7b3'
        }]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [{
          'color': '#667780'
        }]
      }, {
        'featureType': 'road.highway',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#333333'
        }]
      }, {
        'featureType': 'road.highway',
        'elementType': 'labels.text.stroke',
        'stylers': [{
          'color': '#8fa7b3'
        }, {
          'gamma': 2
        }]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#a3becc'
        }]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'geometry.stroke',
        'stylers': [{
          'color': '#7a8f99'
        }]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#555555'
        }]
      }, {
        'featureType': 'road.local',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#a3becc'
        }]
      }, {
        'featureType': 'road.local',
        'elementType': 'geometry.stroke',
        'stylers': [{
          'color': '#7a8f99'
        }]
      }, {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#555555'
        }]
      }, {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#bbd9e9'
        }]
      }, {
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#525f66'
        }]
      }, {
        'featureType': 'transit',
        'elementType': 'labels.text.stroke',
        'stylers': [{
          'color': '#bbd9e9'
        }, {
          'gamma': 2
        }]
      }, {
        'featureType': 'transit.line',
        'elementType': 'geometry.fill',
        'stylers': [{
          'color': '#a3aeb5'
        }]
      }]
    };
  });
