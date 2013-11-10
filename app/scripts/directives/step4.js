'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsS4', function($parse) {
        return {
            template: '<ul class="nav nav-tabs">' +
                      '  <li ng-repeat="title in titles" ' +
                      '      ng-class="{active: isSelected($index)}" ' +
                      '      ng-click="selectTab($index)">' +
                      '    <a href="">{{ title }}</a>' +
                      '  </li>' +
                      '</ul>' +
                      '<div class="tab-content" ng-transclude></div>',
            transclude: true,
            link: function(scope, element, attrs) {
                scope.titles = $parse(attrs.titles)(scope);

                scope.selectTab = function(index) {
                    element.find(".tab-content div").eq(scope.activeIndex).removeClass('active');
                    element.find(".tab-content div").eq(index).addClass('active');
                    scope.activeIndex = index;
                };

                scope.isSelected = function(index) {
                    return index == scope.activeIndex;
                };

                scope.selectTab(0);
            }
        }
    });
