const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.helperName,
  previous: urls.fullName,
  next: urls.helpingSomeoneIntro,
  validation: [
    {
      name: "helper-first-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your first name",
        maxLength: "First name must be 50 characters or less",
      },
    },
    {
      name: "helper-last-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your last name",
        maxLength: "Last name must be 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
