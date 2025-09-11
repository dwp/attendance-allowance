const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsPost,
  previous: urls.supportingDocumentsOptions,
  next: urls.aidsAdaptationsQuestion,
};

module.exports = registerController(config.name, config);
