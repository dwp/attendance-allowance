const {
  urls,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.limitReached,
  previous: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.howToClaim,
    },
  ],
};

module.exports = registerController(config.name, config);
