const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.telephoneNumberOther,
  previous: urls.addContactDetails,
  next: urls.preferenceContact,
  validation: [
    {
      name: "someone-else-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 100,
      },
      errors: {
        required: "Enter the full name of the other contact",
        maxLength:
          "Enter the full name of the other contact in 100 characters or less",
      },
    },
    {
      name: 'someone-else-number',
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
