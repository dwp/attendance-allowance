const {
  urls,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.representativeContactInformation,
  previous: urls.checkAnswersStartDate,
  next: urls.representativeNationalInsurance,
};

module.exports = registerController(config.name, config);
