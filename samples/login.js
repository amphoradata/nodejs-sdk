// import Amphoradata from 'amphoradata';
import {ApiClient} from 'amphoradata';
const username = process.env["username"];
const password = process.env["password"];

var client = new ApiClient()
var x = new ad.AmphoraeApi()
let authApi = new ad.AuthenticationApi();

// async main function
(async function main() {
    var token = await authApi.authenticationRequestToken({ username, password });

    console.log("got a token " + token);

    let usersApi = new Amphoradata.UsersApi();
    let Bearer = defaultClient.authentications['Bearer'];
    Bearer.apiKey = 'YOUR API KEY';
    Bearer.apiKeyPrefix = 'Token';
    var self = await usersApi.usersReadSelf();
    console.log(self)
})()
