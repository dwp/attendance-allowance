const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.turningOverNightFrequency,
  previous: urls.nightDifficulties,
  next: [
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
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: [
    {
      name: "turning-over-typically-how-long",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how long it takes to turn over or change position",
        maxLength:
          "Enter how long it takes to turn over or change position in 200 characters or less",
      },
      condition: {
        field: "night-frequency-1-bed",
        value: "once-a-night",
      },
    },
    {
      type: validation.radios,
      name: "night-frequency-1-bed",
      errors: {
        required:
          "Select how many times a night you need help to turn over or change position in bed",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
