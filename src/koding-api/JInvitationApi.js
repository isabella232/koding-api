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
    root.KodingApi.JInvitationApi = factory(root.KodingApi.ApiClient, root.KodingApi.DefaultResponse, root.KodingApi.DefaultSelector, root.KodingApi.UnauthorizedRequest);
  }
}(this, function(ApiClient, DefaultResponse, DefaultSelector, UnauthorizedRequest) {
  'use strict';

  /**
   * JInvitation service.
   * @module koding-api/JInvitationApi
   * @version 0.0.3
   */

  /**
   * Constructs a new JInvitationApi. 
   * @alias module:koding-api/JInvitationApi
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
     * Method JInvitation.accept
     * @param {String} id Mongo ID of target instance
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.accept = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling accept");
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling accept");
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
        '/JInvitation.accept/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * byCode fetches an invitation by its code
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.byCode = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling byCode");
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
        '/JInvitation.byCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.create = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling create");
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
        '/JInvitation.create', 'POST',
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
        '/JInvitation.remove/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.revokeInvitation = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling revokeInvitation");
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
        '/JInvitation.revokeInvitation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.search = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling search");
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
        '/JInvitation.search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.sendInvitationByCode = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling sendInvitationByCode");
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
        '/JInvitation.sendInvitationByCode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * 
     * @param {module:koding-api/DefaultSelector} body body of the request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:koding-api/DefaultResponse}
     */
    this.some = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling some");
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
        '/JInvitation.some', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
