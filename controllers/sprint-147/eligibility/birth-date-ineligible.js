const {
    urls,
    match,
    registerController,
  } = require('../../../utils/controller');

  const config = {
    name: urls.birthDateIneligible,
    previous: [
     {
        page: urls.birthDate,
     },
    ],
  };

  module.exports = registerController(config.name, config);
