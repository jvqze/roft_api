const express = require('express');
const router = express.Router();
const noblox = require('noblox.js');

router.get('/:id', async (req, res) => {
  const params = req.params;

  await noblox.buy(params.id).then(() => {
    res.send({
      status: 200,
      message: "Map is successfully whitelisted and now able to play!"
    })
  }).catch((err) => {
    res.send({
      status: 404,
      message: err.message
    })
  })
});

module.exports = router;