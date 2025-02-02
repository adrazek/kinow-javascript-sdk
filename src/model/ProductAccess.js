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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.ProductAccess = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAccess model module.
   * @module model/ProductAccess
   * @version 1.3.19
   */

  /**
   * Constructs a new <code>ProductAccess</code>.
   * @alias module:model/ProductAccess
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ProductAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAccess} obj Optional instance to populate.
   * @return {module:model/ProductAccess} The populated <code>ProductAccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('id_customer')) {
        obj['id_customer'] = ApiClient.convertToType(data['id_customer'], 'Integer');
      }
      if (data.hasOwnProperty('id_product')) {
        obj['id_product'] = ApiClient.convertToType(data['id_product'], 'Integer');
      }
      if (data.hasOwnProperty('id_product_attribute')) {
        obj['id_product_attribute'] = ApiClient.convertToType(data['id_product_attribute'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_exp')) {
        obj['date_exp'] = ApiClient.convertToType(data['date_exp'], 'String');
      }
      if (data.hasOwnProperty('cancel')) {
        obj['cancel'] = ApiClient.convertToType(data['cancel'], 'Integer');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = ApiClient.convertToType(data['recurring'], 'Integer');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('id_order')) {
        obj['id_order'] = ApiClient.convertToType(data['id_order'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * 
   * @member {Integer} id_product
   */
  exports.prototype['id_product'] = undefined;
  /**
   * 
   * @member {Integer} id_product_attribute
   */
  exports.prototype['id_product_attribute'] = undefined;
  /**
   * 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * 
   * @member {String} date_exp
   */
  exports.prototype['date_exp'] = undefined;
  /**
   * 
   * @member {Integer} cancel
   */
  exports.prototype['cancel'] = undefined;
  /**
   * 
   * @member {Integer} recurring
   */
  exports.prototype['recurring'] = undefined;
  /**
   * 
   * @member {Integer} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * 
   * @member {Integer} id_order
   */
  exports.prototype['id_order'] = undefined;



  return exports;
}));


