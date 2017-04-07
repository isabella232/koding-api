# KodingApi.JNameApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimNames**](JNameApi.md#claimNames) | **POST** /JName.claimNames | 
[**one**](JNameApi.md#one) | **POST** /JName.one | 


<a name="claimNames"></a>
# **claimNames**
> DefaultResponse claimNames()





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JNameApi();
apiInstance.claimNames().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="one"></a>
# **one**
> DefaultResponse one(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JNameApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.one(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DefaultSelector**](DefaultSelector.md)| body of the request | 

### Return type

[**DefaultResponse**](DefaultResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

