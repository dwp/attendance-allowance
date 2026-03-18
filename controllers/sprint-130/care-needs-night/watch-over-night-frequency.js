const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverNightFrequency,
  previous: urls.watchOverNightWhy,
  next: urls.checkAnswersNight,
  validation: [{
    type: validation.radios,
    name: 'watch-over-night-frequency',
    errors: {
      required: 'You must select how many times the other person has to be awake to watch over you.',
    },
  },
  {
    type: validation.radios,
    name: 'keep-eye-on-you-average-time',
    errors: {
      required: 'You must select how long on average the other person has to stay awake, for each occasion you need them.',
    },
  },
  {
    type: validation.radios,
    name: 'keep-eye-on-you-times-week',
    errors: {
      required: 'You must select how many times in a week you typically need someone to watch over you.',
    },
  },
  ],
};
module.exports = registerController(config.name, config);
