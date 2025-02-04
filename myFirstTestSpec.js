describe('Protractor Testing', function() {
    it('to check the page title', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://example.com/');
    browser.driver.getTitle().then(function(pageTitle) {
    expect(pageTitle).toEqual('Example Domain');
    });
    });
    });