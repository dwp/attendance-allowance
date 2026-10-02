const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.fallingOrStumblingWhy,
  previous: urls.fallingOrStumbling,
  next: [
    {
      page: urls.stumbling,
      condition: {
        field: urls.fallingOrStumbling,
        value: ["risk-stumbling"],
        match: match.anyOne,
      },
    },
    {
      page: urls.fallingWhen,
      condition: {
        field: urls.fallingOrStumbling,
        value: ["risk-falling"],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletDay,
      condition: {
        field: urls.dayDiffulties,
        value: ["daytime-toilet"],
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
      name: "something-else-falling-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what causes you to stumble or fall down",
        maxLength:
          "Enter what causes you to stumble or fall down in 200 characters or less",
      },
      condition: {
        field: "falling-or-stumbling-why",
        value: "something-else",
      },
    },
    {
      name: "falling-or-stumbling-why",
      type: validation.checkboxes,
      errors: {
        required: "Select what causes you to stumble or fall down",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
