const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeFundingWho,
  previous: urls.careHomeFunding,
  next: [
    {
      page: urls.careHomeFundingTrusts,
      condition: {
        field: urls.careHomeFundingWho,
        value: "health-social-care-trust",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospitalOvernight,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
    },
  ],
  validation: [
    {
      name: "other-organisation-who",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter who you get funding from",
        maxLength:
          "Enter who you get funding from in 200 characters or less",
      },
      condition: {
        field: "care-home-funding-who",
        value: "other-organisation",
      },
    },
    {
      name: "care-home-funding-who",
      type: validation.radios,
      errors: {
        required: "Select who you get funding from",
      },
    },
  ],
}

module.exports = registerController(config.name, config);
