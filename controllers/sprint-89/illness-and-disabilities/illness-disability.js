const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.illnessDisability,
  next: urls.illnessDisabilityDate,
  previous: urls.careHomeHospital,
      
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 200,
    },
    errors: {
      required: 'Enter the name of your health condition or disability',
      maxLength: "Enter the name of your health condition or disability in 200 characters or less",
    },
  },
};

module.exports = registerController(config.name, config);
