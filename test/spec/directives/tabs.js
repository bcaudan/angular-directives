'use strict';

describe('Directive: tabs', function () {

  // load the directive's module
  beforeEach(module('angularDirectivesApp'));

  var tabs;

  beforeEach(inject(function ($rootScope, $compile) {
    var html = '';
    html += '<tabs>';
    html += '  <tab title="first" active="true">foo</tab>';
    html += '  <tab title="last">bar</tab>';
    html += '</tabs>';

    tabs = $compile(angular.element(html))($rootScope.$new());
  }));

  it('should add active class on the clicked tab', function(){
    tabs.find('.nav-tabs li:last').click();
    expect(tabs.find('.nav-tabs li:last').hasClass('active')).toBe(true);
    expect(tabs.find('.tab-pane:last').hasClass('active')).toBe(true);
  });

  it('should remove active class selected tab when clicking on another', function(){
    tabs.find('.nav-tabs li:last').click();
    expect(tabs.find('.nav-tabs li:first').hasClass('active')).toBe(false);
    expect(tabs.find('.tab-pane:first').hasClass('active')).toBe(false);
  });

  it('should create nav-tabs element from tab attribute', function(){
    expect(tabs.find('.nav-tabs li').length).toBe(2);
    expect(tabs.find('.nav-tabs li:first').text()).toContain('first');
    expect(tabs.find('.nav-tabs li:last').text()).toContain('last');
  });

  it('should init the tab which has the active attribute', function() {
    expect(tabs.find('.nav-tabs li:first').hasClass('active')).toBe(true);
    expect(tabs.find('.tab-pane:first').hasClass('active')).toBe(true);

    expect(tabs.find('.nav-tabs li:last').hasClass('active')).toBe(false);
    expect(tabs.find('.tab-pane:last').hasClass('active')).toBe(false);
  });
});
