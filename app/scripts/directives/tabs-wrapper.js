'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsWrapper', function() {
    return function(scope, tabs) {
      function selectThisTab(tab) {
        var tabContent = tabs.find('.tab-pane').eq(tab.index());

        tabs.find('.active').removeClass('active');
        tab.addClass('active');
        tabContent.addClass('active');
      }

      tabs.find('.nav-tabs li').each(function (index, li) {
        var tab = angular.element(li);

        tab.on('click', function () {
          selectThisTab(tab);
        });
      });
    };
  });
