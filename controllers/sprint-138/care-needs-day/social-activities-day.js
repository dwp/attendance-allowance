const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.socialActivitiesDay,
  previous: [
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
  next: [
    {
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: [
          "social-physical",
          "social-motivation",
          "social-no-help",
          "social-no",
          "something-else-social",
        ],
        match: match.anyOne,
      },
    },
    {
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: ["social-physical"],
        match: match.all,
      },
    },
    {
      page: urls.socialActivitiesDayFrequency,
      condition: {
        field: urls.socialActivitiesDay,
        value: ["social-motivation"],
        match: match.all,
      },
    },
    {
      page: urls.communicationDay,
      condition: {
        field: urls.dayDifficulties,
        value: "daytime-communication",
        match: match.value,
      },
    },
    {
      page: urls.checkAnswersDay,
    },
  ],
  validation: [
    {
      name: "something-else-explain-social",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required:
          "Enter what difficulty you have with social activities or hobbies",
        maxLength:
          "Enter what difficulty you have with social activities or hobbies in 200 characters or less",
      },
      condition: {
        field: "social-activities-day",
        value: "something-else-social",
      },
    },
    {
      name: "social-activities-day",
      type: validation.checkboxes,
      errors: {
        required:
          "Select what difficulty you have with social activities or hobbies",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
