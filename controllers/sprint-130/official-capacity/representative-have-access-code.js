const {
  urls,
  validation,
  registerController,
  match,
} = require("../../../utils/controller");

const config = {
  name: urls.representativeHaveAccessCode,
  previous: urls.representativeBirthDate,
  next: [
    {
      page: urls.representativeEnterAccessCode,
      condition: {
        field: "representative-have-access-code",
        value: "yes",
        match: match.value,
      },
    },
    {
      page: urls.representativeAccessCodeNone,
    },
  ],
  validation: {
    type: validation.textInput,
    /* options: {
      regEx: "^[a-zA-Z]\\s*[a-zA-Z](?:\\s*\\d\\s*){6}\\s*[a-dA-D]?s*$",
    }, */
    errors: {
      required: "Select if you have a lasting power of attorney (LPA) access code",
      /* regEx: "Select if you have a lasting power of attorney (LPA) access code", */
    },
  },
};

module.exports = registerController(config.name, config);
