const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.fullName,
  previous: [
    {
      page: urls.nationalInsurance,
      condition: {
        field: urls.whoIsApplying,
        value: 'myself',
        match: match.value,
      },
    },
    {
      page: urls.beforeYouStart,
    },
  ],
  next: [
    {
      page: urls.helperName,
      condition: {
        field: urls.bestDescribe,
        value: 'friend',
        match: match.value,
      },
    },
    {
      page: urls.helperName,
      condition: {
        field: urls.bestDescribe,
        value: 'charity',
        match: match.value,
      },
    },
    {
      page: urls.representativeName,
      condition: {
        field: urls.bestDescribe,
        value: 'appointee',
        match: match.value,
      },
    },
    {
      page: urls.representativeName,
      condition: {
        field: urls.applyingSomeoneElse,
        value: 'individual',
        match: match.value,
      },
    },
    {
      page: urls.homeAddressPostcode,
    },
  ],
  validation: [
    {
      name: "first-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your first name",
        maxLength: "First name must be 50 characters or less",
      },
    },
    {
      name: "last-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter your last name",
        maxLength: "Last name must be 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
