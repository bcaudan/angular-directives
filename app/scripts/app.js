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
      .otherwise({
        redirectTo: '/'
      });
  });
