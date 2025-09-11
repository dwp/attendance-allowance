const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeAddressSelect,
  previous: urls.representativeAddressPostcode,
  next: urls.representativeTelephoneNumber,
  validation: {
    type: validation.select,
    errors: {
      required: "Select your home address",
    },
  },
};

module.exports = registerController(config.name, config);
