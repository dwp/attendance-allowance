const {
  urls,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsUpload,
  previous: urls.supportingDocumentsGuidance,
  next: urls.supportingDocumentsAdded,
  validation: {
    source: urls.supportingDocumentsUpload,
    rows: urls.supportingDocumentsUploadRows,
    type: validation.upload,
    options: {
      minLength: 1,
      maxLength: 255,
      fileSize: 10485760,
      fileType: ['jpg','jpeg', 'png', 'pdf'],
      dupe: true,
    },
    errors: {
      required: 'Select a file',
      maxLength: "The name of your file must be 255 characters or less",
      fileType: "The selected file must be a JPG, JPEG, PNG or PDF",
      fileSize: "The selected file must be smaller than 10MB",
      dupe: "The selected file has already been uploaded",
    },
  },
};



module.exports = registerController(config.name, config);
