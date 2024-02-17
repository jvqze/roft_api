const app = require('./app');
const noblox = require('noblox.js');

const port = process.env.PORT

async function LoginRoblox() {
  const currentUser = await noblox.setCookie(process.env.COOKIE) 
  console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
}

app.listen(port, () => {
  console.log(`Listening under Port ${port}`);
  LoginRoblox()
});