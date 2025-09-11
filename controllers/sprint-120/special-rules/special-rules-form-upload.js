const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormUpload,
  previous: urls.specialRulesFormGuidance,
  previous: [
    {
      page: urls.specialRulesFormAdded,
      condition: {
        field: urls.specialRulesFormAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesFormGuidance,
    },
  ],
  next: urls.specialRulesFormAdded,
  validation: {
    source: urls.specialRulesFormUpload,
    rows: urls.specialRulesFormUploadRows,
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
