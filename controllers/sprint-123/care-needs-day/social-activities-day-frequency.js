const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.socialActivitiesDayFrequency,
  previous: urls.socialActivitiesDay,
  next: [
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
      required:
        "Select how often you usually take part in social activities or hobbies",
    },
  },
};

module.exports = registerController(config.name, config);
