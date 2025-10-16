const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.claimTypeRenewal,
    previous: urls.claimType,
  };

  module.exports = registerController(config.name, config);
