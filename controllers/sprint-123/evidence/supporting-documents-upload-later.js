const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsUploadLater,
  previous: urls.supportingDocumentsEmailLink,
  next: urls.consent,
};

module.exports = registerController(config.name, config);
