'use strict';

angular.module('angularDirectivesApp')
  .directive('tabs', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div><ul class="nav nav-tabs"></ul><div class="tab-content" ng-transclude></div></div>',
      controller: ['$element', function(tabs) {
        this.registerTab = function (headerText, content, isActive) {
          function initTab(headerText, content, isActive) {
            var header = angular.element('<li><a href="">' + headerText + '</a></li>');
            if (isActive) {
              selectThisTab(header, content);
            }
            header.on('click', function(event) {
              event.preventDefault();
              selectThisTab(header, content);
            });
            return header;
          }

          function selectThisTab(header, content) {
            tabs.find('.active').removeClass('active');
            header.addClass('active');
            content.addClass('active');
          }

          var header = initTab(headerText, content, isActive);
          tabs.find('.nav-tabs').append(header);
        };
      }]
    };
  });

angular.module('angularDirectivesApp')
  .directive('tabPane', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      require: '^tabs',
      template: '<div class="tab-pane" ng-transclude></div>',
      link: function (scope, element, attrs, tabsController) {
        tabsController.registerTab(attrs.tab, element, attrs.active);
      }
    };
  });
