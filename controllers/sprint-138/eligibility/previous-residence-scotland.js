const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.previousResidenceScotland,
  previous: urls.residenceCountry,
  next: [
    {
      page: urls.previousClaimPadp,
      condition: {
        field: urls.previousResidenceScotland,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.livingInUk,
      condition: {
        field: urls.nationalityOther,
        value: [
          "Austrian",
          "Belgian",
          "Bulgarian",
          "Croatian",
          "Cypriot",
          "Czech",
          "Danish",
          "Dutch",
          "Estonian",
          "Finnish",
          "French",
          "German",
          "Greek",
          "Hungarian",
          "Icelandic",
          "Irish",
          "Italian",
          "Latvian",
          "Liechtenstein citizen",
          "Lithuanian",
          "Luxembourger",
          "Maltese",
          "Norwegian",
          "Polish",
          "Portuguese",
          "Romanian",
          "Slovak",
          "Slovenian",
          "Spanish",
          "Swedish",
          "Swiss",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.countryOutsideUKDuration,
    },

  ],
  validation: [
    {
      name: "previous-residence-scotland",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you have moved from Scotland since 21 October 2024",
      },
    },
    {
      name: "moved-from-scotland-date",
      type: validation.dateInput,
      condition: {
        field: "previous-residence-scotland",
        value: "yes",
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
        beforeDate: 'Enter a date that is later than 21 October 2024',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
