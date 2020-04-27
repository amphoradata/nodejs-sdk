# Amphoradata.TimeSeriesApi

All URIs are relative to *https://app.amphoradata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timeSeriesQueryTimeSeries**](TimeSeriesApi.md#timeSeriesQueryTimeSeries) | **POST** /api/timeseries/query | Updates the details of an Amphora by Id.



## timeSeriesQueryTimeSeries

> QueryResultPage timeSeriesQueryTimeSeries(queryRequest, opts)

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

let apiInstance = new Amphoradata.TimeSeriesApi();
let queryRequest = new Amphoradata.QueryRequest(); // QueryRequest | Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
let opts = {
  'xAmphoradataVersion': "xAmphoradataVersion_example" // String | API Version Number
};
apiInstance.timeSeriesQueryTimeSeries(queryRequest, opts, (error, data, response) => {
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
 **queryRequest** | [**QueryRequest**](QueryRequest.md)| Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions . | 
 **xAmphoradataVersion** | **String**| API Version Number | [optional] 

### Return type

[**QueryResultPage**](QueryResultPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

