'use strict';

describe('Directive: tabsWrapper', function () {

  // load the directive's module
  beforeEach(module('angularDirectivesApp'));

  var tabsWrapper;

  beforeEach(inject(function ($rootScope, $compile) {
    var html = '';
    html += '<div tabs-wrapper>';
    html += '  <ul class="nav-tabs">';
    html += '    <li class="active"></li>';
    html += '    <li></li>';
    html += '  </ul>';
    html += '  <div class="tab-content">';
    html += '    <div class="active"></div>';
    html += '    <div></div>';
    html += '  </div>';
    html += '</div>';

    tabsWrapper = $compile(angular.element(html))($rootScope.$new());
  }));

  it('should add active class on the clicked tab', function(){
    tabsWrapper.find('li:last').click();
    expect(tabsWrapper.find('li:last').hasClass('active')).toBe(true);
    expect(tabsWrapper.find('.tab-content div:last').hasClass('active')).toBe(true);
  });

  it('should remove active class selected tab when clicking on another', function(){
    tabsWrapper.find('li:last').click();
    expect(tabsWrapper.find('li:first').hasClass('active')).toBe(false);
    expect(tabsWrapper.find('.tab-content div:first').hasClass('active')).toBe(false);
  });
});
