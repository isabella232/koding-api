# KodingApi.JGroupApi

All URIs are relative to *https://koding.com/remote.api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubscription**](JGroupApi.md#addSubscription) | **POST** /JGroup.addSubscription/{id} | 
[**byRelevance**](JGroupApi.md#byRelevance) | **POST** /JGroup.byRelevance | 
[**canEditGroup**](JGroupApi.md#canEditGroup) | **POST** /JGroup.canEditGroup/{id} | 
[**changeMemberRoles**](JGroupApi.md#changeMemberRoles) | **POST** /JGroup.changeMemberRoles/{id} | 
[**count**](JGroupApi.md#count) | **POST** /JGroup.count | 
[**create**](JGroupApi.md#create) | **POST** /JGroup.create | 
[**destroy**](JGroupApi.md#destroy) | **POST** /JGroup.destroy/{id} | 
[**each**](JGroupApi.md#each) | **POST** /JGroup.each | 
[**fetchAdmins**](JGroupApi.md#fetchAdmins) | **POST** /JGroup.fetchAdmins/{id} | 
[**fetchAdminsWithEmail**](JGroupApi.md#fetchAdminsWithEmail) | **POST** /JGroup.fetchAdminsWithEmail/{id} | 
[**fetchApiTokens**](JGroupApi.md#fetchApiTokens) | **POST** /JGroup.fetchApiTokens/{id} | 
[**fetchBlockedAccounts**](JGroupApi.md#fetchBlockedAccounts) | **POST** /JGroup.fetchBlockedAccounts/{id} | 
[**fetchBlockedAccountsWithEmail**](JGroupApi.md#fetchBlockedAccountsWithEmail) | **POST** /JGroup.fetchBlockedAccountsWithEmail/{id} | 
[**fetchDataAt**](JGroupApi.md#fetchDataAt) | **POST** /JGroup.fetchDataAt/{id} | 
[**fetchMembers**](JGroupApi.md#fetchMembers) | **POST** /JGroup.fetchMembers/{id} | 
[**fetchMembersWithEmail**](JGroupApi.md#fetchMembersWithEmail) | **POST** /JGroup.fetchMembersWithEmail/{id} | 
[**fetchModerators**](JGroupApi.md#fetchModerators) | **POST** /JGroup.fetchModerators/{id} | 
[**fetchModeratorsWithEmail**](JGroupApi.md#fetchModeratorsWithEmail) | **POST** /JGroup.fetchModeratorsWithEmail/{id} | 
[**fetchMyMemberships**](JGroupApi.md#fetchMyMemberships) | **POST** /JGroup.fetchMyMemberships | 
[**fetchMyRoles**](JGroupApi.md#fetchMyRoles) | **POST** /JGroup.fetchMyRoles/{id} | 
[**fetchPermissionSetOrDefault**](JGroupApi.md#fetchPermissionSetOrDefault) | **POST** /JGroup.fetchPermissionSetOrDefault/{id} | 
[**fetchPermissions**](JGroupApi.md#fetchPermissions) | **POST** /JGroup.fetchPermissions/{id} | 
[**fetchResources**](JGroupApi.md#fetchResources) | **POST** /JGroup.fetchResources/{id} | 
[**fetchRoles**](JGroupApi.md#fetchRoles) | **POST** /JGroup.fetchRoles/{id} | 
[**fetchSubscription**](JGroupApi.md#fetchSubscription) | **POST** /JGroup.fetchSubscription/{id} | 
[**fetchUserRoles**](JGroupApi.md#fetchUserRoles) | **POST** /JGroup.fetchUserRoles/{id} | 
[**fetchUserStatus**](JGroupApi.md#fetchUserStatus) | **POST** /JGroup.fetchUserStatus/{id} | 
[**isMember**](JGroupApi.md#isMember) | **POST** /JGroup.isMember/{id} | 
[**join**](JGroupApi.md#join) | **POST** /JGroup.join/{id} | 
[**joinUser**](JGroupApi.md#joinUser) | **POST** /JGroup.joinUser | 
[**kickMember**](JGroupApi.md#kickMember) | **POST** /JGroup.kickMember/{id} | 
[**leave**](JGroupApi.md#leave) | **POST** /JGroup.leave/{id} | 
[**modify**](JGroupApi.md#modify) | **POST** /JGroup.modify/{id} | 
[**modifyData**](JGroupApi.md#modifyData) | **POST** /JGroup.modifyData/{id} | 
[**one**](JGroupApi.md#one) | **POST** /JGroup.one | 
[**searchMembers**](JGroupApi.md#searchMembers) | **POST** /JGroup.searchMembers/{id} | 
[**sendNotification**](JGroupApi.md#sendNotification) | **POST** /JGroup.sendNotification/{id} | 
[**setLimit**](JGroupApi.md#setLimit) | **POST** /JGroup.setLimit/{id} | 
[**setOAuth**](JGroupApi.md#setOAuth) | **POST** /JGroup.setOAuth/{id} | 
[**someWithRelationship**](JGroupApi.md#someWithRelationship) | **POST** /JGroup.someWithRelationship | 
[**suggestUniqueSlug**](JGroupApi.md#suggestUniqueSlug) | **POST** /JGroup.suggestUniqueSlug | 
[**toggleFeature**](JGroupApi.md#toggleFeature) | **POST** /JGroup.toggleFeature/{id} | 
[**transferOwnership**](JGroupApi.md#transferOwnership) | **POST** /JGroup.transferOwnership/{id} | 
[**unblockMember**](JGroupApi.md#unblockMember) | **POST** /JGroup.unblockMember/{id} | 
[**updatePermissions**](JGroupApi.md#updatePermissions) | **POST** /JGroup.updatePermissions/{id} | 


<a name="addSubscription"></a>
# **addSubscription**
> DefaultResponse addSubscription(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.addSubscription(id, body).then(function(data) {
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

<a name="byRelevance"></a>
# **byRelevance**
> DefaultResponse byRelevance(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.byRelevance(body).then(function(data) {
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

<a name="canEditGroup"></a>
# **canEditGroup**
> DefaultResponse canEditGroup(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.canEditGroup(id, body).then(function(data) {
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

<a name="changeMemberRoles"></a>
# **changeMemberRoles**
> DefaultResponse changeMemberRoles(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.changeMemberRoles(id, body).then(function(data) {
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

<a name="count"></a>
# **count**
> DefaultResponse count(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.count(body).then(function(data) {
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

<a name="create"></a>
# **create**
> DefaultResponse create(body)



Method JGroup.create

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.create(body).then(function(data) {
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

<a name="destroy"></a>
# **destroy**
> DefaultResponse destroy(id, body)



Method JGroup.destroy

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.destroy(id, body).then(function(data) {
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

<a name="each"></a>
# **each**
> DefaultResponse each(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.each(body).then(function(data) {
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

<a name="fetchAdmins"></a>
# **fetchAdmins**
> DefaultResponse fetchAdmins(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchAdmins(id, body).then(function(data) {
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

<a name="fetchAdminsWithEmail"></a>
# **fetchAdminsWithEmail**
> DefaultResponse fetchAdminsWithEmail(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchAdminsWithEmail(id, body).then(function(data) {
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

<a name="fetchApiTokens"></a>
# **fetchApiTokens**
> DefaultResponse fetchApiTokens(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchApiTokens(id, body).then(function(data) {
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

<a name="fetchBlockedAccounts"></a>
# **fetchBlockedAccounts**
> DefaultResponse fetchBlockedAccounts(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchBlockedAccounts(id, body).then(function(data) {
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

<a name="fetchBlockedAccountsWithEmail"></a>
# **fetchBlockedAccountsWithEmail**
> DefaultResponse fetchBlockedAccountsWithEmail(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchBlockedAccountsWithEmail(id, body).then(function(data) {
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

<a name="fetchDataAt"></a>
# **fetchDataAt**
> DefaultResponse fetchDataAt(id, body)



Method JGroup.fetchDataAt

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchDataAt(id, body).then(function(data) {
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

<a name="fetchMembers"></a>
# **fetchMembers**
> DefaultResponse fetchMembers(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchMembers(id, body).then(function(data) {
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

<a name="fetchMembersWithEmail"></a>
# **fetchMembersWithEmail**
> DefaultResponse fetchMembersWithEmail(id, body)



Method JGroup.fetchMembersWithEmail

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchMembersWithEmail(id, body).then(function(data) {
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

<a name="fetchModerators"></a>
# **fetchModerators**
> DefaultResponse fetchModerators(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchModerators(id, body).then(function(data) {
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

<a name="fetchModeratorsWithEmail"></a>
# **fetchModeratorsWithEmail**
> DefaultResponse fetchModeratorsWithEmail(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchModeratorsWithEmail(id, body).then(function(data) {
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

<a name="fetchMyMemberships"></a>
# **fetchMyMemberships**
> DefaultResponse fetchMyMemberships(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchMyMemberships(body).then(function(data) {
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

<a name="fetchMyRoles"></a>
# **fetchMyRoles**
> DefaultResponse fetchMyRoles(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchMyRoles(id, body).then(function(data) {
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

<a name="fetchPermissionSetOrDefault"></a>
# **fetchPermissionSetOrDefault**
> DefaultResponse fetchPermissionSetOrDefault(id, body)



Method JGroup.fetchPermissionSetOrDefault

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchPermissionSetOrDefault(id, body).then(function(data) {
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

<a name="fetchPermissions"></a>
# **fetchPermissions**
> DefaultResponse fetchPermissions(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchPermissions(id, body).then(function(data) {
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

<a name="fetchResources"></a>
# **fetchResources**
> DefaultResponse fetchResources(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchResources(id, body).then(function(data) {
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

<a name="fetchRoles"></a>
# **fetchRoles**
> DefaultResponse fetchRoles(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchRoles(id, body).then(function(data) {
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

<a name="fetchSubscription"></a>
# **fetchSubscription**
> DefaultResponse fetchSubscription(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchSubscription(id, body).then(function(data) {
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

<a name="fetchUserRoles"></a>
# **fetchUserRoles**
> DefaultResponse fetchUserRoles(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchUserRoles(id, body).then(function(data) {
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

<a name="fetchUserStatus"></a>
# **fetchUserStatus**
> DefaultResponse fetchUserStatus(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.fetchUserStatus(id, body).then(function(data) {
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

<a name="isMember"></a>
# **isMember**
> DefaultResponse isMember(id, body)



Method JGroup.isMember

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.isMember(id, body).then(function(data) {
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

<a name="join"></a>
# **join**
> DefaultResponse join(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.join(id, body).then(function(data) {
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

<a name="joinUser"></a>
# **joinUser**
> DefaultResponse joinUser(body)



joinUser  Joins user with given options to group either by logging in or converting them.

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.joinUser(body).then(function(data) {
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

<a name="kickMember"></a>
# **kickMember**
> DefaultResponse kickMember(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.kickMember(id, body).then(function(data) {
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

<a name="leave"></a>
# **leave**
> DefaultResponse leave(id, body)



Method JGroup.leave

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.leave(id, body).then(function(data) {
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

<a name="modify"></a>
# **modify**
> DefaultResponse modify(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.modify(id, body).then(function(data) {
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

<a name="modifyData"></a>
# **modifyData**
> Error modifyData(id, body)



modifies JGroupData related with the JGroup instance

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.Body4(); // Body4 | body of the request

apiInstance.modifyData(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Mongo ID of target instance | 
 **body** | [**Body4**](Body4.md)| body of the request | 

### Return type

[**Error**](Error.md)

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

var apiInstance = new KodingApi.JGroupApi();

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

<a name="searchMembers"></a>
# **searchMembers**
> DefaultResponse searchMembers(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.searchMembers(id, body).then(function(data) {
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

<a name="sendNotification"></a>
# **sendNotification**
> DefaultResponse sendNotification(id, body)



Method JGroup.sendNotification

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.sendNotification(id, body).then(function(data) {
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

<a name="setLimit"></a>
# **setLimit**
> DefaultResponse setLimit(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.setLimit(id, body).then(function(data) {
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

<a name="setOAuth"></a>
# **setOAuth**
> DefaultResponse setOAuth(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.setOAuth(id, body).then(function(data) {
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

<a name="someWithRelationship"></a>
# **someWithRelationship**
> DefaultResponse someWithRelationship(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.someWithRelationship(body).then(function(data) {
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

<a name="suggestUniqueSlug"></a>
# **suggestUniqueSlug**
> DefaultResponse suggestUniqueSlug(body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.suggestUniqueSlug(body).then(function(data) {
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

<a name="toggleFeature"></a>
# **toggleFeature**
> DefaultResponse toggleFeature(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.toggleFeature(id, body).then(function(data) {
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

<a name="transferOwnership"></a>
# **transferOwnership**
> DefaultResponse transferOwnership(id, body)



Method JGroup.transferOwnership

### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.transferOwnership(id, body).then(function(data) {
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

<a name="unblockMember"></a>
# **unblockMember**
> DefaultResponse unblockMember(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.unblockMember(id, body).then(function(data) {
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

<a name="updatePermissions"></a>
# **updatePermissions**
> DefaultResponse updatePermissions(id, body)





### Example
```javascript
var KodingApi = require('koding-api');
var defaultClient = KodingApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new KodingApi.JGroupApi();

var id = "id_example"; // String | Mongo ID of target instance

var body = new KodingApi.DefaultSelector(); // DefaultSelector | body of the request

apiInstance.updatePermissions(id, body).then(function(data) {
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

