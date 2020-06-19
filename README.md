# Amphora Data SDK for Javascript, Typescript, and Node

This SDK uses [Axios](https://github.com/axios/axios) as an HTTP client.

## Quickstart

### Install via NPM

```sh
npm i amphoradata
```

### Install via Yarn

```sh
yarn add amphoradata
```

## Login

```js
const ad = require('amphoradata');
const username = process.env["username"];
const password = process.env["password"];

const config = new ad.Configuration();
const authApi = new ad.AuthenticationApi(config)
authApi.authenticationRequestToken({username: username, password: password})
    .then(r => console.log(`token: ${r.data}`))
    .catch(e => console.log("An Error Occurred"))
```

## Generating the SDK from the OpenAPI spec

1. Set the version in [package.json](src/package.json)
2. Run `./generate/.sh` to update the sdk.