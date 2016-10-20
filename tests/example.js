module.exports = {
  'it should load the page': function (browser) {
    browser
      .url('http://nightwatchjs.org')
      .end();
  }
};