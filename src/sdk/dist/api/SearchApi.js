"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicAmphora = _interopRequireDefault(require("../model/BasicAmphora"));

var _Organisation = _interopRequireDefault(require("../model/Organisation"));

var _SearchParameters = _interopRequireDefault(require("../model/SearchParameters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Search service.
* @module api/SearchApi
* @version 0.9.7
*/
var SearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchApi. 
  * @alias module:api/SearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchApi(apiClient) {
    _classCallCheck(this, SearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the searchSearchAmphorae operation.
   * @callback module:api/SearchApi~searchSearchAmphoraeCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/BasicAmphora>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Searches for Amphorae.
   * @param {module:model/SearchParameters} searchParameters Search parameters.
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/SearchApi~searchSearchAmphoraeCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/BasicAmphora>}
   */


  _createClass(SearchApi, [{
    key: "searchSearchAmphorae",
    value: function searchSearchAmphorae(searchParameters, opts, callback) {
      opts = opts || {};
      var postBody = searchParameters; // verify the required parameter 'searchParameters' is set

      if (searchParameters === undefined || searchParameters === null) {
        throw new Error("Missing the required parameter 'searchParameters' when calling searchSearchAmphorae");
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
      var returnType = [_BasicAmphora["default"]];
      return this.apiClient.callApi('/api/search/amphorae', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchSearchAmphoraeByLocation operation.
     * @callback module:api/SearchApi~searchSearchAmphoraeByLocationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BasicAmphora>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for Amphorae by loction.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.lat Latitude.
     * @param {Number} opts.lon Longitude.
     * @param {Number} opts.dist Distance from Latitude and Longitude in which to search. (default to 10.0)
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/SearchApi~searchSearchAmphoraeByLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BasicAmphora>}
     */

  }, {
    key: "searchSearchAmphoraeByLocation",
    value: function searchSearchAmphoraeByLocation(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'lat': opts['lat'],
        'lon': opts['lon'],
        'dist': opts['dist']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BasicAmphora["default"]];
      return this.apiClient.callApi('/api/search/amphorae/byLocation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchSearchAmphoraeByOrganisation operation.
     * @callback module:api/SearchApi~searchSearchAmphoraeByOrganisationCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BasicAmphora>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for Amphorae in an Organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.orgId Organisation Id.
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/SearchApi~searchSearchAmphoraeByOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BasicAmphora>}
     */

  }, {
    key: "searchSearchAmphoraeByOrganisation",
    value: function searchSearchAmphoraeByOrganisation(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'orgId': opts['orgId']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_BasicAmphora["default"]];
      return this.apiClient.callApi('/api/search/amphorae/byOrganisation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchSearchOrganisations operation.
     * @callback module:api/SearchApi~searchSearchOrganisationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organisation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Searches for Organisations with fuzzy search.
     * @param {Object} opts Optional parameters
     * @param {String} opts.term Search Term.
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/SearchApi~searchSearchOrganisationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Organisation>}
     */

  }, {
    key: "searchSearchOrganisations",
    value: function searchSearchOrganisations(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'term': opts['term']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Organisation["default"]];
      return this.apiClient.callApi('/api/search/organisations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SearchApi;
}();

exports["default"] = SearchApi;