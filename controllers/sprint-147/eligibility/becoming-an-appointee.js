const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.becomingAnAppointee,
  previous: urls.bestDescribe,
  next: urls.manageOwnAffairs,
};

module.exports = registerController(config.name, config);
