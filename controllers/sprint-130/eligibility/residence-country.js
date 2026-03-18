const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.residenceCountry,
  previous: [
    {
      page: urls.nationalityOther,
      condition: {
        field: urls.nationality,
        value: "other",
        match: match.value,
      },
    },
    {
      page: urls.nationality,
    },
  ],
  next: [
    {
      page: urls.previousResidenceScotland,
      condition: {
        field: urls.residenceCountry,
        value: 'england',
        match: match.value,
      },
    },
    {
      page: urls.homeAddressPostcodeScotland,
      condition: {
        field: urls.residenceCountry,
        value: 'scotland',
        match: match.value,
      },
    },
    {
      page: urls.previousResidenceScotland,
      condition: {
        field: urls.residenceCountry,
        value: 'wales',
        match: match.value,
      },
    },
    {
      page: urls.residenceCountryNorthernIreland,
      condition: {
        field: urls.residenceCountry,
        value: 'northern-ireland',
        match: match.value,
      },
    },
    {
      page: urls.residenceCountryIneligible,
      condition: {
        field: urls.residenceCountry,
        value: 'abroad',
        match: match.value,
      },
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select the country where you live",
    },
  },
};

module.exports = registerController(config.name, config);
