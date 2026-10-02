const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeAddress,
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
      page: urls.careHomeFunding,
    },
  ],
  validation: [
    {
      name: "care-home-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 150,
      },
      errors: {
        required: "Enter the name of the care or nursing home",
        maxLength:
          "Enter the name of the care or nursing home in 150 characters or less",
      },
    },
    {
      name: "care-home-town",
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
      name: "care-home-postcode",
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
