const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.surgeryMedicalCentre,
  previous: urls.consent,
  next: [
    {
      page: urls.checkAnswersDetails,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.evidence,
    },
  ],
  validation: [
    {
      name: "surgery-medical-centre-name",
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
      name: "surgery-medical-centre-postcode",
      type: validation.textInput,
      options: {
        regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
      },
      errors: {
        required: "Enter a postcode",
        regEx: 'Enter a postcode in the correct format',
      },
    },
  ],
};

module.exports = registerController(config.name, config);
