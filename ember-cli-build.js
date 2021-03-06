/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/fonts/elegant-icons.css');
  //app.import('vendor/bxslider/jquery.bxslider.js');
  //app.import('vendor/bxslider/jquery.bxslider.css');

  app.import('vendor/appear/jquery.appear.js');
  app.import('vendor/number/jquery.animateNumber.min.js');
  app.import('vendor/isotope/isotope.pkgd.min.js');
  app.import('vendor/magnific-popup/jquery.magnific-popup.min.js');
  app.import('vendor/magnific-popup/magnific-popup.css');

  app.import('vendor/fileinput/fileinput.min.js');
  app.import('vendor/fileinput/fileinput.min.css');
  //app.import('vendor/functions.js');


  app.import('vendor/loader/loaders.min.css');
  app.import('vendor/animate/animate.min.css');

  app.import('vendor/plugins.css');
  app.import('vendor/navigation-menu.css');
  app.import('vendor/style.css');
  app.import('vendor/shortcodes.css');




  return app.toTree();
};
