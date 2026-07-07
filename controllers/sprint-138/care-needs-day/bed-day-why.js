const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.bedDayWhy,
  previous: [
    {
      page: urls.bedDay,
    },
  ],
  next: [
    {
      page: urls.returnBedDay,
      condition: {
        field: urls.bedDayWhy,
        value: [
          "restricted-movement",
          "hold-on-to-things",
          "get-in-out-bed-safely",
          "encouragement",
          "help-bed",
          "sleep-chair",
          "bed-day-why-something-else",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.washDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-washing"],
        match: match.anyOne,
      },
    },
    {
      page: urls.dressDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-dressing"],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-moving"],
        match: match.anyOne,
      },
    },
    {
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ["stumbling-falling"],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletDay,
      condition: {
        field: urls.dayDifficulties,
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
      name: "something-else-bed-day-why-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter how you manage to get in or out of bed",
        maxLength:
          "Enter how you manage to get in or out of bed in 200 characters or less",
      },
      condition: {
        field: "bed-day-why",
        value: "bed-day-why-something-else",
      },
    },
    {
      name: "bed-day-why",
      type: validation.checkboxes,
      errors: {
        required: "Select how you manage to get in or out of bed ",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
