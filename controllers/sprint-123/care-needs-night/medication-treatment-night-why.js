const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNightWhy,
  previous: [
    {
      page: urls.medicationTreatmentNight,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentNightFrequency,
    },
  ],
  validation: [
    {
      name: 'something-else-medication-treatment-night-why-explain',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter how you manage taking medication or getting treatment during the night',
        maxLength: 'Enter how you manage taking medication or getting treatment during the night in 200 characters or less',
      },
      condition: {
        field: 'medication-treatment-night-why',
        value: 'medication-treatment-night-why-something-else',
      },
    },
    {
      name: 'medication-treatment-night-why',
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage taking medication or getting treatment during the night",
      },
    }],
};

module.exports = registerController(config.name, config);
