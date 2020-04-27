# Amphoradata.OrganisationsApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountGetPlan**](OrganisationsApi.md#accountGetPlan) | **GET** /api/Organisations/{id}/Account/Plan | Get&#39;s an Organisation&#39;s plan information.
[**accountRead**](OrganisationsApi.md#accountRead) | **GET** /api/Organisations/{id}/Account | Get&#39;s an Organisation&#39;s account information.
[**organisationsCreate**](OrganisationsApi.md#organisationsCreate) | **POST** /api/organisations | Creates a new Organisation. This will assign the logged in user to the organisation.
[**organisationsDelete**](OrganisationsApi.md#organisationsDelete) | **DELETE** /api/organisations/{id} | Deletes an organisation.
[**organisationsRead**](OrganisationsApi.md#organisationsRead) | **GET** /api/organisations/{id} | Gets an organisation&#39;s details.
[**organisationsUpdate**](OrganisationsApi.md#organisationsUpdate) | **PUT** /api/organisations/{id} | Updates an organisation.
[**termsAndConditionsCreate**](OrganisationsApi.md#termsAndConditionsCreate) | **POST** /api/Organisations/{id}/TermsAndConditions | Adds new Terms and Conditions to your Organisations T/C Library.
[**termsAndConditionsRead**](OrganisationsApi.md#termsAndConditionsRead) | **GET** /api/Organisations/{id}/TermsAndConditions | Get&#39;s a list of an Organisation&#39;s Terms and Conditions.



## accountGetPlan

> PlanInformation accountGetPlan(id, opts)

Get&#39;s an Organisation&#39;s plan information.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | Organisation Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.accountGetPlan(id, opts, (error, data, response) => {
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
 **id** | **String**| Organisation Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**PlanInformation**](PlanInformation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## accountRead

> Account accountRead(id, opts)

Get&#39;s an Organisation&#39;s account information.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | Organisation Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.accountRead(id, opts, (error, data, response) => {
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
 **id** | **String**| Organisation Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationsCreate

> Organisation organisationsCreate(organisation, opts)

Creates a new Organisation. This will assign the logged in user to the organisation.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let organisation = new Amphoradata.Organisation(); // Organisation | Information of the new Organisation.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.organisationsCreate(organisation, opts, (error, data, response) => {
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
 **organisation** | [**Organisation**](Organisation.md)| Information of the new Organisation. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## organisationsDelete

> String organisationsDelete(id, opts)

Deletes an organisation.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | Organisation Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.organisationsDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| Organisation Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationsRead

> Organisation organisationsRead(id, opts)

Gets an organisation&#39;s details.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | Organisation Id.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.organisationsRead(id, opts, (error, data, response) => {
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
 **id** | **String**| Organisation Id. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**Organisation**](Organisation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationsUpdate

> File organisationsUpdate(id, organisation, opts)

Updates an organisation.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | Organisation Id.
let organisation = new Amphoradata.Organisation(); // Organisation | Organisation Information. All fields are updated.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.organisationsUpdate(id, organisation, opts, (error, data, response) => {
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
 **id** | **String**| Organisation Id. | 
 **organisation** | [**Organisation**](Organisation.md)| Organisation Information. All fields are updated. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

**File**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream


## termsAndConditionsCreate

> TermsAndConditions termsAndConditionsCreate(id, termsAndConditions, opts)

Adds new Terms and Conditions to your Organisations T/C Library.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | The Id of the Organisation.
let termsAndConditions = new Amphoradata.TermsAndConditions(); // TermsAndConditions | The new Terms and Conditions.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.termsAndConditionsCreate(id, termsAndConditions, opts, (error, data, response) => {
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
 **id** | **String**| The Id of the Organisation. | 
 **termsAndConditions** | [**TermsAndConditions**](TermsAndConditions.md)| The new Terms and Conditions. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**TermsAndConditions**](TermsAndConditions.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## termsAndConditionsRead

> [TermsAndConditions] termsAndConditionsRead(id, opts)

Get&#39;s a list of an Organisation&#39;s Terms and Conditions.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.OrganisationsApi();
let id = "id_example"; // String | The Id of the Organisation.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.termsAndConditionsRead(id, opts, (error, data, response) => {
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
 **id** | **String**| The Id of the Organisation. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[TermsAndConditions]**](TermsAndConditions.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

