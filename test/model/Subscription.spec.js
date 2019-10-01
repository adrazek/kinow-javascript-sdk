/**
 * Kinow API
 * Client API for Kinow back-office
 *
 * OpenAPI spec version: 1.3.10
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
    instance = new KinowJavascriptSdk.Subscription();
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

  describe('Subscription', function() {
    it('should create an instance of Subscription', function() {
      // uncomment below and update the code to test Subscription
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be.a(KinowJavascriptSdk.Subscription);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property idProduct (base name: "id_product")', function() {
      // uncomment below and update the code to test the property idProduct
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property trialDuration (base name: "trial_duration")', function() {
      // uncomment below and update the code to test the property trialDuration
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property trialPercent (base name: "trial_percent")', function() {
      // uncomment below and update the code to test the property trialPercent
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property trialSub (base name: "trial_sub")', function() {
      // uncomment below and update the code to test the property trialSub
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property limitDuration (base name: "limit_duration")', function() {
      // uncomment below and update the code to test the property limitDuration
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property alertType (base name: "alert_type")', function() {
      // uncomment below and update the code to test the property alertType
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property alertQty (base name: "alert_qty")', function() {
      // uncomment below and update the code to test the property alertQty
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

    it('should have the property recurringPayment (base name: "recurring_payment")', function() {
      // uncomment below and update the code to test the property recurringPayment
      //var instance = new KinowJavascriptSdk.Subscription();
      //expect(instance).to.be();
    });

  });

}));
