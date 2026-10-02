const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.hospitalFunding,
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
      page: urls.hospitalAddress,
    },
  ],
  next: [
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
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if your treatment is being provided by the NHS",
    },
  },
};

module.exports = registerController(config.name, config);
