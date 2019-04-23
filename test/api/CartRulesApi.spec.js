/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.80
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KinowJavascriptSdk);
  }
}(this, function(expect, KinowJavascriptSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KinowJavascriptSdk.CartRulesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CartRulesApi', function() {
    describe('attachCartRuleToCart', function() {
      it('should call attachCartRuleToCart successfully', function(done) {
        //uncomment below and update the code to test attachCartRuleToCart
        //instance.attachCartRuleToCart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCartRule', function() {
      it('should call createCartRule successfully', function(done) {
        //uncomment below and update the code to test createCartRule
        //instance.createCartRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCartRule', function() {
      it('should call deleteCartRule successfully', function(done) {
        //uncomment below and update the code to test deleteCartRule
        //instance.deleteCartRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartRule', function() {
      it('should call getCartRule successfully', function(done) {
        //uncomment below and update the code to test getCartRule
        //instance.getCartRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCartRules', function() {
      it('should call getCartRules successfully', function(done) {
        //uncomment below and update the code to test getCartRules
        //instance.getCartRules(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCartRule', function() {
      it('should call updateCartRule successfully', function(done) {
        //uncomment below and update the code to test updateCartRule
        //instance.updateCartRule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
