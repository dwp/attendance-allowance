const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.specialRulesFormGuidance,
  previous: urls.specialRulesFormUploadOption,
  next: urls.specialRulesFormUpload,
};

module.exports = registerController(config.name, config);
