const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.personClaimingIneligible,
  previous: urls.bestDescribe,
};

module.exports = registerController(config.name, config);
