describe('step4', function() {
  beforeEach(function() {
    browser().navigateTo('#/step4');
  });

  it('should init with the active tab', function() {
    expect(element('li.active').text()).toContain("Tab 1");
    expect(element('.tab-pane:visible').text()).toContain("Content 1");
  });

  it('should show tab pane when clicking on tab', function() {
    expect(element('li.active').text()).toContain("Tab 1");
    element('li:contains("Tab 2")').click();
    expect(element('li.active').text()).toContain("Tab 2");
    expect(element('.tab-pane:visible').text()).toContain("Content 2");
  });
});
