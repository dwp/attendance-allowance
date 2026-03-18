const {
  urls,
  validation,
  match,
  registerController,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeAddress,
  previous: urls.representativeBirthDate,
  next: [
    {
      page: urls.representativeTelephoneNumber,
      condition: {
        field: urls.representativeAddress,
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.representativeAddressPostcode,
    },
  ],
  validation: {
    type: validation.radios,
    errors: {
      required: "Select yes if you live at the same address as the person who wants to claim Attendance Allowance",
    },
  },
};

module.exports = registerController(config.name, config);
