const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.eatDrinkDayWhy,
  previous: [
    {
      page: urls.eatDrinkDay,
    },
  ],
  next: [
    {
      page: urls.eatDrinkDayFrequency,
    },
  ],
  validation: [
    {
      name: "something-else-eating-drinking-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage to eat or drink",
        maxLength:
          "Enter how you manage to eat or drink in 200 characters or less",
      },
      condition: {
        field: "eat-drink-day-why",
        value: "eat-drink-why-something-else",
      },
    },
    {
      name: "eat-drink-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage to eat or drink",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
