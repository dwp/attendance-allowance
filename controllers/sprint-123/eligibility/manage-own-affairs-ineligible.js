const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.manageOwnAffairsIneligible,
  previous: urls.manageOwnAffairsAuthority,
};

module.exports = registerController(config.name, config);
