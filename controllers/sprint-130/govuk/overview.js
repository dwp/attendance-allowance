const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.overview,
};

module.exports = registerController(config.name, config);
