const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisWhere,
  previous: urls.renalDialysis,
  next: [
    {
      page: urls.renalDialysisWhen,
      condition: {
        field: urls.renalDialysisWhere,
        value: 'home',
        match: match.value,
      },
    },
    {
      page: urls.treatmentSurgery,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select where you have your dialysis',
    },
  },
};

module.exports = registerController(config.name, config);
