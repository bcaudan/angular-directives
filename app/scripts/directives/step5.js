'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsS5', function () {
    return {
      transclude: true,
      template: '<ul class="nav nav-tabs">' +
        '<li ng-repeat="tab in tabs" ' +
        '    ng-class="{active: isActive(tab)}" ' +
        '    ng-click="selectTab(tab)">' +
        '  <a href="">{{ tab.title }}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude></div>',
      require: 'tabs',
      controller: ['$scope', function (scope) {
        var tabs = [];
        var activeTab;

        this.isActive = function (tab) {
          return tab === activeTab;
        };

        this.selectTab = function (tab) {
          activeTab = tab;
        };

        this.registerTab = function (title, isActive) {
          var tab = { title: title };
          tabs.push(tab);
          if (isActive) {
            activeTab = tab;
          }
          return tab;
        };

        scope.tabs = tabs;
        scope.isActive = this.isActive;
        scope.selectTab = this.selectTab;
      }]
    };
  })
  .directive('tabS5', function () {
    return {
      transclude: true,
      replace: true,
      require: '^tabsS5',
      scope: true,
      template: '<div class="tab-pane" ng-class="{active: isActive()}" ng-transclude></div>',
      link: function (scope, element, attrs, tabsController) {
        var tab = tabsController.registerTab(attrs.title, attrs.active);
        scope.isActive = function () {
          return tabsController.isActive(tab);
        };
      }
    };
  });
