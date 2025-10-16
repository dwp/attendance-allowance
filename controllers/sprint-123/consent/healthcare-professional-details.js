const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.healthcareProfessionalDetails,
  previous: urls.healthcareProfessionalOptions,
  next: urls.checkAnswersDetails,
  validation: [
    {
      name: "healthcare-professional-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter their name",
        maxLength:
          "Enter their name in 50 characters or less",
      },
    },

    {
      name: "healthcare-professional-telephone",
      type: validation.textInput,
      options: {
        minLength: 5,
        maxLength: 15,
      },
      errors: {
        required: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
        minLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
        maxLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
