const {
  urls,
  match,
  validation,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.addContactDetails,
  previous: [
    {
      page: urls.representativeTelephoneNumber,
      condition: {
        field: urls.applyingSomeoneElse,
        value: "individual",
        match: match.value,
      },
    },
    {
      page: urls.telephoneNumber,
    },
  ],
  next: [
    {
      page: urls.telephoneNumberOther,
      condition: {
        field: urls.addContactDetails,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.alternativeFormats,
    },
  ],
  validation: [
    {
      name: "add-contact-details",
      type: validation.radios,
      errors: {
        required:
          "Select yes if you want to add contact details for someone else",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
