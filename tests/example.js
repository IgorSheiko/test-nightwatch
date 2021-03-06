var config = require('../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  'Guinea Pig Assert Title': function(browser) {
    browser
      .url('https://saucelabs.com/test/guinea-pig')
      .waitForElementVisible('body')
      .assert.title('I am a page title - Sauce Labs')
      .saveScreenshot(config.imgpath(browser) + 'ginea-pig-test.png')
      .end();
  }
};
