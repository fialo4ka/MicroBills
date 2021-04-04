/**
 * Sample API
 * A sample API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SampleApi);
  }
}(this, function(expect, SampleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SampleApi.Bill();
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

  describe('Bill', function() {
    it('should create an instance of Bill', function() {
      // uncomment below and update the code to test Bill
      //var instane = new SampleApi.Bill();
      //expect(instance).to.be.a(SampleApi.Bill);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new SampleApi.Bill();
      //expect(instance).to.be();
    });

    it('should have the property caregoryId (base name: "caregory_id")', function() {
      // uncomment below and update the code to test the property caregoryId
      //var instance = new SampleApi.Bill();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new SampleApi.Bill();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new SampleApi.Bill();
      //expect(instance).to.be();
    });

  });

}));
