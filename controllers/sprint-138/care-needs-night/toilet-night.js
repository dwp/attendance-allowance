const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.toiletNight,
  previous: [
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ["nighttime-getting-settled"],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
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
      page: urls.toiletNightWhy,
      condition: {
        field: urls.toiletNight,
        value: [
          "toilet-getting-to",
          "toilet-urgent",
          "toilet-getting-on-off",
          "toilet-cleaning-myself",
          "toilet-emptying",
          "managing-incontinence",
          "toilet-something-else",
        ],
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
      name: "something-else-explain-toilet",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what difficulty you have with your toilet needs during the night",
        maxLength:
          "Enter what difficulty you have with your toilet needs during the night in 200 characters or less",
      },
      condition: {
        field: "toilet-night",
        value: "toilet-night-something-else",
      },
    },
    {
      name: "toilet-night",
      type: validation.checkboxes,
      errors: {
        required: "Select what difficulty you have with your toilet needs during the night",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
