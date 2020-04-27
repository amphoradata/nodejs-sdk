"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProblemDetails = _interopRequireDefault(require("../model/ProblemDetails"));

var _QueryRequest = _interopRequireDefault(require("../model/QueryRequest"));

var _QueryResultPage = _interopRequireDefault(require("../model/QueryResultPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TimeSeries service.
* @module api/TimeSeriesApi
* @version 0.9.7
*/
var TimeSeriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeSeriesApi. 
  * @alias module:api/TimeSeriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeSeriesApi(apiClient) {
    _classCallCheck(this, TimeSeriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the timeSeriesQueryTimeSeries operation.
   * @callback module:api/TimeSeriesApi~timeSeriesQueryTimeSeriesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/QueryResultPage} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Updates the details of an Amphora by Id.
   * @param {module:model/QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/TimeSeriesApi~timeSeriesQueryTimeSeriesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/QueryResultPage}
   */


  _createClass(TimeSeriesApi, [{
    key: "timeSeriesQueryTimeSeries",
    value: function timeSeriesQueryTimeSeries(queryRequest, opts, callback) {
      opts = opts || {};
      var postBody = queryRequest; // verify the required parameter 'queryRequest' is set

      if (queryRequest === undefined || queryRequest === null) {
        throw new Error("Missing the required parameter 'queryRequest' when calling timeSeriesQueryTimeSeries");
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
      var returnType = _QueryResultPage["default"];
      return this.apiClient.callApi('/api/timeseries/query', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeSeriesApi;
}();

exports["default"] = TimeSeriesApi;