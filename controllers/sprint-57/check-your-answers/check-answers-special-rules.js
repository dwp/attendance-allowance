const {
  urls,
} = require('../../../utils/controller');

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  req.session.data['cya-destination'] = req.session.data.destination;
  req.session.data['cya-origin'] = urls.checkAnswersSpecialRules;
  
});

module.exports = router;
