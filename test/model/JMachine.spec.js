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
    instance = new KodingApi.JMachine();
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

  describe('JMachine', function() {
    it('should create an instance of JMachine', function() {
      // uncomment below and update the code to test JMachine
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be.a(KodingApi.JMachine);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property queryString (base name: "queryString")', function() {
      // uncomment below and update the code to test the property queryString
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ipAddress")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property provisioners (base name: "provisioners")', function() {
      // uncomment below and update the code to test the property provisioners
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property credential (base name: "credential")', function() {
      // uncomment below and update the code to test the property credential
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property meta (base name: "meta")', function() {
      // uncomment below and update the code to test the property meta
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property generatedFrom (base name: "generatedFrom")', function() {
      // uncomment below and update the code to test the property generatedFrom
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

    it('should have the property channelId (base name: "channelId")', function() {
      // uncomment below and update the code to test the property channelId
      //var instane = new KodingApi.JMachine();
      //expect(instance).to.be();
    });

  });

}));
