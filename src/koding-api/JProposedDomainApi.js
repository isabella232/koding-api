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
    define(['ApiClient', 'koding-api/DefaultResponse', 'koding-api/DefaultSelector', 'koding-api/UnauthorizedRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../koding-api/DefaultResponse'), require('../koding-api/DefaultSelector'), require('../koding-api/UnauthorizedRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KodingApi) {
      root.KodingApi = {};
    }
    root.KodingApi.JProposedDomainApi = factory(root.KodingApi.ApiClient, root.KodingApi.DefaultResponse, root.KodingApi.DefaultSelector, root.KodingApi.UnauthorizedRequest);
  }
}(this, function(ApiClient, DefaultResponse, DefaultSelector, UnauthorizedRequest) {
  'use strict';

  /**
   * JProposedDomain service.
   * @module koding-api/JProposedDomainApi
   * @version 0.0.3
   */

  /**
   * Constructs a new JProposedDomainApi. 
   * @alias module:koding-api/JProposedDomainApi
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
     * 
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.activateDomain = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling activateDomain");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling activateDomain");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.activateDomain/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Method JProposedDomain.bindMachine
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.bindMachine = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling bindMachine");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling bindMachine");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.bindMachine/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Method JProposedDomain.createDomain
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.createDomain = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling createDomain");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.createDomain', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.deactivateDomain = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling deactivateDomain");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling deactivateDomain");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.deactivateDomain/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.fetchDomains = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.fetchDomains', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.one = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling one");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.one', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.remove = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling remove");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling remove");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.remove/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Method JProposedDomain.unbindMachine
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.unbindMachine = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling unbindMachine");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling unbindMachine");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = DefaultResponse;

      return this.apiClient.callApi(
        '/JProposedDomain.unbindMachine/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
