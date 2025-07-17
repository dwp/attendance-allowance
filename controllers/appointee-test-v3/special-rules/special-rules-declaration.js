const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.specialRulesDeclaration,
  previous: [
    {
      page: urls.telephoneNumber,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'individual',
        match: match.value,
      },
    },
    {
      page: urls.homeAddressSelect,
    },
  ],
  next:  urls.careHomeHospital,
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select yes if your doctor, consultant or specialist nurse has said you might have less than 12 months to live due to your condition",
    },
  },
};

module.exports = registerController(config.name, config);
