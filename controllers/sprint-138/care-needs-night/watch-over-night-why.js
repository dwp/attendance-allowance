const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverNightWhy,
  previous: urls.watchOverNight,
  next: urls.watchOverNightFrequency,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
