describe('home', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should show default content', function() {
    expect(element('.hero-unit').text()).toContain("Yeoman")
  });
});
