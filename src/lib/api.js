"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionApi = exports.VersionApiFactory = exports.VersionApiFp = exports.VersionApiAxiosParamCreator = exports.UsersApi = exports.UsersApiFactory = exports.UsersApiFp = exports.UsersApiAxiosParamCreator = exports.TimeSeriesApi = exports.TimeSeriesApiFactory = exports.TimeSeriesApiFp = exports.TimeSeriesApiAxiosParamCreator = exports.TermsOfUseApi = exports.TermsOfUseApiFactory = exports.TermsOfUseApiFp = exports.TermsOfUseApiAxiosParamCreator = exports.SearchApi = exports.SearchApiFactory = exports.SearchApiFp = exports.SearchApiAxiosParamCreator = exports.PermissionApi = exports.PermissionApiFactory = exports.PermissionApiFp = exports.PermissionApiAxiosParamCreator = exports.OrganisationsApi = exports.OrganisationsApiFactory = exports.OrganisationsApiFp = exports.OrganisationsApiAxiosParamCreator = exports.MarketApi = exports.MarketApiFactory = exports.MarketApiFp = exports.MarketApiAxiosParamCreator = exports.IdentityApi = exports.IdentityApiFactory = exports.IdentityApiFp = exports.IdentityApiAxiosParamCreator = exports.AuthenticationApi = exports.AuthenticationApiFactory = exports.AuthenticationApiFp = exports.AuthenticationApiAxiosParamCreator = exports.AmphoraeApi = exports.AmphoraeApiFactory = exports.AmphoraeApiFp = exports.AmphoraeApiAxiosParamCreator = exports.ActivitiesApi = exports.ActivitiesApiFactory = exports.ActivitiesApiFp = exports.ActivitiesApiAxiosParamCreator = exports.PlanTypes = void 0;

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
 * ActivitiesApi - axios parameter creator
 * @export
 */
var ActivitiesApiAxiosParamCreator = function ActivitiesApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Creates a new activity.
     * @param {CreateActivity} createActivity Metadata of the new activity.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'createActivity' is not null or undefined
      if (createActivity === null || createActivity === undefined) {
        throw new _base.RequiredError('createActivity', 'Required parameter createActivity was null or undefined when calling activitiesCreateActivity.');
      }

      var localVarPath = "/api/activities";
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
      var needsSerialization = typeof createActivity !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createActivity !== undefined ? createActivity : {}) : createActivity || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling activitiesDeleteActivity.');
      }

      var localVarPath = "/api/activities/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling activitiesReadActivity.');
      }

      var localVarPath = "/api/activities/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling activitiesReferenceAmphora.');
      } // verify required parameter 'runId' is not null or undefined


      if (runId === null || runId === undefined) {
        throw new _base.RequiredError('runId', 'Required parameter runId was null or undefined when calling activitiesReferenceAmphora.');
      } // verify required parameter 'amphoraId' is not null or undefined


      if (amphoraId === null || amphoraId === undefined) {
        throw new _base.RequiredError('amphoraId', 'Required parameter amphoraId was null or undefined when calling activitiesReferenceAmphora.');
      } // verify required parameter 'amphoraReference' is not null or undefined


      if (amphoraReference === null || amphoraReference === undefined) {
        throw new _base.RequiredError('amphoraReference', 'Required parameter amphoraReference was null or undefined when calling activitiesReferenceAmphora.');
      }

      var localVarPath = "/api/activities/{id}/Runs/{runId}/amphorae/{amphoraId}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("runId", "}"), encodeURIComponent(String(runId))).replace("{".concat("amphoraId", "}"), encodeURIComponent(String(amphoraId)));
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
      var needsSerialization = typeof amphoraReference !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(amphoraReference !== undefined ? amphoraReference : {}) : amphoraReference || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling activitiesStartRun.');
      }

      var localVarPath = "/api/activities/{id}/Runs".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling activitiesUpdateRun.');
      } // verify required parameter 'runId' is not null or undefined


      if (runId === null || runId === undefined) {
        throw new _base.RequiredError('runId', 'Required parameter runId was null or undefined when calling activitiesUpdateRun.');
      } // verify required parameter 'updateRun' is not null or undefined


      if (updateRun === null || updateRun === undefined) {
        throw new _base.RequiredError('updateRun', 'Required parameter updateRun was null or undefined when calling activitiesUpdateRun.');
      }

      var localVarPath = "/api/activities/{id}/Runs/{runId}".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("runId", "}"), encodeURIComponent(String(runId)));
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
      var needsSerialization = typeof updateRun !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(updateRun !== undefined ? updateRun : {}) : updateRun || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * ActivitiesApi - functional programming interface
 * @export
 */


exports.ActivitiesApiAxiosParamCreator = ActivitiesApiAxiosParamCreator;

