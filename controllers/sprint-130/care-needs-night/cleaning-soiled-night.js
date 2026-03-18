const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.cleaningSoiledNight,
  previous: [
    {
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-toilet'],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-position-bed'],
        match: match.anyOne,
      },
    },
    {
      page: urls.difficultiesStartDateNight,
    },
  ],
  next: [
    {
      page: urls.cleaningSoiledNightFrequency,
      condition: {
        field: urls.cleaningSoiledNight,
        value: [
          'physical',
          'prompt',
        ],
        match: match.anyOne,
      },
    },
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
  validation: {
    name: 'cleaning-soiled-night',
    type: validation.checkboxes,
  },
};

module.exports = registerController(config.name, config);
