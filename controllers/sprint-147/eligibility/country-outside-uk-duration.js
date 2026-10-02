const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.countryOutsideUKDuration,
  previous: [
    {
      page: urls.homeAddressSelect,
      condition: {
        field: urls.residenceCountry,
        value: 'scotland',
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
      page: urls.previousClaimPadp,
      condition: {
        field: urls.previousResidenceScotland,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.previousResidenceScotland,
    },
  ],
  next: [
    {
      page: urls.countryOutsideUKDurationInelgible,
      condition: {
        field: urls.countryOutsideUKDuration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.countryOutsideUKBenefits,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you have been outside the UK more than 12 months in the last 3 years",
    },
  },
};

module.exports = registerController(config.name, config);
