const {
    urls,
    validation,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.aidsAdaptations,
    previous: urls.aidsAdaptationsQuestion,
    next: urls.aidsAdaptationsAdded,
    validation: [
      {
        name: "aids-adaptations-2",
        type: validation.textInput,
        options: {
          minLength: 1,
          maxLength: 200,
        },
        errors: {
          required: 'Enter the name of your adaptation, equipment or aid',
          maxLength: "Enter the name of your adaptation, equipment or aid in 200 characters or less",
        },
      },
      {
        name: "aids-adaptations-difficulty-2",
        type: validation.radios,
        errors: {
          required:
            "Select yes if you find this adaptation, equipment or aid difficult to use",
        },
      },
    ],
  };

  module.exports = registerController(config.name, config);
