const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.sercoCareHomeHospital,
  previous: urls.careHomeHospital,
  next: urls.illnessDisability,
  validation: {
    type: validation.radios,
    errors: {
      required: 'You must select an option.',
    },
  },
};

module.exports = registerController(config.name, config);
