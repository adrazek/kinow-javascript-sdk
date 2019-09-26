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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.DownloadUrl = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DownloadUrl model module.
   * @module model/DownloadUrl
   * @version 1.3.8
   */

  /**
   * Constructs a new <code>DownloadUrl</code>.
   * @alias module:model/DownloadUrl
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DownloadUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadUrl} obj Optional instance to populate.
   * @return {module:model/DownloadUrl} The populated <code>DownloadUrl</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('download_url')) {
        obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} download_url
   */
  exports.prototype['download_url'] = undefined;



  return exports;
}));


