const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.beforeYouStart,
  previous: [
    {
      page: urls.manageOwnAffairs,
      condition: {
        field: urls.manageOwnAffairs,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.manageOwnAffairs,
      condition: {
        field: urls.manageOwnAffairs,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.whoIsApplying,
      condition: {
        field: urls.whoIsApplying,
        value: "myself",
        match: match.value,
      },
    },
    {
      page: urls.bestDescribe,
    },
  ],
  next: [
    {
      page: urls.beforeYouStartIneligible,
      condition: {
        field: urls.beforeYouStart,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.birthDate,
      condition: {
        field: urls.whoIsApplying,
        value: "myself",
        match: match.value,
      },
    },
    {
      page: urls.fullName,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required:
        "Select if you have everything you need to apply for Attendance Allowance",
    },
  },
};

module.exports = registerController(config.name, config);
