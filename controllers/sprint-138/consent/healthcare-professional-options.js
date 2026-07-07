const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.healthcareProfessionalOptions,
  previous: urls.gpDetails,
  next: [
    {
      page: urls.checkAnswersDetails,
      condition: {
        field: urls.healthcareProfessionalOptions,
        value: 'i-do-not-want-to',
        match: match.value,
      },
    },
    {
      page: urls.healthcareProfessionalDetails,
    },
  ],
  validation: [
    {
      name: "other-healthcare-professional-who",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required:
          "Enter their profession or job title",
        maxLength:
          "Enter their profession or job title in 50 characters or less",
      },
      condition: {
        field: "healthcare-professional-options",
        value: "other-healthcare-professional",
      },
    },
    {
      name: "healthcare-professional-options",
      type: validation.radios,
      errors: {
        required: "Select who you want to add contact details for",
      },
    },
  ],
}

module.exports = registerController(config.name, config);
