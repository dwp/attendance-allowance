const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.dressDayWhy,
  previous: [
    {
      page: urls.dressDay,
    },
  ],
  next: [
    {
      page: urls.additionalDressDay,
    },
  ],
  validation: [
    {
      name: "something-else-dress-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage to get dressed or undressed",
        maxLength:
          "Enter how you manage to get dressed or undressed in 200 characters or less",
      },
      condition: {
        field: "dress-day-why",
        value: "dress-day-why-something-else",
      },
    },
    {
      name: "dress-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage to get dressed or undressed",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
