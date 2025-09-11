const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.cleaningSoiledNightFrequency,
  previous: urls.cleaningSoiledNight,
  next: [
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-medication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayNight,
    },
  ],
  validation: [
    {
      type: validation.radios,
      name: 'night-frequency-3-wash',
      errors: {
        required: 'You must select how many times.',
      },
    },
    {
      type: validation.textInput,
      name: 'night-length-3-wash',
      errors: {
        required: 'You must tell us how long these occasions take.',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
