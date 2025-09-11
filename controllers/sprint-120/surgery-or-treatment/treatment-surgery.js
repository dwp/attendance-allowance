const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.treatmentSurgery,
  previous: urls.healthConditionsAdded,
  next: [
    {
      page: urls.treatmentSurgeryInformation,
      condition: {
        field: urls.treatmentSurgery,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.consent,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you are having treatment or waiting for surgery",
    },
  },
};

module.exports = registerController(config.name, config);
