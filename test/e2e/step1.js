describe('step1', function() {
  beforeEach(function() {
    browser().navigateTo('#/step1');
  });

  it('should init with the active tab', function() {
    expect(element('li.active').text()).toBe("Tab 1");
    expect(element('.tab-pane:visible').text()).toBe("Content 1");
  });

  it('should show tab pane when clicking on tab', function() {
    expect(element('li.active').text()).toBe("Tab 1");
    element('li:contains("Tab 2")').click();
    expect(element('li.active').text()).toBe("Tab 2");
    expect(element('.tab-pane:visible').text()).toBe("Content 2");
  });
});
