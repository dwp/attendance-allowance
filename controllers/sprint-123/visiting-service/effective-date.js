const {
    urls,
    validation,
    registerController,
  } = require("../../../utils/controller");

  const config = {
    name: urls.effectiveDate,
    next: urls.birthDate,
    validation: {
      type: validation.dateInput,
      errors: {
        required: 'Enter a date',
        requiredDay: 'Date must include a day',
        requiredMonth: 'Date must include a month',
        requiredYear: 'Date must include a year',
        validDay: 'Enter a real date',
        validMonth: 'Enter a real date',
        validYear: 'Enter a real date',
        invalidDate: 'Date must be a real date',
      },
    },
  };

  module.exports = registerController(config.name, config);
