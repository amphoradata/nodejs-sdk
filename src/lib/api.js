"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionApi = exports.VersionApiFactory = exports.VersionApiFp = exports.VersionApiAxiosParamCreator = exports.UsersApi = exports.UsersApiFactory = exports.UsersApiFp = exports.UsersApiAxiosParamCreator = exports.TimeSeriesApi = exports.TimeSeriesApiFactory = exports.TimeSeriesApiFp = exports.TimeSeriesApiAxiosParamCreator = exports.SearchApi = exports.SearchApiFactory = exports.SearchApiFp = exports.SearchApiAxiosParamCreator = exports.OrganisationsApi = exports.OrganisationsApiFactory = exports.OrganisationsApiFp = exports.OrganisationsApiAxiosParamCreator = exports.MarketApi = exports.MarketApiFactory = exports.MarketApiFp = exports.MarketApiAxiosParamCreator = exports.IdentityApi = exports.IdentityApiFactory = exports.IdentityApiFp = exports.IdentityApiAxiosParamCreator = exports.AuthenticationApi = exports.AuthenticationApiFactory = exports.AuthenticationApiFp = exports.AuthenticationApiAxiosParamCreator = exports.AmphoraeApi = exports.AmphoraeApiFactory = exports.AmphoraeApiFp = exports.AmphoraeApiAxiosParamCreator = exports.PlanTypes = void 0;

var globalImportUrl = _interopRequireWildcard(require("url"));

var _axios = _interopRequireDefault(require("axios"));

var _base = require("./base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @export
 * @enum {string}
 */
var PlanTypes;
/**
 * 
 * @export
 * @interface Poi
 */

exports.PlanTypes = PlanTypes;

(function (PlanTypes) {
  PlanTypes[PlanTypes["NUMBER_0"] = 0] = "NUMBER_0";
  PlanTypes[PlanTypes["NUMBER_1"] = 1] = "NUMBER_1";
  PlanTypes[PlanTypes["NUMBER_2"] = 2] = "NUMBER_2";
})(PlanTypes || (exports.PlanTypes = PlanTypes = {}));

/**
 * AmphoraeApi - axios parameter creator
 * @export
 */
var AmphoraeApiAxiosParamCreator = function AmphoraeApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsCreateForOrganisation.');
      } // verify required parameter 'organisationAccessRule' is not null or undefined


      if (organisationAccessRule === null || organisationAccessRule === undefined) {
        throw new _base.RequiredError('organisationAccessRule', 'Required parameter organisationAccessRule was null or undefined when calling amphoraeAccessControlsCreateForOrganisation.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForOrganisation".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof organisationAccessRule !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(organisationAccessRule !== undefined ? organisationAccessRule : {}) : organisationAccessRule || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsCreateForUser.');
      } // verify required parameter 'userAccessRule' is not null or undefined


      if (userAccessRule === null || userAccessRule === undefined) {
        throw new _base.RequiredError('userAccessRule', 'Required parameter userAccessRule was null or undefined when calling amphoraeAccessControlsCreateForUser.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForUser".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof userAccessRule !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(userAccessRule !== undefined ? userAccessRule : {}) : userAccessRule || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsDelete.');
      } // verify required parameter 'ruleId' is not null or undefined


      if (ruleId === null || ruleId === undefined) {
        throw new _base.RequiredError('ruleId', 'Required parameter ruleId was null or undefined when calling amphoraeAccessControlsDelete.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/{ruleId}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("ruleId", "}"), encodeURIComponent(String(ruleId)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'DELETE'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsGetOrganisationRules.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForOrganisation".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsGetUserRules.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForUser".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'createAmphora' is not null or undefined
      if (createAmphora === null || createAmphora === undefined) {
        throw new _base.RequiredError('createAmphora', 'Required parameter createAmphora was null or undefined when calling amphoraeCreate.');
      }

      var localVarPath = "/api/amphorae";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof createAmphora !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createAmphora !== undefined ? createAmphora : {}) : createAmphora || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeDelete.');
      }

      var localVarPath = "/api/amphorae/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'DELETE'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesCreateFileRequest.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesCreateFileRequest.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesDeleteFile.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesDeleteFile.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'DELETE'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesDownloadFile.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesDownloadFile.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s a list of an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Can be alphabetical or lastModified.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesListFiles.');
      }

      var localVarPath = "/api/amphorae/{id}/files".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (orderBy !== undefined) {
        localVarQueryParameter['orderBy'] = orderBy;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileMetadata: function amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesWriteFileMetadata.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesWriteFileMetadata.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeFilesWriteFileMetadata.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}/meta".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof requestBody !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody !== undefined ? requestBody : {}) : requestBody || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var localVarPath = "/api/amphorae";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (scope !== undefined) {
        localVarQueryParameter['scope'] = scope;
      }

      if (accessType !== undefined) {
        localVarQueryParameter['accessType'] = accessType;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeRead.');
      }

      var localVarPath = "/api/amphorae/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {Signal} signal Signal Details.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsCreateSignal.');
      } // verify required parameter 'signal' is not null or undefined


      if (signal === null || signal === undefined) {
        throw new _base.RequiredError('signal', 'Required parameter signal was null or undefined when calling amphoraeSignalsCreateSignal.');
      }

      var localVarPath = "/api/amphorae/{id}/signals".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof signal !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(signal !== undefined ? signal : {}) : signal || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsGetSignal.');
      } // verify required parameter 'property' is not null or undefined


      if (property === null || property === undefined) {
        throw new _base.RequiredError('property', 'Required parameter property was null or undefined when calling amphoraeSignalsGetSignal.');
      }

      var localVarPath = "/api/amphorae/{id}/signals/{property}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("property", "}"), encodeURIComponent(String(property)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsGetSignals.');
      }

      var localVarPath = "/api/amphorae/{id}/signals".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsUpdateSignal.');
      } // verify required parameter 'signalId' is not null or undefined


      if (signalId === null || signalId === undefined) {
        throw new _base.RequiredError('signalId', 'Required parameter signalId was null or undefined when calling amphoraeSignalsUpdateSignal.');
      } // verify required parameter 'updateSignal' is not null or undefined


      if (updateSignal === null || updateSignal === undefined) {
        throw new _base.RequiredError('updateSignal', 'Required parameter updateSignal was null or undefined when calling amphoraeSignalsUpdateSignal.');
      }

      var localVarPath = "/api/amphorae/{id}/signals/{signalId}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("signalId", "}"), encodeURIComponent(String(signalId)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'PUT'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof updateSignal !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(updateSignal !== undefined ? updateSignal : {}) : updateSignal || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsUploadSignal.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeSignalsUploadSignal.');
      }

      var localVarPath = "/api/amphorae/{id}/signals/values".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof requestBody !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody !== undefined ? requestBody : {}) : requestBody || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsUploadSignal2.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeSignalsUploadSignal2.');
      }

      var localVarPath = "/api/amphorae/{id}/signalValues".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof requestBody !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody !== undefined ? requestBody : {}) : requestBody || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsUploadSignalBatch.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeSignalsUploadSignalBatch.');
      }

      var localVarPath = "/api/amphorae/{id}/signals/batchvalues".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof requestBody !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody !== undefined ? requestBody : {}) : requestBody || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsUploadSignalBatch2.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeSignalsUploadSignalBatch2.');
      }

      var localVarPath = "/api/amphorae/{id}/batchSignalValues".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof requestBody !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(requestBody !== undefined ? requestBody : {}) : requestBody || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {DetailedAmphora} detailedAmphora Information to update. Nulls are NOT ignored.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeUpdate.');
      } // verify required parameter 'detailedAmphora' is not null or undefined


      if (detailedAmphora === null || detailedAmphora === undefined) {
        throw new _base.RequiredError('detailedAmphora', 'Required parameter detailedAmphora was null or undefined when calling amphoraeUpdate.');
      }

      var localVarPath = "/api/amphorae/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'PUT'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof detailedAmphora !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(detailedAmphora !== undefined ? detailedAmphora : {}) : detailedAmphora || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling purchasesPurchase.');
      }

      var localVarPath = "/api/Amphorae/{id}/Purchases".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * AmphoraeApi - functional programming interface
 * @export
 */


exports.AmphoraeApiAxiosParamCreator = AmphoraeApiAxiosParamCreator;

