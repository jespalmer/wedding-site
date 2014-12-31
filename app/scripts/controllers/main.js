'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function($scope, $location, uiGmapGoogleMapApi, $anchorScroll) {
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    $scope.locations = [{
      id: 'ceremony',
      loc: {
        latitude: 42.366001,
        label: 'Ceremony',
        longitude: -83.483981
      }
    }, {
      id: 'reception',
      loc: {
        latitude: 42.277671,
        label: 'Reception',
        longitude: -83.742632
      }
    }];

    $scope.map = {
      center: {
        latitude: 42.344625,
        longitude: -83.599521
      },
      zoom: 12
    };

    //Really long generated data after this point

    $scope.photos = ['../images/resized2-037.jpg', '../images/resized2-056.jpg', '../images/resized2-031.jpg', '../images/resized2-066.jpg', '../images/resized2-044.jpg', '../images/resized2-064.jpg', '../images/resized2-049.jpg', '../images/resized2-003.jpg', '../images/resized2-062.jpg', '../images/resized2-018.jpg', '../images/resized2-036.jpg', '../images/resized2-055.jpg', '../images/resized2-016.jpg', '../images/resized2-006.jpg', '../images/resized2-069.jpg', '../images/resized2-028.jpg', '../images/resized2-026.jpg', '../images/resized2-030.jpg', '../images/resized2-015.jpg', '../images/resized2-046.jpg', '../images/resized2-027.jpg', '../images/resized2-019.jpg', '../images/resized2-065.jpg', '../images/resized2-070.jpg', '../images/resized2-038.jpg', '../images/resized2-041.jpg', '../images/resized2-067.jpg', '../images/resized2-051.jpg', '../images/resized2-024.jpg', '../images/resized2-058.jpg', '../images/resized2-007.jpg', '../images/resized2-032.jpg', '../images/resized2-011.jpg', '../images/resized2-048.jpg', '../images/resized2-025.jpg', '../images/resized2-020.jpg'];
    $scope.options = {
      scrollwheel: false,
      labelContent: 'label',
      styles: [{
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
