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
    root.KinowJavascriptSdk.Subtitle = factory(root.KinowJavascriptSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Subtitle model module.
   * @module model/Subtitle
   * @version 1.3.19
   */

  /**
   * Constructs a new <code>Subtitle</code>.
   * @alias module:model/Subtitle
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Subtitle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subtitle} obj Optional instance to populate.
   * @return {module:model/Subtitle} The populated <code>Subtitle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
      if (data.hasOwnProperty('srclang')) {
        obj['srclang'] = ApiClient.convertToType(data['srclang'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('font')) {
        obj['font'] = ApiClient.convertToType(data['font'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('text_shadow')) {
        obj['text_shadow'] = ApiClient.convertToType(data['text_shadow'], 'String');
      }
      if (data.hasOwnProperty('italic_color')) {
        obj['italic_color'] = ApiClient.convertToType(data['italic_color'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} src
   */
  exports.prototype['src'] = undefined;
  /**
   * 
   * @member {String} srclang
   */
  exports.prototype['srclang'] = undefined;
  /**
   * 
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * 
   * @member {String} font
   */
  exports.prototype['font'] = undefined;
  /**
   * 
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * 
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * 
   * @member {String} text_shadow
   */
  exports.prototype['text_shadow'] = undefined;
  /**
   * 
   * @member {Boolean} italic_color
   */
  exports.prototype['italic_color'] = undefined;



  return exports;
}));


