const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.surgeryMedicalCentreOutsideUk,
  previous: urls.surgeryMedicalCentre,
  next: urls.evidence,
  validation: [
    {
      name: "surgery-medical-centre-outside-uk-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 150,
      },
      errors: {
        required: "Enter the name of your GP surgery or medical centre",
        maxLength:
          "Enter the name of your GP surgery or medical centre in 150 characters or less",
      },
    },

    {
      name: "surgery-medical-centre-outside-uk-town-city",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter a town or city",
        maxLength:
          "Enter a town or city in 50 characters or less",
      },
    },

    {
      name: "surgery-medical-centre-outside-uk-country",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter a country",
        maxLength:
          "Enter a country in 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
