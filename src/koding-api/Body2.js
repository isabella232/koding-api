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
    root.KodingApi.Body2 = factory(root.KodingApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body2 model module.
   * @module koding-api/Body2
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Body2</code>.
   * @alias module:koding-api/Body2
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Body2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:koding-api/Body2} obj Optional instance to populate.
   * @return {module:koding-api/Body2} The populated <code>Body2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('credentials')) {
        obj['credentials'] = ApiClient.convertToType(data['credentials'], Object);
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} template
   * @default '{"provider": {"aws": {}}}'
   */
  exports.prototype['template'] = '{"provider": {"aws": {}}}';
  /**
   * @member {String} title
   * @default 'My AWS template'
   */
  exports.prototype['title'] = 'My AWS template';
  /**
   * @member {Object} credentials
   */
  exports.prototype['credentials'] = undefined;
  /**
   * @member {Object} config
   */
  exports.prototype['config'] = undefined;



  return exports;
}));


