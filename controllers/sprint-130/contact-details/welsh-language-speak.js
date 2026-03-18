const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.welshLanguageSpeak,
  previous: urls.preferenceContact,
  previous: [
    {
      page: urls.addContactDetails,
      condition: {
        field: urls.addContactDetails,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.preferenceContact,
    },
  ],
  next: urls.welshLanguageWrite,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select what language you want us to speak to you in",
    },
  },
};

module.exports = registerController(config.name, config);
