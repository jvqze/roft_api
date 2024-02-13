const noblox = require('noblox.js');
const express = require('express');
const API = express();
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

API.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
    LoginRoblox()
})
