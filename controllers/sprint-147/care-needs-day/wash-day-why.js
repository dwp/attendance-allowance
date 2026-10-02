const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.washDayWhy,
  previous: urls.washDay,
  next: [
    {
      page: urls.additinalWashDay,
    },
  ],
  validation: [
    {
      name: "something-else-wash-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage to wash, have a bath or shower",
        maxLength:
          "Enter how you manage to wash, have a bath or shower in 200 characters or less",
      },
      condition: {
        field: "wash-day-why",
        value: "wash-day-why-something-else",
      },
    },
    {
      name: "wash-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage to wash, have a bath or shower",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
