const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.safeDayLength,
  previous: urls.safeDayWhy,
  next: [
    {
      page: urls.safeNightFrequency,
      condition: {
        page: urls.safeDayNight,
        field: "safe-day-night",
        value: ["night"],
        match: match.anyOne,
      },
    },
    {
      page: urls.difficultiesStartDate,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select how long you can be safely left alone during the day",
    },
  },
};

module.exports = registerController(config.name, config);
