const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormType,
  previous: urls.specialRulesFormUploadOption,
  next: [
    {
      page: urls.specialRulesFormDigital,
      condition: {
        field: urls.specialRulesFormType,
        value: "digital",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesFormPaper,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select if your doctor, consultant or specialist nurse has completed an SR1 form',
    },
  },
};

module.exports = registerController(config.name, config);
