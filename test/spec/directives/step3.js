'use strict';

describe('Directive: tabs step 3', function () {

  // load the directive's module
  beforeEach(module('angularDirectivesApp'));

  var tabs;

  beforeEach(inject(function ($rootScope, $compile) {
    var html = "<div tabs-s3=\"[{ title: 'Tab 1', content: 'Content 1' },{ title: 'Tab 2', content: 'Content 2' }]\"></div>";

    tabs = $compile(angular.element(html))($rootScope.$new());
    $rootScope.$digest();
  }));

  it('should add active class on the clicked tab', function(){
    tabs.find('li:last').click();
    expect(tabs.find('li:last').hasClass('active')).toBe(true);
    expect(tabs.find('.tab-content div:last').hasClass('active')).toBe(true);
  });

  it('should remove active class selected tab when clicking on another', function(){
    tabs.find('li:last').click();
    expect(tabs.find('li:first').hasClass('active')).toBe(false);
    expect(tabs.find('.tab-content div:first').hasClass('active')).toBe(false);
  });
});
