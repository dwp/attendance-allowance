const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.dressDay,
  previous: [
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
  next: [
    {
      page: urls.dressDayWhy,
      condition: {
        field: urls.dressDay,
        value: [
          "put-on-take-off",
          "choosing-clothes",
          "forget-want-change-clothes",
          "something-else-dressing",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.movingIndoorsDay,
      condition: {
        field: urls.daytimdayDifficultieseActivities,
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
      name: "something-else-explain-dressing",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what difficulty you have when dressing or undressing",
        maxLength:
          "Enter what difficulty you have when dressing or undressing in 200 characters or less",
      },
      condition: {
        field: "dress-day",
        value: "something-else-dressing",
      },
    },
    {
      name: "dress-day",
      type: validation.checkboxes,
      errors: {
        required: "Select what difficulty you have when dressing or undressing",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
