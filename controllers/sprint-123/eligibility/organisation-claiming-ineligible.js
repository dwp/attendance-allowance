const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.organisationClaimingIneligible,
  previous: urls.applyingSomeoneElse,
};

module.exports = registerController(config.name, config);
