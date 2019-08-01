/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.1.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CustomerThread', 'model/CustomerThread1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomerThread'), require('../model/CustomerThread1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CustomerThreadsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CustomerThread, root.KinowJavascriptSdk.CustomerThread1);
  }
}(this, function(ApiClient, CustomerThread, CustomerThread1) {
  'use strict';

  /**
   * CustomerThreads service.
   * @module api/CustomerThreadsApi
   * @version 1.1.5
   */

  /**
   * Constructs a new CustomerThreadsApi. 
   * @alias module:api/CustomerThreadsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get customer thread
     * @param {Integer} customerThreadId Customer thread ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerThread} and HTTP response
     */
    this.getCustomerThreadWithHttpInfo = function(customerThreadId) {
      var postBody = null;

      // verify the required parameter 'customerThreadId' is set
      if (customerThreadId === undefined || customerThreadId === null) {
        throw new Error("Missing the required parameter 'customerThreadId' when calling getCustomerThread");
      }


      var pathParams = {
        'customer_thread_id': customerThreadId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CustomerThread;

      return this.apiClient.callApi(
        '/customer-threads/{customer_thread_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer thread
     * @param {Integer} customerThreadId Customer thread ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerThread}
     */
    this.getCustomerThread = function(customerThreadId) {
      return this.getCustomerThreadWithHttpInfo(customerThreadId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get customer threads list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.dateAdd 
     * @param {module:model/String} opts.dateAddOperator 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomerThread1} and HTTP response
     */
    this.getCustomerThreadsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'date_add': opts['dateAdd'],
        'date_add_operator': opts['dateAddOperator'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = CustomerThread1;

      return this.apiClient.callApi(
        '/customer-threads', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer threads list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.dateAdd 
     * @param {module:model/String} opts.dateAddOperator 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomerThread1}
     */
    this.getCustomerThreads = function(opts) {
      return this.getCustomerThreadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
