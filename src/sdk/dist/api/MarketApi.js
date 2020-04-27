"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicAmphora = _interopRequireDefault(require("../model/BasicAmphora"));

var _FuzzySearchResponse = _interopRequireDefault(require("../model/FuzzySearchResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Market service.
* @module api/MarketApi
* @version 0.9.7
*/
var MarketApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MarketApi. 
  * @alias module:api/MarketApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MarketApi(apiClient) {
    _classCallCheck(this, MarketApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the marketFind operation.
   * @callback module:api/MarketApi~marketFindCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/BasicAmphora>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Finds Amphora using a fuzzy search.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query A string as a search term.
   * @param {Number} opts.top How many results to return.
   * @param {Number} opts.skip How many pages (in multiples of top) to skip.
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/MarketApi~marketFindCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/BasicAmphora>}
   */


  _createClass(MarketApi, [{
    key: "marketFind",
    value: function marketFind(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query'],
        'top': opts['top'],
        'skip': opts['skip']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BasicAmphora["default"]];
      return this.apiClient.callApi('/api/market/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the marketLookupLocation operation.
     * @callback module:api/MarketApi~marketLookupLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FuzzySearchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Executes a fuzzy location search.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Search Text.
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/MarketApi~marketLookupLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FuzzySearchResponse}
     */

  }, {
    key: "marketLookupLocation",
    value: function marketLookupLocation(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'query': opts['query']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FuzzySearchResponse["default"];
      return this.apiClient.callApi('/api/location/fuzzy', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MarketApi;
}();

exports["default"] = MarketApi;