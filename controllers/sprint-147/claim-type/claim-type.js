const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.claimType,
  previous: urls.howToClaim,
  next: [
    {
      page: urls.whoIsApplying,
      condition: {
        field: urls.claimType,
        value: 'new-claim',
        match: match.value,
      },
    },
    {
      page: urls.claimTypeChangeInCircumstances,
      condition: {
        field: urls.claimType,
        value: 'change-in-circumstances',
        match: match.value,
      },
    },
    {
      page: urls.claimTypeRenewal,
      condition: {
        field: urls.claimType,
        value: 'renewal',
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select what you want to do',
    },
  },
};

module.exports = registerController(config.name, config);
