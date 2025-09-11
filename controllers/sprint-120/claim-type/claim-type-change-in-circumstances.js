const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.claimTypeChangeInCircumstances,
    previous: urls.claimType,
  };

  module.exports = registerController(config.name, config);
