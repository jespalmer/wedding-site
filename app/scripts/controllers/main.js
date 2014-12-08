'use strict';

/**
 * @ngdoc function
 * @name weddingSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weddingSiteApp
 */
angular.module('weddingSiteApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    };

  });
