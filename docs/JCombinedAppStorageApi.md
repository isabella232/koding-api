# KodingApi.JCombinedAppStorageApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**upsert**](JCombinedAppStorageApi.md#upsert) | **POST** /JCombinedAppStorage.upsert/{id} | 


<a name="upsert"></a>
# **upsert**
> DefaultResponse upsert(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JCombinedAppStorageApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.upsert(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Mongo ID of target instance | 
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

