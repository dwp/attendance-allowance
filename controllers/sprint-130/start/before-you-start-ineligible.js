const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.beforeYouStartIneligible,
  previous: urls.beforeYouStart,
};

module.exports = registerController(config.name, config);
