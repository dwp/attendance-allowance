const express = require('express');
const {
  urls,
} = require('../../../utils/controller');

const router = express.Router();

router.post('/', (req, res) => {
  req.session.data['cya-destination'] = req.session.data.destination;
  req.session.data['cya-origin'] = urls.checkAnswersNight;
  res.redirect(`${req.version}${req.session.data.destination}`);
});

module.exports = router;
