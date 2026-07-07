const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.illnessDisabilityAdded,
  next: [
    {
      page: urls.illnessDisability,
      condition: {
        field: urls.illnessDisabilityAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.trea,
      condition: {
        field: urls.specialRulesDeclaration,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.renalDialysis,
      condition: {
        field: urls.illnessDisability,
        value: [
          "Kidney disease or disorder",
          "Renal failure - acute",
          "Acute kidney disease (AKD)",
          "Chronic kidney failure / renal failure",
          "Kidney transplantation / renal",
          "Transplant rejection - kidney / renal",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.treatmentSurgery,
      condition: {
        field: urls.illnessDisability,
        value: [
          "Kidney disease or disorder",
          "Renal failure - acute",
          "Acute kidney disease (AKD)",
          "Chronic kidney failure / renal failure",
          "Kidney transplantation / renal",
          "Transplant rejection - kidney / renal",
        ],
        match: match.none,
      },
    },
  ],
  previous: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you have another health condition or disability",
    },
  },
};

module.exports = registerController(config.name, config);
