const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.nightDifficulties,
  previous: urls.checkAnswersDay,
  next: [
    {
      page: urls.checkAnswersNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-none"],
        match: match.anyOne,
      },
    },
    {
      page: urls.turningOverNightFrequency,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-turning-over"],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-getting-settled"],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-cleaning-yourself"],
        match: match.anyOne,
      },
    },
    {
      page: urls.medicationTreatmentNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-medication"],
        match: match.anyOne,
      },
    },
  ],
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select what you have difficulty or need help with during the night",
    },
  },
};

module.exports = registerController(config.name, config);
