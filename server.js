const noblox = require('noblox.js');
const express = require('express');
const API = express();
const port = 8080
require('dotenv').config()

API.get("/", async (request, response) => {
    response.send({
        status: 200,
        message: "Welcome to the API!"
    })
})

API.get("/whitelist/:id", async (request, response) => {
    await noblox.buy(request.params.id).then(() => {
        response.send({
            status: 200,
            message: "Map is successfully whitelisted and now able to play!"
        })
    }).catch((err) => {
        response.send({
            status: 404,
            message: toString(err)
        })
    })
})

async function LoginRoblox() {
    const currentUser = await noblox.setCookie(process.env.COOKIE) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}

API.listen(port, () => {
    console.log(`Listening on port ${port}`)
    LoginRoblox()
})
