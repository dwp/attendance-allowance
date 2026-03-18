const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.medicationTreatmentDayFrequency,
  previous: urls.medicationTreatmentDayWhy,
  next: [
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
  validation: {
    type: validation.radios,
    errors: {
      required: "Select how often you take medication or get treatment",
    },
  },
};

module.exports = registerController(config.name, config);
