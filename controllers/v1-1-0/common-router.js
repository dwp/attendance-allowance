const validationConsolidator = require("./validation-consolidator");

const routeToNext = (req, res, validation, source, target, do307) => {
  if (validationConsolidator.hasValidationErrors(req, validation)) {
    // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
    res.redirect(`${req.version}${source}`); // njsscan-ignore: express_open_redirect
  } else {
    delete req.session.data.validation;
    if (req.session.data.C_Y_A && req.session.data.C_Y_A === `${source}`) {
      // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
      res.redirect(`${req.version}check-your-answers`); // njsscan-ignore: express_open_redirect
    } else if (do307) {
      // when joining activity stuff, want a 307
      // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
      res.redirect(307, `${req.version}${target}`); // njsscan-ignore: express_open_redirect
    } else {
      // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
      res.redirect(`${req.version}${target}`); // njsscan-ignore: express_open_redirect
    }
  }
};

module.exports = { routeToNext };
