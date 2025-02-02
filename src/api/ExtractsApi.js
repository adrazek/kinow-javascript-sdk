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
    define(['ApiClient', 'model/Extract', 'model/PlayerConfiguration', 'model/ProductExtractsResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Extract'), require('../model/PlayerConfiguration'), require('../model/ProductExtractsResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ExtractsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Extract, root.KinowJavascriptSdk.PlayerConfiguration, root.KinowJavascriptSdk.ProductExtractsResponse);
  }
}(this, function(ApiClient, Extract, PlayerConfiguration, ProductExtractsResponse) {
  'use strict';

  /**
   * Extracts service.
   * @module api/ExtractsApi
   * @version 1.3.19
   */

  /**
   * Constructs a new ExtractsApi. 
   * @alias module:api/ExtractsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Attach cover to extract (the image need to be attached to the product)
     * @param {Integer} extractId Extract ID to fetch
     * @param {Integer} idImage Image ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachCoverToExtractWithHttpInfo = function(extractId, idImage) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling attachCoverToExtract");
      }

      // verify the required parameter 'idImage' is set
      if (idImage === undefined || idImage === null) {
        throw new Error("Missing the required parameter 'idImage' when calling attachCoverToExtract");
      }


      var pathParams = {
        'extract_id': extractId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'id_image': idImage
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/cover', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach cover to extract (the image need to be attached to the product)
     * @param {Integer} extractId Extract ID to fetch
     * @param {Integer} idImage Image ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachCoverToExtract = function(extractId, idImage) {
      return this.attachCoverToExtractWithHttpInfo(extractId, idImage)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new extract
     * @param {module:model/Extract} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Extract} and HTTP response
     */
    this.createExtractWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createExtract");
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
      var returnType = Extract;

      return this.apiClient.callApi(
        '/extracts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new extract
     * @param {module:model/Extract} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Extract}
     */
    this.createExtract = function(body) {
      return this.createExtractWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete extract
     * @param {Integer} extractId Extract ID to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteExtractWithHttpInfo = function(extractId) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling deleteExtract");
      }


      var pathParams = {
        'extract_id': extractId
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
        '/extracts/{extract_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete extract
     * @param {Integer} extractId Extract ID to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteExtract = function(extractId) {
      return this.deleteExtractWithHttpInfo(extractId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extract&#39;s player
     * @param {Integer} extractId Extract ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PlayerConfiguration} and HTTP response
     */
    this.getExtractPlayerWithHttpInfo = function(extractId) {
      var postBody = null;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling getExtractPlayer");
      }


      var pathParams = {
        'extract_id': extractId
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
      var returnType = PlayerConfiguration;

      return this.apiClient.callApi(
        '/extracts/{extract_id}/player', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extract&#39;s player
     * @param {Integer} extractId Extract ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PlayerConfiguration}
     */
    this.getExtractPlayer = function(extractId) {
      return this.getExtractPlayerWithHttpInfo(extractId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get extracts of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductExtractsResponse} and HTTP response
     */
    this.getProductExtractsWithHttpInfo = function(productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductExtracts");
      }


      var pathParams = {
        'product_id': productId
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
      var returnType = ProductExtractsResponse;

      return this.apiClient.callApi(
        '/products/{product_id}/extracts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get extracts of a product
     * @param {Integer} productId Product ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductExtractsResponse}
     */
    this.getProductExtracts = function(productId, opts) {
      return this.getProductExtractsWithHttpInfo(productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {module:model/Extract} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Extract} and HTTP response
     */
    this.updateExtractWithHttpInfo = function(extractId, body) {
      var postBody = body;

      // verify the required parameter 'extractId' is set
      if (extractId === undefined || extractId === null) {
        throw new Error("Missing the required parameter 'extractId' when calling updateExtract");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateExtract");
      }


      var pathParams = {
        'extract_id': extractId
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
      var returnType = Extract;

      return this.apiClient.callApi(
        '/extracts/{extract_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update extract
     * @param {Integer} extractId Extract ID to fetch
     * @param {module:model/Extract} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Extract}
     */
    this.updateExtract = function(extractId, body) {
      return this.updateExtractWithHttpInfo(extractId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
