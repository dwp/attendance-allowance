const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.manageOwnAffairsSomeoneElse,
  previous: urls.manageOwnAffairsAuthority,
};

module.exports = registerController(config.name, config);
