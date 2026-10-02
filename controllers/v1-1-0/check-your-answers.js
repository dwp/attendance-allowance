const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  // Shove them to destination with a flag to illustrate not part of "normal" journey
  req.session.data["C-Y-A"] = req.session.data.destination;
  // nosemgrep: nodejs_scan.javascript-redirect-rule-express_open_redirect
  res.redirect(`${req.version}${req.session.data.destination}`); // njsscan-ignore: express_open_redirect
});

module.exports = router;
