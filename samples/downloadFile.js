var client = new (require("../src/lib/client")).Client();

const username = process.env["username"];
const password = process.env["password"];

const amphoraId = "8d4ac827-4e56-4012-8dfb-a8a638abf1ca"; // wine crush data

// NOTE: you must have purchased the Amphora to download the file.

// async main function
(async function main() {
    var token = await client.authentication.requestToken(
        { username, password },
        { customHeaders: { "accept": "application/json" } }); // there's an issue where autorest can't decode without this header

    console.log("got a token " + token);
    const options = { customHeaders: { "Authorization": "Bearer " + token } };
    
    var files = await client.amphoraeFiles.listFiles(amphoraId, options);
    console.log(files);
    files.forEach(async f => {
        var data = await client.amphoraeFiles.downloadFile(amphoraId, f, options);
        // do something with the data here, like save it to disk.
        // this doesn't work, it expects json
        console.log(`Downloaded ${data.length} bytes of file ${f}`);
    })
})()
