const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.previousClaimPadp,
  previous: [
    {
      page: urls.residenceCountry,
      condition: {
        field: urls.residenceCountry,
        value: "scotland",
        match: match.value,
      },
    },
    {
      page: urls.previousResidenceScotland,
    },
  ],
  next: [
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
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you are getting, or have previously made a claim for, Pension Age Disability Payment",
    },
  },
};

module.exports = registerController(config.name, config);
