const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisFrequency,
  previous: urls.renalDialysisWhen,
  next: urls.renalDialysisHelp,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select how many days a week you have dialysis',
    },
  },
};

module.exports = registerController(config.name, config);
