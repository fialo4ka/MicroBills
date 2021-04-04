/**
 * Sample API
 * A sample API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Bill from '../model/Bill';

/**
* Bills service.
* @module api/BillsApi
* @version 1.0
*/
export default class BillsApi {

    /**
    * Constructs a new BillsApi. 
    * @alias module:api/BillsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteBillResource operation.
     * @callback module:api/BillsApi~deleteBillResourceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} billId The Bill ID
     * @param {module:api/BillsApi~deleteBillResourceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteBillResource(billId, callback) {
      let postBody = null;
      // verify the required parameter 'billId' is set
      if (billId === undefined || billId === null) {
        throw new Error("Missing the required parameter 'billId' when calling deleteBillResource");
      }

      let pathParams = {
        'bill_id': billId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/bills/{bill_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillList operation.
     * @callback module:api/BillsApi~getBillListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all bills
     * @param {Object} opts Optional parameters
     * @param {String} opts.year year
     * @param {String} opts.month month, requires year
     * @param {String} opts.categoryid The user identifier
     * @param {String} opts.userid The user identifier
     * @param {module:api/BillsApi~getBillListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getBillList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'year': opts['year'],
        'month': opts['month'],
        'categoryid': opts['categoryid'],
        'userid': opts['userid']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/bills', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBillResource operation.
     * @callback module:api/BillsApi~getBillResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Bill} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all bills
     * @param {Number} billId The Bill ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.xFields An optional fields mask
     * @param {module:api/BillsApi~getBillResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Bill}
     */
    getBillResource(billId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'billId' is set
      if (billId === undefined || billId === null) {
        throw new Error("Missing the required parameter 'billId' when calling getBillResource");
      }

      let pathParams = {
        'bill_id': billId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Fields': opts['xFields']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Bill;
      return this.apiClient.callApi(
        '/bills/{bill_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postBillList operation.
     * @callback module:api/BillsApi~postBillListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new bills
     * --- tags:   - bills parameters:   - in: body     name: body     schema:       id: Bill       required:         - name       properties:         name:           type: string           description: name of category
     * @param {module:api/BillsApi~postBillListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postBillList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/bills', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putBillResource operation.
     * @callback module:api/BillsApi~putBillResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Bill} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all bills
     * @param {Number} billId The Bill ID
     * @param {module:model/Bill} payload 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xFields An optional fields mask
     * @param {module:api/BillsApi~putBillResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Bill}
     */
    putBillResource(billId, payload, opts, callback) {
      opts = opts || {};
      let postBody = payload;
      // verify the required parameter 'billId' is set
      if (billId === undefined || billId === null) {
        throw new Error("Missing the required parameter 'billId' when calling putBillResource");
      }
      // verify the required parameter 'payload' is set
      if (payload === undefined || payload === null) {
        throw new Error("Missing the required parameter 'payload' when calling putBillResource");
      }

      let pathParams = {
        'bill_id': billId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Fields': opts['xFields']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Bill;
      return this.apiClient.callApi(
        '/bills/{bill_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
