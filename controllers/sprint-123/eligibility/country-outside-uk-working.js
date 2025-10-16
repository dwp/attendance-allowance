const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.countryOutsideUKWorking,
  previous: urls.countryOutsideUKBenefits,
  next: urls.nationalInsurance,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you, your wife, husband or civil partner are working in or paying insurance to an EEA state or Switzerland",
    },
  },
};

module.exports = registerController(config.name, config);
