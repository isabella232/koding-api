/**
 * Koding API
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    factory(root.expect, root.KodingApi);
  }
}(this, function(expect, KodingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KodingApi.JGroupRole();
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

  describe('JGroupRole', function() {
    it('should create an instance of JGroupRole', function() {
      // uncomment below and update the code to test JGroupRole
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be.a(KodingApi.JGroupRole);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be();
    });

    it('should have the property isConfigureable (base name: "isConfigureable")', function() {
      // uncomment below and update the code to test the property isConfigureable
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "isDefault")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instane = new KodingApi.JGroupRole();
      //expect(instance).to.be();
    });

  });

}));
