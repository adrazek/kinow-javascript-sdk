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
    define(['ApiClient', 'model/Cart', 'model/CartBody', 'model/Carts', 'model/PaymentUrl', 'model/PaymentDetails1', 'model/PaymentArguments'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cart'), require('../model/CartBody'), require('../model/Carts'), require('../model/PaymentUrl'), require('../model/PaymentDetails1'), require('../model/PaymentArguments'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartsApi = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.Cart, root.KinowJavascriptSdk.CartBody, root.KinowJavascriptSdk.Carts, root.KinowJavascriptSdk.PaymentUrl, root.KinowJavascriptSdk.PaymentDetails1, root.KinowJavascriptSdk.PaymentArguments);
  }
}(this, function(ApiClient, Cart, CartBody, Carts, PaymentUrl, PaymentDetails1, PaymentArguments) {
  'use strict';

  /**
   * Carts service.
   * @module api/CartsApi
   * @version 1.3.19
   */

  /**
   * Constructs a new CartsApi. 
   * @alias module:api/CartsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add product to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} productId Product ID to add to cart
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.productAttributeId Product attribute ID, required to add product to cart if product is not a subscription
     * @param {Integer} opts.switchSubscriptionId When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.addProductToCartWithHttpInfo = function(cartId, productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling addProductToCart");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling addProductToCart");
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
        'product_id': productId,
        'product_attribute_id': opts['productAttributeId'],
        'switch_subscription_id': opts['switchSubscriptionId']
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{cart_id}/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add product to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} productId Product ID to add to cart
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.productAttributeId Product attribute ID, required to add product to cart if product is not a subscription
     * @param {Integer} opts.switchSubscriptionId When customer want to switch subscription, switch_subscription_id is the product access ID that match with the subscription to cancel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.addProductToCart = function(cartId, productId, opts) {
      return this.addProductToCartWithHttpInfo(cartId, productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach cart rule to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} code Code of the cart rule to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.attachCartRuleToCartWithHttpInfo = function(cartId, code) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling attachCartRuleToCart");
      }

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling attachCartRuleToCart");
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
        'code': code
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/carts/{cart_id}/cart-rules', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach cart rule to cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} code Code of the cart rule to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.attachCartRuleToCart = function(cartId, code) {
      return this.attachCartRuleToCartWithHttpInfo(cartId, code)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Attach cart to customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {Integer} cartId Cart ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.attachCartToCustomerWithHttpInfo = function(customerId, cartId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling attachCartToCustomer");
      }

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling attachCartToCustomer");
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
        'cart_id': cartId
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Cart;

      return this.apiClient.callApi(
        '/customers/{customer_id}/carts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Attach cart to customer
     * @param {Integer} customerId Customer ID to fetch
     * @param {Integer} cartId Cart ID to attach
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.attachCartToCustomer = function(customerId, cartId) {
      return this.attachCartToCustomerWithHttpInfo(customerId, cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create new cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartBody} opts.body Create cart object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.createCartWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new cart
     * @param {Object} opts Optional parameters
     * @param {module:model/CartBody} opts.body Create cart object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.createCart = function(opts) {
      return this.createCartWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling deleteCart");
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
        '/carts/{cart_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCart = function(cartId) {
      return this.deleteCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Remove product from cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} productId Product ID to delete from cart
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.productAttributeId Product attribute ID, required to add product to cart if product is not a subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteProductFromCartWithHttpInfo = function(cartId, productId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling deleteProductFromCart");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteProductFromCart");
      }


      var pathParams = {
        'cart_id': cartId
      };
      var queryParams = {
        'product_id': productId,
        'product_attribute_id': opts['productAttributeId'],
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
        '/carts/{cart_id}/products', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove product from cart
     * @param {Integer} cartId Cart ID to fetch
     * @param {Integer} productId Product ID to delete from cart
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.productAttributeId Product attribute ID, required to add product to cart if product is not a subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteProductFromCart = function(cartId, productId, opts) {
      return this.deleteProductFromCartWithHttpInfo(cartId, productId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.getCartWithHttpInfo = function(cartId) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling getCart");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{cart_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get cart
     * @param {Integer} cartId Cart ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.getCart = function(cartId) {
      return this.getCartWithHttpInfo(cartId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer carts
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Carts} and HTTP response
     */
    this.getCustomerCartsWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomerCarts");
      }


      var pathParams = {
        'customer_id': customerId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'filters': opts['filters'],
        'sort_by': opts['sortBy'],
        'sort_direction': opts['sortDirection'],
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
      var returnType = Carts;

      return this.apiClient.callApi(
        '/customers/{customer_id}/carts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer carts
     * @param {Integer} customerId Customer ID to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page 
     * @param {Integer} opts.perPage 
     * @param {String} opts.filters       &#x60;&#x60;&#x60;      date_add[value]&#x3D;string&amp;date_add[operator]&#x3D;lt      _______________        {      \&quot;date_add\&quot;: {      \&quot;value\&quot;: \&quot;string\&quot;,      \&quot;operator\&quot;: \&quot;lt\&quot;      }      } &#x60;&#x60;&#x60;      Operator can be strict, contains, gt or lt.
     * @param {String} opts.sortBy Sort by this attribute (id by default)
     * @param {module:model/String} opts.sortDirection Sorting direction (asc by default)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Carts}
     */
    this.getCustomerCarts = function(customerId, opts) {
      return this.getCustomerCartsWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get customer last cart
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.getLastCartWithHttpInfo = function(customerId) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getLastCart");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/customers/{customer_id}/last-cart', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get customer last cart
     * @param {Integer} customerId Customer ID to fetch
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.getLastCart = function(customerId) {
      return this.getLastCartWithHttpInfo(customerId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get payment gateway URL to use in iframe
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
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
     * Get payment gateway URL to use in iframe
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentUrl}
     */
    this.getPaymentUrl = function(cartId, paymentName) {
      return this.getPaymentUrlWithHttpInfo(cartId, paymentName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Prepare payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentDetails1} and HTTP response
     */
    this.preparePaymentWithHttpInfo = function(cartId, paymentName) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling preparePayment");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling preparePayment");
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
      var returnType = PaymentDetails1;

      return this.apiClient.callApi(
        '/carts/{cart_id}/payments/{payment_name}/prepare', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Prepare payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentDetails1}
     */
    this.preparePayment = function(cartId, paymentName) {
      return this.preparePaymentWithHttpInfo(cartId, paymentName)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update cart
     * @param {Integer} cartId Cart id
     * @param {module:model/Cart} body Cart body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Cart} and HTTP response
     */
    this.updateCartWithHttpInfo = function(cartId, body) {
      var postBody = body;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling updateCart");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCart");
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
      var returnType = Cart;

      return this.apiClient.callApi(
        '/carts/{cart_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update cart
     * @param {Integer} cartId Cart id
     * @param {module:model/Cart} body Cart body
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Cart}
     */
    this.updateCart = function(cartId, body) {
      return this.updateCartWithHttpInfo(cartId, body)
        .then(function(response_and_data) {
          return response_and_data;
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
          return response_and_data;
        });
    }


    /**
     * Validate payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArguments} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.validatePaymentWithHttpInfo = function(cartId, paymentName, paymentArgument) {
      var postBody = paymentArgument;

      // verify the required parameter 'cartId' is set
      if (cartId === undefined || cartId === null) {
        throw new Error("Missing the required parameter 'cartId' when calling validatePayment");
      }

      // verify the required parameter 'paymentName' is set
      if (paymentName === undefined || paymentName === null) {
        throw new Error("Missing the required parameter 'paymentName' when calling validatePayment");
      }

      // verify the required parameter 'paymentArgument' is set
      if (paymentArgument === undefined || paymentArgument === null) {
        throw new Error("Missing the required parameter 'paymentArgument' when calling validatePayment");
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
     * Validate payment on a payment gateway
     * @param {Integer} cartId Cart ID to fetch
     * @param {String} paymentName Payment gateway name
     * @param {module:model/PaymentArguments} paymentArgument Payment argument
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.validatePayment = function(cartId, paymentName, paymentArgument) {
      return this.validatePaymentWithHttpInfo(cartId, paymentName, paymentArgument)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }
  };

  return exports;
}));
