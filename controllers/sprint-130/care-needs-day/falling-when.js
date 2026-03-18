const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.fallingWhen,
  previous: [
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ["risk-stumbling"],
        match: match.anyOne,
      },
    },
    {
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ["risk-falling"],
        match: match.anyOne,
      },
    },
  ],
  next: urls.falling,
  validation: [
    {
      name: "falling-when",
      type: validation.radios,
      errors: {
        required: "Select when you last fell down",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
