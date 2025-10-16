const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.keepEyeWhy,
  previous: urls.keepEyeChoice,
  next: urls.keepEyeDuration,
  validation: {
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
