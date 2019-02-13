/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.71
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
    define(['ApiClient', 'model/Director', 'model/Director1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Director'), require('../model/Director1'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DirectorsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Director, root.KinowJavascriptSdk.Director1);
  }
}(this, function(ApiClient, Director, Director1) {
  'use strict';

  /**
   * Directors service.
   * @module api/DirectorsApi
   * @version 1.0.71
   */

  /**
   * Constructs a new DirectorsApi. 
   * @alias module:api/DirectorsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create new director
     * @param {module:model/Director} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director} and HTTP response
     */
    this.createDirectorWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDirector");
      }


      var pathParams = {
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
      var returnType = Director;

      return this.apiClient.callApi(
        '/directors', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new director
     * @param {module:model/Director} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director}
     */
    this.createDirector = function(body) {
      return this.createDirectorWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete director
     * @param {Integer} directorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDirectorWithHttpInfo = function(directorId) {
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling deleteDirector");
      }


      var pathParams = {
        'director_id': directorId
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
        '/directors/{director_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete director
     * @param {Integer} directorId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDirector = function(directorId) {
      return this.deleteDirectorWithHttpInfo(directorId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get director
     * @param {Integer} directorId ID of the director to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director} and HTTP response
     */
    this.getDirectorWithHttpInfo = function(directorId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling getDirector");
      }


      var pathParams = {
        'director_id': directorId
      };
      var queryParams = {
        'image_type': opts['imageType'],
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
      var returnType = Director;

      return this.apiClient.callApi(
        '/directors/{director_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get director
     * @param {Integer} directorId ID of the director to fetch
     * @param {Object} opts Optional parameters
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director}
     */
    this.getDirector = function(directorId, opts) {
      return this.getDirectorWithHttpInfo(directorId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get directors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director1} and HTTP response
     */
    this.getDirectorsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = Director1;

      return this.apiClient.callApi(
        '/directors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get directors list
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director1}
     */
    this.getDirectors = function(opts) {
      return this.getDirectorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get directors of a product
     * @param {Integer} productId ID of the product to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Director1} and HTTP response
     */
    this.getProductDirectorsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductDirectors");
      }


      var pathParams = {
        'product_id': productId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'image_type': opts['imageType'],
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
      var returnType = Director1;

      return this.apiClient.callApi(
        '/products/{product_id}/directors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get directors of a product
     * @param {Integer} productId ID of the product to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.imageType 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Director1}
     */
    this.getProductDirectors = function(productId, opts) {
      return this.getProductDirectorsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update director
     * @param {Integer} directorId 
     * @param {module:model/Director} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateDirectorWithHttpInfo = function(directorId, body) {
      var postBody = body;

      // verify the required parameter 'directorId' is set
      if (directorId === undefined || directorId === null) {
        throw new Error("Missing the required parameter 'directorId' when calling updateDirector");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDirector");
      }


      var pathParams = {
        'director_id': directorId
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
        '/directors/{director_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update director
     * @param {Integer} directorId 
     * @param {module:model/Director} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateDirector = function(directorId, body) {
      return this.updateDirectorWithHttpInfo(directorId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
