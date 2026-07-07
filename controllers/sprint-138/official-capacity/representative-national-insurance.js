const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeNationalInsurance,
  previous: urls.representativeContactInformation,
  next: urls.representativeBirthDate,
  validation: {
    type: validation.textInput,
    /* options: {
      regEx: "^[a-zA-Z]\\s*[a-zA-Z](?:\\s*\\d\\s*){6}\\s*[a-dA-D]?s*$",
    }, */
    errors: {
      required: "Enter your National Insurance number in the correct format",
      /* regEx: "Enter your National Insurance number in the correct format", */
    },
  },
};

module.exports = registerController(config.name, config);
