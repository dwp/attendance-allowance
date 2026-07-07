const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.renalDialysisHelp,
  previous: urls.renalDialysisFrequency,
  next: urls.treatmentSurgery,
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if you require help from someone else during dialysis',
    },
  },
};

module.exports = registerController(config.name, config);
