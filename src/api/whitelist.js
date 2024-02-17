const express = require('express');
const router = express.Router();
const noblox = require('noblox.js');

router.get('/:id', async (req, res) => {
  const params = req.params;
  const query = req.query;

  function hexToDecimal(hex) {
    return parseInt(hex.replace("#", ""), 16)
  }

  await noblox.buy(params.id).then(() => {

    const header = {
      "Content-Type": "application/json",
    }

    var embed = {
      author: {
        name: `⚠ New Whitelisted Map ⚠`
      },
      description: `**User ID**: ${query.userid}\n**Map ID**: ${params.id}`,
      color: hexToDecimal("#d1ab6a")
    }

    fetch(process.env.WEBHOOK, {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        embeds: [embed]
      }),
    })

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