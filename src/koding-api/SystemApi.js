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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.SystemApi = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * System service.
   * @module koding-api/SystemApi
   * @version 0.0.3
   */

  /**
   * Constructs a new SystemApi. 
   * @alias module:koding-api/SystemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    
    if (typeof apiClient == 'string') {
      this.apiClient = ApiClient.instance;
      this.apiClient.authentications.Bearer.apiKey = apiClient;
    } else {
      this.apiClient = apiClient || ApiClient.instance;
    }
    



    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.versionGet = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '../-/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));