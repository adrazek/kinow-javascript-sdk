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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.PlayerConfiguration = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PlayerConfiguration model module.
   * @module model/PlayerConfiguration
   * @version 1.0.70
   */

  /**
   * Constructs a new <code>PlayerConfiguration</code>.
   * @alias module:model/PlayerConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PlayerConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerConfiguration} obj Optional instance to populate.
   * @return {module:model/PlayerConfiguration} The populated <code>PlayerConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], Object);
      }
      if (data.hasOwnProperty('conf')) {
        obj['conf'] = ApiClient.convertToType(data['conf'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Object} html
   */
  exports.prototype['html'] = undefined;
  /**
   * @member {Object} conf
   */
  exports.prototype['conf'] = undefined;



  return exports;
}));


