const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.medicationTreatmentNight,
  previous: [
    {
      page: urls.toiletNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-cleaning-yourself'],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedPositionNight,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-getting-settled'],
        match: match.anyOne,
      },
    },
    {
      page: urls.turningOverNightFrequency,
      condition: {
        field: urls.nightDifficulties,
        value: ['nighttime-turning-over'],
        match: match.anyOne,
      },
    },
    {
      page: urls.nightDifficulties,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentNightWhy,
      condition: {
        field: urls.medicationTreatmentNight,
        value: [
          'having-oxygen-therapy',
          'cpap-mask',
          'applying-cream',
          'taking-medication',
          'something-else-medication',
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersNight,
    },
  ],
  validation: [
    {
      name: "something-else-explain-medication-night",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what medication or treatment you have difficulty taking during the night",
        maxLength:
          "Enter what medication or treatment you have difficulty taking during the night in 200 characters or less",
      },
      condition: {
        field: "medication-treatment-night",
        value: "something-else-medication",
      },
    },
    {
      name: "medication-treatment-night",
      type: validation.checkboxes,
      errors: {
        required: "Select what medication or treatment you have difficulty taking during the night",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
