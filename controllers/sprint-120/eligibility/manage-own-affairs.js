const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.manageOwnAffairs,
  previous: [
    {
      page: urls.becomingAnAppointee,
      condition: {
        field: urls.bestDescribe,
        value: 'appointee',
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],
  next: [
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.bestDescribe,
        value: 'appointee',
        match: match.value,
      },
    },
    {
      page: urls.beforeYouStart,
      condition: {
        field: urls.manageOwnAffairs,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.manageOwnAffairsAuthority,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if the person you are helping has the mental capacity to manage their own affairs',
    },
  },
};

module.exports = registerController(config.name, config);
