const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.bedPositionNightFrequency,
  previous: urls.bedPositionNight,
  next: [
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
      name: "bed-position-typically-how-long",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how long it takes to get settled in bed",
        maxLength:
          "Enter how long it takes to get settled in bed in 200 characters or less",
      },
      condition: {
        field: "night-frequency-bed-position",
        value: "once-a-night",
      },
    },
    {
      type: validation.radios,
      name: "night-frequency-bed-position",
      errors: {
        required:
          "Select how many times a night you have difficulty getting settled",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
