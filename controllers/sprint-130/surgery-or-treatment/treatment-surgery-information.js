const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.treatmentSurgeryInformation,
  previous: urls.treatmentSurgery,
  next: urls.consent,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 200,
    },
    errors: {
      required: 'Enter what treatment or surgery you are having and any dates',
      maxLength: "Enter what treatment or surgery you are having and any dates in 200 characters or less",
    },
  },
};

module.exports = registerController(config.name, config);
