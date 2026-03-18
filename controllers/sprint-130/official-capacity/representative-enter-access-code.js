const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeEnterAccessCode,
  previous: urls.representativeHaveAccessCode,
  next: urls.representativeAddress,
  validation: {
    type: validation.textInput,
    /* options: {
      regEx: "^[a-zA-Z]\\s*[a-zA-Z](?:\\s*\\d\\s*){6}\\s*[a-dA-D]?s*$",
    }, */
    errors: {
      required: "Enter your LPA access code",
      /* regEx: "Enter your LPA access code", */
    },
  },
};

module.exports = registerController(config.name, config);
