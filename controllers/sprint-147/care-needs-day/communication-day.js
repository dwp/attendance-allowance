const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.communicationDay,
  previous: [
    {
      page: urls.socialActivitiesDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-hobbies"],
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
      page: urls.eatDrinkDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-eating"],
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
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ["stumbling-falling"],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsStairs,
      condition: {
        field: urls.movingIndoorsDay,
        value: ["stairs"],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsWhy,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-moving"],
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
      page: urls.washDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-washing"],
        match: match.anyOne,
      },
    },
    {
      page: urls.bedDay,
      condition: {
        field: urls.dayDifficulties,
        value: ["daytime-bed"],
        match: match.anyOne,
      },
    },
    {
      page: urls.dayDifficulties,
    },
  ],
  next: urls.checkAnswersDay,
  validation: [
    {
      name: "something-else-explain-communication",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter what difficulty you have when communicating with others",
        maxLength:
          "Enter what difficulty you have when communicating with others in 200 characters or less",
      },
      condition: {
        field: "communication-day",
        value: "something-else-communication",
      },
    },
    {
      name: "communication-day",
      type: validation.checkboxes,
      errors: {
        required:
          "Select what difficulty you have when communicating with others",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
