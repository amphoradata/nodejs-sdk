# Amphoradata.SearchApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSearchAmphorae**](SearchApi.md#searchSearchAmphorae) | **POST** /api/search/amphorae | Searches for Amphorae.
[**searchSearchAmphoraeByLocation**](SearchApi.md#searchSearchAmphoraeByLocation) | **GET** /api/search/amphorae/byLocation | Searches for Amphorae by loction.
[**searchSearchAmphoraeByOrganisation**](SearchApi.md#searchSearchAmphoraeByOrganisation) | **GET** /api/search/amphorae/byOrganisation | Searches for Amphorae in an Organisation.
[**searchSearchOrganisations**](SearchApi.md#searchSearchOrganisations) | **GET** /api/search/organisations | Searches for Organisations with fuzzy search.



## searchSearchAmphorae

> [BasicAmphora] searchSearchAmphorae(searchParameters, opts)

Searches for Amphorae.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.SearchApi();
let searchParameters = new Amphoradata.SearchParameters(); // SearchParameters | Search parameters.
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.searchSearchAmphorae(searchParameters, opts, (error, data, response) => {
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
 **searchParameters** | [**SearchParameters**](SearchParameters.md)| Search parameters. | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[BasicAmphora]**](BasicAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchSearchAmphoraeByLocation

> [BasicAmphora] searchSearchAmphoraeByLocation(opts)

Searches for Amphorae by loction.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.SearchApi();
let opts = {
  'lat': 3.4, // Number | Latitude.
  'lon': 3.4, // Number | Longitude.
  'dist': 10.0, // Number | Distance from Latitude and Longitude in which to search.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.searchSearchAmphoraeByLocation(opts, (error, data, response) => {
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
 **lat** | **Number**| Latitude. | [optional] 
 **lon** | **Number**| Longitude. | [optional] 
 **dist** | **Number**| Distance from Latitude and Longitude in which to search. | [optional] [default to 10.0]
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[BasicAmphora]**](BasicAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSearchAmphoraeByOrganisation

> [BasicAmphora] searchSearchAmphoraeByOrganisation(opts)

Searches for Amphorae in an Organisation.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.SearchApi();
let opts = {
  'orgId': "orgId_example", // String | Organisation Id.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.searchSearchAmphoraeByOrganisation(opts, (error, data, response) => {
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
 **orgId** | **String**| Organisation Id. | [optional] 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[BasicAmphora]**](BasicAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSearchOrganisations

> [Organisation] searchSearchOrganisations(opts)

Searches for Organisations with fuzzy search.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.SearchApi();
let opts = {
  'term': "term_example", // String | Search Term.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.searchSearchOrganisations(opts, (error, data, response) => {
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
 **term** | **String**| Search Term. | [optional] 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[Organisation]**](Organisation.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

