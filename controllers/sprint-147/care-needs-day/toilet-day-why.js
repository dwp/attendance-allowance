const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.toiletDayWhy,
  previous: urls.toiletDay,
  next: [
    {
      page: urls.toiletDayFrequency,
      condition: {
        field: urls.toiletDay,
        value: [
          "toilet-getting-to",
          "toilet-urgent",
          "toilet-getting-on-off",
          "toilet-cleaning-myself",
          "toilet-emptying",
          "toilet-remembering",
          "managing-incontinence",
          "toilet-not-always",
          "toilet-something-else",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.eatDrinkDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-eating"],
        match: match.anyOne,
      },
    },
    {
      page: urls.medicationTreatmentDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-medication"],
        match: match.anyOne,
      },
    },
    {
      page: urls.socialActivitiesDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-hobbies"],
        match: match.anyOne,
      },
    },
    {
      page: urls.communicationDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-communication"],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersDay,
    },
  ],
  validation: [
    {
      name: "something-else-toilet-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage your toilet needs",
        maxLength:
          "Enter how you manage your toilet needs in 200 characters or less",
      },
      condition: {
        field: "toilet-day-why",
        value: "toilet-day-why-something-else",
      },
    },
    {
      name: "toilet-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage your toilet needs",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
