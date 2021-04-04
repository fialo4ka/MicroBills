# SampleApi.CategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCategoryEdit**](CategoriesApi.md#deleteCategoryEdit) | **DELETE** /categories/{category_id} | 
[**getCategoryEdit**](CategoriesApi.md#getCategoryEdit) | **GET** /categories/{category_id} | Get a category
[**getCategoryList**](CategoriesApi.md#getCategoryList) | **GET** /categories | Get a list of category
[**postCategoryList**](CategoriesApi.md#postCategoryList) | **POST** /categories | create a category
[**putCategoryEdit**](CategoriesApi.md#putCategoryEdit) | **PUT** /categories/{category_id} | update a category



## deleteCategoryEdit

> deleteCategoryEdit(categoryId)



### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.CategoriesApi();
let categoryId = 56; // Number | 
apiInstance.deleteCategoryEdit(categoryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCategoryEdit

> Category getCategoryEdit(categoryId, opts)

Get a category

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.CategoriesApi();
let categoryId = 56; // Number | 
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.getCategoryEdit(categoryId, opts, (error, data, response) => {
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
 **categoryId** | **Number**|  | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCategoryList

> [Category] getCategoryList(opts)

Get a list of category

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.CategoriesApi();
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.getCategoryList(opts, (error, data, response) => {
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

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCategoryList

> Category postCategoryList(name, opts)

create a category

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.CategoriesApi();
let name = "name_example"; // String | Category name
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.postCategoryList(name, opts, (error, data, response) => {
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
 **name** | **String**| Category name | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## putCategoryEdit

> Category putCategoryEdit(categoryId, name, opts)

update a category

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.CategoriesApi();
let categoryId = 56; // Number | 
let name = "name_example"; // String | This field cannot be left blank!
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.putCategoryEdit(categoryId, name, opts, (error, data, response) => {
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
 **categoryId** | **Number**|  | 
 **name** | **String**| This field cannot be left blank! | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

