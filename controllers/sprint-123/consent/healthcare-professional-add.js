const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.healthcareProfessionalAdd,
  previous: urls.consent,
  next: [
    {
      page: urls.healthcareProfessionalOptions,
      condition: {
        field: urls.healthcareProfessionalAdd,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDetails,
    },
  ],
  validation: [
    {
      name: "healthcare-professional-add",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you want to add contact details for another healthcare professional",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