var AmphoraeApiFp = function AmphoraeApiFp(configuration) {
  return {
    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeCreate(createAmphora, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeDelete(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s a list of an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Can be alphabetical or lastModified.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileMetadata: function amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeList(scope, accessType, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeRead(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {Signal} signal Signal Details.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsGetSignals(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {DetailedAmphora} detailedAmphora Information to update. Nulls are NOT ignored.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).purchasesPurchase(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * AmphoraeApi - factory interface
 * @export
 */


exports.AmphoraeApiFp = AmphoraeApiFp;

var AmphoraeApiFactory = function AmphoraeApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeCreate(createAmphora, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeDelete(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s a list of an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Can be alphabetical or lastModified.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileMetadata: function amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeList(scope, accessType, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeRead(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {Signal} signal Signal Details.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsGetSignals(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {DetailedAmphora} detailedAmphora Information to update. Nulls are NOT ignored.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).purchasesPurchase(id, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * AmphoraeApi - object-oriented interface
 * @export
 * @class AmphoraeApi
 * @extends {BaseAPI}
 */


exports.AmphoraeApiFactory = AmphoraeApiFactory;

var AmphoraeApi = /*#__PURE__*/function (_BaseAPI) {
  _inherits(AmphoraeApi, _BaseAPI);

  var _super = _createSuper(AmphoraeApi);

  function AmphoraeApi() {
    _classCallCheck(this, AmphoraeApi);

    return _super.apply(this, arguments);
  }

  _createClass(AmphoraeApi, [{
    key: "amphoraeAccessControlsCreateForOrganisation",

    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */
    value: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsCreateForUser",
    value: function amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsDelete",
    value: function amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsDelete(id, ruleId, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetOrganisationRules",
    value: function amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetOrganisationRules(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetUserRules",
    value: function amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetUserRules(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeCreate",
    value: function amphoraeCreate(createAmphora, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeCreate(createAmphora, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeDelete",
    value: function amphoraeDelete(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeDelete(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesCreateFileRequest",
    value: function amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesCreateFileRequest(id, file, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesDeleteFile",
    value: function amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesDeleteFile(id, file, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesDownloadFile",
    value: function amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesDownloadFile(id, file, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s a list of an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Can be alphabetical or lastModified.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesListFiles",
    value: function amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesListFiles(id, orderBy, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesWriteFileMetadata",
    value: function amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesWriteFileMetadata(id, file, requestBody, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeList",
    value: function amphoraeList(scope, accessType, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeList(scope, accessType, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeRead",
    value: function amphoraeRead(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {Signal} signal Signal Details.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsCreateSignal",
    value: function amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsCreateSignal(id, signal, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsGetSignal",
    value: function amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsGetSignal(id, property, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsGetSignals",
    value: function amphoraeSignalsGetSignals(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsGetSignals(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUpdateSignal",
    value: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignal",
    value: function amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignal(id, requestBody, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignal2",
    value: function amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignal2(id, requestBody, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch",
    value: function amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch2",
    value: function amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {DetailedAmphora} detailedAmphora Information to update. Nulls are NOT ignored.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeUpdate",
    value: function amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeUpdate(id, detailedAmphora, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "purchasesPurchase",
    value: function purchasesPurchase(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).purchasesPurchase(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return AmphoraeApi;
}(_base.BaseAPI);
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */


exports.AmphoraeApi = AmphoraeApi;

var AuthenticationApiAxiosParamCreator = function AuthenticationApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'loginRequest' is not null or undefined
      if (loginRequest === null || loginRequest === undefined) {
        throw new _base.RequiredError('loginRequest', 'Required parameter loginRequest was null or undefined when calling authenticationRequestToken.');
      }

      var localVarPath = "/api/authentication/request";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof loginRequest !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(loginRequest !== undefined ? loginRequest : {}) : loginRequest || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * AuthenticationApi - functional programming interface
 * @export
 */


exports.AuthenticationApiAxiosParamCreator = AuthenticationApiAxiosParamCreator;

var AuthenticationApiFp = function AuthenticationApiFp(configuration) {
  return {
    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AuthenticationApiAxiosParamCreator(configuration).authenticationRequestToken(loginRequest, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * AuthenticationApi - factory interface
 * @export
 */


exports.AuthenticationApiFp = AuthenticationApiFp;

var AuthenticationApiFactory = function AuthenticationApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest, xAmphoradataVersion, options) {
      return AuthenticationApiFp(configuration).authenticationRequestToken(loginRequest, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */


exports.AuthenticationApiFactory = AuthenticationApiFactory;

var AuthenticationApi = /*#__PURE__*/function (_BaseAPI2) {
  _inherits(AuthenticationApi, _BaseAPI2);

  var _super2 = _createSuper(AuthenticationApi);

  function AuthenticationApi() {
    _classCallCheck(this, AuthenticationApi);

    return _super2.apply(this, arguments);
  }

  _createClass(AuthenticationApi, [{
    key: "authenticationRequestToken",

    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    value: function authenticationRequestToken(loginRequest, xAmphoradataVersion, options) {
      return AuthenticationApiFp(this.configuration).authenticationRequestToken(loginRequest, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return AuthenticationApi;
}(_base.BaseAPI);
/**
 * IdentityApi - axios parameter creator
 * @export
 */


exports.AuthenticationApi = AuthenticationApi;

var IdentityApiAxiosParamCreator = function IdentityApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet(xAmphoradataVersion) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localVarPath = "/identity";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * IdentityApi - functional programming interface
 * @export
 */


exports.IdentityApiAxiosParamCreator = IdentityApiAxiosParamCreator;

var IdentityApiFp = function IdentityApiFp(configuration) {
  return {
    /**
     * 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet(xAmphoradataVersion, options) {
      var localVarAxiosArgs = IdentityApiAxiosParamCreator(configuration).identityGet(xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * IdentityApi - factory interface
 * @export
 */


exports.IdentityApiFp = IdentityApiFp;

var IdentityApiFactory = function IdentityApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet(xAmphoradataVersion, options) {
      return IdentityApiFp(configuration).identityGet(xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * IdentityApi - object-oriented interface
 * @export
 * @class IdentityApi
 * @extends {BaseAPI}
 */


exports.IdentityApiFactory = IdentityApiFactory;

var IdentityApi = /*#__PURE__*/function (_BaseAPI3) {
  _inherits(IdentityApi, _BaseAPI3);

  var _super3 = _createSuper(IdentityApi);

  function IdentityApi() {
    _classCallCheck(this, IdentityApi);

    return _super3.apply(this, arguments);
  }

  _createClass(IdentityApi, [{
    key: "identityGet",

    /**
     * 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IdentityApi
     */
    value: function identityGet(xAmphoradataVersion, options) {
      return IdentityApiFp(this.configuration).identityGet(xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return IdentityApi;
}(_base.BaseAPI);
/**
 * MarketApi - axios parameter creator
 * @export
 */


exports.IdentityApi = IdentityApi;

var MarketApiAxiosParamCreator = function MarketApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Finds Amphora using a fuzzy search.
     * @param {string} [query] A string as a search term.
     * @param {number} [top] How many results to return.
     * @param {number} [skip] How many pages (in multiples of top) to skip.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketFind: function marketFind(query, top, skip, xAmphoradataVersion) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var localVarPath = "/api/market/search";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (query !== undefined) {
        localVarQueryParameter['query'] = query;
      }

      if (top !== undefined) {
        localVarQueryParameter['top'] = top;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketLookupLocation: function marketLookupLocation(query, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var localVarPath = "/api/location/fuzzy";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (query !== undefined) {
        localVarQueryParameter['query'] = query;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * MarketApi - functional programming interface
 * @export
 */


exports.MarketApiAxiosParamCreator = MarketApiAxiosParamCreator;

var MarketApiFp = function MarketApiFp(configuration) {
  return {
    /**
     * 
     * @summary Finds Amphora using a fuzzy search.
     * @param {string} [query] A string as a search term.
     * @param {number} [top] How many results to return.
     * @param {number} [skip] How many pages (in multiples of top) to skip.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketFind: function marketFind(query, top, skip, xAmphoradataVersion, options) {
      var localVarAxiosArgs = MarketApiAxiosParamCreator(configuration).marketFind(query, top, skip, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketLookupLocation: function marketLookupLocation(query, xAmphoradataVersion, options) {
      var localVarAxiosArgs = MarketApiAxiosParamCreator(configuration).marketLookupLocation(query, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * MarketApi - factory interface
 * @export
 */


exports.MarketApiFp = MarketApiFp;

var MarketApiFactory = function MarketApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Finds Amphora using a fuzzy search.
     * @param {string} [query] A string as a search term.
     * @param {number} [top] How many results to return.
     * @param {number} [skip] How many pages (in multiples of top) to skip.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketFind: function marketFind(query, top, skip, xAmphoradataVersion, options) {
      return MarketApiFp(configuration).marketFind(query, top, skip, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    marketLookupLocation: function marketLookupLocation(query, xAmphoradataVersion, options) {
      return MarketApiFp(configuration).marketLookupLocation(query, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * MarketApi - object-oriented interface
 * @export
 * @class MarketApi
 * @extends {BaseAPI}
 */


exports.MarketApiFactory = MarketApiFactory;

var MarketApi = /*#__PURE__*/function (_BaseAPI4) {
  _inherits(MarketApi, _BaseAPI4);

  var _super4 = _createSuper(MarketApi);

  function MarketApi() {
    _classCallCheck(this, MarketApi);

    return _super4.apply(this, arguments);
  }

  _createClass(MarketApi, [{
    key: "marketFind",

    /**
     * 
     * @summary Finds Amphora using a fuzzy search.
     * @param {string} [query] A string as a search term.
     * @param {number} [top] How many results to return.
     * @param {number} [skip] How many pages (in multiples of top) to skip.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketApi
     */
    value: function marketFind(query, top, skip, xAmphoradataVersion, options) {
      return MarketApiFp(this.configuration).marketFind(query, top, skip, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MarketApi
     */

  }, {
    key: "marketLookupLocation",
    value: function marketLookupLocation(query, xAmphoradataVersion, options) {
      return MarketApiFp(this.configuration).marketLookupLocation(query, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return MarketApi;
}(_base.BaseAPI);
/**
 * OrganisationsApi - axios parameter creator
 * @export
 */


exports.MarketApi = MarketApi;

var OrganisationsApiAxiosParamCreator = function OrganisationsApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling accountGetPlan.');
      }

      var localVarPath = "/api/Organisations/{id}/Account/Plan".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling accountRead.');
      }

      var localVarPath = "/api/Organisations/{id}/Account".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'organisation' is not null or undefined
      if (organisation === null || organisation === undefined) {
        throw new _base.RequiredError('organisation', 'Required parameter organisation was null or undefined when calling organisationsCreate.');
      }

      var localVarPath = "/api/organisations";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof organisation !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(organisation !== undefined ? organisation : {}) : organisation || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling organisationsDelete.');
      }

      var localVarPath = "/api/organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'DELETE'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling organisationsRead.');
      }

      var localVarPath = "/api/organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling organisationsUpdate.');
      } // verify required parameter 'organisation' is not null or undefined


      if (organisation === null || organisation === undefined) {
        throw new _base.RequiredError('organisation', 'Required parameter organisation was null or undefined when calling organisationsUpdate.');
      }

      var localVarPath = "/api/organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'PUT'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof organisation !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(organisation !== undefined ? organisation : {}) : organisation || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Adds new Terms and Conditions to your Organisations T/C Library.
     * @param {string} id The Id of the Organisation.
     * @param {TermsAndConditions} termsAndConditions The new Terms and Conditions.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsCreate: function termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling termsAndConditionsCreate.');
      } // verify required parameter 'termsAndConditions' is not null or undefined


      if (termsAndConditions === null || termsAndConditions === undefined) {
        throw new _base.RequiredError('termsAndConditions', 'Required parameter termsAndConditions was null or undefined when calling termsAndConditionsCreate.');
      }

      var localVarPath = "/api/Organisations/{id}/TermsAndConditions".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof termsAndConditions !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(termsAndConditions !== undefined ? termsAndConditions : {}) : termsAndConditions || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms and Conditions.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsRead: function termsAndConditionsRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling termsAndConditionsRead.');
      }

      var localVarPath = "/api/Organisations/{id}/TermsAndConditions".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * OrganisationsApi - functional programming interface
 * @export
 */


exports.OrganisationsApiAxiosParamCreator = OrganisationsApiAxiosParamCreator;

var OrganisationsApiFp = function OrganisationsApiFp(configuration) {
  return {
    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).accountGetPlan(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).accountRead(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsCreate(organisation, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsDelete(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsRead(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsUpdate(id, organisation, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Adds new Terms and Conditions to your Organisations T/C Library.
     * @param {string} id The Id of the Organisation.
     * @param {TermsAndConditions} termsAndConditions The new Terms and Conditions.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsCreate: function termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms and Conditions.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsRead: function termsAndConditionsRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).termsAndConditionsRead(id, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * OrganisationsApi - factory interface
 * @export
 */


exports.OrganisationsApiFp = OrganisationsApiFp;

var OrganisationsApiFactory = function OrganisationsApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).accountGetPlan(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).accountRead(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsCreate(organisation, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsDelete(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsRead(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsUpdate(id, organisation, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Adds new Terms and Conditions to your Organisations T/C Library.
     * @param {string} id The Id of the Organisation.
     * @param {TermsAndConditions} termsAndConditions The new Terms and Conditions.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsCreate: function termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms and Conditions.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsAndConditionsRead: function termsAndConditionsRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).termsAndConditionsRead(id, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * OrganisationsApi - object-oriented interface
 * @export
 * @class OrganisationsApi
 * @extends {BaseAPI}
 */


exports.OrganisationsApiFactory = OrganisationsApiFactory;

var OrganisationsApi = /*#__PURE__*/function (_BaseAPI5) {
  _inherits(OrganisationsApi, _BaseAPI5);

  var _super5 = _createSuper(OrganisationsApi);

  function OrganisationsApi() {
    _classCallCheck(this, OrganisationsApi);

    return _super5.apply(this, arguments);
  }

  _createClass(OrganisationsApi, [{
    key: "accountGetPlan",

    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */
    value: function accountGetPlan(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).accountGetPlan(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "accountRead",
    value: function accountRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).accountRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsCreate",
    value: function organisationsCreate(organisation, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsCreate(organisation, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsDelete",
    value: function organisationsDelete(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsDelete(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsRead",
    value: function organisationsRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsUpdate",
    value: function organisationsUpdate(id, organisation, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsUpdate(id, organisation, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Adds new Terms and Conditions to your Organisations T/C Library.
     * @param {string} id The Id of the Organisation.
     * @param {TermsAndConditions} termsAndConditions The new Terms and Conditions.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "termsAndConditionsCreate",
    value: function termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).termsAndConditionsCreate(id, termsAndConditions, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms and Conditions.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "termsAndConditionsRead",
    value: function termsAndConditionsRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).termsAndConditionsRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return OrganisationsApi;
}(_base.BaseAPI);
/**
 * SearchApi - axios parameter creator
 * @export
 */


exports.OrganisationsApi = OrganisationsApi;

var SearchApiAxiosParamCreator = function SearchApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Searches for Amphorae by loction.
     * @param {number} [lat] Latitude.
     * @param {number} [lon] Longitude.
     * @param {number} [dist] Distance from Latitude and Longitude in which to search.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByLocation: function searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var localVarPath = "/api/search/amphorae/byLocation";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (lat !== undefined) {
        localVarQueryParameter['lat'] = lat;
      }

      if (lon !== undefined) {
        localVarQueryParameter['lon'] = lon;
      }

      if (dist !== undefined) {
        localVarQueryParameter['dist'] = dist;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Searches for Amphorae in an Organisation.
     * @param {string} [orgId] Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByOrganisation: function searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var localVarPath = "/api/search/amphorae/byOrganisation";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (orgId !== undefined) {
        localVarQueryParameter['orgId'] = orgId;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var localVarPath = "/api/search/organisations";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (term !== undefined) {
        localVarQueryParameter['term'] = term;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * SearchApi - functional programming interface
 * @export
 */


exports.SearchApiAxiosParamCreator = SearchApiAxiosParamCreator;

var SearchApiFp = function SearchApiFp(configuration) {
  return {
    /**
     * 
     * @summary Searches for Amphorae by loction.
     * @param {number} [lat] Latitude.
     * @param {number} [lon] Longitude.
     * @param {number} [dist] Distance from Latitude and Longitude in which to search.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByLocation: function searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Searches for Amphorae in an Organisation.
     * @param {string} [orgId] Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByOrganisation: function searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term, xAmphoradataVersion, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchOrganisations(term, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * SearchApi - factory interface
 * @export
 */


exports.SearchApiFp = SearchApiFp;

var SearchApiFactory = function SearchApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Searches for Amphorae by loction.
     * @param {number} [lat] Latitude.
     * @param {number} [lon] Longitude.
     * @param {number} [dist] Distance from Latitude and Longitude in which to search.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByLocation: function searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options) {
      return SearchApiFp(configuration).searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Searches for Amphorae in an Organisation.
     * @param {string} [orgId] Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphoraeByOrganisation: function searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options) {
      return SearchApiFp(configuration).searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term, xAmphoradataVersion, options) {
      return SearchApiFp(configuration).searchSearchOrganisations(term, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */


exports.SearchApiFactory = SearchApiFactory;

var SearchApi = /*#__PURE__*/function (_BaseAPI6) {
  _inherits(SearchApi, _BaseAPI6);

  var _super6 = _createSuper(SearchApi);

  function SearchApi() {
    _classCallCheck(this, SearchApi);

    return _super6.apply(this, arguments);
  }

  _createClass(SearchApi, [{
    key: "searchSearchAmphoraeByLocation",

    /**
     * 
     * @summary Searches for Amphorae by loction.
     * @param {number} [lat] Latitude.
     * @param {number} [lon] Longitude.
     * @param {number} [dist] Distance from Latitude and Longitude in which to search.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    value: function searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options) {
      return SearchApiFp(this.configuration).searchSearchAmphoraeByLocation(lat, lon, dist, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Searches for Amphorae in an Organisation.
     * @param {string} [orgId] Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */

  }, {
    key: "searchSearchAmphoraeByOrganisation",
    value: function searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options) {
      return SearchApiFp(this.configuration).searchSearchAmphoraeByOrganisation(orgId, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */

  }, {
    key: "searchSearchOrganisations",
    value: function searchSearchOrganisations(term, xAmphoradataVersion, options) {
      return SearchApiFp(this.configuration).searchSearchOrganisations(term, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return SearchApi;
}(_base.BaseAPI);
/**
 * TimeSeriesApi - axios parameter creator
 * @export
 */


exports.SearchApi = SearchApi;

var TimeSeriesApiAxiosParamCreator = function TimeSeriesApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'queryRequest' is not null or undefined
      if (queryRequest === null || queryRequest === undefined) {
        throw new _base.RequiredError('queryRequest', 'Required parameter queryRequest was null or undefined when calling timeSeriesQueryTimeSeries.');
      }

      var localVarPath = "/api/timeseries/query";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof queryRequest !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(queryRequest !== undefined ? queryRequest : {}) : queryRequest || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * TimeSeriesApi - functional programming interface
 * @export
 */


exports.TimeSeriesApiAxiosParamCreator = TimeSeriesApiAxiosParamCreator;

var TimeSeriesApiFp = function TimeSeriesApiFp(configuration) {
  return {
    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options) {
      var localVarAxiosArgs = TimeSeriesApiAxiosParamCreator(configuration).timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * TimeSeriesApi - factory interface
 * @export
 */


exports.TimeSeriesApiFp = TimeSeriesApiFp;

var TimeSeriesApiFactory = function TimeSeriesApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options) {
      return TimeSeriesApiFp(configuration).timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * TimeSeriesApi - object-oriented interface
 * @export
 * @class TimeSeriesApi
 * @extends {BaseAPI}
 */


exports.TimeSeriesApiFactory = TimeSeriesApiFactory;

var TimeSeriesApi = /*#__PURE__*/function (_BaseAPI7) {
  _inherits(TimeSeriesApi, _BaseAPI7);

  var _super7 = _createSuper(TimeSeriesApi);

  function TimeSeriesApi() {
    _classCallCheck(this, TimeSeriesApi);

    return _super7.apply(this, arguments);
  }

  _createClass(TimeSeriesApi, [{
    key: "timeSeriesQueryTimeSeries",

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeSeriesApi
     */
    value: function timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options) {
      return TimeSeriesApiFp(this.configuration).timeSeriesQueryTimeSeries(queryRequest, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return TimeSeriesApi;
}(_base.BaseAPI);
/**
 * UsersApi - axios parameter creator
 * @export
 */


exports.TimeSeriesApi = TimeSeriesApi;

var UsersApiAxiosParamCreator = function UsersApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Creates a new User. Returns the password.
     * @param {CreateAmphoraUser} createAmphoraUser User parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'createAmphoraUser' is not null or undefined
      if (createAmphoraUser === null || createAmphoraUser === undefined) {
        throw new _base.RequiredError('createAmphoraUser', 'Required parameter createAmphoraUser was null or undefined when calling usersCreate.');
      }

      var localVarPath = "/api/users";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'POST'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof createAmphoraUser !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createAmphoraUser !== undefined ? createAmphoraUser : {}) : createAmphoraUser || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf(xAmphoradataVersion) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localVarPath = "/api/users/self";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * UsersApi - functional programming interface
 * @export
 */


exports.UsersApiAxiosParamCreator = UsersApiAxiosParamCreator;

var UsersApiFp = function UsersApiFp(configuration) {
  return {
    /**
     * 
     * @summary Creates a new User. Returns the password.
     * @param {CreateAmphoraUser} createAmphoraUser User parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser, xAmphoradataVersion, options) {
      var localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).usersCreate(createAmphoraUser, xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    },

    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf(xAmphoradataVersion, options) {
      var localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).usersReadSelf(xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * UsersApi - factory interface
 * @export
 */


exports.UsersApiFp = UsersApiFp;

var UsersApiFactory = function UsersApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Creates a new User. Returns the password.
     * @param {CreateAmphoraUser} createAmphoraUser User parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser, xAmphoradataVersion, options) {
      return UsersApiFp(configuration).usersCreate(createAmphoraUser, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf(xAmphoradataVersion, options) {
      return UsersApiFp(configuration).usersReadSelf(xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */


exports.UsersApiFactory = UsersApiFactory;

var UsersApi = /*#__PURE__*/function (_BaseAPI8) {
  _inherits(UsersApi, _BaseAPI8);

  var _super8 = _createSuper(UsersApi);

  function UsersApi() {
    _classCallCheck(this, UsersApi);

    return _super8.apply(this, arguments);
  }

  _createClass(UsersApi, [{
    key: "usersCreate",

    /**
     * 
     * @summary Creates a new User. Returns the password.
     * @param {CreateAmphoraUser} createAmphoraUser User parameters.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    value: function usersCreate(createAmphoraUser, xAmphoradataVersion, options) {
      return UsersApiFp(this.configuration).usersCreate(createAmphoraUser, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */

  }, {
    key: "usersReadSelf",
    value: function usersReadSelf(xAmphoradataVersion, options) {
      return UsersApiFp(this.configuration).usersReadSelf(xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return UsersApi;
}(_base.BaseAPI);
/**
 * VersionApi - axios parameter creator
 * @export
 */


exports.UsersApi = UsersApi;

var VersionApiAxiosParamCreator = function VersionApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Get\'s the current server version.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion(xAmphoradataVersion) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localVarPath = "/api/version";
      var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      var baseOptions;

      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      var localVarRequestOptions = _objectSpread({
        method: 'GET'
      }, baseOptions, {}, options);

      var localVarHeaderParameter = {};
      var localVarQueryParameter = {}; // authentication Bearer required

      if (configuration && configuration.apiKey) {
        var localVarApiKeyValue = typeof configuration.apiKey === 'function' ? configuration.apiKey("Authorization") : configuration.apiKey;
        localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
      }

      if (xAmphoradataVersion !== undefined && xAmphoradataVersion !== null) {
        localVarHeaderParameter['x-amphoradata-version'] = String(xAmphoradataVersion);
      }

      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * VersionApi - functional programming interface
 * @export
 */


exports.VersionApiAxiosParamCreator = VersionApiAxiosParamCreator;

var VersionApiFp = function VersionApiFp(configuration) {
  return {
    /**
     * 
     * @summary Get\'s the current server version.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion(xAmphoradataVersion, options) {
      var localVarAxiosArgs = VersionApiAxiosParamCreator(configuration).versionGetCurrentVersion(xAmphoradataVersion, options);
      return function () {
        var axios = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _axios["default"];
        var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _base.BASE_PATH;

        var axiosRequestArgs = _objectSpread({}, localVarAxiosArgs.options, {
          url: basePath + localVarAxiosArgs.url
        });

        return axios.request(axiosRequestArgs);
      };
    }
  };
};
/**
 * VersionApi - factory interface
 * @export
 */


exports.VersionApiFp = VersionApiFp;

var VersionApiFactory = function VersionApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Get\'s the current server version.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion(xAmphoradataVersion, options) {
      return VersionApiFp(configuration).versionGetCurrentVersion(xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * VersionApi - object-oriented interface
 * @export
 * @class VersionApi
 * @extends {BaseAPI}
 */


exports.VersionApiFactory = VersionApiFactory;

var VersionApi = /*#__PURE__*/function (_BaseAPI9) {
  _inherits(VersionApi, _BaseAPI9);

  var _super9 = _createSuper(VersionApi);

  function VersionApi() {
    _classCallCheck(this, VersionApi);

    return _super9.apply(this, arguments);
  }

  _createClass(VersionApi, [{
    key: "versionGetCurrentVersion",

    /**
     * 
     * @summary Get\'s the current server version.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionApi
     */
    value: function versionGetCurrentVersion(xAmphoradataVersion, options) {
      return VersionApiFp(this.configuration).versionGetCurrentVersion(xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return VersionApi;
}(_base.BaseAPI);

exports.VersionApi = VersionApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nkay9hcGkudHMiXSwibmFtZXMiOlsiUGxhblR5cGVzIiwiQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvciIsImNvbmZpZ3VyYXRpb24iLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uIiwiaWQiLCJvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIiwieEFtcGhvcmFkYXRhVmVyc2lvbiIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJSZXF1aXJlZEVycm9yIiwibG9jYWxWYXJQYXRoIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIlN0cmluZyIsImxvY2FsVmFyVXJsT2JqIiwiZ2xvYmFsSW1wb3J0VXJsIiwicGFyc2UiLCJiYXNlT3B0aW9ucyIsImxvY2FsVmFyUmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJsb2NhbFZhckhlYWRlclBhcmFtZXRlciIsImxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIiLCJhcGlLZXkiLCJsb2NhbFZhckFwaUtleVZhbHVlIiwicXVlcnkiLCJzZWFyY2giLCJoZWFkZXJzIiwibmVlZHNTZXJpYWxpemF0aW9uIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJmb3JtYXQiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlciIsInVzZXJBY2Nlc3NSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZSIsInJ1bGVJZCIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMiLCJhbXBob3JhZUNyZWF0ZSIsImNyZWF0ZUFtcGhvcmEiLCJhbXBob3JhZURlbGV0ZSIsImFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdCIsImZpbGUiLCJhbXBob3JhZUZpbGVzRGVsZXRlRmlsZSIsImFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUiLCJhbXBob3JhZUZpbGVzTGlzdEZpbGVzIiwib3JkZXJCeSIsImFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YSIsInJlcXVlc3RCb2R5IiwiYW1waG9yYWVMaXN0Iiwic2NvcGUiLCJhY2Nlc3NUeXBlIiwiYW1waG9yYWVSZWFkIiwiYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsIiwic2lnbmFsIiwiYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsIiwicHJvcGVydHkiLCJhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzIiwiYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsIiwic2lnbmFsSWQiLCJ1cGRhdGVTaWduYWwiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyIiwiYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2giLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIiLCJhbXBob3JhZVVwZGF0ZSIsImRldGFpbGVkQW1waG9yYSIsInB1cmNoYXNlc1B1cmNoYXNlIiwiQW1waG9yYWVBcGlGcCIsImxvY2FsVmFyQXhpb3NBcmdzIiwiYXhpb3MiLCJnbG9iYWxBeGlvcyIsImJhc2VQYXRoIiwiQkFTRV9QQVRIIiwiYXhpb3NSZXF1ZXN0QXJncyIsInJlcXVlc3QiLCJBbXBob3JhZUFwaUZhY3RvcnkiLCJBbXBob3JhZUFwaSIsIkJhc2VBUEkiLCJBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4iLCJsb2dpblJlcXVlc3QiLCJBdXRoZW50aWNhdGlvbkFwaUZwIiwiQXV0aGVudGljYXRpb25BcGlGYWN0b3J5IiwiQXV0aGVudGljYXRpb25BcGkiLCJJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiaWRlbnRpdHlHZXQiLCJJZGVudGl0eUFwaUZwIiwiSWRlbnRpdHlBcGlGYWN0b3J5IiwiSWRlbnRpdHlBcGkiLCJNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvciIsIm1hcmtldEZpbmQiLCJ0b3AiLCJza2lwIiwibWFya2V0TG9va3VwTG9jYXRpb24iLCJNYXJrZXRBcGlGcCIsIk1hcmtldEFwaUZhY3RvcnkiLCJNYXJrZXRBcGkiLCJPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJhY2NvdW50R2V0UGxhbiIsImFjY291bnRSZWFkIiwib3JnYW5pc2F0aW9uc0NyZWF0ZSIsIm9yZ2FuaXNhdGlvbiIsIm9yZ2FuaXNhdGlvbnNEZWxldGUiLCJvcmdhbmlzYXRpb25zUmVhZCIsIm9yZ2FuaXNhdGlvbnNVcGRhdGUiLCJ0ZXJtc0FuZENvbmRpdGlvbnNDcmVhdGUiLCJ0ZXJtc0FuZENvbmRpdGlvbnMiLCJ0ZXJtc0FuZENvbmRpdGlvbnNSZWFkIiwiT3JnYW5pc2F0aW9uc0FwaUZwIiwiT3JnYW5pc2F0aW9uc0FwaUZhY3RvcnkiLCJPcmdhbmlzYXRpb25zQXBpIiwiU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24iLCJsYXQiLCJsb24iLCJkaXN0Iiwic2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbiIsIm9yZ0lkIiwic2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyIsInRlcm0iLCJTZWFyY2hBcGlGcCIsIlNlYXJjaEFwaUZhY3RvcnkiLCJTZWFyY2hBcGkiLCJUaW1lU2VyaWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJ0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzIiwicXVlcnlSZXF1ZXN0IiwiVGltZVNlcmllc0FwaUZwIiwiVGltZVNlcmllc0FwaUZhY3RvcnkiLCJUaW1lU2VyaWVzQXBpIiwiVXNlcnNBcGlBeGlvc1BhcmFtQ3JlYXRvciIsInVzZXJzQ3JlYXRlIiwiY3JlYXRlQW1waG9yYVVzZXIiLCJ1c2Vyc1JlYWRTZWxmIiwiVXNlcnNBcGlGcCIsIlVzZXJzQXBpRmFjdG9yeSIsIlVzZXJzQXBpIiwiVmVyc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwidmVyc2lvbkdldEN1cnJl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QUFRLEdBQUdILGlCQUFpQixDQUFDdkM7QUFBcEUsVUFBdEI7O0FBQ0EsZUFBT3dDLEtBQUssQ0FBQ0ssT0FBTixDQUFjRCxnQkFBZCxDQUFQO0FBQ0gsT0FIRDtBQUlIO0FBZEUsR0FBUDtBQWdCSCxDQWpCTTtBQW1CUDs7Ozs7Ozs7QUFJTyxJQUFNa0UsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFVM0ksYUFBVixFQUF5Q3VFLFFBQXpDLEVBQTRERixLQUE1RCxFQUFtRjtBQUNoSCxTQUFPO0FBQ0g7Ozs7Ozs7QUFPQW9FLElBQUFBLHdCQVJHLG9DQVFzQnJJLG1CQVJ0QixFQVFvREMsT0FScEQsRUFRbUU7QUFDbEUsYUFBT3FJLFlBQVksQ0FBQzFJLGFBQUQsQ0FBWixDQUE0QnlJLHdCQUE1QixDQUFxRHJJLG1CQUFyRCxFQUEwRUMsT0FBMUUsRUFBbUZnRSxLQUFuRixFQUEwRkUsUUFBMUYsQ0FBUDtBQUNIO0FBVkUsR0FBUDtBQVlILENBYk07QUFlUDs7Ozs7Ozs7OztJQU1hcUUsVTs7Ozs7Ozs7Ozs7Ozs7QUFDVDs7Ozs7Ozs7NkNBUWdDeEksbUIsRUFBOEJDLE8sRUFBZTtBQUN6RSxhQUFPcUksWUFBWSxDQUFDLEtBQUsxSSxhQUFOLENBQVosQ0FBaUN5SSx3QkFBakMsQ0FBMERySSxtQkFBMUQsRUFBK0VDLE9BQS9FLEVBQXdGLEtBQUtnRSxLQUE3RixFQUFvRyxLQUFLRSxRQUF6RyxDQUFQO0FBQ0g7Ozs7RUFYMkJNLGEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZVxuLyoqXG4gKiBBbXBob3JhIERhdGEgQXBpXG4gKiBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIEFtcGhvcmEgRGF0YSBwbGF0Zm9ybS5cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMC45LjhcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIGdsb2JhbEltcG9ydFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgZ2xvYmFsQXhpb3MsIHsgQXhpb3NQcm9taXNlLCBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnO1xuLy8gU29tZSBpbXBvcnRzIG5vdCB1c2VkIGRlcGVuZGluZyBvbiB0ZW1wbGF0ZSBjb25kaXRpb25zXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBCQVNFX1BBVEgsIENPTExFQ1RJT05fRk9STUFUUywgUmVxdWVzdEFyZ3MsIEJhc2VBUEksIFJlcXVpcmVkRXJyb3IgfSBmcm9tICcuL2Jhc2UnO1xuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY2Nlc3NSdWxlRHRvQmFzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc1J1bGVEdG9CYXNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIGFsbG93T3JEZW55Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWNjb3VudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFjY291bnRcbiAgICAgKi9cbiAgICBiYWxhbmNlPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWRkcmVzc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBzdHJlZXROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBzdHJlZXROYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgbXVuaWNpcGFsaXR5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBtdW5pY2lwYWxpdHk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5U2Vjb25kYXJ5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBwb3N0YWxDb2RlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeUNvZGVJc28zPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgZnJlZWZvcm1BZGRyZXNzPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgbG9jYWxOYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFnZ3JlZ2F0ZVNlcmllc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZVNlcmllcyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIHRpbWVTZXJpZXNJZD86IEFycmF5PG9iamVjdD4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlVGltZVJhbmdlfVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBzZWFyY2hTcGFuPzogRGF0ZVRpbWVSYW5nZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBpbnRlcnZhbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgcHJvamVjdGVkVmFyaWFibGVzPzogQXJyYXk8c3RyaW5nPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogVmFyaWFibGU7IH19XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIGlubGluZVZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogVmFyaWFibGU7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWdncmVnYXRlVmFyaWFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlVmFyaWFibGVcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gICAgICovXG4gICAga2luZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gICAgICovXG4gICAgYWdncmVnYXRpb24/OiBUc3ggfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQW1waG9yYVVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbXBob3JhVXNlciB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBwaG9uZU51bWJlcj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBhYm91dD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZW1haWw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGUgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQW1waG9yYVVzZXJBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtcGhvcmFVc2VyQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgZW1haWw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEF0dHJpYnV0ZVN0b3JlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlU3RvcmUge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX1cbiAgICAgKiBAbWVtYmVyb2YgQXR0cmlidXRlU3RvcmVcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH07XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNlQW1waG9yYVVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNlQW1waG9yYVVzZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBhYm91dD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQmFzaWNBbXBob3JhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNBbXBob3JhIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGlzRGVsZXRlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBjcmVhdGVkRGF0ZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGxhYmVscz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNpY0FtcGhvcmFBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljQW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ2F0ZWdvcnlTZXRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeVNldCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ2F0ZWdvcnlTZXRcbiAgICAgKi9cbiAgICBpZD86IG51bWJlcjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENsYXNzaWZpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZmljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENsYXNzaWZpY2F0aW9uXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PE5hbWU+fVxuICAgICAqIEBtZW1iZXJvZiBDbGFzc2lmaWNhdGlvblxuICAgICAqL1xuICAgIG5hbWVzPzogQXJyYXk8TmFtZT47XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGlzRGVsZXRlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICB0ZXJtc0FuZENvbmRpdGlvbnNJZD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uc0lkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYVVzZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgYWJvdXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgY29uZmlybVBhc3N3b3JkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYVVzZXJBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGNvbmZpcm1QYXNzd29yZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGVtYWlsOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEYXRlVGltZVJhbmdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERhdGVUaW1lUmFuZ2VcbiAgICAgKi9cbiAgICBmcm9tPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRGF0ZVRpbWVSYW5nZVxuICAgICAqL1xuICAgIHRvPzogRGF0ZTtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uc0lkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgZmlsZUF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgcHVyY2hhc2VDb3VudD86IG51bWJlciB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmFBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHB1cmNoYXNlQ291bnQ/OiBudW1iZXIgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRWRpdEFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0QW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgdGVybXNBbmRDb25kaXRpb25zSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGZpbGVBdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFZGl0QW1waG9yYUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdEFtcGhvcmFBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGxvbj86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHRlcm1zQW5kQ29uZGl0aW9uc0lkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGZpbGVBdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFbnRpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVudGl0eVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEVudGl0eVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFbnRyeVBvaW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlQb2ludCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRW50cnlQb2ludFxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb3NpdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRW50cnlQb2ludFxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogUG9zaXRpb24gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRXZlbnRQcm9wZXJ0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcGVydHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEV2ZW50UHJvcGVydHlcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFdmVudFByb3BlcnR5XG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBGdXp6eVNlYXJjaFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnV6enlTZWFyY2hSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1N1bW1hcnl9XG4gICAgICogQG1lbWJlcm9mIEZ1enp5U2VhcmNoUmVzcG9uc2VcbiAgICAgKi9cbiAgICBzdW1tYXJ5PzogU3VtbWFyeSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlc3VsdD59XG4gICAgICogQG1lbWJlcm9mIEZ1enp5U2VhcmNoUmVzcG9uc2VcbiAgICAgKi9cbiAgICByZXN1bHRzPzogQXJyYXk8UmVzdWx0Pjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEdldEV2ZW50c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldEV2ZW50cyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIEdldEV2ZW50c1xuICAgICAqL1xuICAgIHRpbWVTZXJpZXNJZD86IEFycmF5PG9iamVjdD4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlVGltZVJhbmdlfVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBzZWFyY2hTcGFuPzogRGF0ZVRpbWVSYW5nZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgcHJvamVjdGVkUHJvcGVydGllcz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgR2V0U2VyaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2VyaWVzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8b2JqZWN0Pn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgdGltZVNlcmllc0lkPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGVUaW1lUmFuZ2V9XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIHNlYXJjaFNwYW4/OiBEYXRlVGltZVJhbmdlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBwcm9qZWN0ZWRWYXJpYWJsZXM/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgaW5saW5lVmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBMb2dpblJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVxdWVzdFxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTG9naW5SZXF1ZXN0XG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE5hbWVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYW1lIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBOYW1lXG4gICAgICovXG4gICAgbmFtZUxvY2FsZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTmFtZVxuICAgICAqL1xuICAgIG5hbWVOYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBOdW1lcmljVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgdmFsdWU/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIE51bWVyaWNWYXJpYWJsZVxuICAgICAqL1xuICAgIGFnZ3JlZ2F0aW9uPzogVHN4IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICB3ZWJzaXRlVXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWRkcmVzcz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgYWxsb3dPckRlbnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZUFsbE9mXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIHdlYnNpdGVVcmw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGFnZWRSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VkUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBhZ2VkUmVzcG9uc2VcbiAgICAgKi9cbiAgICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGFuSW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGFuSW5mb3JtYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQbGFuVHlwZXN9XG4gICAgICogQG1lbWJlcm9mIFBsYW5JbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHBsYW5UeXBlPzogUGxhblR5cGVzO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYW5JbmZvcm1hdGlvblxuICAgICAqL1xuICAgIGZyaWVuZGx5TmFtZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGVudW0gUGxhblR5cGVzIHtcbiAgICBOVU1CRVJfMCA9IDAsXG4gICAgTlVNQkVSXzEgPSAxLFxuICAgIE5VTUJFUl8yID0gMlxufVxuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQb2lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb2kge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIHBob25lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8Q2F0ZWdvcnlTZXQ+fVxuICAgICAqIEBtZW1iZXJvZiBQb2lcbiAgICAgKi9cbiAgICBjYXRlZ29yeVNldD86IEFycmF5PENhdGVnb3J5U2V0PjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgUG9pXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IEFycmF5PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PENsYXNzaWZpY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgUG9pXG4gICAgICovXG4gICAgY2xhc3NpZmljYXRpb25zPzogQXJyYXk8Q2xhc3NpZmljYXRpb24+O1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUG9zaXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUG9zaXRpb25cbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUG9zaXRpb25cbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9ibGVtRGV0YWlsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb2JsZW1EZXRhaWxzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgc3RhdHVzPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIGRldGFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBpbnN0YW5jZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIGV4dGVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsdWVzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzXG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzXG4gICAgICovXG4gICAgdmFsdWVzPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlc0FsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzQWxsT2ZcbiAgICAgKi9cbiAgICB2YWx1ZXM/OiBBcnJheTxvYmplY3Q+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFF1ZXJ5UmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0dldEV2ZW50c31cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXF1ZXN0XG4gICAgICovXG4gICAgZ2V0RXZlbnRzPzogR2V0RXZlbnRzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7R2V0U2VyaWVzfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlcXVlc3RcbiAgICAgKi9cbiAgICBnZXRTZXJpZXM/OiBHZXRTZXJpZXMgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBZ2dyZWdhdGVTZXJpZXN9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVxdWVzdFxuICAgICAqL1xuICAgIGFnZ3JlZ2F0ZVNlcmllcz86IEFnZ3JlZ2F0ZVNlcmllcyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIGNvbnRpbnVhdGlvblRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8RGF0ZT59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIHRpbWVzdGFtcHM/OiBBcnJheTxEYXRlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFByb3BlcnR5VmFsdWVzPn1cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXN1bHRQYWdlXG4gICAgICovXG4gICAgcHJvcGVydGllcz86IEFycmF5PFByb3BlcnR5VmFsdWVzPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UmVzdWx0UGFnZUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8RGF0ZT59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZUFsbE9mXG4gICAgICovXG4gICAgdGltZXN0YW1wcz86IEFycmF5PERhdGU+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8UHJvcGVydHlWYWx1ZXM+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICAgICAqL1xuICAgIHByb3BlcnRpZXM/OiBBcnJheTxQcm9wZXJ0eVZhbHVlcz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgc2NvcmU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FkZHJlc3N9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UG9zaXRpb259XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogUG9zaXRpb24gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtWaWV3cG9ydH1cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgdmlld3BvcnQ/OiBWaWV3cG9ydCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PEVudHJ5UG9pbnQ+fVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBlbnRyeVBvaW50cz86IEFycmF5PEVudHJ5UG9pbnQ+O1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIGluZm8/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb2l9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHBvaT86IFBvaSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBTaWduYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaWduYWwge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNpZ25hbFxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICBwcm9wZXJ0eT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU2lnbmFsXG4gICAgICovXG4gICAgdmFsdWVUeXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19XG4gICAgICogQG1lbWJlcm9mIFNpZ25hbFxuICAgICAqL1xuICAgIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBTdW1tYXJ5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3VtbWFyeSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIHF1ZXJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgcXVlcnlUeXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgcXVlcnlUaW1lPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBudW1SZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBvZmZzZXQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgZnV6enlMZXZlbD86IG51bWJlcjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFRlcm1zQW5kQ29uZGl0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1zQW5kQ29uZGl0aW9ucyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNBbmRDb25kaXRpb25zXG4gICAgICovXG4gICAgaWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc0FuZENvbmRpdGlvbnNcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNBbmRDb25kaXRpb25zXG4gICAgICovXG4gICAgY29udGVudHM6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFRzeFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRzeCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVHN4XG4gICAgICovXG4gICAgdHN4Pzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVTaWduYWxcbiAgICAgKi9cbiAgICBtZXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXBsb2FkUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXBsb2FkUmVzcG9uc2VcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBhbGxvd09yRGVueT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVBbGxPZlxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBWYXJpYWJsZVxuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWaWV3cG9ydFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdwb3J0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UG9zaXRpb259XG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0XG4gICAgICovXG4gICAgdG9wTGVmdFBvaW50PzogUG9zaXRpb24gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb3NpdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRcbiAgICAgKi9cbiAgICBidG1SaWdodFBvaW50PzogUG9zaXRpb24gfCBudWxsO1xufVxuXG4vKipcbiAqIEFtcGhvcmFlQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbkFjY2Vzc1J1bGV9IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ29yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ29yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0Zvck9yZ2FuaXNhdGlvbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2Ygb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgIT09IHVuZGVmaW5lZCA/IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgOiB7fSkgOiAob3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgcnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZDogc3RyaW5nLCB1c2VyQWNjZXNzUnVsZTogVXNlckFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlci4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3VzZXJBY2Nlc3NSdWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICh1c2VyQWNjZXNzUnVsZSA9PT0gbnVsbCB8fCB1c2VyQWNjZXNzUnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3VzZXJBY2Nlc3NSdWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIHVzZXJBY2Nlc3NSdWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0ZvclVzZXJgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHVzZXJBY2Nlc3NSdWxlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkodXNlckFjY2Vzc1J1bGUgIT09IHVuZGVmaW5lZCA/IHVzZXJBY2Nlc3NSdWxlIDoge30pIDogKHVzZXJBY2Nlc3NSdWxlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZUlkIFRoZSBJZCBvZiB0aGUgcnVsZSB0byBkZWxldGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3J1bGVJZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocnVsZUlkID09PSBudWxsIHx8IHJ1bGVJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3J1bGVJZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBydWxlSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy97cnVsZUlkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wicnVsZUlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocnVsZUlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gb3JnYW5pc2F0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yT3JnYW5pc2F0aW9uYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JVc2VyYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVBbXBob3JhJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVBbXBob3JhID09PSBudWxsIHx8IGNyZWF0ZUFtcGhvcmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVBbXBob3JhJywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZUFtcGhvcmEgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUNyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGNyZWF0ZUFtcGhvcmEgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShjcmVhdGVBbXBob3JhICE9PSB1bmRlZmluZWQgPyBjcmVhdGVBbXBob3JhIDoge30pIDogKGNyZWF0ZUFtcGhvcmEgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRGVsZXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBmaWxlLiBSZXR1cm5zIGEgYmxvYiBVUkwgdG8gdXBsb2FkIHRvLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZmlsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZmlsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBmaWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIENhbiBiZSBhbHBoYWJldGljYWwgb3IgbGFzdE1vZGlmaWVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0xpc3RGaWxlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JkZXJCeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnb3JkZXJCeSddID0gb3JkZXJCeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXMve2ZpbGV9L21ldGFgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVHlwZV0gXFwmIzM5O2NyZWF0ZWRcXCYjMzk7IG9yIFxcJiMzOTtwdXJjaGFzZWRcXCYjMzk7LiBEZWZhdWx0cyB0byBjcmVhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2NvcGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3Njb3BlJ10gPSBzY29wZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjY2Vzc1R5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2FjY2Vzc1R5cGUnXSA9IGFjY2Vzc1R5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbDogU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnc2lnbmFsJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChzaWduYWwgPT09IG51bGwgfHwgc2lnbmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignc2lnbmFsJywnUmVxdWlyZWQgcGFyYW1ldGVyIHNpZ25hbCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFsc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2Ygc2lnbmFsICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoc2lnbmFsICE9PSB1bmRlZmluZWQgPyBzaWduYWwgOiB7fSkgOiAoc2lnbmFsIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgc2lnbmFsIHByb3BlcnR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdwcm9wZXJ0eScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IG51bGwgfHwgcHJvcGVydHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdwcm9wZXJ0eScsJ1JlcXVpcmVkIHBhcmFtZXRlciBwcm9wZXJ0eSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFscy97cHJvcGVydHl9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJwcm9wZXJ0eVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHByb3BlcnR5KSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFsc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbElkOiBzdHJpbmcsIHVwZGF0ZVNpZ25hbDogVXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnc2lnbmFsSWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHNpZ25hbElkID09PSBudWxsIHx8IHNpZ25hbElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignc2lnbmFsSWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgc2lnbmFsSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1cGRhdGVTaWduYWwnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHVwZGF0ZVNpZ25hbCA9PT0gbnVsbCB8fCB1cGRhdGVTaWduYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1cGRhdGVTaWduYWwnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgdXBkYXRlU2lnbmFsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL3tzaWduYWxJZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInNpZ25hbElkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoc2lnbmFsSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQVVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHVwZGF0ZVNpZ25hbCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHVwZGF0ZVNpZ25hbCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlU2lnbmFsIDoge30pIDogKHVwZGF0ZVNpZ25hbCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncmVxdWVzdEJvZHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3RCb2R5ID09PSBudWxsIHx8IHJlcXVlc3RCb2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncmVxdWVzdEJvZHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdEJvZHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMvdmFsdWVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbFZhbHVlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2guJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMvYmF0Y2h2YWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9iYXRjaFNpZ25hbFZhbHVlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZGV0YWlsZWRBbXBob3JhOiBEZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVVwZGF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2RldGFpbGVkQW1waG9yYScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZGV0YWlsZWRBbXBob3JhID09PSBudWxsIHx8IGRldGFpbGVkQW1waG9yYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2RldGFpbGVkQW1waG9yYScsJ1JlcXVpcmVkIHBhcmFtZXRlciBkZXRhaWxlZEFtcGhvcmEgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVVwZGF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BVVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgZGV0YWlsZWRBbXBob3JhICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoZGV0YWlsZWRBbXBob3JhICE9PSB1bmRlZmluZWQgPyBkZXRhaWxlZEFtcGhvcmEgOiB7fSkgOiAoZGV0YWlsZWRBbXBob3JhIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUHVyY2hhc2VzIGFuIEFtcGhvcmEgYXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBwdXJjaGFzZXNQdXJjaGFzZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL0FtcGhvcmFlL3tpZH0vUHVyY2hhc2VzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQW1waG9yYWVBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZTogT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8VXNlckFjY2Vzc1J1bGU+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgcnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZDogc3RyaW5nLCB1c2VyQWNjZXNzUnVsZTogVXNlckFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFVzZXJBY2Nlc3NSdWxlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQsIHVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQWNjZXNzIENvbnRyb2wgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZDogc3RyaW5nLCBydWxlSWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZCwgcnVsZUlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gb3JnYW5pc2F0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8T3JnYW5pc2F0aW9uQWNjZXNzUnVsZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFVzZXJBY2Nlc3NSdWxlPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8RGV0YWlsZWRBbXBob3JhPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFVwbG9hZFJlc3BvbnNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIENhbiBiZSBhbHBoYWJldGljYWwgb3IgbGFzdE1vZGlmaWVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYSBsaXN0IG9mIEFtcGhvcmEgZm9yIHlvdXJzZWxmIG9yIHlvdXIgb3JnLCBjcmVhdGVkIG9yIHB1cmNoYXNlZCBieSB5b3UgKG9yIG9yZ2FuaXNhdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUeXBlXSBcXCYjMzk7Y3JlYXRlZFxcJiMzOTsgb3IgXFwmIzM5O3B1cmNoYXNlZFxcJiMzOTsuIERlZmF1bHRzIHRvIGNyZWF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PERldGFpbGVkQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUxpc3Qoc2NvcGUsIGFjY2Vzc1R5cGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWw6IFNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8U2lnbmFsPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBzaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgc2lnbmFsIHByb3BlcnR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFNpZ25hbD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZCwgcHJvcGVydHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFNpZ25hbD4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbElkOiBzdHJpbmcsIHVwZGF0ZVNpZ25hbDogVXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxTaWduYWw+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQsIHNpZ25hbElkLCB1cGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZGV0YWlsZWRBbXBob3JhOiBEZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBkZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUHVyY2hhc2VzIGFuIEFtcGhvcmEgYXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnB1cmNoYXNlc1B1cmNoYXNlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQW1waG9yYWVBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZTogT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZCwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVc2VyQWNjZXNzUnVsZX0gdXNlckFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZCwgdXNlckFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZUlkIFRoZSBJZCBvZiB0aGUgcnVsZSB0byBkZWxldGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkLCBydWxlSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byBvcmdhbmlzYXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBDYW4gYmUgYWxwaGFiZXRpY2FsIG9yIGxhc3RNb2RpZmllZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkLCBmaWxlLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVHlwZV0gXFwmIzM5O2NyZWF0ZWRcXCYjMzk7IG9yIFxcJiMzOTtwdXJjaGFzZWRcXCYjMzk7LiBEZWZhdWx0cyB0byBjcmVhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUxpc3Qoc2NvcGUsIGFjY2Vzc1R5cGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWw6IFNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBzaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgc2lnbmFsIHByb3BlcnR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZCwgcHJvcGVydHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaWduYWxJZCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVTaWduYWx9IHVwZGF0ZVNpZ25hbCBTaWduYWwgcHJvcGVydGllcyB0byB1cGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsSWQ6IHN0cmluZywgdXBkYXRlU2lnbmFsOiBVcGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZCwgc2lnbmFsSWQsIHVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtEZXRhaWxlZEFtcGhvcmF9IGRldGFpbGVkQW1waG9yYSBJbmZvcm1hdGlvbiB0byB1cGRhdGUuIE51bGxzIGFyZSBOT1QgaWdub3JlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlVXBkYXRlKGlkOiBzdHJpbmcsIGRldGFpbGVkQW1waG9yYTogRGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVVwZGF0ZShpZCwgZGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwdXJjaGFzZXNQdXJjaGFzZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5wdXJjaGFzZXNQdXJjaGFzZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBBbXBob3JhZUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBBbXBob3JhZUFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbXBob3JhZUFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZCwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBydWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkLCB1c2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZCwgcnVsZUlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGVtcHR5IEFtcGhvcmEgaW4gdGhlIHVzZXJcXCdzIG9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmF9IGNyZWF0ZUFtcGhvcmEgSW5mb3JtYXRpb24gZm9yIHRoZSBuZXcgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgZmlsZS4gUmV0dXJucyBhIGJsb2IgVVJMIHRvIHVwbG9hZCB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBDYW4gYmUgYWxwaGFiZXRpY2FsIG9yIGxhc3RNb2RpZmllZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVMaXN0KHNjb3BlLCBhY2Nlc3NUeXBlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbDogU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBzaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkLCBwcm9wZXJ0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICogQHBhcmFtIHtVcGRhdGVTaWduYWx9IHVwZGF0ZVNpZ25hbCBTaWduYWwgcHJvcGVydGllcyB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZCwgc2lnbmFsSWQsIHVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBkZXRhaWxlZEFtcGhvcmE6IERldGFpbGVkQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBkZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnB1cmNoYXNlc1B1cmNoYXNlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYSBKV1QgKEpTT04gV2ViIFRva2VuKS4gICAgICAgICAgICAgXG4gICAgICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnbG9naW5SZXF1ZXN0JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChsb2dpblJlcXVlc3QgPT09IG51bGwgfHwgbG9naW5SZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignbG9naW5SZXF1ZXN0JywnUmVxdWlyZWQgcGFyYW1ldGVyIGxvZ2luUmVxdWVzdCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYXV0aGVudGljYXRpb24vcmVxdWVzdGA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBsb2dpblJlcXVlc3QgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShsb2dpblJlcXVlc3QgIT09IHVuZGVmaW5lZCA/IGxvZ2luUmVxdWVzdCA6IHt9KSA6IChsb2dpblJlcXVlc3QgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IGxvZ2luUmVxdWVzdCBUb2tlbiBSZXF1ZXN0IFBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEF1dGhlbnRpY2F0aW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAgICAgKiBAcGFyYW0ge0xvZ2luUmVxdWVzdH0gbG9naW5SZXF1ZXN0IFRva2VuIFJlcXVlc3QgUGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQXV0aGVudGljYXRpb25BcGlGcChjb25maWd1cmF0aW9uKS5hdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQXV0aGVudGljYXRpb25BcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBdXRoZW50aWNhdGlvbkFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQXV0aGVudGljYXRpb25BcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgaWRlbnRpdHlHZXQoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2lkZW50aXR5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIElkZW50aXR5QXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IElkZW50aXR5QXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBpZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gSWRlbnRpdHlBcGlGcChjb25maWd1cmF0aW9uKS5pZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIElkZW50aXR5QXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIElkZW50aXR5QXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIElkZW50aXR5QXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIElkZW50aXR5QXBpXG4gICAgICovXG4gICAgcHVibGljIGlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIElkZW50aXR5QXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5pZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIE1hcmtldEFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRmluZHMgQW1waG9yYSB1c2luZyBhIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEhvdyBtYW55IHBhZ2VzIChpbiBtdWx0aXBsZXMgb2YgdG9wKSB0byBza2lwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0RmluZChxdWVyeT86IHN0cmluZywgdG9wPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL21hcmtldC9zZWFyY2hgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChxdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsncXVlcnknXSA9IHF1ZXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0b3AnXSA9IHRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNraXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3NraXAnXSA9IHNraXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG1hcmtldExvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2xvY2F0aW9uL2Z1enp5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocXVlcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgTWFya2V0QXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRmluZHMgQW1waG9yYSB1c2luZyBhIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEhvdyBtYW55IHBhZ2VzIChpbiBtdWx0aXBsZXMgb2YgdG9wKSB0byBza2lwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0RmluZChxdWVyeT86IHN0cmluZywgdG9wPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxCYXNpY0FtcGhvcmE+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE1hcmtldEFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm1hcmtldEZpbmQocXVlcnksIHRvcCwgc2tpcCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gU2VhcmNoIFRleHQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBtYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8RnV6enlTZWFyY2hSZXNwb25zZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5tYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIE1hcmtldEFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBNYXJrZXRBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBGaW5kcyBBbXBob3JhIHVzaW5nIGEgZnV6enkgc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBBIHN0cmluZyBhcyBhIHNlYXJjaCB0ZXJtLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3RvcF0gSG93IG1hbnkgcmVzdWx0cyB0byByZXR1cm4uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gSG93IG1hbnkgcGFnZXMgKGluIG11bHRpcGxlcyBvZiB0b3ApIHRvIHNraXAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBtYXJrZXRGaW5kKHF1ZXJ5Pzogc3RyaW5nLCB0b3A/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXJrZXRBcGlGcChjb25maWd1cmF0aW9uKS5tYXJrZXRGaW5kKHF1ZXJ5LCB0b3AsIHNraXAsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRXhlY3V0ZXMgYSBmdXp6eSBsb2NhdGlvbiBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIFNlYXJjaCBUZXh0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXJrZXRBcGlGcChjb25maWd1cmF0aW9uKS5tYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgTWFya2V0QXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtldEFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEZpbmRzIEFtcGhvcmEgdXNpbmcgYSBmdXp6eSBzZWFyY2guXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3RvcF0gSG93IG1hbnkgcmVzdWx0cyB0byByZXR1cm4uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBIb3cgbWFueSBwYWdlcyAoaW4gbXVsdGlwbGVzIG9mIHRvcCkgdG8gc2tpcC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgTWFya2V0QXBpXG4gICAgICovXG4gICAgcHVibGljIG1hcmtldEZpbmQocXVlcnk/OiBzdHJpbmcsIHRvcD86IG51bWJlciwgc2tpcD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gTWFya2V0QXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5tYXJrZXRGaW5kKHF1ZXJ5LCB0b3AsIHNraXAsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIFNlYXJjaCBUZXh0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXRBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE1hcmtldEFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikubWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudEdldFBsYW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjY291bnRHZXRQbGFuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0FjY291bnQvUGxhbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBhY2NvdW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudFJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjY291bnRSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0FjY291bnRgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnb3JnYW5pc2F0aW9uJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChvcmdhbmlzYXRpb24gPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignb3JnYW5pc2F0aW9uJywnUmVxdWlyZWQgcGFyYW1ldGVyIG9yZ2FuaXNhdGlvbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNDcmVhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9vcmdhbmlzYXRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbiAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KG9yZ2FuaXNhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3JnYW5pc2F0aW9uIDoge30pIDogKG9yZ2FuaXNhdGlvbiB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0RlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc0RlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL29yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvb3JnYW5pc2F0aW9ucy97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gT3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uLiBBbGwgZmllbGRzIGFyZSB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdvcmdhbmlzYXRpb24nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG9yZ2FuaXNhdGlvbiA9PT0gbnVsbCB8fCBvcmdhbmlzYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdvcmdhbmlzYXRpb24nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JnYW5pc2F0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc1VwZGF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL29yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBvcmdhbmlzYXRpb24gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShvcmdhbmlzYXRpb24gIT09IHVuZGVmaW5lZCA/IG9yZ2FuaXNhdGlvbiA6IHt9KSA6IChvcmdhbmlzYXRpb24gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBZGRzIG5ldyBUZXJtcyBhbmQgQ29uZGl0aW9ucyB0byB5b3VyIE9yZ2FuaXNhdGlvbnMgVC9DIExpYnJhcnkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtUZXJtc0FuZENvbmRpdGlvbnN9IHRlcm1zQW5kQ29uZGl0aW9ucyBUaGUgbmV3IFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNBbmRDb25kaXRpb25zQ3JlYXRlKGlkOiBzdHJpbmcsIHRlcm1zQW5kQ29uZGl0aW9uczogVGVybXNBbmRDb25kaXRpb25zLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgdGVybXNBbmRDb25kaXRpb25zQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAndGVybXNBbmRDb25kaXRpb25zJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICh0ZXJtc0FuZENvbmRpdGlvbnMgPT09IG51bGwgfHwgdGVybXNBbmRDb25kaXRpb25zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigndGVybXNBbmRDb25kaXRpb25zJywnUmVxdWlyZWQgcGFyYW1ldGVyIHRlcm1zQW5kQ29uZGl0aW9ucyB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zQW5kQ29uZGl0aW9uc0NyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9UZXJtc0FuZENvbmRpdGlvbnNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHRlcm1zQW5kQ29uZGl0aW9ucyAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHRlcm1zQW5kQ29uZGl0aW9ucyAhPT0gdW5kZWZpbmVkID8gdGVybXNBbmRDb25kaXRpb25zIDoge30pIDogKHRlcm1zQW5kQ29uZGl0aW9ucyB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zQW5kQ29uZGl0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zQW5kQ29uZGl0aW9uc1JlYWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH0vVGVybXNBbmRDb25kaXRpb25zYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBPcmdhbmlzYXRpb25zQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZ2FuaXNhdGlvbnNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFBsYW5JbmZvcm1hdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWNjb3VudEdldFBsYW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBY2NvdW50PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPE9yZ2FuaXNhdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0RlbGV0ZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPE9yZ2FuaXNhdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gT3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uLiBBbGwgZmllbGRzIGFyZSB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVXBkYXRlKGlkLCBvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQWRkcyBuZXcgVGVybXMgYW5kIENvbmRpdGlvbnMgdG8geW91ciBPcmdhbmlzYXRpb25zIFQvQyBMaWJyYXJ5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7VGVybXNBbmRDb25kaXRpb25zfSB0ZXJtc0FuZENvbmRpdGlvbnMgVGhlIG5ldyBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zQW5kQ29uZGl0aW9uc0NyZWF0ZShpZDogc3RyaW5nLCB0ZXJtc0FuZENvbmRpdGlvbnM6IFRlcm1zQW5kQ29uZGl0aW9ucywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8VGVybXNBbmRDb25kaXRpb25zPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc0FuZENvbmRpdGlvbnNDcmVhdGUoaWQsIHRlcm1zQW5kQ29uZGl0aW9ucywgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc0FuZENvbmRpdGlvbnNSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFRlcm1zQW5kQ29uZGl0aW9ucz4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zQW5kQ29uZGl0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBPcmdhbmlzYXRpb25zQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZ2FuaXNhdGlvbnNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikuYWNjb3VudEdldFBsYW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjY291bnRSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgT3JnYW5pc2F0aW9uLiBUaGlzIHdpbGwgYXNzaWduIHRoZSBsb2dnZWQgaW4gdXNlciB0byB0aGUgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uIG9mIHRoZSBuZXcgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBPcmdhbmlzYXRpb24gSW5mb3JtYXRpb24uIEFsbCBmaWVsZHMgYXJlIHVwZGF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVXBkYXRlKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQsIG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBZGRzIG5ldyBUZXJtcyBhbmQgQ29uZGl0aW9ucyB0byB5b3VyIE9yZ2FuaXNhdGlvbnMgVC9DIExpYnJhcnkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtUZXJtc0FuZENvbmRpdGlvbnN9IHRlcm1zQW5kQ29uZGl0aW9ucyBUaGUgbmV3IFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNBbmRDb25kaXRpb25zQ3JlYXRlKGlkOiBzdHJpbmcsIHRlcm1zQW5kQ29uZGl0aW9uczogVGVybXNBbmRDb25kaXRpb25zLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLnRlcm1zQW5kQ29uZGl0aW9uc0NyZWF0ZShpZCwgdGVybXNBbmRDb25kaXRpb25zLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgYW5kIENvbmRpdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zQW5kQ29uZGl0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc0FuZENvbmRpdGlvbnNSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIE9yZ2FuaXNhdGlvbnNBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgT3JnYW5pc2F0aW9uc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBPcmdhbmlzYXRpb25zQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIHBsYW4gaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NvdW50R2V0UGxhbihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY2NvdW50R2V0UGxhbihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBPcmdhbmlzYXRpb24gSW5mb3JtYXRpb24uIEFsbCBmaWVsZHMgYXJlIHVwZGF0ZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1VwZGF0ZShpZCwgb3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBBZGRzIG5ldyBUZXJtcyBhbmQgQ29uZGl0aW9ucyB0byB5b3VyIE9yZ2FuaXNhdGlvbnMgVC9DIExpYnJhcnkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJZCBvZiB0aGUgT3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7VGVybXNBbmRDb25kaXRpb25zfSB0ZXJtc0FuZENvbmRpdGlvbnMgVGhlIG5ldyBUZXJtcyBhbmQgQ29uZGl0aW9ucy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc0FuZENvbmRpdGlvbnNDcmVhdGUoaWQ6IHN0cmluZywgdGVybXNBbmRDb25kaXRpb25zOiBUZXJtc0FuZENvbmRpdGlvbnMsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnRlcm1zQW5kQ29uZGl0aW9uc0NyZWF0ZShpZCwgdGVybXNBbmRDb25kaXRpb25zLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIGFuZCBDb25kaXRpb25zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc0FuZENvbmRpdGlvbnNSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnRlcm1zQW5kQ29uZGl0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogU2VhcmNoQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFNlYXJjaEFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5TG9jYXRpb25gO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2xhdCddID0gbGF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydsb24nXSA9IGxvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2Rpc3QnXSA9IGRpc3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5T3JnYW5pc2F0aW9uYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JnSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ29yZ0lkJ10gPSBvcmdJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL29yZ2FuaXNhdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0ZXJtJ10gPSB0ZXJtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdCwgbG9uLCBkaXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBTZWFyY2ggVGVybS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8T3JnYW5pc2F0aW9uPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZWFyY2hBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlIGJ5IGxvY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsb25dIExvbmdpdHVkZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIExhdGl0dWRlIGFuZCBMb25naXR1ZGUgaW4gd2hpY2ggdG8gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdCwgbG9uLCBkaXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5T3JnYW5pc2F0aW9uKG9yZ0lkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBPcmdhbmlzYXRpb25zIHdpdGggZnV6enkgc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIFNlYXJjaCBUZXJtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFNlYXJjaEFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBTZWFyY2hBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlIGJ5IGxvY3Rpb24uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbG9uXSBMb25naXR1ZGUuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIExhdGl0dWRlIGFuZCBMb25naXR1ZGUgaW4gd2hpY2ggdG8gc2VhcmNoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBTZWFyY2hBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlQnlMb2NhdGlvbihsYXQsIGxvbiwgZGlzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlIGluIGFuIE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZ0lkXSBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFNlYXJjaEFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5T3JnYW5pc2F0aW9uKG9yZ0lkPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBPcmdhbmlzYXRpb25zIHdpdGggZnV6enkgc2VhcmNoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFNlYXJjaEFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFNlYXJjaEFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFRpbWVTZXJpZXNBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGltZVNlcmllc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdxdWVyeVJlcXVlc3QnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHF1ZXJ5UmVxdWVzdCA9PT0gbnVsbCB8fCBxdWVyeVJlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdxdWVyeVJlcXVlc3QnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcXVlcnlSZXF1ZXN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3RpbWVzZXJpZXMvcXVlcnlgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcXVlcnlSZXF1ZXN0ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocXVlcnlSZXF1ZXN0ICE9PSB1bmRlZmluZWQgPyBxdWVyeVJlcXVlc3QgOiB7fSkgOiAocXVlcnlSZXF1ZXN0IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UXVlcnlSZXN1bHRQYWdlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRpbWVTZXJpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFRpbWVTZXJpZXNBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGltZVNlcmllc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWVyeVJlcXVlc3R9IHF1ZXJ5UmVxdWVzdCBUaW1lIFNlcmllcyBxdWVyeS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdHNpY2xpZW50L2Jsb2IvbWFzdGVyL2RvY3MvU2VydmVyLm1kI2Z1bmN0aW9ucyAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVGltZVNlcmllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLnRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFRpbWVTZXJpZXNBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVGltZVNlcmllc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lU2VyaWVzQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUaW1lU2VyaWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0OiBRdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFRpbWVTZXJpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFVzZXJzQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJzQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYVVzZXJ9IGNyZWF0ZUFtcGhvcmFVc2VyIFVzZXIgcGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVBbXBob3JhVXNlcicgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoY3JlYXRlQW1waG9yYVVzZXIgPT09IG51bGwgfHwgY3JlYXRlQW1waG9yYVVzZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVBbXBob3JhVXNlcicsJ1JlcXVpcmVkIHBhcmFtZXRlciBjcmVhdGVBbXBob3JhVXNlciB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHVzZXJzQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvdXNlcnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgY3JlYXRlQW1waG9yYVVzZXIgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShjcmVhdGVBbXBob3JhVXNlciAhPT0gdW5kZWZpbmVkID8gY3JlYXRlQW1waG9yYVVzZXIgOiB7fSkgOiAoY3JlYXRlQW1waG9yYVVzZXIgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS91c2Vycy9zZWxmYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJzQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXI6IENyZWF0ZUFtcGhvcmFVc2VyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbXBob3JhVXNlcj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNSZWFkU2VsZih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbXBob3JhVXNlcj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJzQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXI6IENyZWF0ZUFtcGhvcmFVc2VyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVXNlcnNBcGlGcChjb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAoY29uZmlndXJhdGlvbikudXNlcnNSZWFkU2VsZih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFVzZXJzQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJzQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmFVc2VyfSBjcmVhdGVBbXBob3JhVXNlciBVc2VyIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFVzZXJzQXBpXG4gICAgICovXG4gICAgcHVibGljIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVXNlcnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlcnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdXNlcnNSZWFkU2VsZih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBVc2Vyc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudXNlcnNSZWFkU2VsZih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFZlcnNpb25BcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVmVyc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvdmVyc2lvbmA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBWZXJzaW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBWZXJzaW9uQXBpRnAoY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBWZXJzaW9uQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnNpb25BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBWZXJzaW9uQXBpXG4gICAgICovXG4gICAgcHVibGljIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBWZXJzaW9uQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS52ZXJzaW9uR2V0Q3VycmVudFZlcnNpb24oeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuIl19