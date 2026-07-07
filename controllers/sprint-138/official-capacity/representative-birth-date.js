const {
  urls,
  validation,
  registerController,
  match,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeBirthDate,
  previous: urls.representativeNationalInsurance,
  next: [
    {
      page: urls.representativeAddress,
      condition: {
            field: urls.locale,
            value: 'NI',
            match: match.value,
      },
    },
    {
      page: urls.representativeHaveAccessCode,
      condition: {
            field: urls.bestDescribe,
            value: 'powerOfAttorney',
            match: match.value,
      },
    },    
    {
      page: urls.representativeAddress,
    },
  ],
  validation: {
    type: validation.dateInput,
    errors: {
      required: 'Enter your date of birth',
      requiredDay: 'Date of birth must include a day',
      requiredMonth: 'Date of birth must include a month',
      requiredYear: 'Date of birth must include a year',
      validDay: 'Enter a real date of birth',
      validMonth: 'Enter a real date of birth',
      validYear: 'Enter a real date of birth',
      invalidDate: 'Date of birth must be a real date',
    },
  },
};

module.exports = registerController(config.name, config);
