const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careNeedsCause,
  previous: urls.difficultiesStartDate,
  next: urls.supportingDocumentsIntro,
  validation: {
    type: validation.checkboxes,
    errors: {
      required:
        "Select which health condition or disability causes the difficulties you have told us about",
      },
    },
  };

module.exports = registerController(config.name, config);
