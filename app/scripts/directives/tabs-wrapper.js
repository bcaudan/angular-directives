'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsWrapper', function() {
    return function(scope, tabsElement) {
      function selectThisTab(tab) {
        var tabContent = tabsElement.find('.tab-content div').eq(tab.index());

        tabsElement.find('.active').removeClass('active');
        tab.addClass('active');
        tabContent.addClass('active');
      }

      tabsElement.find('.nav-tabs li').each(function (index, li) {
        var tab = angular.element(li);

        tab.on('click', function () {
          selectThisTab(tab);
        });
      });
    };
  });
