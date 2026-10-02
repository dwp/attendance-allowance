const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.homeAddressPostcodeScotland,
    previous: urls.residenceCountry,
  };

  module.exports = registerController(config.name, config);
