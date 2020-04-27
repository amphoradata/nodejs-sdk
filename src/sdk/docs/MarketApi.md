# Amphoradata.MarketApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketFind**](MarketApi.md#marketFind) | **GET** /api/market/search | Finds Amphora using a fuzzy search.
[**marketLookupLocation**](MarketApi.md#marketLookupLocation) | **GET** /api/location/fuzzy | Executes a fuzzy location search.



## marketFind

> [BasicAmphora] marketFind(opts)

Finds Amphora using a fuzzy search.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.MarketApi();
let opts = {
  'query': "query_example", // String | A string as a search term.
  'top': 56, // Number | How many results to return.
  'skip': 56, // Number | How many pages (in multiples of top) to skip.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.marketFind(opts, (error, data, response) => {
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
 **query** | **String**| A string as a search term. | [optional] 
 **top** | **Number**| How many results to return. | [optional] 
 **skip** | **Number**| How many pages (in multiples of top) to skip. | [optional] 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**[BasicAmphora]**](BasicAmphora.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## marketLookupLocation

> FuzzySearchResponse marketLookupLocation(opts)

Executes a fuzzy location search.

### Example

```javascript
import Amphoradata from 'amphoradata';
let defaultClient = Amphoradata.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new Amphoradata.MarketApi();
let opts = {
  'query': "query_example", // String | Search Text.
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.marketLookupLocation(opts, (error, data, response) => {
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
 **query** | **String**| Search Text. | [optional] 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**FuzzySearchResponse**](FuzzySearchResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

