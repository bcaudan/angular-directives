'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsS3', function ($parse) {
    return {
      template: '<ul class="nav nav-tabs">' +
                '  <li ng-repeat="tab in tabs" ' +
                '    ng-class="{\'active\': isSelected(tab)}"' +
                '    ng-click="selectTab(tab)">' +
                '    <a href="">{{ tab.title }}</a>' +
                '  </li>' +
                '</ul>' +
                '<div class="tab-content">' +
                '  <div class="tab-pane"' +
                '       ng-repeat="tab in tabs"' +
                '       ng-class="{\'active\': isSelected(tab)}">' +
                '    {{ tab.content }}' +
                '  </div>' +
                '</div>',
      link: function (scope, tabsElement, attributes) {
        scope.tabs = $parse(attributes.tabsS3)(scope);

        var selectedTab = scope.tabs[0];

        scope.isSelected = function (tab) {
          return selectedTab === tab;
        };

        scope.selectTab = function (tab) {
          selectedTab = tab;
        };
      }
    };
  });
