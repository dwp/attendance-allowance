const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.homeAddressPostcode,
  previous: [
    {
      page: urls.fullName,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.nationalInsurance,
    },
  ],
  next: urls.homeAddressSelect,
  validation: {
    type: validation.textInput,
    options: {
      regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
    },
    errors: {
      required: "Enter a postcode",
      regEx: 'Enter a postcode in the correct format',
    },
  },
};

module.exports = registerController(config.name, config);
