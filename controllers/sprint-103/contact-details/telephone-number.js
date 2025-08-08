const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.telephoneNumber,
  previous: urls.checkAnswersDetails,
  next: urls.addContactDetails,
  validation: [
    {
      name: "main-contact-number",
      type: validation.textInput,
      /* options: {
        minLength: 5,
        maxLength: 15,
      }, */
      errors: {
        required: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
       /* minLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192',
        maxLength: 'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192', */
      },
    },
  ],
};

module.exports = registerController(config.name, config);
