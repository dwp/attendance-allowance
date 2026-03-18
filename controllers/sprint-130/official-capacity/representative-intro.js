const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeIntro,
  previous: urls.representativeName,
  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
