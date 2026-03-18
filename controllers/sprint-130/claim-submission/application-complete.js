const {
    urls,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.applicationComplete,
  };

  module.exports = registerController(config.name, config);
