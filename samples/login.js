// import Amphoradata from 'amphoradata';
const ad = require('amphoradata');
const username = process.env["username"];
const password = process.env["password"];

const config = new ad.Configuration();
const authApi = new ad.AuthenticationApi(config)
authApi.authenticationRequestToken({username: username, password: password})
    .then(r => console.log(`token: ${r.data}`))
    .catch(e => console.log("An Error Occurred"))
