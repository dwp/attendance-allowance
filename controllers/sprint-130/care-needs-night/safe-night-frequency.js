const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.safeNightFrequency,
  previous: [
    {
      page: urls.safeDayLength,
      condition: {
        page: urls.safeDayNight,
        field: 'safe-day-night',
        value: ['day'],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayWhy,
    },
  ],
  next: [
    {
      page: urls.safeNightLength,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select how many times someone is awake in the night to keep you safe",
    },
  },

};

module.exports = registerController(config.name, config);
