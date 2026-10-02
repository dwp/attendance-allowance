const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsGuidance,
  previous: urls.supportingDocumentsOptions,
  next: urls.supportingDocumentsUpload,
};

module.exports = registerController(config.name, config);
