/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.70
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
    define(['ApiClient', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Image'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.SuppliersApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';

  /**
   * Suppliers service.
   * @module api/SuppliersApi
   * @version 1.0.70
   */

  /**
   * Constructs a new SuppliersApi. 
   * @alias module:api/SuppliersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Please, use __/actors/{actor_id}/cover__
     * @param {Integer} supplierId ID of the supplier to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Image} and HTTP response
     */
    this.getSupplierCoverImageWithHttpInfo = function(supplierId) {
      var postBody = null;

      // verify the required parameter 'supplierId' is set
      if (supplierId === undefined || supplierId === null) {
        throw new Error("Missing the required parameter 'supplierId' when calling getSupplierCoverImage");
      }


      var pathParams = {
        'supplier_id': supplierId
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
      var returnType = Image;

      return this.apiClient.callApi(
        '/suppliers/{supplier_id}/cover', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Please, use __/actors/{actor_id}/cover__
     * @param {Integer} supplierId ID of the supplier to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Image}
     */
    this.getSupplierCoverImage = function(supplierId) {
      return this.getSupplierCoverImageWithHttpInfo(supplierId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
