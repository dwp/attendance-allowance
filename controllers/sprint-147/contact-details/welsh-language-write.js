const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.welshLanguageWrite,
  previous: urls.welshLanguageSpeak,
  next: urls.alternativeFormats,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select what language you want us to write to you in",
    },
  },
};

module.exports = registerController(config.name, config);
