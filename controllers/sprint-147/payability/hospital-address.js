const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.hospitalAddress,
  previous: urls.careHomeHospital,
  next: [
    {
      page: urls.careHomeHospitalAdmissionDate,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.hospitalFunding,
    },
  ],
  validation: [
    {
      name: "hospital-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 150,
      },
      errors: {
        required: "Enter the name of the hospital",
        maxLength:
          "Enter the name of the hospital in 150 characters or less",
      },
    },
    {
      name: "hospital-town",
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
    /*
    {
      name: "hospital-postcode",
      type: validation.textInput,
      options: {
        regEx: /^([A-Za-z][A-Ha-hK-Yk-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/
      },
      errors: {
        required: "Enter a postcode",
        regEx: 'Enter a postcode in the correct format',
      },
    },
    */
  ],
};

module.exports = registerController(config.name, config);
