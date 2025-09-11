const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');
const beforeYouStart = require('./before-you-start');

const config = {
  name: urls.helpingSomeoneIntro,
  previous: [
    {
      page: urls.helperName,
      condition: {
        field: urls.bestDescribe,
        value: "friend",
        match: match.value,
      },
    },
    {
      page: urls.helperName,
      condition: {
        field: urls.bestDescribe,
        value: "charity",
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],

  next: urls.birthDate,
};

module.exports = registerController(config.name, config);
