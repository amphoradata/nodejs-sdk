/**
 * Amphora Data Api
 * API for interacting with the Amphora Data platform.
 *
 * The version of the OpenAPI document: 0.9.7
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
    factory(root.expect, root.Amphoradata);
  }
}(this, function(expect, Amphoradata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Amphoradata.DateTimeRange();
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

  describe('DateTimeRange', function() {
    it('should create an instance of DateTimeRange', function() {
      // uncomment below and update the code to test DateTimeRange
      //var instane = new Amphoradata.DateTimeRange();
      //expect(instance).to.be.a(Amphoradata.DateTimeRange);
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new Amphoradata.DateTimeRange();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new Amphoradata.DateTimeRange();
      //expect(instance).to.be();
    });

  });

}));
