# Amphoradata.AuthenticationApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticationRequestToken**](AuthenticationApi.md#authenticationRequestToken) | **POST** /api/authentication/request | Returns a JWT (JSON Web Token).             



## authenticationRequestToken

> String authenticationRequestToken(loginRequest, opts)

Returns a JWT (JSON Web Token).             

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AuthenticationApi();
let loginRequest = new Amphoradata.LoginRequest(); // LoginRequest | Token Request Parameters.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.authenticationRequestToken(loginRequest, opts, (error, data, response) => {
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
 **loginRequest** | [**LoginRequest**](LoginRequest.md)| Token Request Parameters. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

