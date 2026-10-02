module.exports = (source, target) => (req, res, next) => {
  delete req.session.data.validation;
  if (
    req.session.data["cya-destination"] &&
    req.session.data["cya-destination"] === `${source}`
  ) {
    if (req.session.data["cya-origin"]) {
      const redirectOrigin = req.session.data["cya-origin"];
      delete req.session.data["cya-origin"];
      delete req.session.data["cya-destination"];
      // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
      res.redirect(`${req.version}${redirectOrigin}`); // njsscan-ignore: express_open_redirect
    } else {
      // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
      res.redirect(`${req.version}check-answers-full-list`); // njsscan-ignore: express_open_redirect
    }
  } else {
    // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
    res.redirect(`${req.version}${target}`); // njsscan-ignore: express_open_redirect
  }
};
