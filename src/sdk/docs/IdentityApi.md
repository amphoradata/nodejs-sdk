# Amphoradata.IdentityApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identityGet**](IdentityApi.md#identityGet) | **GET** /identity | 



## identityGet

> File identityGet(opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.IdentityApi();
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.identityGet(opts, (error, data, response) => {
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

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream

