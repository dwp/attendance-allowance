const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.illnessDisabilityDateManual,
  next: urls.illnessDisabilityAdded,
  previous: urls.illnessDisabilityManual,
  validation: [
    {
      name: "illness-start-date",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required:
          "Enter the approximate date when your condition or disability started",
        maxLength: "Approximate date must be 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
