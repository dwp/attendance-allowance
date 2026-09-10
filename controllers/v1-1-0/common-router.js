const validationConsolidator = require('./validation-consolidator');

const routeToNext = (req, res, validation, source, target, do307) => {
  if (validationConsolidator.hasValidationErrors(req, validation)) {
    res.redirect(url);
  } else {
    delete req.session.data.validation;
    if (isAllowed) {
        // If the URL is allowed, proceed with the redirect
        res.redirect(url);
    } else {
        res.status(400).send('Invalid redirect URL');
    }

  }
};

module.exports = { routeToNext };
