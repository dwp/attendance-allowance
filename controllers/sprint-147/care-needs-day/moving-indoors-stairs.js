const {
  urls,
  match,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.movingIndoorsStairs,
  previous: urls.movingIndoorsWhy,
  next: [
    {
      page: urls.fallingOrStumbling,
      condition: {
        field: urls.dayDifficulties,
        value: ['stumbling-falling'],
        match: match.anyOne,
      },
    },
    {
      page: urls.toiletDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-toilet'],
        match: match.anyOne,
      },
    },
    {
      page: urls.eatDrinkDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-eating'],
        match: match.anyOne,
      },
    },
    {
      page: urls.medicationTreatmentDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-medication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.socialActivitiesDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-hobbies'],
        match: match.anyOne,
      },
    },
    {
      page: urls.communicationDay,
      condition: {
        field: urls.dayDifficulties,
        value: ['daytime-communication'],
        match: match.anyOne,
      },
    },
    {
      page: urls.checkAnswersDay,
    },
  ],
  validation: [
    {
      name: 'something-else-explain-stairs',
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter why you need to go up or down the stairs during the day',
        maxLength: 'Enter why you need to go up or down the stairs during the day in 200 characters or less'
      },
      condition: {
        field: 'moving-indoors-stairs',
        value: 'something-else-stairs',
      },
    },
    {
      name: 'moving-indoors-stairs',
      type: validation.checkboxes,
      errors: {
        required:
          "Select why you need to go up or down the stairs during the day",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
