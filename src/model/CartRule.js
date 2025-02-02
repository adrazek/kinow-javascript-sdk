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
    define(['ApiClient', 'model/CartRuleRestrictionGroup', 'model/I18nField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CartRuleRestrictionGroup'), require('./I18nField'));
  } else {
    // Browser globals (root is window)
    if (!root.KinowJavascriptSdk) {
      root.KinowJavascriptSdk = {};
    }
    root.KinowJavascriptSdk.CartRule = factory(root.KinowJavascriptSdk.ApiClient, root.KinowJavascriptSdk.CartRuleRestrictionGroup, root.KinowJavascriptSdk.I18nField);
  }
}(this, function(ApiClient, CartRuleRestrictionGroup, I18nField) {
  'use strict';




  /**
   * The CartRule model module.
   * @module model/CartRule
   * @version 1.3.19
   */

  /**
   * Constructs a new <code>CartRule</code>.
   * @alias module:model/CartRule
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>CartRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartRule} obj Optional instance to populate.
   * @return {module:model/CartRule} The populated <code>CartRule</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Integer');
      }
      if (data.hasOwnProperty('partial_use')) {
        obj['partial_use'] = ApiClient.convertToType(data['partial_use'], 'Boolean');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('date_add')) {
        obj['date_add'] = ApiClient.convertToType(data['date_add'], 'String');
      }
      if (data.hasOwnProperty('date_upd')) {
        obj['date_upd'] = ApiClient.convertToType(data['date_upd'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], [I18nField]);
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Integer');
      }
      if (data.hasOwnProperty('quantity_per_user')) {
        obj['quantity_per_user'] = ApiClient.convertToType(data['quantity_per_user'], 'Integer');
      }
      if (data.hasOwnProperty('minimum_amount')) {
        obj['minimum_amount'] = ApiClient.convertToType(data['minimum_amount'], 'Integer');
      }
      if (data.hasOwnProperty('minimum_amount_tax')) {
        obj['minimum_amount_tax'] = ApiClient.convertToType(data['minimum_amount_tax'], 'Integer');
      }
      if (data.hasOwnProperty('minimum_amount_currency')) {
        obj['minimum_amount_currency'] = ApiClient.convertToType(data['minimum_amount_currency'], 'Integer');
      }
      if (data.hasOwnProperty('every_recurring_payments')) {
        obj['every_recurring_payments'] = ApiClient.convertToType(data['every_recurring_payments'], 'Boolean');
      }
      if (data.hasOwnProperty('reduction_percent')) {
        obj['reduction_percent'] = ApiClient.convertToType(data['reduction_percent'], 'Number');
      }
      if (data.hasOwnProperty('reduction_amount')) {
        obj['reduction_amount'] = ApiClient.convertToType(data['reduction_amount'], 'Number');
      }
      if (data.hasOwnProperty('restriction_groups')) {
        obj['restriction_groups'] = ApiClient.convertToType(data['restriction_groups'], [CartRuleRestrictionGroup]);
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
   * Limit to a single user
   * @member {Integer} id_customer
   */
  exports.prototype['id_customer'] = undefined;
  /**
   * For your eyes only. This will never be displayed to the customer
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Rules are applied by priority. A rule with a priority of \"1\" will be processed before one with a priority of \"2\"
   * @member {Integer} priority
   */
  exports.prototype['priority'] = undefined;
  /**
   * Allow to partial use this cart rule. If cart rule amount is greater than total customer order, a new cart rule will be created with the remainder amount.
   * @member {Boolean} partial_use
   */
  exports.prototype['partial_use'] = undefined;
  /**
   * Code used by customer to add it on his cart summary. Caution: rule will automatically be applied to everyone if you leave it blank
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Status of the cart rule
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * 
   * @member {String} date_add
   */
  exports.prototype['date_add'] = undefined;
  /**
   * 
   * @member {String} date_upd
   */
  exports.prototype['date_upd'] = undefined;
  /**
   * This will be displayed in the cart summary, as well as on the invoice
   * @member {Array.<module:model/I18nField>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Rule starts when this date is reached
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * Rule ends when this date is reached
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * The cart rule will be applied to the first \"X\" orders only
   * @member {Integer} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * A customer will only be able to use the cart rule \"X\" time(s)
   * @member {Integer} quantity_per_user
   */
  exports.prototype['quantity_per_user'] = undefined;
  /**
   * You can choose a minimum amount for the cart, either with taxes or not
   * @member {Integer} minimum_amount
   */
  exports.prototype['minimum_amount'] = undefined;
  /**
   * 
   * @member {Integer} minimum_amount_tax
   */
  exports.prototype['minimum_amount_tax'] = undefined;
  /**
   * Currency ID
   * @member {Integer} minimum_amount_currency
   */
  exports.prototype['minimum_amount_currency'] = undefined;
  /**
   * If customer cart contains a subscription, select if cart rule will apply on recurring payments
   * @member {Boolean} every_recurring_payments
   */
  exports.prototype['every_recurring_payments'] = undefined;
  /**
   * Discount applied to cart when rule is added (in %).
   * @member {Number} reduction_percent
   */
  exports.prototype['reduction_percent'] = undefined;
  /**
   * Discount applied to cart when rule is added (in currency).
   * @member {Number} reduction_amount
   */
  exports.prototype['reduction_amount'] = undefined;
  /**
   * @member {Array.<module:model/CartRuleRestrictionGroup>} restriction_groups
   */
  exports.prototype['restriction_groups'] = undefined;



  return exports;
}));


