const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.illnessDisabilityAdded,
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
      page: urls.specialRulesFormCompleted,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
  ],
  validation: [
    {
      name: 'illness-disability',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter the name of your health condition or disability',
        maxLength: 'Enter the name of your health condition or disability in 200 characters or less',
      },
    },
    {
      name: "illness-start-date",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required:
          'Enter the approximate date this health condition or disability started',
        maxLength: 'Enter the approximate date this health condition or disability in 50 characters or less',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
