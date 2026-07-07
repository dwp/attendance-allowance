const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.watchOverYouIntro,
  previous: [
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-medication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.cleaningSoiledNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-cleaning-yourself'],
        match: match.anyOne,
      },
    },
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
  next: urls.watchOverNight,
};

module.exports = registerController(config.name, config);
