const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.claimTypeRenewal,
    previous: urls.claimType,
      next: [
    {
      page: urls.whoIsApplying,
    }]
  };

  module.exports = registerController(config.name, config);
