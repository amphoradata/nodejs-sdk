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
    instance = new Amphoradata.Summary();
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

  describe('Summary', function() {
    it('should create an instance of Summary', function() {
      // uncomment below and update the code to test Summary
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be.a(Amphoradata.Summary);
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property queryType (base name: "queryType")', function() {
      // uncomment below and update the code to test the property queryType
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property queryTime (base name: "queryTime")', function() {
      // uncomment below and update the code to test the property queryTime
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property numResults (base name: "numResults")', function() {
      // uncomment below and update the code to test the property numResults
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property totalResults (base name: "totalResults")', function() {
      // uncomment below and update the code to test the property totalResults
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

    it('should have the property fuzzyLevel (base name: "fuzzyLevel")', function() {
      // uncomment below and update the code to test the property fuzzyLevel
      //var instane = new Amphoradata.Summary();
      //expect(instance).to.be();
    });

  });

}));
