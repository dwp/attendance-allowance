const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospitalOvernight,
  previous: [
    {
      page: urls.hospitalFunding,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
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
      page: urls.careHomeHospitalAdmissionDate,
      condition: {
        field: urls.careHomeHospital,
        value: "hospice",
        match: match.value,
      },
    },
    {
      page: urls.careHomeHospital,
    },
  ],
  next: [
    {
      page: urls.careHomeHospitalOvernightInformation,
      condition: {
        field: urls.careHomeHospitalOvernight,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.healthConditions,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you have stayed overnight in a care home, hospital or hospice between [6 weeks ago] and [admission date / today's date]",
    },
  },
};

module.exports = registerController(config.name, config);
