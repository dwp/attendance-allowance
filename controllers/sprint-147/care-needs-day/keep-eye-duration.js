const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.keepEyeDuration,
  previous: urls.keepEyeWhy,
  next: urls.checkAnswersDay,
  validation: [{
    type: validation.radios,
    name: 'keep-eye-duration-left-alone',
    errors: {
      required: 'You must select how long.',
    },
  },
  {
    type: validation.radios,
    name: 'keep-eye-duration-need-someone',
    errors: {
      required: 'You must select how many days.',
    },
  },
  ],
};

module.exports = registerController(config.name, config);
