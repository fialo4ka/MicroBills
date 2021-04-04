# SampleApi.BillsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBillResource**](BillsApi.md#deleteBillResource) | **DELETE** /bills/{bill_id} | 
[**getBillList**](BillsApi.md#getBillList) | **GET** /bills | Get a list of all bills
[**getBillResource**](BillsApi.md#getBillResource) | **GET** /bills/{bill_id} | Get a list of all bills
[**postBillList**](BillsApi.md#postBillList) | **POST** /bills | create a new bills
[**putBillResource**](BillsApi.md#putBillResource) | **PUT** /bills/{bill_id} | Get a list of all bills



## deleteBillResource

> deleteBillResource(billId)



### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.BillsApi();
let billId = 56; // Number | The Bill ID
apiInstance.deleteBillResource(billId, (error, data, response) => {
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
 **billId** | **Number**| The Bill ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBillList

> getBillList(opts)

Get a list of all bills

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.BillsApi();
let opts = {
  'year': "year_example", // String | year
  'month': "month_example", // String | month, requires year
  'categoryid': "categoryid_example", // String | The user identifier
  'userid': "userid_example" // String | The user identifier
};
apiInstance.getBillList(opts, (error, data, response) => {
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
 **year** | **String**| year | [optional] 
 **month** | **String**| month, requires year | [optional] 
 **categoryid** | **String**| The user identifier | [optional] 
 **userid** | **String**| The user identifier | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBillResource

> Bill getBillResource(billId, opts)

Get a list of all bills

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.BillsApi();
let billId = 56; // Number | The Bill ID
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.getBillResource(billId, opts, (error, data, response) => {
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
 **billId** | **Number**| The Bill ID | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Bill**](Bill.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postBillList

> postBillList()

create a new bills

--- tags:   - bills parameters:   - in: body     name: body     schema:       id: Bill       required:         - name       properties:         name:           type: string           description: name of category

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.BillsApi();
apiInstance.postBillList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
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


## putBillResource

> Bill putBillResource(billId, payload, opts)

Get a list of all bills

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.BillsApi();
let billId = 56; // Number | The Bill ID
let payload = new SampleApi.Bill(); // Bill | 
let opts = {
  'xFields': "xFields_example" // String | An optional fields mask
};
apiInstance.putBillResource(billId, payload, opts, (error, data, response) => {
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
 **billId** | **Number**| The Bill ID | 
 **payload** | [**Bill**](Bill.md)|  | 
 **xFields** | **String**| An optional fields mask | [optional] 

### Return type

[**Bill**](Bill.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

