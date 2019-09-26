/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.8
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
    define(['ApiClient', 'model/Gift', 'model/Gifts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Gift'), require('../model/Gifts'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.GiftsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Gift, root.KinowJavascriptSdk.Gifts);
  }
}(this, function(ApiClient, Gift, Gifts) {
  'use strict';

  /**
   * Gifts service.
   * @module api/GiftsApi
   * @version 1.3.8
   */

  /**
   * Constructs a new GiftsApi. 
   * @alias module:api/GiftsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Consume gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.consumeGiftWithHttpInfo = function(giftId, customerId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling consumeGift");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling consumeGift");
      }


      var pathParams = {
        'gift_id': giftId
      };
      var queryParams = {
        'customer_id': customerId,
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
        '/gifts/{gift_id}/consume', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Consume gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.consumeGift = function(giftId, customerId) {
      return this.consumeGiftWithHttpInfo(giftId, customerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create gift
     * @param {module:model/Gift} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gift} and HTTP response
     */
    this.createGiftWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGift");
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
      var returnType = Gift;

      return this.apiClient.callApi(
        '/gifts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create gift
     * @param {module:model/Gift} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gift}
     */
    this.createGift = function(body) {
      return this.createGiftWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling deleteGift");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteGift = function(giftId) {
      return this.deleteGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteGiftsInCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling deleteGiftsInCart");
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
        '/carts/{cart_id}/gift/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete gifts in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteGiftsInCart = function(cartId) {
      return this.deleteGiftsInCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gift} and HTTP response
     */
    this.getGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling getGift");
      }


      var pathParams = {
        'gift_id': giftId
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
      var returnType = Gift;

      return this.apiClient.callApi(
        '/gifts/{gift_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gift}
     */
    this.getGift = function(giftId) {
      return this.getGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get gift in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gift} and HTTP response
     */
    this.getGiftInCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getGiftInCart");
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
      var returnType = Gift;

      return this.apiClient.callApi(
        '/carts/{cart_id}/gift', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get gift in cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gift}
     */
    this.getGiftInCart = function(cartId) {
      return this.getGiftInCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get gift token
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getGiftTokenWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling getGiftToken");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}/token', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get gift token
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getGiftToken = function(giftId) {
      return this.getGiftTokenWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get gifts
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.unusedOnly Only unused gifts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gifts} and HTTP response
     */
    this.getGiftsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'unused_only': opts['unusedOnly'],
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
      var returnType = Gifts;

      return this.apiClient.callApi(
        '/gifts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get gifts
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.unusedOnly Only unused gifts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gifts}
     */
    this.getGifts = function(opts) {
      return this.getGiftsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Send gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.sendGiftWithHttpInfo = function(giftId) {
      var postBody = null;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling sendGift");
      }


      var pathParams = {
        'gift_id': giftId
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
        '/gifts/{gift_id}/send', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send gift
     * @param {Integer} giftId Gift ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.sendGift = function(giftId) {
      return this.sendGiftWithHttpInfo(giftId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {module:model/Gift} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Gift} and HTTP response
     */
    this.updateGiftWithHttpInfo = function(giftId, body) {
      var postBody = body;

      // verify the required parameter 'giftId' is set
      if (giftId === undefined || giftId === null) {
        throw new Error("Missing the required parameter 'giftId' when calling updateGift");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGift");
      }


      var pathParams = {
        'gift_id': giftId
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
      var returnType = Gift;

      return this.apiClient.callApi(
        '/gifts/{gift_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update gift
     * @param {Integer} giftId Gift ID to fetch
     * @param {module:model/Gift} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Gift}
     */
    this.updateGift = function(giftId, body) {
      return this.updateGiftWithHttpInfo(giftId, body)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
