const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.eligibility,
};

module.exports = registerController(config.name, config);
