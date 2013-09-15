'use strict';

angular.module('angularDirectivesApp')
  .directive('tabsWrapper', function() {
    return function(scope, tabs) {
      tabs.find(".nav-tabs li").on('click', selectThisTab);

      function selectThisTab() {
        var tab = angular.element(this);
        var tabContent = tabs.find(".tab-pane").eq(tab.index());

        tabs.find(".active").removeClass('active');
        tab.addClass('active');
        tabContent.addClass("active");
      }
    };
   });
