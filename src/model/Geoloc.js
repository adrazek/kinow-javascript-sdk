/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.77
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
    define(['ApiClient', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.Geoloc = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, I18nField) {
  'use strict';




  /**
   * The Geoloc model module.
   * @module model/Geoloc
   * @version 1.0.77
   */

  /**
   * Constructs a new <code>Geoloc</code>.
   * @alias module:model/Geoloc
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Geoloc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Geoloc} obj Optional instance to populate.
   * @return {module:model/Geoloc} The populated <code>Geoloc</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('iso_code')) {
        obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} iso_code
   */
  exports.prototype['iso_code'] = undefined;
  /**
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


