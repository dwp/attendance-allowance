const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeAccessCodeNone,
  previous: urls.representativeHaveAccessCode,
  next: urls.representativeAddress,

};

module.exports = registerController(config.name, config);
