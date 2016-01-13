// Account codes for Google Analytics for different environments
'use strict';

var Google = {
  // Return the Google Analytics code for the production property if
  // isProd is true, or the dev property if isProd is false
  code: function code(isProd) {
    var codes = {
      production: 'UA-1420324-3',
      dev: 'UA-1420324-122'
    };

    return isProd ? codes.production : codes.dev;
  }
};

module.exports = {
  google: Google
};