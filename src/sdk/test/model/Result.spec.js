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
    instance = new Amphoradata.Result();
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

  describe('Result', function() {
    it('should create an instance of Result', function() {
      // uncomment below and update the code to test Result
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be.a(Amphoradata.Result);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property viewport (base name: "viewport")', function() {
      // uncomment below and update the code to test the property viewport
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property entryPoints (base name: "entryPoints")', function() {
      // uncomment below and update the code to test the property entryPoints
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function() {
      // uncomment below and update the code to test the property info
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

    it('should have the property poi (base name: "poi")', function() {
      // uncomment below and update the code to test the property poi
      //var instane = new Amphoradata.Result();
      //expect(instance).to.be();
    });

  });

}));
