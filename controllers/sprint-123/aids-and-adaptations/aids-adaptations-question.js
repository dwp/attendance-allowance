const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.aidsAdaptationsQuestion,
  previous: [
    {
      page: urls.supportingDocumentsAdded,
      condition: {
        field: urls.supportingDocumentsOptions,
        value: "upload-now",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsPost,
      condition: {
        field: urls.supportingDocumentsOptions,
        value: "post",
        match: match.value,
      },
    },
    {
      page: urls.supportingDocumentsNone,
    },
  ],
  next: [
    {
      page: urls.aidsAdaptationsReason,
      condition: {
        field: urls.aidsAdaptationsQuestion,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.aidsAdaptations,
    },
  ],
  validation: [
    {
      name: "aids-adaptations-question",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you have any home adaptations, specialist equipment or aids",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
