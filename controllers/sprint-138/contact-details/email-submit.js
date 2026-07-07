const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.emailSubmit,
  previous: urls.alternativeFormats,
  next: [
    {
      page: urls.emailConfirm,
      condition: {
        field: urls.emailSubmit,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersContactDetails,
    },
  ],
  validation: [
    {
      name: "email-submit",
      type: validation.radios,
      errors: {
        required:
          "Select yes if we should send you an email to confirm you have submitted an application",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
