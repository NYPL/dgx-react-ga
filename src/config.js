// Account codes for Google Analytics for different environments
let Google = {
  // Return the Google Analytics code for the production property if
  // is_prod is true, or the dev property if is_prod is false
  code: is_prod => {
    let codes = {
      production: "UA-1420324-3",
      dev: "UA-1420324-122"
    };

    if (is_prod) {
      return codes.production;
    }
    return codes.dev;
  }
}

module.exports = {
  google: Google
};
