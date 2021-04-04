# SampleApi.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserList**](UsersApi.md#getUserList) | **GET** /users | Get a list of users
[**getUserResource**](UsersApi.md#getUserResource) | **GET** /users/{user_id} | 



## getUserList

> [User] getUserList(opts)

Get a list of users

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.UsersApi();
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.getUserList(opts, (error, data, response) => {
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
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserResource

> User getUserResource(userId, opts)



### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.UsersApi();
let userId = 56; // Number | An ID
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.getUserResource(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| An ID | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

