const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.safeNightLength,
  previous: [
    {
      page: urls.safeNightFrequency,
    },
  ],
  next: [
    {
      page: urls.difficultiesStartDate,
    },
  ],
  validation: [
    {
      name: 'safe-night-length',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter how long someone is awake in the night to keep you safe',
        maxLength: 'Enter how long someone is awake in the night to keep you safe in 200 characters or less',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
