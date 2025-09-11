const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.bestDescribe,
  previous: urls.applyingSomeoneElse,
  next: [
    {
      page: urls.helpingSomeoneIntro,
      condition: {
        value: 'SPECIAL_RULES',
        match: match.session,
      },
    },
    {
      page: urls.manageOwnAffairs,
      condition: {
        field: urls.bestDescribe,
        value: 'friend',
        match: match.value,
      },
    },
    {
      page: urls.manageOwnAffairs,
      condition: {
        field: urls.bestDescribe,
        value: 'charity',
        match: match.value,
      },
    },
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.bestDescribe,
        value: 'appointed',
        match: match.value,
      },
    },
    {
      page: urls.becomingAnAppointee,
      condition: {
        field: urls.bestDescribe,
        value: 'appointee',
        match: match.value,
      },
    },
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.bestDescribe,
        value: 'powerOfAttorney',
        match: match.value,
      },
    },
    {
      page: urls.personClaimingIneligible,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select the option that best describes you',
    },
  },
};

module.exports = registerController(config.name, config);
