# KodingApi.S3Api

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generatePolicy**](S3Api.md#generatePolicy) | **POST** /S3.generatePolicy | 


<a name="generatePolicy"></a>
# **generatePolicy**
> DefaultResponse generatePolicy()





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.S3Api();
apiInstance.generatePolicy().then(function(data) {
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

