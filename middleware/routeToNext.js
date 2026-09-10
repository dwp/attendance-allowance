module.exports = (source, target) => (req, res, next) => {
  delete req.session.data.validation;
  if (req.session.data['cya-destination'] && req.session.data['cya-destination'] === `${source}`) {
    if (isAllowed) {
        // If the URL is allowed, proceed with the redirect
        res.redirect(url);
    } else {
        res.status(400).send('Invalid redirect URL');
    }

  } 
};
