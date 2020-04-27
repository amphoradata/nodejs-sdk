# Amphoradata.UsersApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCreate**](UsersApi.md#usersCreate) | **POST** /api/users | Creates a new User. Returns the password.
[**usersReadSelf**](UsersApi.md#usersReadSelf) | **GET** /api/users/self | Get&#39;s logged in users information.



## usersCreate

> AmphoraUser usersCreate(createAmphoraUser, opts)

Creates a new User. Returns the password.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.UsersApi();
let createAmphoraUser = new Amphoradata.CreateAmphoraUser(); // CreateAmphoraUser | User parameters.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.usersCreate(createAmphoraUser, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAmphoraUser** | [**CreateAmphoraUser**](CreateAmphoraUser.md)| User parameters. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**AmphoraUser**](AmphoraUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersReadSelf

> AmphoraUser usersReadSelf(opts)

Get&#39;s logged in users information.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.UsersApi();
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.usersReadSelf(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**AmphoraUser**](AmphoraUser.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

