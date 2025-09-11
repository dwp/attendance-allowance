const {
  urls,
  validation,
  match,
  registerController,
} = require('../../../utils/controller');

const config = {
  name: urls.careHomeHospitalOvernightInformation,
  previous: urls.careHomeHospitalOvernight,
  next: urls.healthConditions,
  validation: {
    type: validation.textInput,
    options: {
      minLength: 1,
      maxLength: 500,
    },
    errors: {
      required: "Enter details of the care homes, hospitals or hospices you have stayed overnight in between [6 weeks ago] and [admission date / today's date]",
      maxLength: "Enter details of the care homes, hospitals or hospices you have stayed overnight in between [6 weeks ago] and [admission date / today's' date] in 500 characters or less",
    },
  },
};

module.exports = registerController(config.name, config);
