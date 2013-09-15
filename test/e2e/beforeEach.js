var first = true;

beforeEach(function() {
  if (first) {
    browser().navigateTo('/');
    first = false;
  }
});
