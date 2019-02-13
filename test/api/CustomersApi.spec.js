/**
 * Kinow API
 * Public api for Kinow back office
 *
 * OpenAPI spec version: 1.0.71
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
    instance = new KinowJavascriptSdk.CustomersApi();
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

  describe('CustomersApi', function() {
    describe('attachCartToCustomer', function() {
      it('should call attachCartToCustomer successfully', function(done) {
        //uncomment below and update the code to test attachCartToCustomer
        //instance.attachCartToCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkCustomerCredentials', function() {
      it('should call checkCustomerCredentials successfully', function(done) {
        //uncomment below and update the code to test checkCustomerCredentials
        //instance.checkCustomerCredentials(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCustomer', function() {
      it('should call createCustomer successfully', function(done) {
        //uncomment below and update the code to test createCustomer
        //instance.createCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFacebookId', function() {
      it('should call createFacebookId successfully', function(done) {
        //uncomment below and update the code to test createFacebookId
        //instance.createFacebookId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCustomer', function() {
      it('should call deleteCustomer successfully', function(done) {
        //uncomment below and update the code to test deleteCustomer
        //instance.deleteCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('generateAuthenticationToken', function() {
      it('should call generateAuthenticationToken successfully', function(done) {
        //uncomment below and update the code to test generateAuthenticationToken
        //instance.generateAuthenticationToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomer', function() {
      it('should call getCustomer successfully', function(done) {
        //uncomment below and update the code to test getCustomer
        //instance.getCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesSubscriptions', function() {
      it('should call getCustomerAccessesSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesSubscriptions
        //instance.getCustomerAccessesSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAccessesVideos', function() {
      it('should call getCustomerAccessesVideos successfully', function(done) {
        //uncomment below and update the code to test getCustomerAccessesVideos
        //instance.getCustomerAccessesVideos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerAddress', function() {
      it('should call getCustomerAddress successfully', function(done) {
        //uncomment below and update the code to test getCustomerAddress
        //instance.getCustomerAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCanSeeProduct', function() {
      it('should call getCustomerCanSeeProduct successfully', function(done) {
        //uncomment below and update the code to test getCustomerCanSeeProduct
        //instance.getCustomerCanSeeProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerCurrentViews', function() {
      it('should call getCustomerCurrentViews successfully', function(done) {
        //uncomment below and update the code to test getCustomerCurrentViews
        //instance.getCustomerCurrentViews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerGroups', function() {
      it('should call getCustomerGroups successfully', function(done) {
        //uncomment below and update the code to test getCustomerGroups
        //instance.getCustomerGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToProduct', function() {
      it('should call getCustomerHasAccessToProduct successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToProduct
        //instance.getCustomerHasAccessToProduct(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerHasAccessToVideo', function() {
      it('should call getCustomerHasAccessToVideo successfully', function(done) {
        //uncomment below and update the code to test getCustomerHasAccessToVideo
        //instance.getCustomerHasAccessToVideo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomerOrders', function() {
      it('should call getCustomerOrders successfully', function(done) {
        //uncomment below and update the code to test getCustomerOrders
        //instance.getCustomerOrders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCustomers', function() {
      it('should call getCustomers successfully', function(done) {
        //uncomment below and update the code to test getCustomers
        //instance.getCustomers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDownloadUrl', function() {
      it('should call getDownloadUrl successfully', function(done) {
        //uncomment below and update the code to test getDownloadUrl
        //instance.getDownloadUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMarlinToken', function() {
      it('should call getMarlinToken successfully', function(done) {
        //uncomment below and update the code to test getMarlinToken
        //instance.getMarlinToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPaymentCustomerId', function() {
      it('should call getPaymentCustomerId successfully', function(done) {
        //uncomment below and update the code to test getPaymentCustomerId
        //instance.getPaymentCustomerId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPlayerUrl', function() {
      it('should call getPlayerUrl successfully', function(done) {
        //uncomment below and update the code to test getPlayerUrl
        //instance.getPlayerUrl(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCustomer', function() {
      it('should call updateCustomer successfully', function(done) {
        //uncomment below and update the code to test updateCustomer
        //instance.updateCustomer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
