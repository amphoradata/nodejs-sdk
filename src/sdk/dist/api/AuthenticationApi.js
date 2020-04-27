"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoginRequest = _interopRequireDefault(require("../model/LoginRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 0.9.7
*/
var AuthenticationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticationApi. 
  * @alias module:api/AuthenticationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationApi(apiClient) {
    _classCallCheck(this, AuthenticationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the authenticationRequestToken operation.
   * @callback module:api/AuthenticationApi~authenticationRequestTokenCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a JWT (JSON Web Token).             
   * @param {module:model/LoginRequest} loginRequest Token Request Parameters.
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/AuthenticationApi~authenticationRequestTokenCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(AuthenticationApi, [{
    key: "authenticationRequestToken",
    value: function authenticationRequestToken(loginRequest, opts, callback) {
      opts = opts || {};
      var postBody = loginRequest; // verify the required parameter 'loginRequest' is set

      if (loginRequest === undefined || loginRequest === null) {
        throw new Error("Missing the required parameter 'loginRequest' when calling authenticationRequestToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/api/authentication/request', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthenticationApi;
}();

exports["default"] = AuthenticationApi;