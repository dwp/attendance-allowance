/* eslint-disable consistent-return */

const routeToNext = require("./routeToNext");
const checkValidation = require("./checkValidation");
const { conditionMatch } = require("../utils/conditionMatch");
const validate = require("./validate");
const autoClearData = require("./autoClearData");
const clearHealthConditions = require("./clearHealthConditions");
const clearAidsAdaptations = require("./clearAidsAdaptations");

const handleValidation = (req, res, next, source, config) => {
  if (!config.validation) {
    return true;
  }
  // if config object is of type checkboxes, express stores
  // single checked items as a string and multiple selected checkboxes
  // as an array, here we convert the string into a single element array
  if (Array.isArray(config.validation)) {
    config.validation.forEach((validation) => {
      if (validation.type === "checkboxes") {
        if (
          req.session.data[validation.name] &&
          !Array.isArray(req.session.data[validation.name])
        ) {
          req.session.data[validation.name] = [
            req.session.data[validation.name],
          ];
        }
      }
    });
  } else if (config?.validation?.type === "checkboxes") {
    // if the answer is not an array then convert it to an array so it can all be handled the same way
    if (
      req.session.data[config.name] &&
      !Array.isArray(req.session.data[config.name])
    ) {
      req.session.data[config.name] = [req.session.data[config.name]];
    }
  }

  if (Array.isArray(config.validation)) {
    config.validation.forEach((validation) => {
      if (validation.condition) {
        const conditionAnswer = req.session.data[validation.condition.field];
        if (!conditionAnswer?.includes(validation.condition.value)) {
          return;
        }
      }
      validate(
        {
          name: validation.name,
          validation,
        },
        true,
      )(req, res, next);
    });
    return checkValidation(source, config.name)(req, res, next);
  }

  if (config.validation) {
    validate(config)(req, res, next);
    return checkValidation(source, config.name)(req, res, next);
  }
};

const handleRouting = (config, req) => {
  if (!config) return;
  if (!config.next) return;
  let routingConfig = config.next;
  if (!Array.isArray(config.next)) {
    routingConfig = [
      {
        page: config.next,
      },
    ];
  }

  let nextPage;
  const routingMatch = conditionMatch(routingConfig, req);
  if (routingMatch) {
    nextPage = routingMatch;
  }

  return nextPage;
};

// checkboxes with nothing selected send nothing to the backend
// clear fields data here before the validation
const handleEmptyPost = (source, req) => {
  if (!source || !req?.body) {
    return;
  }

  if (Object.keys(req.body).length === 0) {
    if (req?.session?.data) {
      req.session.data[source] = undefined;
    }
  }
};

/**
 * Middleware chain for POST requests on forms.
 *
 * @param { string } source
 * @param { object } config
 */
module.exports = (source, config, logic) => (req, res, next) => {
  if (logic) {
    logic(req);
  }
  handleEmptyPost(source, req);
  const isValid = handleValidation(req, res, next, source, config);
  if (!isValid) {
    // remove invalid stuff from session
    autoClearData(req, res, next);
    // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
    return res.redirect(`${req.version}${source}`); // njsscan-ignore: express_open_redirect
  }
  clearHealthConditions(req, res, next);
  clearAidsAdaptations(req, res, next);

  const nextPage = handleRouting(config, req)
    ? handleRouting(config, req)
    : config.next;
  routeToNext(source, nextPage)(req, res, next);
};
