const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisWhen,
  previous: urls.renalDialysisWhere,
  next: urls.renalDialysisFrequency,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select when you have your dialysis',
    },
  },
};

module.exports = registerController(config.name, config);
