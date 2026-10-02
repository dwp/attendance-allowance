const express = require("express");
const common = require("./activity-common");

const router = express.Router();
// Centralise how we move onwards (assuming validation wasn't an issue) for the activity screens
// when leaving activity stuff, don't want a 307
const routeToNext = (req, res, activity, source, target, no307) => {
  if (!Array.isArray(req.session.data.activities)) {
    req.session.data.activities = [req.session.data.activities];
  }
  if (!req.session.data.activities?.includes(activity)) {
    delete req.session.data.validation;
    if (no307) {
      res.redirect(`${req.version}${target}`);
    } else {
      res.redirect(307, `${req.version}${target}`);
    }
  } else if (req.session.data[`${source}-submitted`]) {
    const hasValidationErrors = common.hasValidationErrorsForActivity(
      req,
      source,
    );
    if (hasValidationErrors) {
      res.redirect(`${req.version}${source}`);
    } else {
      // For now we appear to need to force the array stuff frequently
      delete req.session.data.validation;
      if (
        req.session.data["C-Y-A"] &&
        req.session.data["C-Y-A"] === `${source}`
      ) {
        res.redirect(`${req.version}check-your-answers`);
      } else if (no307) {
        res.redirect(`${req.version}${target}`);
      } else {
        res.redirect(307, `${req.version}${target}`);
      }
    }
  } else {
    res.redirect(`${req.version}${source}`);
  }
};

module.exports = { router, routeToNext };
