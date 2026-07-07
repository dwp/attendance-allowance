const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsEmailLink,
  previous: urls.supportingDocumentsOptions,
  next: [
    {
      page: urls.supportingDocumentsEmailAddress,
      condition: {
        field: urls.supportingDocumentsEmailLink,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsUploadLater,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if we can email you a link to upload your supporting documents',
    },
  },
};

module.exports = registerController(config.name, config);
