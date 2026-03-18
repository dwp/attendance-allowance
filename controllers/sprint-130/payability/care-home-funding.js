const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeFunding,
  previous: [
    {
      page: urls.careHomeHospitalAdmissionDate,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.careHomeAddress,
    },
  ],
  next: [
    {
      page: urls.careHomeFundingWho,
      condition: {
        field: urls.careHomeFunding,
        value: "no-get-funding",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospitalOvernight,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you pay for the full cost of your care or nursing home",
    },
  },
};

module.exports = registerController(config.name, config);
