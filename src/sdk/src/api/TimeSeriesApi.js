/**
 * Amphora Data Api
 * API for interacting with the Amphora Data platform.
 *
 * The version of the OpenAPI document: 0.9.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ProblemDetails from '../model/ProblemDetails';
import QueryRequest from '../model/QueryRequest';
import QueryResultPage from '../model/QueryResultPage';

/**
* TimeSeries service.
* @module api/TimeSeriesApi
* @version 0.9.7
*/
export default class TimeSeriesApi {

    /**
    * Constructs a new TimeSeriesApi. 
    * @alias module:api/TimeSeriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    timeSeriesQueryTimeSeries(queryRequest, opts, callback) {
      opts = opts || {};
      let postBody = queryRequest;
      // verify the required parameter 'queryRequest' is set
      if (queryRequest === undefined || queryRequest === null) {
        throw new Error("Missing the required parameter 'queryRequest' when calling timeSeriesQueryTimeSeries");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = QueryResultPage;
      return this.apiClient.callApi(
        '/api/timeseries/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
