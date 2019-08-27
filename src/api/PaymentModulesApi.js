/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/PaymentModules', 'model/PaymentUrl', 'model/PaymentArguments'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaymentModules'), require('../model/PaymentUrl'), require('../model/PaymentArguments'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PaymentModulesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.PaymentModules, root.KinowJavascriptSdk.PaymentUrl, root.KinowJavascriptSdk.PaymentArguments);
  }
}(this, function(ApiClient, PaymentModules, PaymentUrl, PaymentArguments) {
  'use strict';

  /**
   * PaymentModules service.
   * @module api/PaymentModulesApi
   * @version 1.3.0
   */

  /**
   * Constructs a new PaymentModulesApi. 
   * @alias module:api/PaymentModulesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get payment modules list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentModules} and HTTP response
     */
    this.getPaymentModulesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = PaymentModules;

      return this.apiClient.callApi(
        '/payment-modules', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment modules list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentModules}
     */
    this.getPaymentModules = function(opts) {
      return this.getPaymentModulesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get payment url
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment module name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentUrl} and HTTP response
     */
    this.getPaymentUrlWithHttpInfo = function(cartId, paymentName) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getPaymentUrl");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling getPaymentUrl");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
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
      var returnType = PaymentUrl;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments/{payment_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get payment url
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment module name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentUrl}
     */
    this.getPaymentUrl = function(cartId, paymentName) {
      return this.getPaymentUrlWithHttpInfo(cartId, paymentName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate order
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment module name
     * @param {module:model/PaymentArguments} paymentArguments payment arguments, token and tokenType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validateCartWithHttpInfo = function(cartId, paymentName, paymentArguments) {
      var postBody = paymentArguments;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling validateCart");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling validateCart");
      }

      // verify the required parameter 'paymentArguments' is set
      if (paymentArguments === undefined || paymentArguments === null) {
        throw new Error("Missing the required parameter 'paymentArguments' when calling validateCart");
      }


      var pathParams = {
        'cart_id': cartId,
        'payment_name': paymentName
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
      var returnType = null;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments/{payment_name}/validate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate order
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment module name
     * @param {module:model/PaymentArguments} paymentArguments payment arguments, token and tokenType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validateCart = function(cartId, paymentName, paymentArguments) {
      return this.validateCartWithHttpInfo(cartId, paymentName, paymentArguments)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate cart without payment method (only for carts with a total of 0)
     * @param {Integer} cartId Cart ID to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validateFreeOrderWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling validateFreeOrder");
      }


      var pathParams = {
        'cart_id': cartId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/carts/{cart_id}/validate-free-order', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate cart without payment method (only for carts with a total of 0)
     * @param {Integer} cartId Cart ID to validate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validateFreeOrder = function(cartId) {
      return this.validateFreeOrderWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
