const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.difficultiesStartDate,
  previous: [
    {
      page: urls.safeNightLength,
      condition: {
        field: urls.safeDayNight,
        value: ["night"],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayLength,
      condition: {
        field: urls.safeDayNight,
        value: ["day"],
        match: match.anyOne,
      },
    },
    {
      page: urls.safeDayNight,
    },
  ],
  next: urls.careNeedsCause,
  validation: [
    {
      name: "start-date",
      type: validation.radios,
      errors: {
        required:
          "Select how long you have had these difficulties",
      },
    },
    {
      name: "difficulties-start-date",
      type: validation.dateInput,
      condition: {
        field: "start-date",
        value: "less-than-six-months",
      },
      errors: {
        required: 'Enter a date',
        requiredDay: 'Date must include a day',
        requiredMonth: 'Date must include a month',
        requiredYear: 'Date must include a year',
        validDay: 'Enter a real date',
        validMonth: 'Enter a real date',
        validYear: 'Enter a real date',
        invalidDate: 'Enter a real date',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
