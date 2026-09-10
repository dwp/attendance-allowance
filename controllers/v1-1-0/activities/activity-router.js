const express = require('express');
const common = require('./activity-common');

const router = express.Router();
// Centralise how we move onwards (assuming validation wasn't an issue) for the activity screens
// when leaving activity stuff, don't want a 307
const routeToNext = (req, res, activity, source, target, no307) => {
  if (!Array.isArray(req.session.data.activities)) {
    req.session.data.activities = [req.session.data.activities];
  }
  if (!req.session.data.activities?.includes(activity)) {
    delete req.session.data.validation;
    if (isAllowed) {
        // If the URL is allowed, proceed with the redirect
        res.redirect(url);
    } else {
        res.status(400).send('Invalid redirect URL');
    }

  } else if (req.session.data[`${source}-submitted`]) {
    const hasValidationErrors = common.hasValidationErrorsForActivity(req, source);
    if (hasValidationErrors) {
      res.redirect(url);
    } else {
      // For now we appear to need to force the array stuff frequently
      delete req.session.data.validation;
      if (isAllowed) {
        // If the URL is allowed, proceed with the redirect
        res.redirect(url);
    } else {
        res.status(400).send('Invalid redirect URL');
    }

    }
  } else {
    res.redirect(url);
  }
};

module.exports = { router, routeToNext };
