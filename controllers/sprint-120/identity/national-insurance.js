const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.nationalInsurance,
  previous: urls.countryOutsideUKWorking,
  next: [
    {
      page: urls.fullName,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.homeAddressPostcode,
    },
  ],
  validation: {
    type: validation.textInput,
    options: {
      regEx: "^[a-zA-Z]\\s*[a-zA-Z](?:\\s*\\d\\s*){6}\\s*[a-dA-D]?s*$",
    },
    errors: {
      required: "Enter your National Insurance number in the correct format",
      regEx: "Enter your National Insurance number in the correct format",
    },
  },
};

module.exports = registerController(config.name, config);
