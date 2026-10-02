const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.stumbling,
  previous: urls.fallingOrStumblingWhy,
  next: [
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
      name: "frequency-stumbling",
      type: validation.radios,
      errors: {
        required: "Select how many times in a week that you stumble",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
