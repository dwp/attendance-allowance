const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.dlaIneligible,
    previous: urls.otherBenefits,
  };

  module.exports = registerController(config.name, config);
