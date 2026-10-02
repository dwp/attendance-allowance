const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsAdded,
  next: [
    {
      page: urls.aidsAdaptations,
      condition: {
        field: urls.aidsAdaptationsAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersStartDate,
    },
  ],
  previous: urls.aidsAdaptations,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you use any other adaptations, equipment or aids",
    },
  },
};

module.exports = registerController(config.name, config);
