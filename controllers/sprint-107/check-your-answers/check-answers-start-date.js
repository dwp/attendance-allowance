const express = require('express');
const {
  urls,
} = require('../../../utils/controller');

const router = express.Router();

router.post('/', (req, res) => {
  req.session.data['cya-destination'] = req.session.data.destination;
  req.session.data['cya-origin'] = urls.checkAnswersStartDate;
  if (isAllowed) {
        // If the URL is allowed, proceed with the redirect
        res.redirect(url);
    } else {
        res.status(400).send('Invalid redirect URL');
    }

});

module.exports = router;
