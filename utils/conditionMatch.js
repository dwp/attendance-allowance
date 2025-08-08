const { match } = require('./constants');
const { arraysAreEqual, arrayContains } = require('./array');

const conditionMatch = (routingConfig, req) => {
  let routingMatch = false;
  let matchedLink;
  routingConfig.forEach((routingCondition) => {
    if (routingMatch) return;
    if (routingCondition.page) {
      // no condition at all
      if (!routingCondition.condition) {
        routingMatch = true;
        matchedLink = routingCondition.page;
        // exact value
      } else if (routingCondition.condition?.match === match.value) {
        if (routingCondition.condition.field && routingCondition.condition.value) {
          if (req.session.data[`${routingCondition.condition.field}`] === routingCondition.condition.value) {
            routingMatch = true;
            matchedLink = routingCondition.page;
          }
        }
        // greater than a provided value
      } else if (routingCondition.condition?.match === match.greaterThan) {
        if (routingCondition.condition.field && routingCondition.condition.value) {
          if (req.session.data[`${routingCondition.condition.field}`] > routingCondition.condition.value) {
            routingMatch = true;
            matchedLink = routingCondition.page;
          }
        }
        // less than a provided value
      } else if (routingCondition.condition?.match === match.lessThan) {
        if (routingCondition.condition.field && routingCondition.condition.value) {
          if (req.session.data[`${routingCondition.condition.field}`] < routingCondition.condition.value) {
            routingMatch = true;
            matchedLink = routingCondition.page;
          }
        }
        // any one of the provided values
      } else if (routingCondition.condition?.match === match.anyOne) {
        if (routingCondition.condition.field && routingCondition.condition.value
          && Array.isArray(routingCondition.condition.value)) {
          if (Array.isArray(req.session.data[`${routingCondition.condition.field}`])) {
            if (req.session.data[`${routingCondition.condition.field}`]?.some((e) => routingCondition.condition.value.includes(e))) {
              routingMatch = true;
              matchedLink = routingCondition.page;
            }
          }
        }
      // any one of the provided values in an array of objects
      } else if (routingCondition.condition?.match === match.anyInObject) {
        if (routingCondition.condition.field && routingCondition.condition.value
          && Array.isArray(routingCondition.condition.value)) {
          if (Array.isArray(req.session.data[`${routingCondition.condition.field}`])) {
            const mapped = req.session.data[`${routingCondition.condition.field}`].map((x) => x[0].text);
            if (mapped?.some((e) => routingCondition.condition.value.includes(e))) {
              routingMatch = true;
              matchedLink = routingCondition.page;
            }
          }
        }
      // all of the provided values
      } else if (routingCondition.condition?.match === match.all) {
        if (routingCondition.condition.field && routingCondition.condition.value
          && Array.isArray(routingCondition.condition.value)) {
          if (Array.isArray(req.session.data[`${routingCondition.condition.field}`])) {
            if (arraysAreEqual(routingCondition.condition.value, req.session.data[`${routingCondition.condition.field}`])) {
              routingMatch = true;
              matchedLink = routingCondition.page;
            }
          }
        }
      // none of the provided values
      } else if (routingCondition.condition?.match === match.none) {
        if (routingCondition.condition.field && routingCondition.condition.value
          && Array.isArray(routingCondition.condition.value)) {
          if (Array.isArray(req.session.data[`${routingCondition.condition.field}`])) {
            if (!arrayContains(routingCondition.condition.value, req.session.data[`${routingCondition.condition.field}`])) {
              routingMatch = true;
              matchedLink = routingCondition.page;
            }
          }
          }
        // check value in session
      } else if (routingCondition.condition?.match === match.session) {
        if (routingCondition.condition.value) {
          if (req.session.journeyType === routingCondition.condition.value) {
            routingMatch = true;
            matchedLink = routingCondition.page;
          }
        }
        // check value in session and page value
      } else if (routingCondition.condition?.match === match.sessionAndValue) {
        if (routingCondition.condition.value) {
          if (req.session.journeyType === routingCondition.condition.sessionValue) {
            if (req.session.data[`${routingCondition.condition.field}`] === routingCondition.condition.value) {
              routingMatch = true;
              matchedLink = routingCondition.page;
            }
          }
        }
      }
    }
  });
  return matchedLink;
};

module.exports = {
  conditionMatch,
};
