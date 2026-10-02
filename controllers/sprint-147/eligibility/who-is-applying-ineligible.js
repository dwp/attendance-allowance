const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.whoIsApplyingIneligible,
  previous: [
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'powerOfAttorney',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'appointed',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'appointee',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'cab',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
      condition: {
        field: urls.bestDescribe,
        value: 'curator',
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
  ],
};

module.exports = registerController(config.name, config);
