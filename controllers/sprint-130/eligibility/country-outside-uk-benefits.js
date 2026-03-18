const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.countryOutsideUKBenefits,
  previous: urls.countryOutsideUKDuration,
  next: urls.countryOutsideUKWorking,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you, your wife, husband or civil partner are getting any pension or benefits from an EEA state or Switzerland",
    },
  },
};

module.exports = registerController(config.name, config);
