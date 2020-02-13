var client = new (require("../src/lib/client")).Client();

const username = process.env["username"];
const password = process.env["password"];

// async main function
(async function main() {
    var token = await client.authentication.requestToken(
        { username, password },
        { customHeaders: { "accept": "application/json" } }); // there's an issue where autorest can't decode without this header

    console.log("got a token " + token);
    const options = { customHeaders: { "Authorization": "Bearer " + token } };
    var self = await client.users.readSelf(options);
    console.log(self)
})()
