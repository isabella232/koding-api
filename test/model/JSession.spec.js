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
    instance = new KodingApi.JSession();
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

  describe('JSession', function() {
    it('should create an instance of JSession', function() {
      // uncomment below and update the code to test JSession
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be.a(KodingApi.JSession);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "clientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property clientIP (base name: "clientIP")', function() {
      // uncomment below and update the code to test the property clientIP
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property otaToken (base name: "otaToken")', function() {
      // uncomment below and update the code to test the property otaToken
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property groupName (base name: "groupName")', function() {
      // uncomment below and update the code to test the property groupName
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property guestId (base name: "guestId")', function() {
      // uncomment below and update the code to test the property guestId
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property sessionBegan (base name: "sessionBegan")', function() {
      // uncomment below and update the code to test the property sessionBegan
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property guestSessionBegan (base name: "guestSessionBegan")', function() {
      // uncomment below and update the code to test the property guestSessionBegan
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property lastAccess (base name: "lastAccess")', function() {
      // uncomment below and update the code to test the property lastAccess
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property foreignAuth (base name: "foreignAuth")', function() {
      // uncomment below and update the code to test the property foreignAuth
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property returnUrl (base name: "returnUrl")', function() {
      // uncomment below and update the code to test the property returnUrl
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property foreignAuthType (base name: "foreignAuthType")', function() {
      // uncomment below and update the code to test the property foreignAuthType
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property impersonating (base name: "impersonating")', function() {
      // uncomment below and update the code to test the property impersonating
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

    it('should have the property sessionData (base name: "sessionData")', function() {
      // uncomment below and update the code to test the property sessionData
      //var instane = new KodingApi.JSession();
      //expect(instance).to.be();
    });

  });

}));
