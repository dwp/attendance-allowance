const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.eatDrinkDay,
  previous: [
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
  next: [
    {
      page: urls.eatDrinkDayWhy,
      condition: {
        field: urls.eatDrinkDay,
        value: [
          "cutting-food",
          "putting-food",
          "chewing-swallowing",
          "identifying-food",
          "motivation-eat",
          "motivation-drink",
          "eat-drink-something-else",
        ],
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
      name: "something-else-eating-drinking-day-explain",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: "Enter what difficulty you have when eating or drinking",
        maxLength:
          "Enter what difficulty you have when eating or drinking in 200 characters or less",
      },
      condition: {
        field: "eat-drink-day",
        value: "eat-drink-something-else",
      },
    },
    {
      name: "eat-drink-day",
      type: validation.checkboxes,
      errors: {
        required: "Select what difficulty you have when eating or drinking",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
