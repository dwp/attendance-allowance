const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospital,
  previous: [
    {
      page: urls.specialRulesFormCompleted,
      condition: {
        field: urls.specialRulesDeclaration,
        value: 'yes',
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
    },
  ],
  next: [
    {
      page: urls.hospitalAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.careHomeAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.hospiceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.similarPlaceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "similar-place",
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
  validation: {
    type: validation.radios,
    errors: {
      required: "Select if you are staying in any of these places at the moment",
    },
  },
};

module.exports = registerController(config.name, config);
