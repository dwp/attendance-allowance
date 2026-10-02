const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeAddressPostcode,
  previous: urls.representativeAddress,
  next: urls.representativeAddressSelect,
  validation: {
    type: validation.textInput,
    /* options: {
      regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
    }, */
    errors: {
      required: "Enter a postcode",
      /* regEx: 'Enter a postcode in the correct format', */
    },
  },
};

module.exports = registerController(config.name, config);
