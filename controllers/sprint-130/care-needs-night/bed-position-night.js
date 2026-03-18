const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.bedPositionNight,
  previous: [
    {
      page: urls.turningOverNightFrequency,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-turning-over"],
        match: match.anyOne,
      },
    },
    {
      page: urls.nightDifficulties,
    },
  ],
  next: [
    {
      page: urls.bedPositionNightFrequency,
      condition: {
        field: urls.bedPositionNight,
        value: ["bed-covers", "propped-up", "something-else-bed"],
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
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: [
    {
      name: "something-else-explain-bed-night",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what difficulty you have getting settled in bed",
        maxLength:
          "Enter what difficulty you have getting settled in bed in 200 characters or less",
      },
      condition: {
        field: "bed-position-night",
        value: "something-else-bed",
      },
    },
    {
      name: "bed-position-night",
      type: validation.checkboxes,
      errors: {
        required:
          "Select what difficulty you have getting settled in bed during the night",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
