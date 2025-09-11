const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayWhy,
  previous: [
    {
      page: urls.safeDayNight,
    },
  ],
  next: [
    {
      page: urls.safeDayLength,
      condition: {
        page: urls.safeDayNight,
        field: "safe-day-night",
        value: ["day"],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeNightFrequency,
      condition: {
        page: urls.safeDayNight,
        field: "safe-day-night",
        value: ["night"],
        match: match.anyOne,
      },
    },
  ],
  validation: [
    {
      name: "safe-day-why-something-else",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter why you need someone to help you stay safe at home",
        maxLength:
          "Enter why you need someone to help you stay safe at home in 200 characters or less",
      },
      condition: {
        field: "safe-day-why",
        value: "something-else",
      },
    },
    {
      name: "safe-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select why you need someone to help you stay safe at home",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
