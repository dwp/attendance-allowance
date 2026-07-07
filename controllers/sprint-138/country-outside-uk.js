const {
  urls,
  validation,
  match,
  registerController,
} = require('../../utils/controller');
const residenceCountry = require('./residence-country');

const config = {
  name: urls.countryOutsideUK,
  previous: urls.residenceCountry,
  next: [
    {
      page: urls.countryOutsideUKDuration,
      condition: {
        field: urls.countryOutsideUK,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.nationalInsurance,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
