const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.nationality,
  previous: urls.otherBenefits,
  next: [
    {
      page: urls.nationalityOther,
      condition: {
        field: urls.nationality,
        value: "other",
        match: match.value,
      },
    },
    {
      page: urls.residenceCountry,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you are British, Irish or another nationality",
    },
  },
};

module.exports = registerController(config.name, config);
