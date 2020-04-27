"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("../model/Account"));

var _Organisation = _interopRequireDefault(require("../model/Organisation"));

var _PlanInformation = _interopRequireDefault(require("../model/PlanInformation"));

var _ProblemDetails = _interopRequireDefault(require("../model/ProblemDetails"));

var _TermsAndConditions = _interopRequireDefault(require("../model/TermsAndConditions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Organisations service.
* @module api/OrganisationsApi
* @version 0.9.7
*/
var OrganisationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OrganisationsApi. 
  * @alias module:api/OrganisationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OrganisationsApi(apiClient) {
    _classCallCheck(this, OrganisationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the accountGetPlan operation.
   * @callback module:api/OrganisationsApi~accountGetPlanCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PlanInformation} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get's an Organisation's plan information.
   * @param {String} id Organisation Id.
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/OrganisationsApi~accountGetPlanCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PlanInformation}
   */


  _createClass(OrganisationsApi, [{
    key: "accountGetPlan",
    value: function accountGetPlan(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling accountGetPlan");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PlanInformation["default"];
      return this.apiClient.callApi('/api/Organisations/{id}/Account/Plan', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the accountRead operation.
     * @callback module:api/OrganisationsApi~accountReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's an Organisation's account information.
     * @param {String} id Organisation Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~accountReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */

  }, {
    key: "accountRead",
    value: function accountRead(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling accountRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Account["default"];
      return this.apiClient.callApi('/api/Organisations/{id}/Account', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the organisationsCreate operation.
     * @callback module:api/OrganisationsApi~organisationsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {module:model/Organisation} organisation Information of the new Organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~organisationsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */

  }, {
    key: "organisationsCreate",
    value: function organisationsCreate(organisation, opts, callback) {
      opts = opts || {};
      var postBody = organisation; // verify the required parameter 'organisation' is set

      if (organisation === undefined || organisation === null) {
        throw new Error("Missing the required parameter 'organisation' when calling organisationsCreate");
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
      var returnType = _Organisation["default"];
      return this.apiClient.callApi('/api/organisations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the organisationsDelete operation.
     * @callback module:api/OrganisationsApi~organisationsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an organisation.
     * @param {String} id Organisation Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~organisationsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "organisationsDelete",
    value: function organisationsDelete(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organisationsDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/api/organisations/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the organisationsRead operation.
     * @callback module:api/OrganisationsApi~organisationsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an organisation's details.
     * @param {String} id Organisation Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~organisationsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Organisation}
     */

  }, {
    key: "organisationsRead",
    value: function organisationsRead(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organisationsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Organisation["default"];
      return this.apiClient.callApi('/api/organisations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the organisationsUpdate operation.
     * @callback module:api/OrganisationsApi~organisationsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an organisation.
     * @param {String} id Organisation Id.
     * @param {module:model/Organisation} organisation Organisation Information. All fields are updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~organisationsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "organisationsUpdate",
    value: function organisationsUpdate(id, organisation, opts, callback) {
      opts = opts || {};
      var postBody = organisation; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organisationsUpdate");
      } // verify the required parameter 'organisation' is set


      if (organisation === undefined || organisation === null) {
        throw new Error("Missing the required parameter 'organisation' when calling organisationsUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/api/organisations/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the termsAndConditionsCreate operation.
     * @callback module:api/OrganisationsApi~termsAndConditionsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TermsAndConditions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds new Terms and Conditions to your Organisations T/C Library.
     * @param {String} id The Id of the Organisation.
     * @param {module:model/TermsAndConditions} termsAndConditions The new Terms and Conditions.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~termsAndConditionsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TermsAndConditions}
     */

  }, {
    key: "termsAndConditionsCreate",
    value: function termsAndConditionsCreate(id, termsAndConditions, opts, callback) {
      opts = opts || {};
      var postBody = termsAndConditions; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling termsAndConditionsCreate");
      } // verify the required parameter 'termsAndConditions' is set


      if (termsAndConditions === undefined || termsAndConditions === null) {
        throw new Error("Missing the required parameter 'termsAndConditions' when calling termsAndConditionsCreate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TermsAndConditions["default"];
      return this.apiClient.callApi('/api/Organisations/{id}/TermsAndConditions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the termsAndConditionsRead operation.
     * @callback module:api/OrganisationsApi~termsAndConditionsReadCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TermsAndConditions>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's a list of an Organisation's Terms and Conditions.
     * @param {String} id The Id of the Organisation.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/OrganisationsApi~termsAndConditionsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TermsAndConditions>}
     */

  }, {
    key: "termsAndConditionsRead",
    value: function termsAndConditionsRead(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling termsAndConditionsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TermsAndConditions["default"]];
      return this.apiClient.callApi('/api/Organisations/{id}/TermsAndConditions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OrganisationsApi;
}();

exports["default"] = OrganisationsApi;