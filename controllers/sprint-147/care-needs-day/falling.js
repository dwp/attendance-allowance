const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.falling,
  previous: urls.fallingWhen,
  next: urls.fallingHelp,
  validation: [
    {
      name: "frequency-falling",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 4,
      },
      errors: {
        required: "Enter the approximate number of times you fell down in the last 12 months",
        maxLength: "Enter the approximate number of times you fell down in 4 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
