const {
  urls,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.medicationTreatmentDayWhy,
  previous: [
    {
      page: urls.medicationTreatmentDay,
    },
  ],
  next: [
    {
      page: urls.medicationTreatmentDayFrequency,
    },
  ],
  validation: [
    {
      name: "something-else-medication-treatment-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter how you manage to take your medication or get treatment",
        maxLength:
          "Enter how you manage to take your medication or get treatment in 200 characters or less",
      },
      condition: {
        field: "medication-treatment-day-why",
        value: "medication-treatment-day-why-something-else",
      },
    },
    {
      name: "medication-treatment-day-why",
      type: validation.checkboxes,
      errors: {
        required:
          "Select how you manage to take your medication or get treatment",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
