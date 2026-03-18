const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsDifficulty,
  previous: [
    {
      page: urls.aidsAdaptations,
    },
  ],
  next: [
    {
      page: urls.aidsAdaptationsAdded,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if you find this adaptation, equipment or aid difficult to use",
    },
  },
};

module.exports = registerController(config.name, config);
