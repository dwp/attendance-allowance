const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.evidence,
  previous: urls.supportingDocumentsIntro,
  next: urls.aidsAdaptationsQuestion,
};

module.exports = registerController(config.name, config);
