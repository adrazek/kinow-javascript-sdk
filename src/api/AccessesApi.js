/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.75
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
    define(['ApiClient', 'model/Categories', 'model/Category'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Categories'), require('../model/Category'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.AccessesApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Categories, root.KinowJavascriptSdk.Category);
  }
}(this, function(ApiClient, Categories, Category) {
  'use strict';

  /**
   * Accesses service.
   * @module api/AccessesApi
   * @version 1.0.75
   */

  /**
   * Constructs a new AccessesApi. 
   * @alias module:api/AccessesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get available categories
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Categories} and HTTP response
     */
    this.getAvailableCategoriesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'customer_id': opts['customerId'],
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
      var returnType = Categories;

      return this.apiClient.callApi(
        '/categories-accesses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get available categories
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId ID of the customer to fetch
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Categories}
     */
    this.getAvailableCategories = function(opts) {
      return this.getAvailableCategoriesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get available category
     * @param {Integer} categoryId ID of the category to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    this.getAvailableCategoryWithHttpInfo = function(categoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling getAvailableCategory");
      }


      var pathParams = {
        'category_id': categoryId
      };
      var queryParams = {
        'customer_id': opts['customerId'],
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/categories-accesses/{category_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get available category
     * @param {Integer} categoryId ID of the category to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.customerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.getAvailableCategory = function(categoryId, opts) {
      return this.getAvailableCategoryWithHttpInfo(categoryId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get customer access to video
     * @param {Integer} customerId ID of the customer to fetch
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getCustomerHasAccessToProductWithHttpInfo = function(customerId, productId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerHasAccessToProduct");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getCustomerHasAccessToProduct");
      }


      var pathParams = {
        'customer_id': customerId,
        'product_id': productId
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
        '/customers/{customer_id}/products/{product_id}/has-access', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer access to video
     * @param {Integer} customerId ID of the customer to fetch
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getCustomerHasAccessToProduct = function(customerId, productId) {
      return this.getCustomerHasAccessToProductWithHttpInfo(customerId, productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get customer access to video
     * @param {Integer} customerId ID of the customer to fetch
     * @param {Integer} videoId ID of the video to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getCustomerHasAccessToVideoWithHttpInfo = function(customerId, videoId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerHasAccessToVideo");
      }

      // verify the required parameter 'videoId' is set
      if (videoId === undefined || videoId === null) {
        throw new Error("Missing the required parameter 'videoId' when calling getCustomerHasAccessToVideo");
      }


      var pathParams = {
        'customer_id': customerId,
        'video_id': videoId
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
        '/customers/{customer_id}/videos/{video_id}/has-access', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer access to video
     * @param {Integer} customerId ID of the customer to fetch
     * @param {Integer} videoId ID of the video to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getCustomerHasAccessToVideo = function(customerId, videoId) {
      return this.getCustomerHasAccessToVideoWithHttpInfo(customerId, videoId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get availability of a product
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getProductAvailabilityWithHttpInfo = function(productId) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductAvailability");
      }


      var pathParams = {
        'product_id': productId
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
        '/products/{product_id}/access', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get availability of a product
     * @param {Integer} productId ID of the product to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getProductAvailability = function(productId) {
      return this.getProductAvailabilityWithHttpInfo(productId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
