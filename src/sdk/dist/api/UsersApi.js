"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AmphoraUser = _interopRequireDefault(require("../model/AmphoraUser"));

var _CreateAmphoraUser = _interopRequireDefault(require("../model/CreateAmphoraUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 0.9.7
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersCreate operation.
   * @callback module:api/UsersApi~usersCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AmphoraUser} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a new User. Returns the password.
   * @param {module:model/CreateAmphoraUser} createAmphoraUser User parameters.
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/UsersApi~usersCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AmphoraUser}
   */


  _createClass(UsersApi, [{
    key: "usersCreate",
    value: function usersCreate(createAmphoraUser, opts, callback) {
      opts = opts || {};
      var postBody = createAmphoraUser; // verify the required parameter 'createAmphoraUser' is set

      if (createAmphoraUser === undefined || createAmphoraUser === null) {
        throw new Error("Missing the required parameter 'createAmphoraUser' when calling usersCreate");
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
      var returnType = _AmphoraUser["default"];
      return this.apiClient.callApi('/api/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersReadSelf operation.
     * @callback module:api/UsersApi~usersReadSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AmphoraUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's logged in users information.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/UsersApi~usersReadSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AmphoraUser}
     */

  }, {
    key: "usersReadSelf",
    value: function usersReadSelf(opts, callback) {
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
      var accepts = ['application/json'];
      var returnType = _AmphoraUser["default"];
      return this.apiClient.callApi('/api/users/self', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;