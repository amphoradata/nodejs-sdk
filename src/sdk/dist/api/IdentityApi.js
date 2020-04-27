"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Identity service.
* @module api/IdentityApi
* @version 0.9.7
*/
var IdentityApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IdentityApi. 
  * @alias module:api/IdentityApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IdentityApi(apiClient) {
    _classCallCheck(this, IdentityApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the identityGet operation.
   * @callback module:api/IdentityApi~identityGetCallback
   * @param {String} error Error message, if any.
   * @param {File} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/IdentityApi~identityGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link File}
   */


  _createClass(IdentityApi, [{
    key: "identityGet",
    value: function identityGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/identity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IdentityApi;
}();

exports["default"] = IdentityApi;