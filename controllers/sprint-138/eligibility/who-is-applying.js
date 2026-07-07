const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whoIsApplying,
  previous: urls.claimType,
  next: [
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.applyingSomeoneElse,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select who is applying',
    },
  },
};

module.exports = registerController(config.name, config);
