const {
    urls,
    registerController,
  } = require('../../../utils/controller');
  
  const config = {
    name: urls.pipIneligible,
    previous: urls.otherBenefits,
  };
  
  module.exports = registerController(config.name, config);
