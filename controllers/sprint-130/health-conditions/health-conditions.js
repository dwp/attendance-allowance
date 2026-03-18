const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.healthConditions,
  next: urls.healthConditionsAdded,
  previous: [
    {
      page: urls.careHomeHospitalOvernightInformation,
      condition: {
        field: urls.careHomeHospitalOvernight,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospitalOvernight,
      condition: {
        field: urls.careHomeHospitalOvernight,
        value: "no",
        match: match.value,
      },
    },
    {
      page: urls.hospitalFunding,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.hospiceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.careHomeFundingWho,
      condition: {
        field: urls.careHomeFunding,
        value: "no-get-funding",
        match: match.value,
      },
    },
    {
      page: urls.careHomeFunding,
      condition: {
        field: urls.careHomeHospital,
        value: "care-nursing-home",
        match: match.value,
      },
    },
    {
      page: urls.similarPlaceAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "similar-place",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],
  validation: [
    {
      name: 'health-conditions',
      type: validation.select,
      options: {
        minLength: 1,
        maxLength: 200,
      },
      errors: {
        required: 'Enter the name of your health condition or disability',
        maxLength: 'Enter the name of your health condition or disability in 200 characters or less',
      },
    },
    {
      name: "health-conditions-start-date",
      type: validation.textInput,
      options: {
        minLength: 1,
        maxLength: 50,
      },
      errors: {
        required:
          'Enter the approximate date this health condition or disability started',
        maxLength: 'Enter the approximate date this health condition or disability started in 50 characters or less',
      },
    },
  ],
}

module.exports = registerController(config.name, config);
