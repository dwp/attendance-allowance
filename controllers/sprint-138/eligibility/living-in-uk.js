const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.livingInUk,
  previous: [
    {
      page: urls.previousClaimPadp,
      condition: {
        field: urls.residenceCountry,
        value: "scotland",
        match: match.value,
      },
    },
    {
      page: urls.previousClaimPadp,
      condition: {
        field: urls.previousResidenceScotland,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.previousResidenceScotland,
    },
  ],
  next: urls.countryOutsideUKDuration,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you were living in the UK before 1 January 2021",
    },
  },
};

module.exports = registerController(config.name, config);
