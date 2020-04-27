"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateAmphora = _interopRequireDefault(require("../model/CreateAmphora"));

var _DetailedAmphora = _interopRequireDefault(require("../model/DetailedAmphora"));

var _OrganisationAccessRule = _interopRequireDefault(require("../model/OrganisationAccessRule"));

var _ProblemDetails = _interopRequireDefault(require("../model/ProblemDetails"));

var _Signal = _interopRequireDefault(require("../model/Signal"));

var _UpdateSignal = _interopRequireDefault(require("../model/UpdateSignal"));

var _UploadResponse = _interopRequireDefault(require("../model/UploadResponse"));

var _UserAccessRule = _interopRequireDefault(require("../model/UserAccessRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Amphorae service.
* @module api/AmphoraeApi
* @version 0.9.7
*/
var AmphoraeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AmphoraeApi. 
  * @alias module:api/AmphoraeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AmphoraeApi(apiClient) {
    _classCallCheck(this, AmphoraeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the amphoraeAccessControlsCreateForOrganisation operation.
   * @callback module:api/AmphoraeApi~amphoraeAccessControlsCreateForOrganisationCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserAccessRule} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates an Access Control Rule on this Amphora.
   * @param {String} id Amphora Id.
   * @param {module:model/OrganisationAccessRule} organisationAccessRule The rule to create.
   * @param {Object} opts Optional parameters
   * @param {String} opts.xAmphoradataVersion API Version Number
   * @param {module:api/AmphoraeApi~amphoraeAccessControlsCreateForOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserAccessRule}
   */


  _createClass(AmphoraeApi, [{
    key: "amphoraeAccessControlsCreateForOrganisation",
    value: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, opts, callback) {
      opts = opts || {};
      var postBody = organisationAccessRule; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeAccessControlsCreateForOrganisation");
      } // verify the required parameter 'organisationAccessRule' is set


      if (organisationAccessRule === undefined || organisationAccessRule === null) {
        throw new Error("Missing the required parameter 'organisationAccessRule' when calling amphoraeAccessControlsCreateForOrganisation");
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
      var returnType = _UserAccessRule["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/AccessControls/ForOrganisation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeAccessControlsCreateForUser operation.
     * @callback module:api/AmphoraeApi~amphoraeAccessControlsCreateForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserAccessRule} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an Access Control rule on this Amphora.
     * @param {String} id Amphora Id.
     * @param {module:model/UserAccessRule} userAccessRule The rule to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeAccessControlsCreateForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserAccessRule}
     */

  }, {
    key: "amphoraeAccessControlsCreateForUser",
    value: function amphoraeAccessControlsCreateForUser(id, userAccessRule, opts, callback) {
      opts = opts || {};
      var postBody = userAccessRule; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeAccessControlsCreateForUser");
      } // verify the required parameter 'userAccessRule' is set


      if (userAccessRule === undefined || userAccessRule === null) {
        throw new Error("Missing the required parameter 'userAccessRule' when calling amphoraeAccessControlsCreateForUser");
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
      var returnType = _UserAccessRule["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/AccessControls/ForUser', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeAccessControlsDelete operation.
     * @callback module:api/AmphoraeApi~amphoraeAccessControlsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Access Control on this Amphora.
     * @param {String} id Amphora Id.
     * @param {String} ruleId The Id of the rule to delete.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeAccessControlsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "amphoraeAccessControlsDelete",
    value: function amphoraeAccessControlsDelete(id, ruleId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeAccessControlsDelete");
      } // verify the required parameter 'ruleId' is set


      if (ruleId === undefined || ruleId === null) {
        throw new Error("Missing the required parameter 'ruleId' when calling amphoraeAccessControlsDelete");
      }

      var pathParams = {
        'id': id,
        'ruleId': ruleId
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/api/amphorae/{id}/AccessControls/{ruleId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeAccessControlsGetOrganisationRules operation.
     * @callback module:api/AmphoraeApi~amphoraeAccessControlsGetOrganisationRulesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OrganisationAccessRule>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the list of access rules applied to organisations.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeAccessControlsGetOrganisationRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OrganisationAccessRule>}
     */

  }, {
    key: "amphoraeAccessControlsGetOrganisationRules",
    value: function amphoraeAccessControlsGetOrganisationRules(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeAccessControlsGetOrganisationRules");
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
      var returnType = [_OrganisationAccessRule["default"]];
      return this.apiClient.callApi('/api/amphorae/{id}/AccessControls/ForOrganisation', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeAccessControlsGetUserRules operation.
     * @callback module:api/AmphoraeApi~amphoraeAccessControlsGetUserRulesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserAccessRule>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the list of access rules applied to users.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeAccessControlsGetUserRulesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserAccessRule>}
     */

  }, {
    key: "amphoraeAccessControlsGetUserRules",
    value: function amphoraeAccessControlsGetUserRules(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeAccessControlsGetUserRules");
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
      var returnType = [_UserAccessRule["default"]];
      return this.apiClient.callApi('/api/amphorae/{id}/AccessControls/ForUser', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeCreate operation.
     * @callback module:api/AmphoraeApi~amphoraeCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedAmphora} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new empty Amphora in the user's organisation.
     * @param {module:model/CreateAmphora} createAmphora Information for the new Amphora.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedAmphora}
     */

  }, {
    key: "amphoraeCreate",
    value: function amphoraeCreate(createAmphora, opts, callback) {
      opts = opts || {};
      var postBody = createAmphora; // verify the required parameter 'createAmphora' is set

      if (createAmphora === undefined || createAmphora === null) {
        throw new Error("Missing the required parameter 'createAmphora' when calling amphoraeCreate");
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
      var returnType = _DetailedAmphora["default"];
      return this.apiClient.callApi('/api/amphorae', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeDelete operation.
     * @callback module:api/AmphoraeApi~amphoraeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an Amphora.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "amphoraeDelete",
    value: function amphoraeDelete(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeDelete");
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
      return this.apiClient.callApi('/api/amphorae/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeFilesCreateFileRequest operation.
     * @callback module:api/AmphoraeApi~amphoraeFilesCreateFileRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UploadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a file. Returns a blob URL to upload to.
     * @param {String} id Amphora Id.
     * @param {String} file The name of the file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeFilesCreateFileRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UploadResponse}
     */

  }, {
    key: "amphoraeFilesCreateFileRequest",
    value: function amphoraeFilesCreateFileRequest(id, file, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeFilesCreateFileRequest");
      } // verify the required parameter 'file' is set


      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling amphoraeFilesCreateFileRequest");
      }

      var pathParams = {
        'id': id,
        'file': file
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UploadResponse["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/files/{file}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeFilesDeleteFile operation.
     * @callback module:api/AmphoraeApi~amphoraeFilesDeleteFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the contents of a file. Returns application/octet-stream.
     * @param {String} id Amphora Id.
     * @param {String} file The name of the file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeFilesDeleteFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "amphoraeFilesDeleteFile",
    value: function amphoraeFilesDeleteFile(id, file, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeFilesDeleteFile");
      } // verify the required parameter 'file' is set


      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling amphoraeFilesDeleteFile");
      }

      var pathParams = {
        'id': id,
        'file': file
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/api/amphorae/{id}/files/{file}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeFilesDownloadFile operation.
     * @callback module:api/AmphoraeApi~amphoraeFilesDownloadFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the contents of a file. Returns application/octet-stream.
     * @param {String} id Amphora Id.
     * @param {String} file The name of the file.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeFilesDownloadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "amphoraeFilesDownloadFile",
    value: function amphoraeFilesDownloadFile(id, file, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeFilesDownloadFile");
      } // verify the required parameter 'file' is set


      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling amphoraeFilesDownloadFile");
      }

      var pathParams = {
        'id': id,
        'file': file
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = File;
      return this.apiClient.callApi('/api/amphorae/{id}/files/{file}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeFilesListFiles operation.
     * @callback module:api/AmphoraeApi~amphoraeFilesListFilesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's a list of an Amphora's files.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.orderBy Can be alphabetical or lastModified.
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeFilesListFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "amphoraeFilesListFiles",
    value: function amphoraeFilesListFiles(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeFilesListFiles");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'orderBy': opts['orderBy']
      };
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/api/amphorae/{id}/files', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeFilesWriteFileMetadata operation.
     * @callback module:api/AmphoraeApi~amphoraeFilesWriteFileMetadataCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} file 
     * @param {Object.<String, {String: String}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeFilesWriteFileMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */

  }, {
    key: "amphoraeFilesWriteFileMetadata",
    value: function amphoraeFilesWriteFileMetadata(id, file, requestBody, opts, callback) {
      opts = opts || {};
      var postBody = requestBody; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeFilesWriteFileMetadata");
      } // verify the required parameter 'file' is set


      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling amphoraeFilesWriteFileMetadata");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling amphoraeFilesWriteFileMetadata");
      }

      var pathParams = {
        'id': id,
        'file': file
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/api/amphorae/{id}/files/{file}/meta', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeRead operation.
     * @callback module:api/AmphoraeApi~amphoraeReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedAmphora} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's details of an Amphora by Id.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedAmphora}
     */

  }, {
    key: "amphoraeRead",
    value: function amphoraeRead(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeRead");
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
      var returnType = _DetailedAmphora["default"];
      return this.apiClient.callApi('/api/amphorae/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsCreateSignal operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsCreateSignalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associates a signal with an Amphora. Signal is created if not existing.
     * @param {String} id Amphora Id.
     * @param {module:model/Signal} signal Signal Details.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsCreateSignalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Signal}
     */

  }, {
    key: "amphoraeSignalsCreateSignal",
    value: function amphoraeSignalsCreateSignal(id, signal, opts, callback) {
      opts = opts || {};
      var postBody = signal; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsCreateSignal");
      } // verify the required parameter 'signal' is set


      if (signal === undefined || signal === null) {
        throw new Error("Missing the required parameter 'signal' when calling amphoraeSignalsCreateSignal");
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
      var returnType = _Signal["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/signals', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsGetSignal operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsGetSignalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the signals associated with an Amphora.
     * @param {String} id Amphora Id.
     * @param {String} property The name or id of the signal property.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsGetSignalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Signal}
     */

  }, {
    key: "amphoraeSignalsGetSignal",
    value: function amphoraeSignalsGetSignal(id, property, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsGetSignal");
      } // verify the required parameter 'property' is set


      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling amphoraeSignalsGetSignal");
      }

      var pathParams = {
        'id': id,
        'property': property
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Signal["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/signals/{property}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsGetSignals operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsGetSignalsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Signal>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get's the signals associated with an Amphora.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsGetSignalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Signal>}
     */

  }, {
    key: "amphoraeSignalsGetSignals",
    value: function amphoraeSignalsGetSignals(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsGetSignals");
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
      var returnType = [_Signal["default"]];
      return this.apiClient.callApi('/api/amphorae/{id}/signals', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsUpdateSignal operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsUpdateSignalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Signal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associates a signal with an Amphora. Signal is created if not existing.
     * @param {String} id Amphora Id.
     * @param {String} signalId Signal Details.
     * @param {module:model/UpdateSignal} updateSignal Signal properties to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsUpdateSignalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Signal}
     */

  }, {
    key: "amphoraeSignalsUpdateSignal",
    value: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, opts, callback) {
      opts = opts || {};
      var postBody = updateSignal; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsUpdateSignal");
      } // verify the required parameter 'signalId' is set


      if (signalId === undefined || signalId === null) {
        throw new Error("Missing the required parameter 'signalId' when calling amphoraeSignalsUpdateSignal");
      } // verify the required parameter 'updateSignal' is set


      if (updateSignal === undefined || updateSignal === null) {
        throw new Error("Missing the required parameter 'updateSignal' when calling amphoraeSignalsUpdateSignal");
      }

      var pathParams = {
        'id': id,
        'signalId': signalId
      };
      var queryParams = {};
      var headerParams = {
        'x-amphoradata-version': opts['xAmphoradataVersion']
      };
      var formParams = {};
      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Signal["default"];
      return this.apiClient.callApi('/api/amphorae/{id}/signals/{signalId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsUploadSignal operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsUploadSignalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsUploadSignalCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "amphoraeSignalsUploadSignal",
    value: function amphoraeSignalsUploadSignal(id, requestBody, opts, callback) {
      opts = opts || {};
      var postBody = requestBody; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsUploadSignal");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling amphoraeSignalsUploadSignal");
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
      var returnType = null;
      return this.apiClient.callApi('/api/amphorae/{id}/signals/values', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsUploadSignal2 operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsUploadSignal2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object.<String, {String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsUploadSignal2Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "amphoraeSignalsUploadSignal2",
    value: function amphoraeSignalsUploadSignal2(id, requestBody, opts, callback) {
      opts = opts || {};
      var postBody = requestBody; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsUploadSignal2");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling amphoraeSignalsUploadSignal2");
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
      var returnType = null;
      return this.apiClient.callApi('/api/amphorae/{id}/signalValues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsUploadSignalBatch operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsUploadSignalBatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Array.<{String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsUploadSignalBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch",
    value: function amphoraeSignalsUploadSignalBatch(id, requestBody, opts, callback) {
      opts = opts || {};
      var postBody = requestBody; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsUploadSignalBatch");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling amphoraeSignalsUploadSignalBatch");
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
      var returnType = null;
      return this.apiClient.callApi('/api/amphorae/{id}/signals/batchvalues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeSignalsUploadSignalBatch2 operation.
     * @callback module:api/AmphoraeApi~amphoraeSignalsUploadSignalBatch2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Array.<{String: Object}>} requestBody 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeSignalsUploadSignalBatch2Callback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch2",
    value: function amphoraeSignalsUploadSignalBatch2(id, requestBody, opts, callback) {
      opts = opts || {};
      var postBody = requestBody; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeSignalsUploadSignalBatch2");
      } // verify the required parameter 'requestBody' is set


      if (requestBody === undefined || requestBody === null) {
        throw new Error("Missing the required parameter 'requestBody' when calling amphoraeSignalsUploadSignalBatch2");
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
      var returnType = null;
      return this.apiClient.callApi('/api/amphorae/{id}/batchSignalValues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the amphoraeUpdate operation.
     * @callback module:api/AmphoraeApi~amphoraeUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedAmphora} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the details of an Amphora by Id.
     * @param {String} id Amphora Id.
     * @param {module:model/DetailedAmphora} detailedAmphora Information to update. Nulls are NOT ignored.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~amphoraeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedAmphora}
     */

  }, {
    key: "amphoraeUpdate",
    value: function amphoraeUpdate(id, detailedAmphora, opts, callback) {
      opts = opts || {};
      var postBody = detailedAmphora; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling amphoraeUpdate");
      } // verify the required parameter 'detailedAmphora' is set


      if (detailedAmphora === undefined || detailedAmphora === null) {
        throw new Error("Missing the required parameter 'detailedAmphora' when calling amphoraeUpdate");
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
      var returnType = _DetailedAmphora["default"];
      return this.apiClient.callApi('/api/amphorae/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the purchasesPurchase operation.
     * @callback module:api/AmphoraeApi~purchasesPurchaseCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purchases an Amphora as the logged in user.
     * @param {String} id Amphora Id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xAmphoradataVersion API Version Number
     * @param {module:api/AmphoraeApi~purchasesPurchaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "purchasesPurchase",
    value: function purchasesPurchase(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesPurchase");
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
      return this.apiClient.callApi('/api/Amphorae/{id}/Purchases', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AmphoraeApi;
}();

exports["default"] = AmphoraeApi;