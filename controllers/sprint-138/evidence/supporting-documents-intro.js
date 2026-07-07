const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.supportingDocumentsIntro,
  previous: [
    {
      page: urls.noDifficultiesIneligible,
      condition: {
        page: urls.noDifficultiesIneligible,
        match: match.custom,
        customValidation: (data) => {
          return data[urls.safeDayNight]?.includes('no') &&
            data[urls.dayDifficulties]?.includes('daytime-none') &&
            data[urls.nightDifficulties]?.includes('nighttime-none')
        }
      },
    },
    {
      page: urls.careNeedsCause,
    },
  ],
  next: [
    {
      page: urls.supportingDocumentsOptions,
      condition: {
        field: urls.supportingDocumentsIntro,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsNone,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: 'Select yes if you have any supporting documents to confirm what you have told us',
    },
  },
};

module.exports = registerController(config.name, config);
