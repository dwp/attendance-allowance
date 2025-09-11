const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsReason,
  previous: [
    {
      page: urls.aidsAdaptationsQuestion,
    },
  ],
  next: [
    {
      page: urls.checkAnswersStartDate,
    },
  ],
  validation: [
    {
      name: "aids-adaptations-reason-other",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter why you do not use any adaptations, equipment or aids",
        maxLength:
          "Enter why you do not use any adaptations, equipment or aids in 200 characters or less",
      },
      condition: {
        field: "aids-adaptations-reason",
        value: "other",
      },
    },
    {
      name: "aids-adaptations-reason",
      type: validation.radios,
      errors: {
        required:
          "Select why you do not use any adaptations, equipment or aids",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
