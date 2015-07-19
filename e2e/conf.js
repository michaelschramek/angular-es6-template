exports.config = {

  // ---- 1. To start a standalone Selenium Server locally ---------------------
  // The location of the standalone Selenium Server jar file, relative
  // to the location of this config. If no other method of starting Selenium
  // Server is found, this will default to
  // node_modules/protractor/selenium/selenium-server...
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  // The port to start the Selenium Server on, or null if the server should
  // find its own unused port. Ignored if seleniumServerJar is null.
  seleniumPort: null,
  // Additional command line options to pass to selenium. For example,
  // if you need to change the browser timeout, use
  // seleniumArgs: ['-browserTimeout=60']
  // Ignored if seleniumServerJar is null.
  seleniumArgs: ['-browserTimeout=1'],

  //  seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
}