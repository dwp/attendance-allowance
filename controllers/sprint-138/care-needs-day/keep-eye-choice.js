const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.keepEyeChoice,
  previous: urls.keepEyeIntroduction,
  next: [
    {
      page: urls.keepEyeWhy,
      condition: {
        field: urls.keepEyeChoice,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDay,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
