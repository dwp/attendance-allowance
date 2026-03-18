const {
  urls,
  registerController,
} = require('../../../utils/controller');
const beforeYouStart = require('./accessibility-statement');

const config = {
  name: urls.accessibilityStatement,
};

module.exports = registerController(config.name, config);
