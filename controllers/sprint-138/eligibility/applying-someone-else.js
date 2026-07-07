const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.applyingSomeoneElse,
  previous: [
    {
      page: urls.manageOwnAffairsAuthority,
      condition: {
        field: urls.manageOwnAffairs,
        value: 'no',
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
    },
  ],
  next: [
    {
      page: urls.organisationClaimingIneligible,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'corporate',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select why you are applying for someone else',
    },
  },
};

module.exports = registerController(config.name, config);
