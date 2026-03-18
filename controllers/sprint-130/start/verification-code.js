const {
  urls,
  options,
  validation,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: 'verification-code',
  previous: options.none,
  next: urls.start,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 6,
      maxLength: 6,
    },
    errors: {
      required: 'You need to enter a verification code',
      minLength: 'The code you entered is too short; An example code looks like this, ‘WQ4D79’',
      maxLength: 'The code you entered is too long; An example code looks like this, ‘WQ4D79’',
    },
  },
};

module.exports = registerController('', config);
