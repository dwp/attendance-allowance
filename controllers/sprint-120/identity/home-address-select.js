const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressSelect,
  previous: urls.homeAddressPostcode,
  next: [
    {
      page: urls.countryOutsideUKDuration,
      condition: {
        field: urls.residenceCountry,
        value: 'scotland',
        match: match.value,
      },
    },
    {
      page: urls.telephoneNumber,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'individual',
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
    },
  ],
  validation: {
    type: validation.select,
    errors: {
      required: "Select your home address",
    },
  },
};

module.exports = registerController(config.name, config);
