const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormUploadOption,
  previous: urls.specialRulesFormSent,
  next: [
    {
      page: urls.specialRulesFormGuidance,
      condition: {
        field: urls.specialRulesFormUploadOption,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if you want to upload your SR1 form',
    },
  },
};

module.exports = registerController(config.name, config);