var ActivitiesApiFp = function ActivitiesApiFp(configuration) {
  return {
    /**
     * 
     * @summary Creates a new activity.
     * @param {CreateActivity} createActivity Metadata of the new activity.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesCreateActivity(createActivity, xAmphoradataVersion, options);
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
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesDeleteActivity(id, xAmphoradataVersion, options);
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
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesReadActivity(id, xAmphoradataVersion, options);
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
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options);
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
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesStartRun(id, xAmphoradataVersion, options);
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
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options);
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
 * ActivitiesApi - factory interface
 * @export
 */


exports.ActivitiesApiFp = ActivitiesApiFp;

var ActivitiesApiFactory = function ActivitiesApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Creates a new activity.
     * @param {CreateActivity} createActivity Metadata of the new activity.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesCreateActivity(createActivity, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesDeleteActivity(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesReadActivity(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesStartRun(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options) {
      return ActivitiesApiFp(configuration).activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * ActivitiesApi - object-oriented interface
 * @export
 * @class ActivitiesApi
 * @extends {BaseAPI}
 */


exports.ActivitiesApiFactory = ActivitiesApiFactory;

var ActivitiesApi = /*#__PURE__*/function (_BaseAPI) {
  _inherits(ActivitiesApi, _BaseAPI);

  var _super = _createSuper(ActivitiesApi);

  function ActivitiesApi() {
    _classCallCheck(this, ActivitiesApi);

    return _super.apply(this, arguments);
  }

  _createClass(ActivitiesApi, [{
    key: "activitiesCreateActivity",

    /**
     * 
     * @summary Creates a new activity.
     * @param {CreateActivity} createActivity Metadata of the new activity.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */
    value: function activitiesCreateActivity(createActivity, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesCreateActivity(createActivity, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesDeleteActivity",
    value: function activitiesDeleteActivity(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesDeleteActivity(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesReadActivity",
    value: function activitiesReadActivity(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesReadActivity(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesReferenceAmphora",
    value: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesStartRun",
    value: function activitiesStartRun(id, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesStartRun(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesUpdateRun",
    value: function activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options) {
      return ActivitiesApiFp(this.configuration).activitiesUpdateRun(id, runId, updateRun, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return ActivitiesApi;
}(_base.BaseAPI);
/**
 * AmphoraeApi - axios parameter creator
 * @export
 */


exports.ActivitiesApi = ActivitiesApi;

var AmphoraeApiAxiosParamCreator = function AmphoraeApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Gets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraQualityGet.');
      }

      var localVarPath = "/api/amphorae/{id}/quality".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraQualitySet.');
      } // verify required parameter 'quality' is not null or undefined


      if (quality === null || quality === undefined) {
        throw new _base.RequiredError('quality', 'Required parameter quality was null or undefined when calling amphoraQualitySet.');
      }

      var localVarPath = "/api/amphorae/{id}/quality".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
      var needsSerialization = typeof quality !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(quality !== undefined ? quality : {}) : quality || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsCreateForAll.');
      } // verify required parameter 'allAccessRule' is not null or undefined


      if (allAccessRule === null || allAccessRule === undefined) {
        throw new _base.RequiredError('allAccessRule', 'Required parameter allAccessRule was null or undefined when calling amphoraeAccessControlsCreateForAll.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForAll".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
      var needsSerialization = typeof allAccessRule !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(allAccessRule !== undefined ? allAccessRule : {}) : allAccessRule || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

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
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeAccessControlsGetForAllRule.');
      }

      var localVarPath = "/api/amphorae/{id}/AccessControls/ForAll".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Gets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraQualityGet(id, xAmphoradataVersion, options);
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
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraQualitySet(id, quality, xAmphoradataVersion, options);
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
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options);
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
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options);
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
     * @summary Gets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraQualityGet(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraQualitySet(id, quality, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options)(axios, basePath);
    },

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
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options)(axios, basePath);
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

var AmphoraeApi = /*#__PURE__*/function (_BaseAPI2) {
  _inherits(AmphoraeApi, _BaseAPI2);

  var _super2 = _createSuper(AmphoraeApi);

  function AmphoraeApi() {
    _classCallCheck(this, AmphoraeApi);

    return _super2.apply(this, arguments);
  }

  _createClass(AmphoraeApi, [{
    key: "amphoraQualityGet",

    /**
     * 
     * @summary Gets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */
    value: function amphoraQualityGet(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraQualityGet(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraQualitySet",
    value: function amphoraQualitySet(id, quality, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraQualitySet(id, quality, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsCreateForAll",
    value: function amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
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

  }, {
    key: "amphoraeAccessControlsCreateForOrganisation",
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
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetForAllRule",
    value: function amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetForAllRule(id, xAmphoradataVersion, options)(this.axios, this.basePath);
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

var AuthenticationApi = /*#__PURE__*/function (_BaseAPI3) {
  _inherits(AuthenticationApi, _BaseAPI3);

  var _super3 = _createSuper(AuthenticationApi);

  function AuthenticationApi() {
    _classCallCheck(this, AuthenticationApi);

    return _super3.apply(this, arguments);
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

var IdentityApi = /*#__PURE__*/function (_BaseAPI4) {
  _inherits(IdentityApi, _BaseAPI4);

  var _super4 = _createSuper(IdentityApi);

  function IdentityApi() {
    _classCallCheck(this, IdentityApi);

    return _super4.apply(this, arguments);
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

var MarketApi = /*#__PURE__*/function (_BaseAPI5) {
  _inherits(MarketApi, _BaseAPI5);

  var _super5 = _createSuper(MarketApi);

  function MarketApi() {
    _classCallCheck(this, MarketApi);

    return _super5.apply(this, arguments);
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

      var localVarPath = "/api/Organisations";
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

      var localVarPath = "/api/Organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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

      var localVarPath = "/api/Organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling organisationsReadInvitations.');
      }

      var localVarPath = "/api/Organisations/{id}/Invitations".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling organisationsTermsOfUseRead.');
      }

      var localVarPath = "/api/Organisations/{id}/TermsOfUse".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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

      var localVarPath = "/api/Organisations/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsReadInvitations(id, xAmphoradataVersion, options);
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
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsTermsOfUseRead(id, xAmphoradataVersion, options);
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
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsReadInvitations(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(configuration).organisationsTermsOfUseRead(id, xAmphoradataVersion, options)(axios, basePath);
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

var OrganisationsApi = /*#__PURE__*/function (_BaseAPI6) {
  _inherits(OrganisationsApi, _BaseAPI6);

  var _super6 = _createSuper(OrganisationsApi);

  function OrganisationsApi() {
    _classCallCheck(this, OrganisationsApi);

    return _super6.apply(this, arguments);
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
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsReadInvitations",
    value: function organisationsReadInvitations(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsReadInvitations(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsTermsOfUseRead",
    value: function organisationsTermsOfUseRead(id, xAmphoradataVersion, options) {
      return OrganisationsApiFp(this.configuration).organisationsTermsOfUseRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
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
  }]);

  return OrganisationsApi;
}(_base.BaseAPI);
/**
 * PermissionApi - axios parameter creator
 * @export
 */


exports.OrganisationsApi = OrganisationsApi;

var PermissionApiAxiosParamCreator = function PermissionApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary The permission level for each object id in the request.
     * @param {PermissionsRequest} permissionsRequest A request object containing the list of ids to check.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'permissionsRequest' is not null or undefined
      if (permissionsRequest === null || permissionsRequest === undefined) {
        throw new _base.RequiredError('permissionsRequest', 'Required parameter permissionsRequest was null or undefined when calling permissionGetPermissions.');
      }

      var localVarPath = "/api/permissions";
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
      var needsSerialization = typeof permissionsRequest !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(permissionsRequest !== undefined ? permissionsRequest : {}) : permissionsRequest || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * PermissionApi - functional programming interface
 * @export
 */


exports.PermissionApiAxiosParamCreator = PermissionApiAxiosParamCreator;

var PermissionApiFp = function PermissionApiFp(configuration) {
  return {
    /**
     * 
     * @summary The permission level for each object id in the request.
     * @param {PermissionsRequest} permissionsRequest A request object containing the list of ids to check.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options) {
      var localVarAxiosArgs = PermissionApiAxiosParamCreator(configuration).permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options);
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
 * PermissionApi - factory interface
 * @export
 */


exports.PermissionApiFp = PermissionApiFp;

var PermissionApiFactory = function PermissionApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary The permission level for each object id in the request.
     * @param {PermissionsRequest} permissionsRequest A request object containing the list of ids to check.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options) {
      return PermissionApiFp(configuration).permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * PermissionApi - object-oriented interface
 * @export
 * @class PermissionApi
 * @extends {BaseAPI}
 */


exports.PermissionApiFactory = PermissionApiFactory;

var PermissionApi = /*#__PURE__*/function (_BaseAPI7) {
  _inherits(PermissionApi, _BaseAPI7);

  var _super7 = _createSuper(PermissionApi);

  function PermissionApi() {
    _classCallCheck(this, PermissionApi);

    return _super7.apply(this, arguments);
  }

  _createClass(PermissionApi, [{
    key: "permissionGetPermissions",

    /**
     * 
     * @summary The permission level for each object id in the request.
     * @param {PermissionsRequest} permissionsRequest A request object containing the list of ids to check.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionApi
     */
    value: function permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options) {
      return PermissionApiFp(this.configuration).permissionGetPermissions(permissionsRequest, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return PermissionApi;
}(_base.BaseAPI);
/**
 * SearchApi - axios parameter creator
 * @export
 */


exports.PermissionApi = PermissionApi;

var SearchApiAxiosParamCreator = function SearchApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Searches for Amphorae.
     * @param {string} [term] General search term for text comparison.
     * @param {string} [labels] Comma separated labels that must be included in results.
     * @param {number} [lat] Latitude (center of search area).
     * @param {number} [lon] Longitude (center of search area).
     * @param {number} [dist] Distance from center of search area (describing a circle).
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion) {
      var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
      var localVarPath = "/api/search/amphorae";
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

      if (labels !== undefined) {
        localVarQueryParameter['labels'] = labels;
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
     * @summary Searches for Amphorae.
     * @param {string} [term] General search term for text comparison.
     * @param {string} [labels] Comma separated labels that must be included in results.
     * @param {number} [lat] Latitude (center of search area).
     * @param {number} [lon] Longitude (center of search area).
     * @param {number} [dist] Distance from center of search area (describing a circle).
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options);
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
     * @summary Searches for Amphorae.
     * @param {string} [term] General search term for text comparison.
     * @param {string} [labels] Comma separated labels that must be included in results.
     * @param {number} [lat] Latitude (center of search area).
     * @param {number} [lon] Longitude (center of search area).
     * @param {number} [dist] Distance from center of search area (describing a circle).
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options) {
      return SearchApiFp(configuration).searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options)(axios, basePath);
    },

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

var SearchApi = /*#__PURE__*/function (_BaseAPI8) {
  _inherits(SearchApi, _BaseAPI8);

  var _super8 = _createSuper(SearchApi);

  function SearchApi() {
    _classCallCheck(this, SearchApi);

    return _super8.apply(this, arguments);
  }

  _createClass(SearchApi, [{
    key: "searchSearchAmphorae",

    /**
     * 
     * @summary Searches for Amphorae.
     * @param {string} [term] General search term for text comparison.
     * @param {string} [labels] Comma separated labels that must be included in results.
     * @param {number} [lat] Latitude (center of search area).
     * @param {number} [lon] Longitude (center of search area).
     * @param {number} [dist] Distance from center of search area (describing a circle).
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    value: function searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options) {
      return SearchApiFp(this.configuration).searchSearchAmphorae(term, labels, lat, lon, dist, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
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

  }, {
    key: "searchSearchAmphoraeByLocation",
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
 * TermsOfUseApi - axios parameter creator
 * @export
 */


exports.SearchApi = SearchApi;

var TermsOfUseApiAxiosParamCreator = function TermsOfUseApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Accepts a Terms of Use.
     * @param {string} id The Terms of Use id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling termsOfUseAccept.');
      }

      var localVarPath = "/api/TermsOfUse/{id}/Accepts".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'createTermsOfUse' is not null or undefined
      if (createTermsOfUse === null || createTermsOfUse === undefined) {
        throw new _base.RequiredError('createTermsOfUse', 'Required parameter createTermsOfUse was null or undefined when calling termsOfUseCreate.');
      }

      var localVarPath = "/api/TermsOfUse";
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
      var needsSerialization = typeof createTermsOfUse !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createTermsOfUse !== undefined ? createTermsOfUse : {}) : createTermsOfUse || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling termsOfUseDelete.');
      }

      var localVarPath = "/api/TermsOfUse/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Returns all Terms of Use.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(xAmphoradataVersion) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localVarPath = "/api/TermsOfUse";
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
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id, xAmphoradataVersion) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling termsOfUseRead.');
      }

      var localVarPath = "/api/TermsOfUse/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
 * TermsOfUseApi - functional programming interface
 * @export
 */


exports.TermsOfUseApiAxiosParamCreator = TermsOfUseApiAxiosParamCreator;

var TermsOfUseApiFp = function TermsOfUseApiFp(configuration) {
  return {
    /**
     * 
     * @summary Accepts a Terms of Use.
     * @param {string} id The Terms of Use id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseAccept(id, xAmphoradataVersion, options);
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
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options);
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
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseDelete(id, xAmphoradataVersion, options);
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
     * @summary Returns all Terms of Use.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(xAmphoradataVersion, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseList(xAmphoradataVersion, options);
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
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id, xAmphoradataVersion, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseRead(id, xAmphoradataVersion, options);
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
 * TermsOfUseApi - factory interface
 * @export
 */


exports.TermsOfUseApiFp = TermsOfUseApiFp;

var TermsOfUseApiFactory = function TermsOfUseApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Accepts a Terms of Use.
     * @param {string} id The Terms of Use id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(configuration).termsOfUseAccept(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(configuration).termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(configuration).termsOfUseDelete(id, xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(xAmphoradataVersion, options) {
      return TermsOfUseApiFp(configuration).termsOfUseList(xAmphoradataVersion, options)(axios, basePath);
    },

    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(configuration).termsOfUseRead(id, xAmphoradataVersion, options)(axios, basePath);
    }
  };
};
/**
 * TermsOfUseApi - object-oriented interface
 * @export
 * @class TermsOfUseApi
 * @extends {BaseAPI}
 */


exports.TermsOfUseApiFactory = TermsOfUseApiFactory;

var TermsOfUseApi = /*#__PURE__*/function (_BaseAPI9) {
  _inherits(TermsOfUseApi, _BaseAPI9);

  var _super9 = _createSuper(TermsOfUseApi);

  function TermsOfUseApi() {
    _classCallCheck(this, TermsOfUseApi);

    return _super9.apply(this, arguments);
  }

  _createClass(TermsOfUseApi, [{
    key: "termsOfUseAccept",

    /**
     * 
     * @summary Accepts a Terms of Use.
     * @param {string} id The Terms of Use id.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */
    value: function termsOfUseAccept(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseAccept(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseCreate",
    value: function termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseCreate(createTermsOfUse, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseDelete",
    value: function termsOfUseDelete(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseDelete(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseList",
    value: function termsOfUseList(xAmphoradataVersion, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseList(xAmphoradataVersion, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {string} [xAmphoradataVersion] API Version Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseRead",
    value: function termsOfUseRead(id, xAmphoradataVersion, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseRead(id, xAmphoradataVersion, options)(this.axios, this.basePath);
    }
  }]);

  return TermsOfUseApi;
}(_base.BaseAPI);
/**
 * TimeSeriesApi - axios parameter creator
 * @export
 */


exports.TermsOfUseApi = TermsOfUseApi;

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

var TimeSeriesApi = /*#__PURE__*/function (_BaseAPI10) {
  _inherits(TimeSeriesApi, _BaseAPI10);

  var _super10 = _createSuper(TimeSeriesApi);

  function TimeSeriesApi() {
    _classCallCheck(this, TimeSeriesApi);

    return _super10.apply(this, arguments);
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

var UsersApi = /*#__PURE__*/function (_BaseAPI11) {
  _inherits(UsersApi, _BaseAPI11);

  var _super11 = _createSuper(UsersApi);

  function UsersApi() {
    _classCallCheck(this, UsersApi);

    return _super11.apply(this, arguments);
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

var VersionApi = /*#__PURE__*/function (_BaseAPI12) {
  _inherits(VersionApi, _BaseAPI12);

  var _super12 = _createSuper(VersionApi);

  function VersionApi() {
    _classCallCheck(this, VersionApi);

    return _super12.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nkay9hcGkudHMiXSwibmFtZXMiOlsiUGxhblR5cGVzIiwiQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwiY29uZmlndXJhdGlvbiIsImFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eSIsImNyZWF0ZUFjdGl2aXR5IiwieEFtcGhvcmFkYXRhVmVyc2lvbiIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJSZXF1aXJlZEVycm9yIiwibG9jYWxWYXJQYXRoIiwibG9jYWxWYXJVcmxPYmoiLCJnbG9iYWxJbXBvcnRVcmwiLCJwYXJzZSIsImJhc2VPcHRpb25zIiwibG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImxvY2FsVmFySGVhZGVyUGFyYW1ldGVyIiwibG9jYWxWYXJRdWVyeVBhcmFtZXRlciIsImFwaUtleSIsImxvY2FsVmFyQXBpS2V5VmFsdWUiLCJTdHJpbmciLCJxdWVyeSIsInNlYXJjaCIsImhlYWRlcnMiLCJuZWVkc1NlcmlhbGl6YXRpb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImZvcm1hdCIsImFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eSIsImlkIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImFjdGl2aXRpZXNSZWFkQWN0aXZpdHkiLCJhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYSIsInJ1bklkIiwiYW1waG9yYUlkIiwiYW1waG9yYVJlZmVyZW5jZSIsImFjdGl2aXRpZXNTdGFydFJ1biIsImFjdGl2aXRpZXNVcGRhdGVSdW4iLCJ1cGRhdGVSdW4iLCJBY3Rpdml0aWVzQXBpRnAiLCJsb2NhbFZhckF4aW9zQXJncyIsImF4aW9zIiwiZ2xvYmFsQXhpb3MiLCJiYXNlUGF0aCIsIkJBU0VfUEFUSCIsImF4aW9zUmVxdWVzdEFyZ3MiLCJyZXF1ZXN0IiwiQWN0aXZpdGllc0FwaUZhY3RvcnkiLCJBY3Rpdml0aWVzQXBpIiwiQmFzZUFQSSIsIkFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJhbXBob3JhUXVhbGl0eUdldCIsImFtcGhvcmFRdWFsaXR5U2V0IiwicXVhbGl0eSIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwiLCJhbGxBY2Nlc3NSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbiIsIm9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlciIsInVzZXJBY2Nlc3NSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZSIsInJ1bGVJZCIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyIsImFtcGhvcmFlQ3JlYXRlIiwiY3JlYXRlQW1waG9yYSIsImFtcGhvcmFlRGVsZXRlIiwiYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0IiwiZmlsZSIsImFtcGhvcmFlRmlsZXNEZWxldGVGaWxlIiwiYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZSIsImFtcGhvcmFlRmlsZXNMaXN0RmlsZXMiLCJvcmRlckJ5IiwiYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhIiwicmVxdWVzdEJvZHkiLCJhbXBob3JhZUxpc3QiLCJzY29wZSIsImFjY2Vzc1R5cGUiLCJhbXBob3JhZVJlYWQiLCJhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwiLCJzaWduYWwiLCJhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwiLCJwcm9wZXJ0eSIsImFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMiLCJhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwiLCJzaWduYWxJZCIsInVwZGF0ZVNpZ25hbCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMiIsImFtcGhvcmFlVXBkYXRlIiwiZGV0YWlsZWRBbXBob3JhIiwicHVyY2hhc2VzUHVyY2hhc2UiLCJBbXBob3JhZUFwaUZwIiwiQW1waG9yYWVBcGlGYWN0b3J5IiwiQW1waG9yYWVBcGkiLCJBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4iLCJsb2dpblJlcXVlc3QiLCJBdXRoZW50aWNhdGlvbkFwaUZwIiwiQXV0aGVudGljYXRpb25BcGlGYWN0b3J5IiwiQXV0aGVudGljYXRpb25BcGkiLCJJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiaWRlbnRpdHlHZXQiLCJJZGVudGl0eUFwaUZwIiwiSWRlbnRpdHlBcGlGYWN0b3J5IiwiSWRlbnRpdHlBcGkiLCJNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvciIsIm1hcmtldEZpbmQiLCJ0b3AiLCJza2lwIiwibWFya2V0TG9va3VwTG9jYXRpb24iLCJNYXJrZXRBcGlGcCIsIk1hcmtldEFwaUZhY3RvcnkiLCJNYXJrZXRBcGkiLCJPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJhY2NvdW50R2V0UGxhbiIsImFjY291bnRSZWFkIiwib3JnYW5pc2F0aW9uc0NyZWF0ZSIsIm9yZ2FuaXNhdGlvbiIsIm9yZ2FuaXNhdGlvbnNEZWxldGUiLCJvcmdhbmlzYXRpb25zUmVhZCIsIm9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMiLCJvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQiLCJvcmdhbmlzYXRpb25zVXBkYXRlIiwiT3JnYW5pc2F0aW9uc0FwaUZwIiwiT3JnYW5pc2F0aW9uc0FwaUZhY3RvcnkiLCJPcmdhbmlzYXRpb25zQXBpIiwiUGVybWlzc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwicGVybWlzc2lvbkdldFBlcm1pc3Npb25zIiwicGVybWlzc2lvbnNSZXF1ZXN0IiwiUGVybWlzc2lvbkFwaUZwIiwiUGVybWlzc2lvbkFwaUZhY3RvcnkiLCJQZXJtaXNzaW9uQXBpIiwiU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJzZWFyY2hTZWFyY2hBbXBob3JhZSIsInRlcm0iLCJsYWJlbHMiLCJsYXQiLCJsb24iLCJkaXN0Iiwic2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uIiwic2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbiIsIm9yZ0lkIiwic2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyIsIlNlYXJjaEFwaUZwIiwiU2VhcmNoQXBpRmFjdG9yeSIsIlNlYXJjaEFwaSIsIlRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvciIsInRlcm1zT2ZVc2VBY2NlcHQiLCJ0ZXJtc09mVXNlQ3JlYXRlIiwiY3JlYXRlVGVybXNPZlVzZSIsInRlcm1zT2ZVc2VEZWxldGUiLCJ0ZXJtc09mVXNlTGlzdCIsInRlcm1zT2ZVc2VSZWFkIiwiVGVybXNPZlVzZUFwaUZwIiwiVGVybXNPZlVzZUFwaUZhY3RvcnkiLCJUZXJtc09mVXNlQXBpIiwiVGltZVNlcmllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwidGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyIsInF1ZXJ5UmVxdWVzdCIsIlRpbWVTZXJpZXNBcGlGcCIsIlRpbWVTZXJpZXNBcGlGYWN0b3J5IiwiVGltZVNlcmllc0FwaSIsIlVzZXJzQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJ1c2Vyc0NyZWF0ZSIsImNyZWF0ZUFtcGhvcmFVc2VyIiwidXNlcnNSZWFkU2VsZiIsIlVzZXJzQXBpRnAiLCJVc2Vyc0FwaUZhY3RvcnkiLCJVc2Vyc0FwaSIsIlZlcnNpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciIsInZlcnNpb25HZXRDdXJyZW50VmVyc2lvbiIsIlZlcnNpb25BcGlGcCIsIlZlcnNpb25BcGlGYWN0b3J5IiwiVmVyc2lvbkFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWNBOztBQUVBOztB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S0FBS0UsUUFBekcsQ0FBUDtBQUNIOzs7O0VBWDJCTSxhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGVcbi8qKlxuICogQW1waG9yYSBEYXRhXG4gKiAgICAgICAgICAgICAgQ29ubmVjdCBpbmZvcm1hdGlvbiBpbiByZWFsIHRpbWUgd2l0aCBBbXBob3JhIERhdGEuICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGF0IGh0dHBzOi8vZG9jcy5hbXBob3JhZGF0YS5jb21cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMC4xMC41XG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBnbG9iYWxJbXBvcnRVcmwgZnJvbSAndXJsJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGdsb2JhbEF4aW9zLCB7IEF4aW9zUHJvbWlzZSwgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbi8vIFNvbWUgaW1wb3J0cyBub3QgdXNlZCBkZXBlbmRpbmcgb24gdGVtcGxhdGUgY29uZGl0aW9uc1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMsIFJlcXVlc3RBcmdzLCBCYXNlQVBJLCBSZXF1aXJlZEVycm9yIH0gZnJvbSAnLi9iYXNlJztcblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWNjZXNzTGV2ZWxRdWVyeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0xldmVsUXVlcnkge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBUaGUgaWQgb2YgdGhlIEFtcGhvcmEgeW91IGFyZSBjaGVja2luZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NMZXZlbFF1ZXJ5XG4gICAgICovXG4gICAgYW1waG9yYUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGFjY2VzcyBsZXZlbCB0aGF0IHdpbGwgYmUgY2hlY2tlZC4gUmFuZ2VzIGZyb20gMCAobm9uZSkgdG8gMjU2IChBZG1pbmlzdGVyKS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NMZXZlbFF1ZXJ5XG4gICAgICovXG4gICAgYWNjZXNzTGV2ZWw/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY2Nlc3NMZXZlbFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzTGV2ZWxSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIFRoZSBpZCBvZiB0aGUgQW1waG9yYSB5b3UgYXJlIGNoZWNraW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc0xldmVsUmVzcG9uc2VcbiAgICAgKi9cbiAgICBhbXBob3JhSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYWNjZXNzIGxldmVsIHRoYXQgd2lsbCBiZSBjaGVja2VkLiBSYW5nZXMgZnJvbSAwIChub25lKSB0byAyNTYgKEFkbWluaXN0ZXIpLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc0xldmVsUmVzcG9uc2VcbiAgICAgKi9cbiAgICBhY2Nlc3NMZXZlbD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgaXMgYXV0aG9yaXplZCBhdCB0aGF0IGxldmVsLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NMZXZlbFJlc3BvbnNlXG4gICAgICovXG4gICAgaXNBdXRob3JpemVkPzogYm9vbGVhbjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjY2Vzc0xldmVsUmVzcG9uc2VBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0xldmVsUmVzcG9uc2VBbGxPZiB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIGlzIGF1dGhvcml6ZWQgYXQgdGhhdCBsZXZlbC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzTGV2ZWxSZXNwb25zZUFsbE9mXG4gICAgICovXG4gICAgaXNBdXRob3JpemVkPzogYm9vbGVhbjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjY2Vzc1J1bGVEdG9CYXNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzUnVsZUR0b0Jhc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc1J1bGVEdG9CYXNlXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc1J1bGVEdG9CYXNlXG4gICAgICovXG4gICAgYWxsb3dPckRlbnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc1J1bGVEdG9CYXNlXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY2NvdW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQWNjb3VudFxuICAgICAqL1xuICAgIGJhbGFuY2U/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY3Rpdml0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlcbiAgICAgKi9cbiAgICBjcmVhdGVkRGF0ZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5XG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJ1bj59XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5XG4gICAgICovXG4gICAgcnVucz86IEFycmF5PFJ1bj4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWN0aXZpdHlBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5QWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5QWxsT2ZcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8UnVuPn1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlBbGxPZlxuICAgICAqL1xuICAgIHJ1bnM/OiBBcnJheTxSdW4+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFkZHJlc3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgc3RyZWV0TnVtYmVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgc3RyZWV0TmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIG11bmljaXBhbGl0eVN1YmRpdmlzaW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgbXVuaWNpcGFsaXR5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeVNlY29uZGFyeVN1YmRpdmlzaW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeVN1YmRpdmlzaW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgcG9zdGFsQ29kZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGNvdW50cnlDb2RlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGNvdW50cnlDb2RlSXNvMz86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGZyZWVmb3JtQWRkcmVzcz86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGxvY2FsTmFtZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBZ2dyZWdhdGVTZXJpZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVTZXJpZXMge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICB0aW1lU2VyaWVzSWQ/OiBBcnJheTxvYmplY3Q+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZVRpbWVSYW5nZX1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgc2VhcmNoU3Bhbj86IERhdGVUaW1lUmFuZ2UgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgaW50ZXJ2YWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIHByb2plY3RlZFZhcmlhYmxlcz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBpbmxpbmVWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlVmFyaWFibGUge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVWYXJpYWJsZVxuICAgICAqL1xuICAgIGtpbmQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVWYXJpYWJsZVxuICAgICAqL1xuICAgIGFnZ3JlZ2F0aW9uPzogVHN4IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFsbEFjY2Vzc1J1bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGxBY2Nlc3NSdWxlIGV4dGVuZHMgQWNjZXNzUnVsZUR0b0Jhc2Uge1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQW1waG9yYVJlZmVyZW5jZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtcGhvcmFSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFSZWZlcmVuY2VcbiAgICAgKi9cbiAgICBhbXBob3JhSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFSZWZlcmVuY2VcbiAgICAgKi9cbiAgICBmaWxlc0NvbnN1bWVkPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhUmVmZXJlbmNlXG4gICAgICovXG4gICAgZmlsZXNQcm9kdWNlZD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVJlZmVyZW5jZVxuICAgICAqL1xuICAgIHNpZ25hbHNDb25zdW1lZD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVJlZmVyZW5jZVxuICAgICAqL1xuICAgIHNpZ25hbHNQcm9kdWNlZD86IG51bWJlciB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBbXBob3JhVXNlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtcGhvcmFVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGFib3V0Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBbXBob3JhVXNlckFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1waG9yYVVzZXJBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGUgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQXR0cmlidXRlU3RvcmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBdHRyaWJ1dGVTdG9yZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBBdHRyaWJ1dGVTdG9yZVxuICAgICAqL1xuICAgIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfTtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEJhc2VBbXBob3JhVXNlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VBbXBob3JhVXNlciB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGFib3V0Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNpY0FtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FtcGhvcmEge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgbGFiZWxzPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogVGhlIGJhc2ljIG1ldGFkYXRhIG9mIGFuIEFtcGhvcmEuXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEJhc2ljQW1waG9yYUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNBbXBob3JhQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGxhYmVscz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDYXRlZ29yeVNldFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5U2V0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDYXRlZ29yeVNldFxuICAgICAqL1xuICAgIGlkPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ2xhc3NpZmljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDbGFzc2lmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ2xhc3NpZmljYXRpb25cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8TmFtZT59XG4gICAgICogQG1lbWJlcm9mIENsYXNzaWZpY2F0aW9uXG4gICAgICovXG4gICAgbmFtZXM/OiBBcnJheTxOYW1lPjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFjdGl2aXR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQWN0aXZpdHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFjdGl2aXR5XG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGlzRGVsZXRlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICB0ZXJtc09mVXNlSWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICB0ZXJtc09mVXNlSWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYVVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhVXNlciB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBwaG9uZU51bWJlcj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBhYm91dD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBmdWxsTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBjb25maXJtUGFzc3dvcmQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZW1haWw6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhVXNlckFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgY29uZmlybVBhc3N3b3JkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgZW1haWw6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZVRlcm1zT2ZVc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVUZXJtc09mVXNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVUZXJtc09mVXNlXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZVRlcm1zT2ZVc2VcbiAgICAgKi9cbiAgICBjb250ZW50czogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUaW1lUmFuZ2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBEYXRlVGltZVJhbmdlXG4gICAgICovXG4gICAgZnJvbT86IERhdGU7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERhdGVUaW1lUmFuZ2VcbiAgICAgKi9cbiAgICB0bz86IERhdGU7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmEge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgbGFiZWxzPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICB0ZXJtc09mVXNlSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBmaWxlQXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlU3RvcmU7IH0gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBwdXJjaGFzZUNvdW50PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBzaWduYWxDb3VudD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgZmlsZUNvdW50PzogbnVtYmVyIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGV0YWlsZWRBbXBob3JhQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgcHVyY2hhc2VDb3VudD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBzaWduYWxDb3VudD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBmaWxlQ291bnQ/OiBudW1iZXIgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRWRpdEFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0QW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBmaWxlQXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlU3RvcmU7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRWRpdEFtcGhvcmFBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRBbXBob3JhQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICB0ZXJtc09mVXNlSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgZmlsZUF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVudGl0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBFbnRpdHlcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVudHJ5UG9pbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnRyeVBvaW50IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFbnRyeVBvaW50XG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1Bvc2l0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBFbnRyeVBvaW50XG4gICAgICovXG4gICAgcG9zaXRpb24/OiBQb3NpdGlvbiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFdmVudFByb3BlcnR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wZXJ0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRXZlbnRQcm9wZXJ0eVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEV2ZW50UHJvcGVydHlcbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEZ1enp5U2VhcmNoUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdXp6eVNlYXJjaFJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7U3VtbWFyeX1cbiAgICAgKiBAbWVtYmVyb2YgRnV6enlTZWFyY2hSZXNwb25zZVxuICAgICAqL1xuICAgIHN1bW1hcnk/OiBTdW1tYXJ5IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8UmVzdWx0Pn1cbiAgICAgKiBAbWVtYmVyb2YgRnV6enlTZWFyY2hSZXNwb25zZVxuICAgICAqL1xuICAgIHJlc3VsdHM/OiBBcnJheTxSZXN1bHQ+O1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgR2V0RXZlbnRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RXZlbnRzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8b2JqZWN0Pn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgdGltZVNlcmllc0lkPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGVUaW1lUmFuZ2V9XG4gICAgICogQG1lbWJlcm9mIEdldEV2ZW50c1xuICAgICAqL1xuICAgIHNlYXJjaFNwYW4/OiBEYXRlVGltZVJhbmdlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBwcm9qZWN0ZWRQcm9wZXJ0aWVzPzogQXJyYXk8c3RyaW5nPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBHZXRTZXJpZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHZXRTZXJpZXMge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICB0aW1lU2VyaWVzSWQ/OiBBcnJheTxvYmplY3Q+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZVRpbWVSYW5nZX1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgc2VhcmNoU3Bhbj86IERhdGVUaW1lUmFuZ2UgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIHByb2plY3RlZFZhcmlhYmxlcz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBpbmxpbmVWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEludml0YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnZpdGF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBJbnZpdGF0aW9uXG4gICAgICovXG4gICAgdGFyZ2V0RW1haWw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBJbnZpdGF0aW9uXG4gICAgICovXG4gICAgdGFyZ2V0T3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBJbnZpdGF0aW9uXG4gICAgICovXG4gICAgaXNDbGFpbWVkPzogYm9vbGVhbiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBMb2dpblJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVxdWVzdFxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTG9naW5SZXF1ZXN0XG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE5hbWVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYW1lIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBOYW1lXG4gICAgICovXG4gICAgbmFtZUxvY2FsZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTmFtZVxuICAgICAqL1xuICAgIG5hbWVOYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBOdW1lcmljVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgdmFsdWU/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIE51bWVyaWNWYXJpYWJsZVxuICAgICAqL1xuICAgIGFnZ3JlZ2F0aW9uPzogVHN4IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICB3ZWJzaXRlVXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWRkcmVzcz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgYWxsb3dPckRlbnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZUFsbE9mXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIHdlYnNpdGVVcmw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGFnZWRSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VkUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBhZ2VkUmVzcG9uc2VcbiAgICAgKi9cbiAgICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQZXJtaXNzaW9uc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uc1JlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxBY2Nlc3NMZXZlbFF1ZXJ5Pn1cbiAgICAgKiBAbWVtYmVyb2YgUGVybWlzc2lvbnNSZXF1ZXN0XG4gICAgICovXG4gICAgYWNjZXNzUXVlcmllcz86IEFycmF5PEFjY2Vzc0xldmVsUXVlcnk+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBlcm1pc3Npb25zUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uc1Jlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8QWNjZXNzTGV2ZWxSZXNwb25zZT59XG4gICAgICogQG1lbWJlcm9mIFBlcm1pc3Npb25zUmVzcG9uc2VcbiAgICAgKi9cbiAgICBhY2Nlc3NSZXNwb25zZXM/OiBBcnJheTxBY2Nlc3NMZXZlbFJlc3BvbnNlPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGFuSW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGFuSW5mb3JtYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQbGFuVHlwZXN9XG4gICAgICogQG1lbWJlcm9mIFBsYW5JbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHBsYW5UeXBlPzogUGxhblR5cGVzO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYW5JbmZvcm1hdGlvblxuICAgICAqL1xuICAgIGZyaWVuZGx5TmFtZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGVudW0gUGxhblR5cGVzIHtcbiAgICBOVU1CRVJfMCA9IDAsXG4gICAgTlVNQkVSXzEgPSAxLFxuICAgIE5VTUJFUl8yID0gMlxufVxuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQb2lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb2kge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIHBob25lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8Q2F0ZWdvcnlTZXQ+fVxuICAgICAqIEBtZW1iZXJvZiBQb2lcbiAgICAgKi9cbiAgICBjYXRlZ29yeVNldD86IEFycmF5PENhdGVnb3J5U2V0PjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgUG9pXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IEFycmF5PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PENsYXNzaWZpY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgUG9pXG4gICAgICovXG4gICAgY2xhc3NpZmljYXRpb25zPzogQXJyYXk8Q2xhc3NpZmljYXRpb24+O1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUG9zaXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUG9zaXRpb25cbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUG9zaXRpb25cbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9ibGVtRGV0YWlsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb2JsZW1EZXRhaWxzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgc3RhdHVzPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIGRldGFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBpbnN0YW5jZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIGV4dGVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsdWVzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzXG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzXG4gICAgICovXG4gICAgdmFsdWVzPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlc0FsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIFByb3BlcnR5VmFsdWVzQWxsT2ZcbiAgICAgKi9cbiAgICB2YWx1ZXM/OiBBcnJheTxvYmplY3Q+IHwgbnVsbDtcbn1cbi8qKlxuICogUXVhbGl0eSBtZXRyaWNzIGZvciBhbiBBbXBob3JhLCBiZXR3ZWVuIDEgYW5kIDQuXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFF1YWxpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWFsaXR5IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBRdWFsaXR5XG4gICAgICovXG4gICAgYWNjdXJhY3k/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFF1YWxpdHlcbiAgICAgKi9cbiAgICBjb21wbGV0ZW5lc3M/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFF1YWxpdHlcbiAgICAgKi9cbiAgICBncmFudWxhcml0eT86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUXVhbGl0eVxuICAgICAqL1xuICAgIHJlbGlhYmlsaXR5PzogbnVtYmVyIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFF1ZXJ5UmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0dldEV2ZW50c31cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXF1ZXN0XG4gICAgICovXG4gICAgZ2V0RXZlbnRzPzogR2V0RXZlbnRzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7R2V0U2VyaWVzfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlcXVlc3RcbiAgICAgKi9cbiAgICBnZXRTZXJpZXM/OiBHZXRTZXJpZXMgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBZ2dyZWdhdGVTZXJpZXN9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVxdWVzdFxuICAgICAqL1xuICAgIGFnZ3JlZ2F0ZVNlcmllcz86IEFnZ3JlZ2F0ZVNlcmllcyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIGNvbnRpbnVhdGlvblRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8RGF0ZT59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIHRpbWVzdGFtcHM/OiBBcnJheTxEYXRlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFByb3BlcnR5VmFsdWVzPn1cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXN1bHRQYWdlXG4gICAgICovXG4gICAgcHJvcGVydGllcz86IEFycmF5PFByb3BlcnR5VmFsdWVzPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UmVzdWx0UGFnZUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8RGF0ZT59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZUFsbE9mXG4gICAgICovXG4gICAgdGltZXN0YW1wcz86IEFycmF5PERhdGU+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8UHJvcGVydHlWYWx1ZXM+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICAgICAqL1xuICAgIHByb3BlcnRpZXM/OiBBcnJheTxQcm9wZXJ0eVZhbHVlcz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgc2NvcmU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FkZHJlc3N9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UG9zaXRpb259XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogUG9zaXRpb24gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtWaWV3cG9ydH1cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgdmlld3BvcnQ/OiBWaWV3cG9ydCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PEVudHJ5UG9pbnQ+fVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBlbnRyeVBvaW50cz86IEFycmF5PEVudHJ5UG9pbnQ+O1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIGluZm8/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb2l9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHBvaT86IFBvaSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBSdW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSdW4ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VmVyc2lvbkluZm99XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIHZlcnNpb25JbmZvPzogVmVyc2lvbkluZm8gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIHN0YXJ0ZWRCeT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgc3RhcnRUaW1lPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIGVuZFRpbWU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8QW1waG9yYVJlZmVyZW5jZT59XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIGFtcGhvcmFSZWZlcmVuY2VzPzogQXJyYXk8QW1waG9yYVJlZmVyZW5jZT4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgU2lnbmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmFsIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU2lnbmFsXG4gICAgICovXG4gICAgcHJvcGVydHk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNpZ25hbFxuICAgICAqL1xuICAgIHZhbHVlVHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgU3VtbWFyeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN1bW1hcnkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBxdWVyeT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIHF1ZXJ5VHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIHF1ZXJ5VGltZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgbnVtUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgb2Zmc2V0PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIGZ1enp5TGV2ZWw/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBUZXJtc09mVXNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVybXNPZlVzZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlXG4gICAgICovXG4gICAgY29udGVudHM6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVGVybXNPZlVzZUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVybXNPZlVzZUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQWxsT2ZcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBUc3hcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUc3gge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFRzeFxuICAgICAqL1xuICAgIHRzeD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVcGRhdGVSdW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVSdW4ge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoZSBydW4gZmFpbGVkIG9yIHN1Y2NlZWRlZC4gU2V0dGluZyB0aGlzIHdpbGwgZW5kIHRoZSBydW4uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFVwZGF0ZVJ1blxuICAgICAqL1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVTaWduYWxcbiAgICAgKi9cbiAgICBtZXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXBsb2FkUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXBsb2FkUmVzcG9uc2VcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBhbGxvd09yRGVueT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVBbGxPZlxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBWYXJpYWJsZVxuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWZXJzaW9uSW5mb1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFZlcnNpb25JbmZvIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBWZXJzaW9uSW5mb1xuICAgICAqL1xuICAgIG1ham9yPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFZlcnNpb25JbmZvXG4gICAgICovXG4gICAgbWlub3I/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkluZm9cbiAgICAgKi9cbiAgICBwYXRjaD86IG51bWJlcjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFZpZXdwb3J0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmlld3BvcnQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb3NpdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRcbiAgICAgKi9cbiAgICB0b3BMZWZ0UG9pbnQ/OiBQb3NpdGlvbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1Bvc2l0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydFxuICAgICAqL1xuICAgIGJ0bVJpZ2h0UG9pbnQ/OiBQb3NpdGlvbiB8IG51bGw7XG59XG5cbi8qKlxuICogQWN0aXZpdGllc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQWN0aXZpdHl9IGNyZWF0ZUFjdGl2aXR5IE1ldGFkYXRhIG9mIHRoZSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkoY3JlYXRlQWN0aXZpdHk6IENyZWF0ZUFjdGl2aXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2NyZWF0ZUFjdGl2aXR5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVBY3Rpdml0eSA9PT0gbnVsbCB8fCBjcmVhdGVBY3Rpdml0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2NyZWF0ZUFjdGl2aXR5JywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZUFjdGl2aXR5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYWN0aXZpdGllc2A7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVBY3Rpdml0eSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGNyZWF0ZUFjdGl2aXR5ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVBY3Rpdml0eSA6IHt9KSA6IChjcmVhdGVBY3Rpdml0eSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIG1ldGFkYXRhIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1JlYWRBY3Rpdml0eS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJlZmVyZW5jZXMgYW4gQW1waG9yYSBkdXJpbmcgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYW1waG9yYUlkIFRoZSBJZCBvZiB0aGUgQW1waG9yYSB0byByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7QW1waG9yYVJlZmVyZW5jZX0gYW1waG9yYVJlZmVyZW5jZSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgYW1waG9yYUlkOiBzdHJpbmcsIGFtcGhvcmFSZWZlcmVuY2U6IEFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3J1bklkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChydW5JZCA9PT0gbnVsbCB8fCBydW5JZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3J1bklkJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJ1bklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdhbXBob3JhSWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGFtcGhvcmFJZCA9PT0gbnVsbCB8fCBhbXBob3JhSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdhbXBob3JhSWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgYW1waG9yYUlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdhbXBob3JhUmVmZXJlbmNlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChhbXBob3JhUmVmZXJlbmNlID09PSBudWxsIHx8IGFtcGhvcmFSZWZlcmVuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdhbXBob3JhUmVmZXJlbmNlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGFtcGhvcmFSZWZlcmVuY2Ugd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfS9SdW5zL3tydW5JZH0vYW1waG9yYWUve2FtcGhvcmFJZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInJ1bklkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocnVuSWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJhbXBob3JhSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhhbXBob3JhSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQVVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGFtcGhvcmFSZWZlcmVuY2UgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShhbXBob3JhUmVmZXJlbmNlICE9PSB1bmRlZmluZWQgPyBhbXBob3JhUmVmZXJlbmNlIDoge30pIDogKGFtcGhvcmFSZWZlcmVuY2UgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IGlkIGluIHdoaWNoIHRvIHN0YXJ0IGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1N0YXJ0UnVuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzU3RhcnRSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH0vUnVuc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuZCBjb21wbGV0ZXMgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVJ1bn0gdXBkYXRlUnVuIEluZm9ybWF0aW9uIGFib3V0IHRoZSB1cGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzVXBkYXRlUnVuKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIHVwZGF0ZVJ1bjogVXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1VwZGF0ZVJ1bi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3J1bklkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChydW5JZCA9PT0gbnVsbCB8fCBydW5JZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3J1bklkJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJ1bklkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1VwZGF0ZVJ1bi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3VwZGF0ZVJ1bicgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodXBkYXRlUnVuID09PSBudWxsIHx8IHVwZGF0ZVJ1biA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3VwZGF0ZVJ1bicsJ1JlcXVpcmVkIHBhcmFtZXRlciB1cGRhdGVSdW4gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzVXBkYXRlUnVuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYWN0aXZpdGllcy97aWR9L1J1bnMve3J1bklkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wicnVuSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhydW5JZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHVwZGF0ZVJ1biAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHVwZGF0ZVJ1biAhPT0gdW5kZWZpbmVkID8gdXBkYXRlUnVuIDoge30pIDogKHVwZGF0ZVJ1biB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQWN0aXZpdGllc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpdml0aWVzQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBY3Rpdml0eX0gY3JlYXRlQWN0aXZpdHkgTWV0YWRhdGEgb2YgdGhlIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eTogQ3JlYXRlQWN0aXZpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFjdGl2aXR5PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkoY3JlYXRlQWN0aXZpdHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBtZXRhZGF0YSBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QWN0aXZpdHk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmVmZXJlbmNlcyBhbiBBbXBob3JhIGR1cmluZyBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhbXBob3JhSWQgVGhlIElkIG9mIHRoZSBBbXBob3JhIHRvIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtBbXBob3JhUmVmZXJlbmNlfSBhbXBob3JhUmVmZXJlbmNlIEluZm9ybWF0aW9uIGFib3V0IHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCBhbXBob3JhSWQ6IHN0cmluZywgYW1waG9yYVJlZmVyZW5jZTogQW1waG9yYVJlZmVyZW5jZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QW1waG9yYVJlZmVyZW5jZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQsIHJ1bklkLCBhbXBob3JhSWQsIGFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU3RhcnRzIGEgbmV3IHJ1biBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBpZCBpbiB3aGljaCB0byBzdGFydCBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNTdGFydFJ1bihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxSdW4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNTdGFydFJ1bihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuZCBjb21wbGV0ZXMgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVJ1bn0gdXBkYXRlUnVuIEluZm9ybWF0aW9uIGFib3V0IHRoZSB1cGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzVXBkYXRlUnVuKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIHVwZGF0ZVJ1bjogVXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxSdW4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNVcGRhdGVSdW4oaWQsIHJ1bklkLCB1cGRhdGVSdW4sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBBY3Rpdml0aWVzQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGl2aXRpZXNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFjdGl2aXR5fSBjcmVhdGVBY3Rpdml0eSBNZXRhZGF0YSBvZiB0aGUgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5OiBDcmVhdGVBY3Rpdml0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkoY3JlYXRlQWN0aXZpdHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBtZXRhZGF0YSBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJlZmVyZW5jZXMgYW4gQW1waG9yYSBkdXJpbmcgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYW1waG9yYUlkIFRoZSBJZCBvZiB0aGUgQW1waG9yYSB0byByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7QW1waG9yYVJlZmVyZW5jZX0gYW1waG9yYVJlZmVyZW5jZSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgYW1waG9yYUlkOiBzdHJpbmcsIGFtcGhvcmFSZWZlcmVuY2U6IEFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQsIHJ1bklkLCBhbXBob3JhSWQsIGFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU3RhcnRzIGEgbmV3IHJ1biBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBpZCBpbiB3aGljaCB0byBzdGFydCBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNTdGFydFJ1bihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNTdGFydFJ1bihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuZCBjb21wbGV0ZXMgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVJ1bn0gdXBkYXRlUnVuIEluZm9ybWF0aW9uIGFib3V0IHRoZSB1cGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzVXBkYXRlUnVuKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIHVwZGF0ZVJ1bjogVXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNVcGRhdGVSdW4oaWQsIHJ1bklkLCB1cGRhdGVSdW4sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQWN0aXZpdGllc0FwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBBY3Rpdml0aWVzQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIEFjdGl2aXRpZXNBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7Q3JlYXRlQWN0aXZpdHl9IGNyZWF0ZUFjdGl2aXR5IE1ldGFkYXRhIG9mIHRoZSBuZXcgYWN0aXZpdHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5OiBDcmVhdGVBY3Rpdml0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyB0aGUgbWV0YWRhdGEgb2YgYW4gYWN0aXZpdHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdGllc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFJlZmVyZW5jZXMgYW4gQW1waG9yYSBkdXJpbmcgYSBydW4uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYW1waG9yYUlkIFRoZSBJZCBvZiB0aGUgQW1waG9yYSB0byByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtBbXBob3JhUmVmZXJlbmNlfSBhbXBob3JhUmVmZXJlbmNlIEluZm9ybWF0aW9uIGFib3V0IHRoZSByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgYW1waG9yYUlkOiBzdHJpbmcsIGFtcGhvcmFSZWZlcmVuY2U6IEFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkLCBydW5JZCwgYW1waG9yYUlkLCBhbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgaWQgaW4gd2hpY2ggdG8gc3RhcnQgYSBydW4uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc1N0YXJ0UnVuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNTdGFydFJ1bihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbmQgY29tcGxldGVzIGEgcnVuLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICogQHBhcmFtIHtVcGRhdGVSdW59IHVwZGF0ZVJ1biBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNVcGRhdGVSdW4oaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgdXBkYXRlUnVuOiBVcGRhdGVSdW4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNVcGRhdGVSdW4oaWQsIHJ1bklkLCB1cGRhdGVSdW4sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eUdldChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYVF1YWxpdHlHZXQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3F1YWxpdHlgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhUXVhbGl0eVNldC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3F1YWxpdHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IG51bGwgfHwgcXVhbGl0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3F1YWxpdHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcXVhbGl0eSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFRdWFsaXR5U2V0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9xdWFsaXR5YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBxdWFsaXR5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocXVhbGl0eSAhPT0gdW5kZWZpbmVkID8gcXVhbGl0eSA6IHt9KSA6IChxdWFsaXR5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIGZvciBhbGwgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtBbGxBY2Nlc3NSdWxlfSBhbGxBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQ6IHN0cmluZywgYWxsQWNjZXNzUnVsZTogQWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdhbGxBY2Nlc3NSdWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChhbGxBY2Nlc3NSdWxlID09PSBudWxsIHx8IGFsbEFjY2Vzc1J1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdhbGxBY2Nlc3NSdWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGFsbEFjY2Vzc1J1bGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JBbGxgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGFsbEFjY2Vzc1J1bGUgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShhbGxBY2Nlc3NSdWxlICE9PSB1bmRlZmluZWQgPyBhbGxBY2Nlc3NSdWxlIDoge30pIDogKGFsbEFjY2Vzc1J1bGUgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZTogT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdvcmdhbmlzYXRpb25BY2Nlc3NSdWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChvcmdhbmlzYXRpb25BY2Nlc3NSdWxlID09PSBudWxsIHx8IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdvcmdhbmlzYXRpb25BY2Nlc3NSdWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JPcmdhbmlzYXRpb25gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShvcmdhbmlzYXRpb25BY2Nlc3NSdWxlICE9PSB1bmRlZmluZWQgPyBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIDoge30pIDogKG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVc2VyQWNjZXNzUnVsZX0gdXNlckFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1c2VyQWNjZXNzUnVsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodXNlckFjY2Vzc1J1bGUgPT09IG51bGwgfHwgdXNlckFjY2Vzc1J1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1c2VyQWNjZXNzUnVsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciB1c2VyQWNjZXNzUnVsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JVc2VyYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiB1c2VyQWNjZXNzUnVsZSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHVzZXJBY2Nlc3NSdWxlICE9PSB1bmRlZmluZWQgPyB1c2VyQWNjZXNzUnVsZSA6IHt9KSA6ICh1c2VyQWNjZXNzUnVsZSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQWNjZXNzIENvbnRyb2wgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZDogc3RyaW5nLCBydWxlSWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdydWxlSWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJ1bGVJZCA9PT0gbnVsbCB8fCBydWxlSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdydWxlSWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcnVsZUlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMve3J1bGVJZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInJ1bGVJZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHJ1bGVJZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBcXCdmb3IgYWxsXFwnIHJ1bGUsIGlmIGl0IGV4aXN0cywgZWxzZSBhbiBlbXB0eSAyMDAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JBbGxgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0Zvck9yZ2FuaXNhdGlvbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gdXNlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yVXNlcmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgZW1wdHkgQW1waG9yYSBpbiB0aGUgdXNlclxcJ3Mgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmF9IGNyZWF0ZUFtcGhvcmEgSW5mb3JtYXRpb24gZm9yIHRoZSBuZXcgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmE6IENyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQW1waG9yYScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoY3JlYXRlQW1waG9yYSA9PT0gbnVsbCB8fCBjcmVhdGVBbXBob3JhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQW1waG9yYScsJ1JlcXVpcmVkIHBhcmFtZXRlciBjcmVhdGVBbXBob3JhIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVDcmVhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVBbXBob3JhICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlQW1waG9yYSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlQW1waG9yYSA6IHt9KSA6IChjcmVhdGVBbXBob3JhIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZURlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgZmlsZS4gUmV0dXJucyBhIGJsb2IgVVJMIHRvIHVwbG9hZCB0by5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXMve2ZpbGV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJmaWxlXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZmlsZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXMve2ZpbGV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJmaWxlXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZmlsZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBDYW4gYmUgYWxwaGFiZXRpY2FsIG9yIGxhc3RNb2RpZmllZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9yZGVyQnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ29yZGVyQnknXSA9IG9yZGVyQnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZmlsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZmlsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBmaWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncmVxdWVzdEJvZHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3RCb2R5ID09PSBudWxsIHx8IHJlcXVlc3RCb2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncmVxdWVzdEJvZHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdEJvZHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfS9tZXRhYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJmaWxlXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZmlsZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhIGxpc3Qgb2YgQW1waG9yYSBmb3IgeW91cnNlbGYgb3IgeW91ciBvcmcsIGNyZWF0ZWQgb3IgcHVyY2hhc2VkIGJ5IHlvdSAob3Igb3JnYW5pc2F0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY29wZV0gXFwmIzM5O3NlbGZcXCYjMzk7IG9yIFxcJiMzOTtvcmdhbmlzYXRpb25cXCYjMzk7LiBEZWZhdWx0cyB0byBzZWxmLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlTGlzdChzY29wZT86IHN0cmluZywgYWNjZXNzVHlwZT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydzY29wZSddID0gc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY2Nlc3NUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydhY2Nlc3NUeXBlJ10gPSBhY2Nlc3NUeXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlUmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWw6IFNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3NpZ25hbCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoc2lnbmFsID09PSBudWxsIHx8IHNpZ25hbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3NpZ25hbCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBzaWduYWwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHNpZ25hbCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHNpZ25hbCAhPT0gdW5kZWZpbmVkID8gc2lnbmFsIDoge30pIDogKHNpZ25hbCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb3IgaWQgb2YgdGhlIHNpZ25hbCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncHJvcGVydHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBudWxsIHx8IHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncHJvcGVydHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcHJvcGVydHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMve3Byb3BlcnR5fWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wicHJvcGVydHlcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3NpZ25hbElkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChzaWduYWxJZCA9PT0gbnVsbCB8fCBzaWduYWxJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3NpZ25hbElkJywnUmVxdWlyZWQgcGFyYW1ldGVyIHNpZ25hbElkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAndXBkYXRlU2lnbmFsJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICh1cGRhdGVTaWduYWwgPT09IG51bGwgfHwgdXBkYXRlU2lnbmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigndXBkYXRlU2lnbmFsJywnUmVxdWlyZWQgcGFyYW1ldGVyIHVwZGF0ZVNpZ25hbCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFscy97c2lnbmFsSWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJzaWduYWxJZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHNpZ25hbElkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiB1cGRhdGVTaWduYWwgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1cGRhdGVTaWduYWwgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZVNpZ25hbCA6IHt9KSA6ICh1cGRhdGVTaWduYWwgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL3ZhbHVlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncmVxdWVzdEJvZHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3RCb2R5ID09PSBudWxsIHx8IHJlcXVlc3RCb2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncmVxdWVzdEJvZHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdEJvZHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxWYWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2guJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL2JhdGNodmFsdWVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vYmF0Y2hTaWduYWxWYWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtEZXRhaWxlZEFtcGhvcmF9IGRldGFpbGVkQW1waG9yYSBJbmZvcm1hdGlvbiB0byB1cGRhdGUuIE51bGxzIGFyZSBOT1QgaWdub3JlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlVXBkYXRlKGlkOiBzdHJpbmcsIGRldGFpbGVkQW1waG9yYTogRGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdkZXRhaWxlZEFtcGhvcmEnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGRldGFpbGVkQW1waG9yYSA9PT0gbnVsbCB8fCBkZXRhaWxlZEFtcGhvcmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdkZXRhaWxlZEFtcGhvcmEnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZGV0YWlsZWRBbXBob3JhIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQVVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGRldGFpbGVkQW1waG9yYSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGRldGFpbGVkQW1waG9yYSAhPT0gdW5kZWZpbmVkID8gZGV0YWlsZWRBbXBob3JhIDoge30pIDogKGRldGFpbGVkQW1waG9yYSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwdXJjaGFzZXNQdXJjaGFzZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcHVyY2hhc2VzUHVyY2hhc2UuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9BbXBob3JhZS97aWR9L1B1cmNoYXNlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFtcGhvcmFlQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFtcGhvcmFlQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eUdldChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxRdWFsaXR5PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlHZXQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVhbGl0eX0gcXVhbGl0eSBUaGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eVNldChpZDogc3RyaW5nLCBxdWFsaXR5OiBRdWFsaXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxRdWFsaXR5PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlTZXQoaWQsIHF1YWxpdHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIGZvciBhbGwgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtBbGxBY2Nlc3NSdWxlfSBhbGxBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQ6IHN0cmluZywgYWxsQWNjZXNzUnVsZTogQWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QWxsQWNjZXNzUnVsZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQsIGFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9uQWNjZXNzUnVsZX0gb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU6IE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFVzZXJBY2Nlc3NSdWxlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZCwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVc2VyQWNjZXNzUnVsZX0gdXNlckFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxVc2VyQWNjZXNzUnVsZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkLCB1c2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFjY2VzcyBDb250cm9sIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlSWQgVGhlIElkIG9mIHRoZSBydWxlIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQ6IHN0cmluZywgcnVsZUlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQsIHJ1bGVJZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBcXCdmb3IgYWxsXFwnIHJ1bGUsIGlmIGl0IGV4aXN0cywgZWxzZSBhbiBlbXB0eSAyMDAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QWxsQWNjZXNzUnVsZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gb3JnYW5pc2F0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8T3JnYW5pc2F0aW9uQWNjZXNzUnVsZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFVzZXJBY2Nlc3NSdWxlPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8RGV0YWlsZWRBbXBob3JhPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFVwbG9hZFJlc3BvbnNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIENhbiBiZSBhbHBoYWJldGljYWwgb3IgbGFzdE1vZGlmaWVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYSBsaXN0IG9mIEFtcGhvcmEgZm9yIHlvdXJzZWxmIG9yIHlvdXIgb3JnLCBjcmVhdGVkIG9yIHB1cmNoYXNlZCBieSB5b3UgKG9yIG9yZ2FuaXNhdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUeXBlXSBcXCYjMzk7Y3JlYXRlZFxcJiMzOTsgb3IgXFwmIzM5O3B1cmNoYXNlZFxcJiMzOTsuIERlZmF1bHRzIHRvIGNyZWF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PERldGFpbGVkQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUxpc3Qoc2NvcGUsIGFjY2Vzc1R5cGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWw6IFNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8U2lnbmFsPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBzaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgc2lnbmFsIHByb3BlcnR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkOiBzdHJpbmcsIHByb3BlcnR5OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFNpZ25hbD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZCwgcHJvcGVydHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFNpZ25hbD4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbElkOiBzdHJpbmcsIHVwZGF0ZVNpZ25hbDogVXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxTaWduYWw+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQsIHNpZ25hbElkLCB1cGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZGV0YWlsZWRBbXBob3JhOiBEZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBkZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUHVyY2hhc2VzIGFuIEFtcGhvcmEgYXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnB1cmNoYXNlc1B1cmNoYXNlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQW1waG9yYWVBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5R2V0KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5R2V0KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1YWxpdHl9IHF1YWxpdHkgVGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYVF1YWxpdHlTZXQoaWQ6IHN0cmluZywgcXVhbGl0eTogUXVhbGl0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlTZXQoaWQsIHF1YWxpdHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIGZvciBhbGwgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtBbGxBY2Nlc3NSdWxlfSBhbGxBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQ6IHN0cmluZywgYWxsQWNjZXNzUnVsZTogQWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZCwgYWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZTogT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZCwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVc2VyQWNjZXNzUnVsZX0gdXNlckFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZCwgdXNlckFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZUlkIFRoZSBJZCBvZiB0aGUgcnVsZSB0byBkZWxldGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkLCBydWxlSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgXFwnZm9yIGFsbFxcJyBydWxlLCBpZiBpdCBleGlzdHMsIGVsc2UgYW4gZW1wdHkgMjAwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gb3JnYW5pc2F0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gdXNlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgZW1wdHkgQW1waG9yYSBpbiB0aGUgdXNlclxcJ3Mgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmF9IGNyZWF0ZUFtcGhvcmEgSW5mb3JtYXRpb24gZm9yIHRoZSBuZXcgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmE6IENyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBmaWxlLiBSZXR1cm5zIGEgYmxvYiBVUkwgdG8gdXBsb2FkIHRvLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBBbXBob3JhXFwncyBmaWxlcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gQ2FuIGJlIGFscGhhYmV0aWNhbCBvciBsYXN0TW9kaWZpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzTGlzdEZpbGVzKGlkOiBzdHJpbmcsIG9yZGVyQnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQsIG9yZGVyQnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YShpZCwgZmlsZSwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhIGxpc3Qgb2YgQW1waG9yYSBmb3IgeW91cnNlbGYgb3IgeW91ciBvcmcsIGNyZWF0ZWQgb3IgcHVyY2hhc2VkIGJ5IHlvdSAob3Igb3JnYW5pc2F0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY29wZV0gXFwmIzM5O3NlbGZcXCYjMzk7IG9yIFxcJiMzOTtvcmdhbmlzYXRpb25cXCYjMzk7LiBEZWZhdWx0cyB0byBzZWxmLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlTGlzdChzY29wZT86IHN0cmluZywgYWNjZXNzVHlwZT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVMaXN0KHNjb3BlLCBhY2Nlc3NUeXBlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsOiBTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZCwgc2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb3IgaWQgb2YgdGhlIHNpZ25hbCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQsIHByb3BlcnR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbElkOiBzdHJpbmcsIHVwZGF0ZVNpZ25hbDogVXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQsIHNpZ25hbElkLCB1cGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7RGV0YWlsZWRBbXBob3JhfSBkZXRhaWxlZEFtcGhvcmEgSW5mb3JtYXRpb24gdG8gdXBkYXRlLiBOdWxscyBhcmUgTk9UIGlnbm9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBkZXRhaWxlZEFtcGhvcmE6IERldGFpbGVkQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVVcGRhdGUoaWQsIGRldGFpbGVkQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBQdXJjaGFzZXMgYW4gQW1waG9yYSBhcyB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikucHVyY2hhc2VzUHVyY2hhc2UoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQW1waG9yYWVBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgQW1waG9yYWVBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhUXVhbGl0eUdldChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlHZXQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYVF1YWxpdHlTZXQoaWQ6IHN0cmluZywgcXVhbGl0eTogUXVhbGl0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5U2V0KGlkLCBxdWFsaXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgZm9yIGFsbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtBbGxBY2Nlc3NSdWxlfSBhbGxBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZDogc3RyaW5nLCBhbGxBY2Nlc3NSdWxlOiBBbGxBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZCwgYWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbkFjY2Vzc1J1bGV9IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU6IE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7VXNlckFjY2Vzc1J1bGV9IHVzZXJBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQsIHVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFjY2VzcyBDb250cm9sIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZUlkIFRoZSBJZCBvZiB0aGUgcnVsZSB0byBkZWxldGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQ6IHN0cmluZywgcnVsZUlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkLCBydWxlSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIFxcJ2ZvciBhbGxcXCcgcnVsZSwgaWYgaXQgZXhpc3RzLCBlbHNlIGFuIGVtcHR5IDIwMC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGVtcHR5IEFtcGhvcmEgaW4gdGhlIHVzZXJcXCdzIG9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmF9IGNyZWF0ZUFtcGhvcmEgSW5mb3JtYXRpb24gZm9yIHRoZSBuZXcgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgZmlsZS4gUmV0dXJucyBhIGJsb2IgVVJMIHRvIHVwbG9hZCB0by5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBDYW4gYmUgYWxwaGFiZXRpY2FsIG9yIGxhc3RNb2RpZmllZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVMaXN0KHNjb3BlLCBhY2Nlc3NUeXBlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBTaWduYWwgRGV0YWlscy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbDogU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBzaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkLCBwcm9wZXJ0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICogQHBhcmFtIHtVcGRhdGVTaWduYWx9IHVwZGF0ZVNpZ25hbCBTaWduYWwgcHJvcGVydGllcyB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZCwgc2lnbmFsSWQsIHVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBkZXRhaWxlZEFtcGhvcmE6IERldGFpbGVkQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBkZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnB1cmNoYXNlc1B1cmNoYXNlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYSBKV1QgKEpTT04gV2ViIFRva2VuKS4gICAgICAgICAgICAgXG4gICAgICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnbG9naW5SZXF1ZXN0JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChsb2dpblJlcXVlc3QgPT09IG51bGwgfHwgbG9naW5SZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignbG9naW5SZXF1ZXN0JywnUmVxdWlyZWQgcGFyYW1ldGVyIGxvZ2luUmVxdWVzdCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYXV0aGVudGljYXRpb24vcmVxdWVzdGA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBsb2dpblJlcXVlc3QgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShsb2dpblJlcXVlc3QgIT09IHVuZGVmaW5lZCA/IGxvZ2luUmVxdWVzdCA6IHt9KSA6IChsb2dpblJlcXVlc3QgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IGxvZ2luUmVxdWVzdCBUb2tlbiBSZXF1ZXN0IFBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEF1dGhlbnRpY2F0aW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAgICAgKiBAcGFyYW0ge0xvZ2luUmVxdWVzdH0gbG9naW5SZXF1ZXN0IFRva2VuIFJlcXVlc3QgUGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQXV0aGVudGljYXRpb25BcGlGcChjb25maWd1cmF0aW9uKS5hdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQXV0aGVudGljYXRpb25BcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBdXRoZW50aWNhdGlvbkFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQXV0aGVudGljYXRpb25BcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgaWRlbnRpdHlHZXQoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2lkZW50aXR5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIElkZW50aXR5QXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IElkZW50aXR5QXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBpZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gSWRlbnRpdHlBcGlGcChjb25maWd1cmF0aW9uKS5pZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIElkZW50aXR5QXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIElkZW50aXR5QXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIElkZW50aXR5QXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIElkZW50aXR5QXBpXG4gICAgICovXG4gICAgcHVibGljIGlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIElkZW50aXR5QXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5pZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIE1hcmtldEFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRmluZHMgQW1waG9yYSB1c2luZyBhIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEhvdyBtYW55IHBhZ2VzIChpbiBtdWx0aXBsZXMgb2YgdG9wKSB0byBza2lwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0RmluZChxdWVyeT86IHN0cmluZywgdG9wPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL21hcmtldC9zZWFyY2hgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChxdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsncXVlcnknXSA9IHF1ZXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0b3AnXSA9IHRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNraXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3NraXAnXSA9IHNraXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG1hcmtldExvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2xvY2F0aW9uL2Z1enp5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocXVlcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgTWFya2V0QXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRmluZHMgQW1waG9yYSB1c2luZyBhIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEhvdyBtYW55IHBhZ2VzIChpbiBtdWx0aXBsZXMgb2YgdG9wKSB0byBza2lwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0RmluZChxdWVyeT86IHN0cmluZywgdG9wPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxCYXNpY0FtcGhvcmE+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE1hcmtldEFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm1hcmtldEZpbmQocXVlcnksIHRvcCwgc2tpcCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gU2VhcmNoIFRleHQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBtYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8RnV6enlTZWFyY2hSZXNwb25zZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5tYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIE1hcmtldEFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBNYXJrZXRBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBGaW5kcyBBbXBob3JhIHVzaW5nIGEgZnV6enkgc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBBIHN0cmluZyBhcyBhIHNlYXJjaCB0ZXJtLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3RvcF0gSG93IG1hbnkgcmVzdWx0cyB0byByZXR1cm4uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gSG93IG1hbnkgcGFnZXMgKGluIG11bHRpcGxlcyBvZiB0b3ApIHRvIHNraXAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBtYXJrZXRGaW5kKHF1ZXJ5Pzogc3RyaW5nLCB0b3A/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXJrZXRBcGlGcChjb25maWd1cmF0aW9uKS5tYXJrZXRGaW5kKHF1ZXJ5LCB0b3AsIHNraXAsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRXhlY3V0ZXMgYSBmdXp6eSBsb2NhdGlvbiBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIFNlYXJjaCBUZXh0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXJrZXRBcGlGcChjb25maWd1cmF0aW9uKS5tYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgTWFya2V0QXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtldEFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEZpbmRzIEFtcGhvcmEgdXNpbmcgYSBmdXp6eSBzZWFyY2guXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3RvcF0gSG93IG1hbnkgcmVzdWx0cyB0byByZXR1cm4uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBIb3cgbWFueSBwYWdlcyAoaW4gbXVsdGlwbGVzIG9mIHRvcCkgdG8gc2tpcC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgTWFya2V0QXBpXG4gICAgICovXG4gICAgcHVibGljIG1hcmtldEZpbmQocXVlcnk/OiBzdHJpbmcsIHRvcD86IG51bWJlciwgc2tpcD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gTWFya2V0QXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5tYXJrZXRGaW5kKHF1ZXJ5LCB0b3AsIHNraXAsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIFNlYXJjaCBUZXh0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBNYXJrZXRBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE1hcmtldEFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikubWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudEdldFBsYW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjY291bnRHZXRQbGFuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0FjY291bnQvUGxhbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBhY2NvdW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudFJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjY291bnRSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0FjY291bnRgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnb3JnYW5pc2F0aW9uJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChvcmdhbmlzYXRpb24gPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignb3JnYW5pc2F0aW9uJywnUmVxdWlyZWQgcGFyYW1ldGVyIG9yZ2FuaXNhdGlvbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNDcmVhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbiAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KG9yZ2FuaXNhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3JnYW5pc2F0aW9uIDoge30pIDogKG9yZ2FuaXNhdGlvbiB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0RlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc0RlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGludml0YXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9JbnZpdGF0aW9uc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9UZXJtc09mVXNlYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gT3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uLiBBbGwgZmllbGRzIGFyZSB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdvcmdhbmlzYXRpb24nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG9yZ2FuaXNhdGlvbiA9PT0gbnVsbCB8fCBvcmdhbmlzYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdvcmdhbmlzYXRpb24nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JnYW5pc2F0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc1VwZGF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBvcmdhbmlzYXRpb24gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShvcmdhbmlzYXRpb24gIT09IHVuZGVmaW5lZCA/IG9yZ2FuaXNhdGlvbiA6IHt9KSA6IChvcmdhbmlzYXRpb24gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIE9yZ2FuaXNhdGlvbnNBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgT3JnYW5pc2F0aW9uc0FwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudEdldFBsYW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UGxhbkluZm9ybWF0aW9uPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY2NvdW50R2V0UGxhbihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFjY291bnQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjY291bnRSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgT3JnYW5pc2F0aW9uLiBUaGlzIHdpbGwgYXNzaWduIHRoZSBsb2dnZWQgaW4gdXNlciB0byB0aGUgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uIG9mIHRoZSBuZXcgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8T3JnYW5pc2F0aW9uPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8T3JnYW5pc2F0aW9uPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgaW52aXRhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEludml0YXRpb24+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8VGVybXNPZlVzZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBPcmdhbmlzYXRpb24gSW5mb3JtYXRpb24uIEFsbCBmaWVsZHMgYXJlIHVwZGF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVXBkYXRlKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQsIG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIE9yZ2FuaXNhdGlvbnNBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgT3JnYW5pc2F0aW9uc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudEdldFBsYW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5hY2NvdW50R2V0UGxhbihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikuYWNjb3VudFJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gSW5mb3JtYXRpb24gb2YgdGhlIG5ldyBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0RlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGRldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBpbnZpdGF0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gT3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uLiBBbGwgZmllbGRzIGFyZSB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVXBkYXRlKGlkLCBvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBPcmdhbmlzYXRpb25zQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIE9yZ2FuaXNhdGlvbnNBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjY291bnRHZXRQbGFuKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjY291bnRSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjY291bnRSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uIG9mIHRoZSBuZXcgT3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0RlbGV0ZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGRldGFpbHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGludml0YXRpb25zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIG9mIFVzZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zVXBkYXRlKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVXBkYXRlKGlkLCBvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogUGVybWlzc2lvbkFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFRoZSBwZXJtaXNzaW9uIGxldmVsIGZvciBlYWNoIG9iamVjdCBpZCBpbiB0aGUgcmVxdWVzdC5cbiAgICAgICAgICogQHBhcmFtIHtQZXJtaXNzaW9uc1JlcXVlc3R9IHBlcm1pc3Npb25zUmVxdWVzdCBBIHJlcXVlc3Qgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2YgaWRzIHRvIGNoZWNrLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcGVybWlzc2lvbkdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zUmVxdWVzdDogUGVybWlzc2lvbnNSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3Blcm1pc3Npb25zUmVxdWVzdCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocGVybWlzc2lvbnNSZXF1ZXN0ID09PSBudWxsIHx8IHBlcm1pc3Npb25zUmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3Blcm1pc3Npb25zUmVxdWVzdCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBwZXJtaXNzaW9uc1JlcXVlc3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBwZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9wZXJtaXNzaW9uc2A7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBwZXJtaXNzaW9uc1JlcXVlc3QgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShwZXJtaXNzaW9uc1JlcXVlc3QgIT09IHVuZGVmaW5lZCA/IHBlcm1pc3Npb25zUmVxdWVzdCA6IHt9KSA6IChwZXJtaXNzaW9uc1JlcXVlc3QgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFBlcm1pc3Npb25BcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgUGVybWlzc2lvbkFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFRoZSBwZXJtaXNzaW9uIGxldmVsIGZvciBlYWNoIG9iamVjdCBpZCBpbiB0aGUgcmVxdWVzdC5cbiAgICAgICAgICogQHBhcmFtIHtQZXJtaXNzaW9uc1JlcXVlc3R9IHBlcm1pc3Npb25zUmVxdWVzdCBBIHJlcXVlc3Qgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxpc3Qgb2YgaWRzIHRvIGNoZWNrLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcGVybWlzc2lvbkdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zUmVxdWVzdDogUGVybWlzc2lvbnNSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxQZXJtaXNzaW9uc1Jlc3BvbnNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFBlcm1pc3Npb25BcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5wZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogUGVybWlzc2lvbkFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVGhlIHBlcm1pc3Npb24gbGV2ZWwgZm9yIGVhY2ggb2JqZWN0IGlkIGluIHRoZSByZXF1ZXN0LlxuICAgICAgICAgKiBAcGFyYW0ge1Blcm1pc3Npb25zUmVxdWVzdH0gcGVybWlzc2lvbnNSZXF1ZXN0IEEgcmVxdWVzdCBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBpZHMgdG8gY2hlY2suXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0OiBQZXJtaXNzaW9uc1JlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBQZXJtaXNzaW9uQXBpRnAoY29uZmlndXJhdGlvbikucGVybWlzc2lvbkdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBQZXJtaXNzaW9uQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFBlcm1pc3Npb25BcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbkFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFRoZSBwZXJtaXNzaW9uIGxldmVsIGZvciBlYWNoIG9iamVjdCBpZCBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1Blcm1pc3Npb25zUmVxdWVzdH0gcGVybWlzc2lvbnNSZXF1ZXN0IEEgcmVxdWVzdCBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBpZHMgdG8gY2hlY2suXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFBlcm1pc3Npb25BcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgcGVybWlzc2lvbkdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zUmVxdWVzdDogUGVybWlzc2lvbnNSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBQZXJtaXNzaW9uQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5wZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdlbmVyYWwgc2VhcmNoIHRlcm0gZm9yIHRleHQgY29tcGFyaXNvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsb25dIExvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3NlYXJjaC9hbXBob3JhZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRlcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3Rlcm0nXSA9IHRlcm07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYWJlbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2xhYmVscyddID0gbGFiZWxzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydsYXQnXSA9IGxhdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnbG9uJ10gPSBsb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydkaXN0J10gPSBkaXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5TG9jYXRpb25gO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2xhdCddID0gbGF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydsb24nXSA9IGxvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2Rpc3QnXSA9IGRpc3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5T3JnYW5pc2F0aW9uYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JnSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ29yZ0lkJ10gPSBvcmdJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL29yZ2FuaXNhdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0ZXJtJ10gPSB0ZXJtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gR2VuZXJhbCBzZWFyY2ggdGVybSBmb3IgdGV4dCBjb21wYXJpc29uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsc10gQ29tbWEgc2VwYXJhdGVkIGxhYmVscyB0aGF0IG11c3QgYmUgaW5jbHVkZWQgaW4gcmVzdWx0cy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gY2VudGVyIG9mIHNlYXJjaCBhcmVhIChkZXNjcmliaW5nIGEgY2lyY2xlKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0/OiBzdHJpbmcsIGxhYmVscz86IHN0cmluZywgbGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWUodGVybSwgbGFiZWxzLCBsYXQsIGxvbiwgZGlzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdCwgbG9uLCBkaXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBTZWFyY2ggVGVybS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8T3JnYW5pc2F0aW9uPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZWFyY2hBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdlbmVyYWwgc2VhcmNoIHRlcm0gZm9yIHRleHQgY29tcGFyaXNvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsb25dIExvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWUodGVybSwgbGFiZWxzLCBsYXQsIGxvbiwgZGlzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlIGluIGFuIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmdJZF0gT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZD86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaEFwaUZwKGNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogU2VhcmNoQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFNlYXJjaEFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBHZW5lcmFsIHNlYXJjaCB0ZXJtIGZvciB0ZXh0IGNvbXBhcmlzb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbG9uXSBMb25naXR1ZGUgKGNlbnRlciBvZiBzZWFyY2ggYXJlYSkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFNlYXJjaEFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0sIGxhYmVscywgbGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBieSBsb2N0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlzdF0gRGlzdGFuY2UgZnJvbSBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlIGluIHdoaWNoIHRvIHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgU2VhcmNoQXBpXG4gICAgICovXG4gICAgcHVibGljIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlMb2NhdGlvbihsYXQ/OiBudW1iZXIsIGxvbj86IG51bWJlciwgZGlzdD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmdJZF0gT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBTZWFyY2hBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZD86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5T3JnYW5pc2F0aW9uKG9yZ0lkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIFNlYXJjaCBUZXJtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBTZWFyY2hBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBUZXJtc09mVXNlQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQWNjZXB0cyBhIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBUZXJtcyBvZiBVc2UgaWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlQWNjZXB0KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0ZXJtc09mVXNlQWNjZXB0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZS97aWR9L0FjY2VwdHNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlVGVybXNPZlVzZX0gY3JlYXRlVGVybXNPZlVzZSBUaGUgdGVybXMgb2YgdXNlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVUZXJtc09mVXNlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVUZXJtc09mVXNlID09PSBudWxsIHx8IGNyZWF0ZVRlcm1zT2ZVc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVUZXJtc09mVXNlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZVRlcm1zT2ZVc2Ugd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0ZXJtc09mVXNlQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVUZXJtc09mVXNlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlVGVybXNPZlVzZSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlVGVybXNPZlVzZSA6IHt9KSA6IChjcmVhdGVUZXJtc09mVXNlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9UZXJtc09mVXNlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlTGlzdCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL1Rlcm1zT2ZVc2VgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUZXJtc09mVXNlQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRlcm1zT2ZVc2VBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBY2NlcHRzIGEgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIFRlcm1zIG9mIFVzZSBpZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VBY2NlcHQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQWNjZXB0KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBUZXJtcyBvZiBVc2Ugb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZVRlcm1zT2ZVc2V9IGNyZWF0ZVRlcm1zT2ZVc2UgVGhlIHRlcm1zIG9mIHVzZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2U6IENyZWF0ZVRlcm1zT2ZVc2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFRlcm1zT2ZVc2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSB0ZXJtcyBvZiB1c2UgaWQgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8VGVybXNPZlVzZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VMaXN0KHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxUZXJtc09mVXNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFRlcm1zT2ZVc2VBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGVybXNPZlVzZUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFjY2VwdHMgYSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUFjY2VwdChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VBY2NlcHQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlVGVybXNPZlVzZX0gY3JlYXRlVGVybXNPZlVzZSBUaGUgdGVybXMgb2YgdXNlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2UsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VMaXN0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAoY29uZmlndXJhdGlvbikudGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAoY29uZmlndXJhdGlvbikudGVybXNPZlVzZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogVGVybXNPZlVzZUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXJtc09mVXNlQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFRlcm1zT2ZVc2VBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBBY2NlcHRzIGEgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQXBpXG4gICAgICovXG4gICAgcHVibGljIHRlcm1zT2ZVc2VBY2NlcHQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUFjY2VwdChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtDcmVhdGVUZXJtc09mVXNlfSBjcmVhdGVUZXJtc09mVXNlIFRoZSB0ZXJtcyBvZiB1c2UgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQXBpXG4gICAgICovXG4gICAgcHVibGljIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUNyZWF0ZShjcmVhdGVUZXJtc09mVXNlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHRlcm1zIG9mIHVzZSBpZCB0byBkZWxldGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0OiBRdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncXVlcnlSZXF1ZXN0JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChxdWVyeVJlcXVlc3QgPT09IG51bGwgfHwgcXVlcnlSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncXVlcnlSZXF1ZXN0JywnUmVxdWlyZWQgcGFyYW1ldGVyIHF1ZXJ5UmVxdWVzdCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS90aW1lc2VyaWVzL3F1ZXJ5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHF1ZXJ5UmVxdWVzdCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHF1ZXJ5UmVxdWVzdCAhPT0gdW5kZWZpbmVkID8gcXVlcnlSZXF1ZXN0IDoge30pIDogKHF1ZXJ5UmVxdWVzdCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVGltZVNlcmllc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lU2VyaWVzQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0OiBRdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFF1ZXJ5UmVzdWx0UGFnZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBUaW1lU2VyaWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikudGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRpbWVTZXJpZXNBcGlGcChjb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFRpbWVTZXJpZXNBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgVGltZVNlcmllc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGltZVNlcmllc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUaW1lU2VyaWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IFVzZXIuIFJldHVybnMgdGhlIHBhc3N3b3JkLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmFVc2VyfSBjcmVhdGVBbXBob3JhVXNlciBVc2VyIHBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQW1waG9yYVVzZXInIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFtcGhvcmFVc2VyID09PSBudWxsIHx8IGNyZWF0ZUFtcGhvcmFVc2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQW1waG9yYVVzZXInLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQW1waG9yYVVzZXIgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1c2Vyc0NyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3VzZXJzYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGNyZWF0ZUFtcGhvcmFVc2VyICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlQW1waG9yYVVzZXIgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZUFtcGhvcmFVc2VyIDoge30pIDogKGNyZWF0ZUFtcGhvcmFVc2VyIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvdXNlcnMvc2VsZmA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYVVzZXJ9IGNyZWF0ZUFtcGhvcmFVc2VyIFVzZXIgcGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QW1waG9yYVVzZXI+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVXNlcnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QW1waG9yYVVzZXI+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVXNlcnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS51c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYVVzZXJ9IGNyZWF0ZUFtcGhvcmFVc2VyIFVzZXIgcGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAoY29uZmlndXJhdGlvbikudXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2Vyc0FwaUZwKGNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBVc2Vyc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBVc2Vyc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBVc2Vyc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFVzZXJzQXBpXG4gICAgICovXG4gICAgcHVibGljIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVXNlcnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3ZlcnNpb25gO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBWZXJzaW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVmVyc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBWZXJzaW9uQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVmVyc2lvbkFwaUZwKGNvbmZpZ3VyYXRpb24pLnZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFZlcnNpb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmVyc2lvbkFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uR2V0Q3VycmVudFZlcnNpb24oeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVmVyc2lvbkFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbiJdfQ==