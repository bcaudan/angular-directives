'use strict';

describe('Directive: tabs step 4', function () {

  // load the directive's module
  beforeEach(module('angularDirectivesApp'));

  var tabs, scope;

    beforeEach(inject(function($compile, $rootScope){
        var html = '';
        html += '<div tabs-s4 titles="[\'Tab 1\', \'Tab 2\']">';
        html += '  <div class="tab-pane">Content 1</div>';
        html += '  <div class="tab-pane">Content 2</div>';
        html += '</div>';

        scope = $rootScope.$new();
        tabs = $compile(html)(scope);
        scope.$digest()
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
