const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.howToClaim,
};

module.exports = registerController(config.name, config);
