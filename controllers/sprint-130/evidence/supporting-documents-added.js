const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsAdded,
  previous: urls.supportingDocumentsUpload,
  next: [
    {
      page: urls.supportingDocumentsUpload,
      condition: {
        field: urls.supportingDocumentsAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.aidsAdaptationsQuestion,
    },
  ],
  validation: {
    source: urls.supportingDocumentsUpload,
    rows: urls.supportingDocumentsUploadRows,
    type: validation.upload,
    options: {
      amount: 10
    },
    errors: {
      required: "Select yes if you want to upload another file",
      amount: "Upload no more than 10 files",
    },
  },
};

module.exports = registerController(config.name, config);
