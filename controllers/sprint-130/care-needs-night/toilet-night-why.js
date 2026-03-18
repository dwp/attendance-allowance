const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.toiletNightWhy,
  previous: urls.toiletNight,
  next: [
    {
      page: urls.toiletNightFrequency,
      condition: {
        field: urls.toiletNightWhy,
        value: [
          "lean-on-sink-radiator",
          "toilet-raised",
          "toilet-several-attempts",
          "toilet-accident",
          "toilet-safely",
          "toilet-physical-assist",
          "unable-to-manage",
          "toilet-night-why-something-else",
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
      name: "something-else-toilet-night-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage your toilet needs during the night",
        maxLength:
          "Enter how you manage your toilet needs during the night in 200 characters or less",
      },
      condition: {
        field: "toilet-night-why",
        value: "toilet-night-why-something-else",
      },
    },
    {
      name: "toilet-night-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage your toilet needs during the night",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
