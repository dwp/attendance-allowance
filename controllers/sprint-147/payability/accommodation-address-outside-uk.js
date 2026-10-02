const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.accommodationAddressOutsideUk,
  previous: [
    {
      page: urls.hospitalAddress,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.careHomeAddress,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.hospiceAddress,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.otherAccommodationAddress,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "other-accommodation",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],

  next: [
    {
      page: urls.specialRulesDeclaration,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.careHomeFunding,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.specialRulesDeclaration,
      condition: {
        page: urls.careHomeHospital,
        field: "care-home-hospital",
        value: "other-accommodation",
        match: match.value,
      },
    },
  ],
  validation: [
    {
      name: "accommodation-outside-uk-name",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 150,
      },
      errors: {
        required: "Enter the name of the place where you are staying",
        maxLength:
          "Enter the name of the place where you are staying in 150 characters or less",
      },
    },

    {
      name: "accommodation-outside-uk-town-city",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter a town or city",
        maxLength:
          "Enter a town or city in 50 characters or less",
      },
    },

    {
      name: "accommodation-outside-uk-country",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required: "Enter a country",
        maxLength:
          "Enter a country in 50 characters or less",
      },
    },
  ],
};

module.exports = registerController(config.name, config);
