const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.manageOwnAffairsAuthority,
  previous: urls.manageOwnAffairs,
  next: [
    {
      page: urls.applyingSomeoneElse,
      condition: {
        field: urls.manageOwnAffairsAuthority,
        value: 'authority',
        match: match.value,
      },
    },
    {
      page: urls.manageOwnAffairsSomeoneElse,
      condition: {
        field: urls.manageOwnAffairsAuthority,
        value: 'someone-else',
        match: match.value,
      },
    },
    {
      page: urls.manageOwnAffairsIneligible,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if someone has authority over the benefits or financial affairs of the person you are helping to apply",
    },
  },
};

module.exports = registerController(config.name, config);
