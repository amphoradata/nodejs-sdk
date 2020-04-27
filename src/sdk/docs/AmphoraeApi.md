# Amphoradata.AmphoraeApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**amphoraeAccessControlsCreateForOrganisation**](AmphoraeApi.md#amphoraeAccessControlsCreateForOrganisation) | **POST** /api/amphorae/{id}/AccessControls/ForOrganisation | Creates an Access Control Rule on this Amphora.
[**amphoraeAccessControlsCreateForUser**](AmphoraeApi.md#amphoraeAccessControlsCreateForUser) | **POST** /api/amphorae/{id}/AccessControls/ForUser | Creates an Access Control rule on this Amphora.
[**amphoraeAccessControlsDelete**](AmphoraeApi.md#amphoraeAccessControlsDelete) | **DELETE** /api/amphorae/{id}/AccessControls/{ruleId} | Deletes an Access Control on this Amphora.
[**amphoraeAccessControlsGetOrganisationRules**](AmphoraeApi.md#amphoraeAccessControlsGetOrganisationRules) | **GET** /api/amphorae/{id}/AccessControls/ForOrganisation | Get&#39;s the list of access rules applied to organisations.
[**amphoraeAccessControlsGetUserRules**](AmphoraeApi.md#amphoraeAccessControlsGetUserRules) | **GET** /api/amphorae/{id}/AccessControls/ForUser | Get&#39;s the list of access rules applied to users.
[**amphoraeCreate**](AmphoraeApi.md#amphoraeCreate) | **POST** /api/amphorae | Creates a new empty Amphora in the user&#39;s organisation.
[**amphoraeDelete**](AmphoraeApi.md#amphoraeDelete) | **DELETE** /api/amphorae/{id} | Deletes an Amphora.
[**amphoraeFilesCreateFileRequest**](AmphoraeApi.md#amphoraeFilesCreateFileRequest) | **POST** /api/amphorae/{id}/files/{file} | Creates a file. Returns a blob URL to upload to.
[**amphoraeFilesDeleteFile**](AmphoraeApi.md#amphoraeFilesDeleteFile) | **DELETE** /api/amphorae/{id}/files/{file} | Get&#39;s the contents of a file. Returns application/octet-stream.
[**amphoraeFilesDownloadFile**](AmphoraeApi.md#amphoraeFilesDownloadFile) | **GET** /api/amphorae/{id}/files/{file} | Get&#39;s the contents of a file. Returns application/octet-stream.
[**amphoraeFilesListFiles**](AmphoraeApi.md#amphoraeFilesListFiles) | **GET** /api/amphorae/{id}/files | Get&#39;s a list of an Amphora&#39;s files.
[**amphoraeFilesWriteFileMetadata**](AmphoraeApi.md#amphoraeFilesWriteFileMetadata) | **POST** /api/amphorae/{id}/files/{file}/meta | 
[**amphoraeRead**](AmphoraeApi.md#amphoraeRead) | **GET** /api/amphorae/{id} | Get&#39;s details of an Amphora by Id.
[**amphoraeSignalsCreateSignal**](AmphoraeApi.md#amphoraeSignalsCreateSignal) | **POST** /api/amphorae/{id}/signals | Associates a signal with an Amphora. Signal is created if not existing.
[**amphoraeSignalsGetSignal**](AmphoraeApi.md#amphoraeSignalsGetSignal) | **GET** /api/amphorae/{id}/signals/{property} | Get&#39;s the signals associated with an Amphora.
[**amphoraeSignalsGetSignals**](AmphoraeApi.md#amphoraeSignalsGetSignals) | **GET** /api/amphorae/{id}/signals | Get&#39;s the signals associated with an Amphora.
[**amphoraeSignalsUpdateSignal**](AmphoraeApi.md#amphoraeSignalsUpdateSignal) | **PUT** /api/amphorae/{id}/signals/{signalId} | Associates a signal with an Amphora. Signal is created if not existing.
[**amphoraeSignalsUploadSignal**](AmphoraeApi.md#amphoraeSignalsUploadSignal) | **POST** /api/amphorae/{id}/signals/values | 
[**amphoraeSignalsUploadSignal2**](AmphoraeApi.md#amphoraeSignalsUploadSignal2) | **POST** /api/amphorae/{id}/signalValues | 
[**amphoraeSignalsUploadSignalBatch**](AmphoraeApi.md#amphoraeSignalsUploadSignalBatch) | **POST** /api/amphorae/{id}/signals/batchvalues | 
[**amphoraeSignalsUploadSignalBatch2**](AmphoraeApi.md#amphoraeSignalsUploadSignalBatch2) | **POST** /api/amphorae/{id}/batchSignalValues | 
[**amphoraeUpdate**](AmphoraeApi.md#amphoraeUpdate) | **PUT** /api/amphorae/{id} | Updates the details of an Amphora by Id.
[**purchasesPurchase**](AmphoraeApi.md#purchasesPurchase) | **POST** /api/Amphorae/{id}/Purchases | Purchases an Amphora as the logged in user.



## amphoraeAccessControlsCreateForOrganisation

> UserAccessRule amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, opts)

Creates an Access Control Rule on this Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let organisationAccessRule = new Amphoradata.OrganisationAccessRule(); // OrganisationAccessRule | The rule to create.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **organisationAccessRule** | [**OrganisationAccessRule**](OrganisationAccessRule.md)| The rule to create. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**UserAccessRule**](UserAccessRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeAccessControlsCreateForUser

> UserAccessRule amphoraeAccessControlsCreateForUser(id, userAccessRule, opts)

Creates an Access Control rule on this Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let userAccessRule = new Amphoradata.UserAccessRule(); // UserAccessRule | The rule to create.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeAccessControlsCreateForUser(id, userAccessRule, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **userAccessRule** | [**UserAccessRule**](UserAccessRule.md)| The rule to create. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**UserAccessRule**](UserAccessRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeAccessControlsDelete

> File amphoraeAccessControlsDelete(id, ruleId, opts)

Deletes an Access Control on this Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let ruleId = "ruleId_example"; // String | The Id of the rule to delete.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeAccessControlsDelete(id, ruleId, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **ruleId** | **String**| The Id of the rule to delete. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## amphoraeAccessControlsGetOrganisationRules

> [OrganisationAccessRule] amphoraeAccessControlsGetOrganisationRules(id, opts)

Get&#39;s the list of access rules applied to organisations.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeAccessControlsGetOrganisationRules(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[OrganisationAccessRule]**](OrganisationAccessRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeAccessControlsGetUserRules

> [UserAccessRule] amphoraeAccessControlsGetUserRules(id, opts)

Get&#39;s the list of access rules applied to users.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeAccessControlsGetUserRules(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[UserAccessRule]**](UserAccessRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeCreate

> DetailedAmphora amphoraeCreate(createAmphora, opts)

Creates a new empty Amphora in the user&#39;s organisation.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let createAmphora = new Amphoradata.CreateAmphora(); // CreateAmphora | Information for the new Amphora.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeCreate(createAmphora, opts, (error, data, response) => {
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
 **createAmphora** | [**CreateAmphora**](CreateAmphora.md)| Information for the new Amphora. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**DetailedAmphora**](DetailedAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeDelete

> String amphoraeDelete(id, opts)

Deletes an Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeFilesCreateFileRequest

> UploadResponse amphoraeFilesCreateFileRequest(id, file, opts)

Creates a file. Returns a blob URL to upload to.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let file = "file_example"; // String | The name of the file.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeFilesCreateFileRequest(id, file, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **file** | **String**| The name of the file. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**UploadResponse**](UploadResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeFilesDeleteFile

> File amphoraeFilesDeleteFile(id, file, opts)

Get&#39;s the contents of a file. Returns application/octet-stream.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let file = "file_example"; // String | The name of the file.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeFilesDeleteFile(id, file, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **file** | **String**| The name of the file. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## amphoraeFilesDownloadFile

> File amphoraeFilesDownloadFile(id, file, opts)

Get&#39;s the contents of a file. Returns application/octet-stream.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let file = "file_example"; // String | The name of the file.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeFilesDownloadFile(id, file, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **file** | **String**| The name of the file. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## amphoraeFilesListFiles

> [String] amphoraeFilesListFiles(id, opts)

Get&#39;s a list of an Amphora&#39;s files.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'orderBy': "orderBy_example", // String | Can be alphabetical or lastModified.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeFilesListFiles(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **orderBy** | **String**| Can be alphabetical or lastModified. | [optional] 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**[String]**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeFilesWriteFileMetadata

> {String: String} amphoraeFilesWriteFileMetadata(id, file, requestBody, opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | 
let file = "file_example"; // String | 
let requestBody = {key: "null"}; // {String: String} | 
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeFilesWriteFileMetadata(id, file, requestBody, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **file** | **String**|  | 
 **requestBody** | [**{String: String}**](String.md)|  | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**{String: String}**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeRead

> DetailedAmphora amphoraeRead(id, opts)

Get&#39;s details of an Amphora by Id.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeRead(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**DetailedAmphora**](DetailedAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeSignalsCreateSignal

> Signal amphoraeSignalsCreateSignal(id, signal, opts)

Associates a signal with an Amphora. Signal is created if not existing.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let signal = new Amphoradata.Signal(); // Signal | Signal Details.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsCreateSignal(id, signal, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **signal** | [**Signal**](Signal.md)| Signal Details. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Signal**](Signal.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeSignalsGetSignal

> Signal amphoraeSignalsGetSignal(id, property, opts)

Get&#39;s the signals associated with an Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let property = "property_example"; // String | The name or id of the signal property.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsGetSignal(id, property, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **property** | **String**| The name or id of the signal property. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Signal**](Signal.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeSignalsGetSignals

> [Signal] amphoraeSignalsGetSignals(id, opts)

Get&#39;s the signals associated with an Amphora.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsGetSignals(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[Signal]**](Signal.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## amphoraeSignalsUpdateSignal

> Signal amphoraeSignalsUpdateSignal(id, signalId, updateSignal, opts)

Associates a signal with an Amphora. Signal is created if not existing.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let signalId = "signalId_example"; // String | Signal Details.
let updateSignal = new Amphoradata.UpdateSignal(); // UpdateSignal | Signal properties to update.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsUpdateSignal(id, signalId, updateSignal, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **signalId** | **String**| Signal Details. | 
 **updateSignal** | [**UpdateSignal**](UpdateSignal.md)| Signal properties to update. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Signal**](Signal.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeSignalsUploadSignal

> amphoraeSignalsUploadSignal(id, requestBody, opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | 
let requestBody = {key: null}; // {String: Object} | 
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsUploadSignal(id, requestBody, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeSignalsUploadSignal2

> amphoraeSignalsUploadSignal2(id, requestBody, opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | 
let requestBody = {key: null}; // {String: Object} | 
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsUploadSignal2(id, requestBody, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**{String: Object}**](Object.md)|  | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeSignalsUploadSignalBatch

> amphoraeSignalsUploadSignalBatch(id, requestBody, opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | 
let requestBody = [null]; // [{String: Object}] | 
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsUploadSignalBatch(id, requestBody, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[{String: Object}]**](Object.md)|  | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeSignalsUploadSignalBatch2

> amphoraeSignalsUploadSignalBatch2(id, requestBody, opts)



### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | 
let requestBody = [null]; // [{String: Object}] | 
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeSignalsUploadSignalBatch2(id, requestBody, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **requestBody** | [**[{String: Object}]**](Object.md)|  | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## amphoraeUpdate

> DetailedAmphora amphoraeUpdate(id, detailedAmphora, opts)

Updates the details of an Amphora by Id.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let detailedAmphora = new Amphoradata.DetailedAmphora(); // DetailedAmphora | Information to update. Nulls are NOT ignored.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.amphoraeUpdate(id, detailedAmphora, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **detailedAmphora** | [**DetailedAmphora**](DetailedAmphora.md)| Information to update. Nulls are NOT ignored. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**DetailedAmphora**](DetailedAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## purchasesPurchase

> String purchasesPurchase(id, opts)

Purchases an Amphora as the logged in user.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.AmphoraeApi();
let id = "id_example"; // String | Amphora Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.purchasesPurchase(id, opts, (error, data, response) => {
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
 **id** | **String**| Amphora Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

