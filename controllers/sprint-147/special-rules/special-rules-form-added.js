const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormAdded,
  previous: urls.specialRulesFormUpload,
  next: [
    {
      page: urls.specialRulesFormUpload,
      condition: {
        field: urls.specialRulesFormAdded,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],
  validation: {
    source: urls.specialRulesFormUpload,
    rows: urls.specialRulesFormUploadRows,
    type: validation.upload,
    options: {
      amount: 2
    },
    errors: {
      required: "Select yes if you want to upload another file",
      amount: "Upload no more than 2 files",
    },
  },
};

module.exports = registerController(config.name, config);
