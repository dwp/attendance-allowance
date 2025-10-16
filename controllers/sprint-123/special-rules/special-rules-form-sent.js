const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormSent,
  previous: urls.specialRulesFormCompleted,
  next: [
    {
      page: urls.careHomeHospital,
      condition: {
        field: urls.specialRulesFormSent,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesFormUploadOption,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if your doctor, consultant or specialist nurse has sent your SR1 form to DWP',
    },
  },
};

module.exports = registerController(config.name, config);
