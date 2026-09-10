const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  // Shove them to destination with a flag to illustrate not part of "normal" journey
  req.session.data['C-Y-A'] = req.session.data.destination;
  
});

module.exports = router;
