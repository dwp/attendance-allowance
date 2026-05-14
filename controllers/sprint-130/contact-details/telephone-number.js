const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.telephoneNumber,
  previous: [
    {
      page: urls.homeAddressSelect,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'individual',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersStartDate,
    },
  ],
  next: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'individual',
        match: match.value,
      },
    },
    {
      page: urls.addContactDetails,
    },
  ],
  validation: [
    {
      name: "main-contact-number",
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
