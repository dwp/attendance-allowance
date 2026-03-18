const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverNight,
  previous: urls.watchOverYouIntro,
  next: [
    {
      page: urls.watchOverNightWhy,
      condition: {
        field: urls.watchOverNight,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: {
    type: validation.radios,
  },
};

module.exports = registerController(config.name, config);
