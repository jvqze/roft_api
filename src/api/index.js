const express = require('express');
const whitelistpage = require('./whitelist');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: './whitelist is ready',
  });
});

router.use('/whitelist', whitelistpage);

module.exports = router;