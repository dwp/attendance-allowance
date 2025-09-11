const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whatYoullGet,
};

module.exports = registerController(config.name, config);
