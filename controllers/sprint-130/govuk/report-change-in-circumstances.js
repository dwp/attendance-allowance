const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.reportChangeInCircumstances,
};

module.exports = registerController(config.name, config);
