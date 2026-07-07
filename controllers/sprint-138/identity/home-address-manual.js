const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.homeAddressManual,
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
  previous: urls.homeAddressSelect,
  validation: [
    {
      name: 'home-address-manual-line-one',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: 'Enter the first line of your address',
        maxLength: 'Enter the first line of your address in 50 characters or less',
      },
    },
    {
      name: 'home-address-manual-town',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: 'Enter a town or city',
        maxLength: 'Enter a town or city in 50 characters or less',
      },
    },
    {
      name: 'home-address-manual-postcode',
      type: validation.textInput,
      options: {
        regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
      },
      errors: {
        required: "Enter a postcode",
        regEx: 'Enter a postcode in the correct format',
      },
    },

  ],
};

module.exports = registerController(config.name, config);
