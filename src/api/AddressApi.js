/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.19
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
    define(['ApiClient', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.AddressApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Address);
  }
}(this, function(ApiClient, Address) {
  'use strict';

  /**
   * Address service.
   * @module api/AddressApi
   * @version 1.3.19
   */

  /**
   * Constructs a new AddressApi. 
   * @alias module:api/AddressApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get customer address
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
    this.getCustomerAddressWithHttpInfo = function(customerId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerAddress");
      }


      var pathParams = {
        'customer_id': customerId
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/customers/{customer_id}/address', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer address
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.getCustomerAddress = function(customerId) {
      return this.getCustomerAddressWithHttpInfo(customerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update address
     * @param {Integer} addressId Address ID to update
     * @param {module:model/Address} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Address} and HTTP response
     */
    this.updateAddressWithHttpInfo = function(addressId, body) {
      var postBody = body;

      // verify the required parameter 'addressId' is set
      if (addressId === undefined || addressId === null) {
        throw new Error("Missing the required parameter 'addressId' when calling updateAddress");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAddress");
      }


      var pathParams = {
        'address_id': addressId
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
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{address_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update address
     * @param {Integer} addressId Address ID to update
     * @param {module:model/Address} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.updateAddress = function(addressId, body) {
      return this.updateAddressWithHttpInfo(addressId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
