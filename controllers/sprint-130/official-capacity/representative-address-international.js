const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeAddressInternational,
  next: urls.representativeTelephoneNumber,
  previous: urls.representativeAddressPostcode,
  validation: [
    {
      name: 'home-address-international-line-one',
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
      name: 'home-address-international-line-three',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: 'Enter the second line of your address',
        maxLength: 'Enter the second line of your address in 50 characters or less',
      },
    },
    {
      name: 'home-address-international-country',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: 'Enter a country',
        maxLength: 'Enter a country in 50 characters or less',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
