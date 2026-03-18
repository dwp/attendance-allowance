const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.gpDetails,
  previous: urls.consent,
  next: [
    {
      page: urls.healthcareProfessionalOptions,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDetails,
    },
  ],
  validation: [
    {
      name: "gp-surgery-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 150,
      },
      errors: {
        required: "Enter your GP surgery or medical centre",
        maxLength:
          "Enter your GP surgery or medical centre in 150 characters or less",
      },
    },

    {
      name: "gp-telephone",
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
