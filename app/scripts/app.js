'use strict';

angular.module('angularDirectivesApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/step1', {
        templateUrl: 'views/step1.html'
      })
      .when('/step2', {
        templateUrl: 'views/step2.html'
      })
      .when('/step3', {
        templateUrl: 'views/step3.html'
      })
      .when('/step4', {
        templateUrl: 'views/step4.html'
      })
      .when('/step5', {
        templateUrl: 'views/step5.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
