const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.careHomeHospitalAdmissionDate,
  previous: [
    {
      page: urls.hospitalAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
        match: match.value,
      },
    },
    {
      page: urls.careHomeAddress,
      condition: {
        field: urls.careHomeHospital,
        value: "care-nursing-home",
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
  ],
  next: [
    {
      page: urls.hospitalFunding,
      condition: {
        field: urls.careHomeHospital,
        value: "hospital",
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
      page: urls.careHomeHospitalOvernight,
    },
  ],
  validation: {
    type: validation.dateInput,
    errors: {
      required: 'Enter a date',
      requiredDay: 'Date must include a day',
      requiredMonth: 'Date must include a month',
      requiredYear: 'Date must include a year',
      validDay: 'Enter a real date',
      validMonth: 'Enter a real date',
      validYear: 'Enter a real date',
      invalidDate: 'Enter a real date',
    },
  },
};

module.exports = registerController(config.name, config);
