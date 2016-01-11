'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices',
    'ui.bootstrap'

]) .run(['$rootScope','$http',
  function ($rootScope,$http) {


  }]);

