const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsOptions,
  previous: urls.supportingDocumentsIntro,
  next: [
    {
      page: urls.supportingDocumentsGuidance,
      condition: {
        field: urls.supportingDocumentsOptions,
        value: "upload-now",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsEmailAddress,
      condition: {
        field: urls.supportingDocumentsOptions,
        value: "upload-later",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsPost,
      condition: {
        field: urls.supportingDocumentsOptions,
        value: "post",
        match: match.value,
      },
    },
    {
      page: urls.evidence,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select how you want to give us your supporting documents',
    },
  },
};

module.exports = registerController(config.name, config);
