# KodingApi.SystemApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionGet**](SystemApi.md#versionGet) | **GET** ../-/version | 


<a name="versionGet"></a>
# **versionGet**
> versionGet()



### Example
```javascript
var KodingApi = require('koding-api');

var apiInstance = new KodingApi.SystemApi();
apiInstance.versionGet().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

