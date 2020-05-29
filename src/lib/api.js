"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionApi = exports.VersionApiFactory = exports.VersionApiFp = exports.VersionApiAxiosParamCreator = exports.UsersApi = exports.UsersApiFactory = exports.UsersApiFp = exports.UsersApiAxiosParamCreator = exports.TimeSeriesApi = exports.TimeSeriesApiFactory = exports.TimeSeriesApiFp = exports.TimeSeriesApiAxiosParamCreator = exports.TermsOfUseApi = exports.TermsOfUseApiFactory = exports.TermsOfUseApiFp = exports.TermsOfUseApiAxiosParamCreator = exports.SearchApi = exports.SearchApiFactory = exports.SearchApiFp = exports.SearchApiAxiosParamCreator = exports.OrganisationsApi = exports.OrganisationsApiFactory = exports.OrganisationsApiFp = exports.OrganisationsApiAxiosParamCreator = exports.MarketApi = exports.MarketApiFactory = exports.MarketApiFp = exports.MarketApiAxiosParamCreator = exports.IdentityApi = exports.IdentityApiFactory = exports.IdentityApiFp = exports.IdentityApiAxiosParamCreator = exports.AuthenticationApi = exports.AuthenticationApiFactory = exports.AuthenticationApiFp = exports.AuthenticationApiAxiosParamCreator = exports.AmphoraeApi = exports.AmphoraeApiFactory = exports.AmphoraeApiFp = exports.AmphoraeApiAxiosParamCreator = exports.ActivitiesApi = exports.ActivitiesApiFactory = exports.ActivitiesApiFp = exports.ActivitiesApiAxiosParamCreator = exports.PlanTypes = void 0;

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
 * SearchApi - axios parameter creator
 * @export
 */


exports.OrganisationsApi = OrganisationsApi;

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

var SearchApi = /*#__PURE__*/function (_BaseAPI7) {
  _inherits(SearchApi, _BaseAPI7);

  var _super7 = _createSuper(SearchApi);

  function SearchApi() {
    _classCallCheck(this, SearchApi);

    return _super7.apply(this, arguments);
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

var TermsOfUseApi = /*#__PURE__*/function (_BaseAPI8) {
  _inherits(TermsOfUseApi, _BaseAPI8);

  var _super8 = _createSuper(TermsOfUseApi);

  function TermsOfUseApi() {
    _classCallCheck(this, TermsOfUseApi);

    return _super8.apply(this, arguments);
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

var TimeSeriesApi = /*#__PURE__*/function (_BaseAPI9) {
  _inherits(TimeSeriesApi, _BaseAPI9);

  var _super9 = _createSuper(TimeSeriesApi);

  function TimeSeriesApi() {
    _classCallCheck(this, TimeSeriesApi);

    return _super9.apply(this, arguments);
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

var UsersApi = /*#__PURE__*/function (_BaseAPI10) {
  _inherits(UsersApi, _BaseAPI10);

  var _super10 = _createSuper(UsersApi);

  function UsersApi() {
    _classCallCheck(this, UsersApi);

    return _super10.apply(this, arguments);
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

var VersionApi = /*#__PURE__*/function (_BaseAPI11) {
  _inherits(VersionApi, _BaseAPI11);

  var _super11 = _createSuper(VersionApi);

  function VersionApi() {
    _classCallCheck(this, VersionApi);

    return _super11.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nkay9hcGkudHMiXSwibmFtZXMiOlsiUGxhblR5cGVzIiwiQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwiY29uZmlndXJhdGlvbiIsImFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eSIsImNyZWF0ZUFjdGl2aXR5IiwieEFtcGhvcmFkYXRhVmVyc2lvbiIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJSZXF1aXJlZEVycm9yIiwibG9jYWxWYXJQYXRoIiwibG9jYWxWYXJVcmxPYmoiLCJnbG9iYWxJbXBvcnRVcmwiLCJwYXJzZSIsImJhc2VPcHRpb25zIiwibG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImxvY2FsVmFySGVhZGVyUGFyYW1ldGVyIiwibG9jYWxWYXJRdWVyeVBhcmFtZXRlciIsImFwaUtleSIsImxvY2FsVmFyQXBpS2V5VmFsdWUiLCJTdHJpbmciLCJxdWVyeSIsInNlYXJjaCIsImhlYWRlcnMiLCJuZWVkc1NlcmlhbGl6YXRpb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImZvcm1hdCIsImFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eSIsImlkIiwicmVwbGFjZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImFjdGl2aXRpZXNSZWFkQWN0aXZpdHkiLCJhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYSIsInJ1bklkIiwiYW1waG9yYUlkIiwiYW1waG9yYVJlZmVyZW5jZSIsImFjdGl2aXRpZXNTdGFydFJ1biIsImFjdGl2aXRpZXNVcGRhdGVSdW4iLCJ1cGRhdGVSdW4iLCJBY3Rpdml0aWVzQXBpRnAiLCJsb2NhbFZhckF4aW9zQXJncyIsImF4aW9zIiwiZ2xvYmFsQXhpb3MiLCJiYXNlUGF0aCIsIkJBU0VfUEFUSCIsImF4aW9zUmVxdWVzdEFyZ3MiLCJyZXF1ZXN0IiwiQWN0aXZpdGllc0FwaUZhY3RvcnkiLCJBY3Rpdml0aWVzQXBpIiwiQmFzZUFQSSIsIkFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJhbXBob3JhUXVhbGl0eUdldCIsImFtcGhvcmFRdWFsaXR5U2V0IiwicXVhbGl0eSIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwiLCJhbGxBY2Nlc3NSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbiIsIm9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlciIsInVzZXJBY2Nlc3NSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZSIsInJ1bGVJZCIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyIsImFtcGhvcmFlQ3JlYXRlIiwiY3JlYXRlQW1waG9yYSIsImFtcGhvcmFlRGVsZXRlIiwiYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0IiwiZmlsZSIsImFtcGhvcmFlRmlsZXNEZWxldGVGaWxlIiwiYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZSIsImFtcGhvcmFlRmlsZXNMaXN0RmlsZXMiLCJvcmRlckJ5IiwiYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhIiwicmVxdWVzdEJvZHkiLCJhbXBob3JhZUxpc3QiLCJzY29wZSIsImFjY2Vzc1R5cGUiLCJhbXBob3JhZVJlYWQiLCJhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwiLCJzaWduYWwiLCJhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwiLCJwcm9wZXJ0eSIsImFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMiLCJhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwiLCJzaWduYWxJZCIsInVwZGF0ZVNpZ25hbCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaCIsImFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMiIsImFtcGhvcmFlVXBkYXRlIiwiZGV0YWlsZWRBbXBob3JhIiwicHVyY2hhc2VzUHVyY2hhc2UiLCJBbXBob3JhZUFwaUZwIiwiQW1waG9yYWVBcGlGYWN0b3J5IiwiQW1waG9yYWVBcGkiLCJBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4iLCJsb2dpblJlcXVlc3QiLCJBdXRoZW50aWNhdGlvbkFwaUZwIiwiQXV0aGVudGljYXRpb25BcGlGYWN0b3J5IiwiQXV0aGVudGljYXRpb25BcGkiLCJJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiaWRlbnRpdHlHZXQiLCJJZGVudGl0eUFwaUZwIiwiSWRlbnRpdHlBcGlGYWN0b3J5IiwiSWRlbnRpdHlBcGkiLCJNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvciIsIm1hcmtldEZpbmQiLCJ0b3AiLCJza2lwIiwibWFya2V0TG9va3VwTG9jYXRpb24iLCJNYXJrZXRBcGlGcCIsIk1hcmtldEFwaUZhY3RvcnkiLCJNYXJrZXRBcGkiLCJPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJhY2NvdW50R2V0UGxhbiIsImFjY291bnRSZWFkIiwib3JnYW5pc2F0aW9uc0NyZWF0ZSIsIm9yZ2FuaXNhdGlvbiIsIm9yZ2FuaXNhdGlvbnNEZWxldGUiLCJvcmdhbmlzYXRpb25zUmVhZCIsIm9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMiLCJvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQiLCJvcmdhbmlzYXRpb25zVXBkYXRlIiwiT3JnYW5pc2F0aW9uc0FwaUZwIiwiT3JnYW5pc2F0aW9uc0FwaUZhY3RvcnkiLCJPcmdhbmlzYXRpb25zQXBpIiwiU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJzZWFyY2hTZWFyY2hBbXBob3JhZSIsInRlcm0iLCJsYWJlbHMiLCJsYXQiLCJsb24iLCJkaXN0Iiwic2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uIiwic2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbiIsIm9yZ0lkIiwic2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyIsIlNlYXJjaEFwaUZwIiwiU2VhcmNoQXBpRmFjdG9yeSIsIlNlYXJjaEFwaSIsIlRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvciIsInRlcm1zT2ZVc2VBY2NlcHQiLCJ0ZXJtc09mVXNlQ3JlYXRlIiwiY3JlYXRlVGVybXNPZlVzZSIsInRlcm1zT2ZVc2VEZWxldGUiLCJ0ZXJtc09mVXNlTGlzdCIsInRlcm1zT2ZVc2VSZWFkIiwiVGVybXNPZlVzZUFwaUZwIiwiVGVybXNPZlVzZUFwaUZhY3RvcnkiLCJUZXJtc09mVXNlQXBpIiwiVGltZVNlcmllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwidGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyIsInF1ZXJ5UmVxdWVzdCIsIlRpbWVTZXJpZXNBcGlGcCIsIlRpbWVTZXJpZXNBcGlGYWN0b3J5IiwiVGltZVNlcmllc0FwaSIsIlVzZXJzQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJ1c2Vyc0NyZWF0ZSIsImNyZWF0ZUFtcGhvcmFVc2VyIiwidXNlcnNSZWFkU2VsZiIsIlVzZXJzQXBpRnAiLCJVc2Vyc0FwaUZhY3RvcnkiLCJVc2Vyc0FwaSIsIlZlcnNpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciIsInZlcnNpb25HZXRDdXJyZW50VmVyc2lvbiIsIlZlcnNpb25BcGlGcCIsIlZlcnNpb25BcGlGYWN0b3J5IiwiVmVyc2lvbkFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWNBOztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwMENBOzs7OztJQUtZQSxTO0FBTVo7Ozs7Ozs7O1dBTllBLFM7QUFBQUEsRUFBQUEsUyxDQUFBQSxTO0FBQUFBLEVBQUFBLFMsQ0FBQUEsUztBQUFBQSxFQUFBQSxTLENB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Q0MsUUFBaUMsdUVBQWRDLGVBQWM7O0FBQ3pFLFlBQU1DLGdCQUFnQixxQkFBT0wsaUJBQWlCLENBQUNyQyxPQUF6QjtBQUFrQ3NCLFVBQUFBLEdBQUcsRUFBRWtCLFFBQVEsR0FBR0gsaUJBQWlCLENBQUNmO0FBQXBFLFVBQXRCOztBQUNBLGVBQU9nQixLQUFLLENBQUNLLE9BQU4sQ0FBY0QsZ0JBQWQsQ0FBUDtBQUNILE9BSEQ7QUFJSDtBQWRFLEdBQVA7QUFnQkgsQ0FqQk07QUFtQlA7Ozs7Ozs7O0FBSU8sSUFBTTZILGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBVTNLLGFBQVYsRUFBeUM0QyxRQUF6QyxFQUE0REYsS0FBNUQsRUFBbUY7QUFDaEgsU0FBTztBQUNIOzs7Ozs7O0FBT0ErSCxJQUFBQSx3QkFSRyxvQ0FRc0J0SyxtQkFSdEIsRUFRb0RDLE9BUnBELEVBUW1FO0FBQ2xFLGFBQU9zSyxZQUFZLENBQUMxSyxhQUFELENBQVosQ0FBNEJ5Syx3QkFBNUIsQ0FBcUR0SyxtQkFBckQsRUFBMEVDLE9BQTFFLEVBQW1Gc0MsS0FBbkYsRUFBMEZFLFFBQTFGLENBQVA7QUFDSDtBQVZFLEdBQVA7QUFZSCxDQWJNO0FBZVA7Ozs7Ozs7Ozs7SUFNYWdJLFU7Ozs7Ozs7Ozs7Ozs7O0FBQ1Q7Ozs7Ozs7OzZDQVFnQ3pLLG1CLEVBQThCQyxPLEVBQWU7QUFDekUsYUFBT3NLLFlBQVksQ0FBQyxLQUFLMUssYUFBTixDQUFaLENBQWlDeUssd0JBQWpDLENBQTBEdEssbUJBQTFELEVBQStFQyxPQUEvRSxFQUF3RixLQUFLc0MsS0FBN0YsRUFBb0csS0FBS0UsUUFBekcsQ0FBUDtBQUNIOzs7O0VBWDJCTSxhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGVcbi8qKlxuICogQW1waG9yYSBEYXRhXG4gKiAgICAgICAgICAgICAgQ29ubmVjdCBpbmZvcm1hdGlvbiBpbiByZWFsIHRpbWUgd2l0aCBBbXBob3JhIERhdGEuICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGF0IGh0dHBzOi8vZG9jcy5hbXBob3JhZGF0YS5jb21cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMC4xMC40XG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBnbG9iYWxJbXBvcnRVcmwgZnJvbSAndXJsJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGdsb2JhbEF4aW9zLCB7IEF4aW9zUHJvbWlzZSwgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcbi8vIFNvbWUgaW1wb3J0cyBub3QgdXNlZCBkZXBlbmRpbmcgb24gdGVtcGxhdGUgY29uZGl0aW9uc1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMsIFJlcXVlc3RBcmdzLCBCYXNlQVBJLCBSZXF1aXJlZEVycm9yIH0gZnJvbSAnLi9iYXNlJztcblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWNjZXNzUnVsZUR0b0Jhc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NSdWxlRHRvQmFzZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzUnVsZUR0b0Jhc2VcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzUnVsZUR0b0Jhc2VcbiAgICAgKi9cbiAgICBhbGxvd09yRGVueT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzUnVsZUR0b0Jhc2VcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjY291bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBY2NvdW50XG4gICAgICovXG4gICAgYmFsYW5jZT86IG51bWJlcjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjdGl2aXR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5XG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eVxuICAgICAqL1xuICAgIGlzRGVsZXRlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8UnVuPn1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlcbiAgICAgKi9cbiAgICBydW5zPzogQXJyYXk8UnVuPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY3Rpdml0eUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZpdHlBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlBbGxPZlxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxSdW4+fVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eUFsbE9mXG4gICAgICovXG4gICAgcnVucz86IEFycmF5PFJ1bj4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWRkcmVzc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBzdHJlZXROdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBzdHJlZXROYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgbXVuaWNpcGFsaXR5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBtdW5pY2lwYWxpdHk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5U2Vjb25kYXJ5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5U3ViZGl2aXNpb24/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBwb3N0YWxDb2RlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeUNvZGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgY291bnRyeUNvZGVJc28zPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgZnJlZWZvcm1BZGRyZXNzPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZGRyZXNzXG4gICAgICovXG4gICAgbG9jYWxOYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFnZ3JlZ2F0ZVNlcmllc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZVNlcmllcyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIHRpbWVTZXJpZXNJZD86IEFycmF5PG9iamVjdD4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlVGltZVJhbmdlfVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBzZWFyY2hTcGFuPzogRGF0ZVRpbWVSYW5nZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBpbnRlcnZhbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgcHJvamVjdGVkVmFyaWFibGVzPzogQXJyYXk8c3RyaW5nPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogVmFyaWFibGU7IH19XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIGlubGluZVZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogVmFyaWFibGU7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWdncmVnYXRlVmFyaWFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlVmFyaWFibGVcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gICAgICovXG4gICAga2luZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVZhcmlhYmxlXG4gICAgICovXG4gICAgYWdncmVnYXRpb24/OiBUc3ggfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWxsQWNjZXNzUnVsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFsbEFjY2Vzc1J1bGUgZXh0ZW5kcyBBY2Nlc3NSdWxlRHRvQmFzZSB7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBbXBob3JhUmVmZXJlbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1waG9yYVJlZmVyZW5jZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVJlZmVyZW5jZVxuICAgICAqL1xuICAgIGFtcGhvcmFJZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVJlZmVyZW5jZVxuICAgICAqL1xuICAgIGZpbGVzQ29uc3VtZWQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFSZWZlcmVuY2VcbiAgICAgKi9cbiAgICBmaWxlc1Byb2R1Y2VkPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhUmVmZXJlbmNlXG4gICAgICovXG4gICAgc2lnbmFsc0NvbnN1bWVkPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhUmVmZXJlbmNlXG4gICAgICovXG4gICAgc2lnbmFsc1Byb2R1Y2VkPzogbnVtYmVyIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFtcGhvcmFVc2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1waG9yYVVzZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgYWJvdXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZnVsbE5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGVtYWlsPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlclxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFtcGhvcmFVc2VyQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbXBob3JhVXNlckFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGVtYWlsPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBdHRyaWJ1dGVTdG9yZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJpYnV0ZVN0b3JlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19XG4gICAgICogQG1lbWJlcm9mIEF0dHJpYnV0ZVN0b3JlXG4gICAgICovXG4gICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQmFzZUFtcGhvcmFVc2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUFtcGhvcmFVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBwaG9uZU51bWJlcj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgYWJvdXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgdXNlck5hbWU6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEJhc2ljQW1waG9yYVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljQW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBUaGUgYmFzaWMgbWV0YWRhdGEgb2YgYW4gQW1waG9yYS5cbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQmFzaWNBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FtcGhvcmFBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbGFiZWxzPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENhdGVnb3J5U2V0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlTZXQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIENhdGVnb3J5U2V0XG4gICAgICovXG4gICAgaWQ/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDbGFzc2lmaWNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzaWZpY2F0aW9uIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDbGFzc2lmaWNhdGlvblxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxOYW1lPn1cbiAgICAgKiBAbWVtYmVyb2YgQ2xhc3NpZmljYXRpb25cbiAgICAgKi9cbiAgICBuYW1lcz86IEFycmF5PE5hbWU+O1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQWN0aXZpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBY3Rpdml0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQWN0aXZpdHlcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBjcmVhdGVkRGF0ZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGxhYmVscz86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIGxvbj86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIHRlcm1zT2ZVc2VJZD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHRlcm1zT2ZVc2VJZD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVBbXBob3JhVXNlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGFib3V0Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIGNvbmZpcm1QYXNzd29yZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBlbWFpbDogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYVVzZXJBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBjb25maXJtUGFzc3dvcmQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBlbWFpbDogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlVGVybXNPZlVzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVRlcm1zT2ZVc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZVRlcm1zT2ZVc2VcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlVGVybXNPZlVzZVxuICAgICAqL1xuICAgIGNvbnRlbnRzOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEYXRlVGltZVJhbmdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERhdGVUaW1lUmFuZ2VcbiAgICAgKi9cbiAgICBmcm9tPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRGF0ZVRpbWVSYW5nZVxuICAgICAqL1xuICAgIHRvPzogRGF0ZTtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIHRlcm1zT2ZVc2VJZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogQXR0cmlidXRlU3RvcmU7IH19XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGZpbGVBdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIHB1cmNoYXNlQ291bnQ/OiBudW1iZXIgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRGV0YWlsZWRBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmFBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBwdXJjaGFzZUNvdW50PzogbnVtYmVyIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVkaXRBbXBob3JhXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdEFtcGhvcmEge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGlzRGVsZXRlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgbGFiZWxzPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIHRlcm1zT2ZVc2VJZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogQXR0cmlidXRlU3RvcmU7IH19XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgZmlsZUF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IEF0dHJpYnV0ZVN0b3JlOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVkaXRBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0QW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIGZpbGVBdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBBdHRyaWJ1dGVTdG9yZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFbnRpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnRpdHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVudGl0eVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEVudGl0eVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBFbnRyeVBvaW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlQb2ludCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRW50cnlQb2ludFxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb3NpdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRW50cnlQb2ludFxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogUG9zaXRpb24gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRXZlbnRQcm9wZXJ0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50UHJvcGVydHkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEV2ZW50UHJvcGVydHlcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFdmVudFByb3BlcnR5XG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBGdXp6eVNlYXJjaFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnV6enlTZWFyY2hSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1N1bW1hcnl9XG4gICAgICogQG1lbWJlcm9mIEZ1enp5U2VhcmNoUmVzcG9uc2VcbiAgICAgKi9cbiAgICBzdW1tYXJ5PzogU3VtbWFyeSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlc3VsdD59XG4gICAgICogQG1lbWJlcm9mIEZ1enp5U2VhcmNoUmVzcG9uc2VcbiAgICAgKi9cbiAgICByZXN1bHRzPzogQXJyYXk8UmVzdWx0Pjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEdldEV2ZW50c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdldEV2ZW50cyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PG9iamVjdD59XG4gICAgICogQG1lbWJlcm9mIEdldEV2ZW50c1xuICAgICAqL1xuICAgIHRpbWVTZXJpZXNJZD86IEFycmF5PG9iamVjdD4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlVGltZVJhbmdlfVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBzZWFyY2hTcGFuPzogRGF0ZVRpbWVSYW5nZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgcHJvamVjdGVkUHJvcGVydGllcz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgR2V0U2VyaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0U2VyaWVzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8b2JqZWN0Pn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgdGltZVNlcmllc0lkPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGVUaW1lUmFuZ2V9XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIHNlYXJjaFNwYW4/OiBEYXRlVGltZVJhbmdlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBwcm9qZWN0ZWRWYXJpYWJsZXM/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgaW5saW5lVmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBJbnZpdGF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW52aXRhdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgSW52aXRhdGlvblxuICAgICAqL1xuICAgIHRhcmdldEVtYWlsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgSW52aXRhdGlvblxuICAgICAqL1xuICAgIHRhcmdldE9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgSW52aXRhdGlvblxuICAgICAqL1xuICAgIGlzQ2xhaW1lZD86IGJvb2xlYW4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlcXVlc3RcbiAgICAgKi9cbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVxdWVzdFxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBOYW1lXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTmFtZVxuICAgICAqL1xuICAgIG5hbWVMb2NhbGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE5hbWVcbiAgICAgKi9cbiAgICBuYW1lTmFtZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBOdW1lcmljVmFyaWFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOdW1lcmljVmFyaWFibGUge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIE51bWVyaWNWYXJpYWJsZVxuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAga2luZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIE51bWVyaWNWYXJpYWJsZVxuICAgICAqL1xuICAgIHZhbHVlPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBOdW1lcmljVmFyaWFibGVcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGlvbj86IFRzeCB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcmdhbmlzYXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvblxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvblxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvblxuICAgICAqL1xuICAgIGFib3V0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgd2Vic2l0ZVVybDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvblxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIGFsbG93T3JEZW55Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZlxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25BbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGFib3V0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWxsT2ZcbiAgICAgKi9cbiAgICB3ZWJzaXRlVXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWxsT2ZcbiAgICAgKi9cbiAgICBhZGRyZXNzPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBhZ2VkUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdlZFJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQYWdlZFJlc3BvbnNlXG4gICAgICovXG4gICAgY29udGludWF0aW9uVG9rZW4/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGxhbkluZm9ybWF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxhbkluZm9ybWF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UGxhblR5cGVzfVxuICAgICAqIEBtZW1iZXJvZiBQbGFuSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwbGFuVHlwZT86IFBsYW5UeXBlcztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQbGFuSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBmcmllbmRseU5hbWU/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBlbnVtIFBsYW5UeXBlcyB7XG4gICAgTlVNQkVSXzAgPSAwLFxuICAgIE5VTUJFUl8xID0gMSxcbiAgICBOVU1CRVJfMiA9IDJcbn1cblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUG9pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9pIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQb2lcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQb2lcbiAgICAgKi9cbiAgICBwaG9uZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PENhdGVnb3J5U2V0Pn1cbiAgICAgKiBAbWVtYmVyb2YgUG9pXG4gICAgICovXG4gICAgY2F0ZWdvcnlTZXQ/OiBBcnJheTxDYXRlZ29yeVNldD47XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIGNhdGVnb3JpZXM/OiBBcnJheTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxDbGFzc2lmaWNhdGlvbj59XG4gICAgICogQG1lbWJlcm9mIFBvaVxuICAgICAqL1xuICAgIGNsYXNzaWZpY2F0aW9ucz86IEFycmF5PENsYXNzaWZpY2F0aW9uPjtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBvc2l0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFBvc2l0aW9uXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFBvc2l0aW9uXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvYmxlbURldGFpbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9ibGVtRGV0YWlscyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHN0YXR1cz86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBkZXRhaWw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgaW5zdGFuY2U/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX1cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBleHRlbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlcyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvcGVydHlWYWx1ZXNcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIHZhbHVlcz86IEFycmF5PG9iamVjdD4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsdWVzQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc0FsbE9mXG4gICAgICovXG4gICAgdmFsdWVzPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG59XG4vKipcbiAqIFF1YWxpdHkgbWV0cmljcyBmb3IgYW4gQW1waG9yYSwgYmV0d2VlbiAxIGFuZCA0LlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWFsaXR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVhbGl0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUXVhbGl0eVxuICAgICAqL1xuICAgIGFjY3VyYWN5PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBRdWFsaXR5XG4gICAgICovXG4gICAgY29tcGxldGVuZXNzPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBRdWFsaXR5XG4gICAgICovXG4gICAgZ3JhbnVsYXJpdHk/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFF1YWxpdHlcbiAgICAgKi9cbiAgICByZWxpYWJpbGl0eT86IG51bWJlciB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtHZXRFdmVudHN9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVxdWVzdFxuICAgICAqL1xuICAgIGdldEV2ZW50cz86IEdldEV2ZW50cyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0dldFNlcmllc31cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXF1ZXN0XG4gICAgICovXG4gICAgZ2V0U2VyaWVzPzogR2V0U2VyaWVzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QWdncmVnYXRlU2VyaWVzfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlcXVlc3RcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGVTZXJpZXM/OiBBZ2dyZWdhdGVTZXJpZXMgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VcbiAgICAgKi9cbiAgICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PERhdGU+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VcbiAgICAgKi9cbiAgICB0aW1lc3RhbXBzPzogQXJyYXk8RGF0ZT4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxQcm9wZXJ0eVZhbHVlcz59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIHByb3BlcnRpZXM/OiBBcnJheTxQcm9wZXJ0eVZhbHVlcz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PERhdGU+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICAgICAqL1xuICAgIHRpbWVzdGFtcHM/OiBBcnJheTxEYXRlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFByb3BlcnR5VmFsdWVzPn1cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXN1bHRQYWdlQWxsT2ZcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzPzogQXJyYXk8UHJvcGVydHlWYWx1ZXM+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHNjb3JlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBZGRyZXNzfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1Bvc2l0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86IFBvc2l0aW9uIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Vmlld3BvcnR9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHZpZXdwb3J0PzogVmlld3BvcnQgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxFbnRyeVBvaW50Pn1cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgZW50cnlQb2ludHM/OiBBcnJheTxFbnRyeVBvaW50PjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBpbmZvPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UG9pfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBwb2k/OiBQb2kgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUnVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUnVuIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1ZlcnNpb25JbmZvfVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICB2ZXJzaW9uSW5mbz86IFZlcnNpb25JbmZvIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBzdGFydGVkQnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBzdWNjZXNzPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIFJ1blxuICAgICAqL1xuICAgIHN0YXJ0VGltZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBlbmRUaW1lPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PEFtcGhvcmFSZWZlcmVuY2U+fVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBhbXBob3JhUmVmZXJlbmNlcz86IEFycmF5PEFtcGhvcmFSZWZlcmVuY2U+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFNpZ25hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hbCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU2lnbmFsXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNpZ25hbFxuICAgICAqL1xuICAgIHByb3BlcnR5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICB2YWx1ZVR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX1cbiAgICAgKiBAbWVtYmVyb2YgU2lnbmFsXG4gICAgICovXG4gICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFN1bW1hcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdW1tYXJ5IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgcXVlcnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBxdWVyeVR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBxdWVyeVRpbWU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIG51bVJlc3VsdHM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIG9mZnNldD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBmdXp6eUxldmVsPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVGVybXNPZlVzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1zT2ZVc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZVxuICAgICAqL1xuICAgIGNvbnRlbnRzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFRlcm1zT2ZVc2VBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1zT2ZVc2VBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZUFsbE9mXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVHN4XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHN4IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBUc3hcbiAgICAgKi9cbiAgICB0c3g/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXBkYXRlUnVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlUnVuIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgd2hldGhlciB0aGUgcnVuIGZhaWxlZCBvciBzdWNjZWVkZWQuIFNldHRpbmcgdGhpcyB3aWxsIGVuZCB0aGUgcnVuLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVSdW5cbiAgICAgKi9cbiAgICBzdWNjZXNzPzogYm9vbGVhbiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVcGRhdGVTaWduYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTaWduYWwge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX1cbiAgICAgKiBAbWVtYmVyb2YgVXBkYXRlU2lnbmFsXG4gICAgICovXG4gICAgbWV0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwbG9hZFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVwbG9hZFJlc3BvbnNlXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJBY2Nlc3NSdWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGUge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJBY2Nlc3NSdWxlXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJBY2Nlc3NSdWxlXG4gICAgICovXG4gICAgYWxsb3dPckRlbnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFVzZXJBY2Nlc3NSdWxlXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICB1c2VybmFtZTogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJBY2Nlc3NSdWxlQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJBY2Nlc3NSdWxlQWxsT2ZcbiAgICAgKi9cbiAgICB1c2VybmFtZTogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVmFyaWFibGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgVmFyaWFibGVcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFZhcmlhYmxlXG4gICAgICovXG4gICAga2luZDogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVmVyc2lvbkluZm9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWZXJzaW9uSW5mbyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkluZm9cbiAgICAgKi9cbiAgICBtYWpvcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBWZXJzaW9uSW5mb1xuICAgICAqL1xuICAgIG1pbm9yPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFZlcnNpb25JbmZvXG4gICAgICovXG4gICAgcGF0Y2g/OiBudW1iZXI7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWaWV3cG9ydFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdwb3J0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7UG9zaXRpb259XG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0XG4gICAgICovXG4gICAgdG9wTGVmdFBvaW50PzogUG9zaXRpb24gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtQb3NpdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRcbiAgICAgKi9cbiAgICBidG1SaWdodFBvaW50PzogUG9zaXRpb24gfCBudWxsO1xufVxuXG4vKipcbiAqIEFjdGl2aXRpZXNBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFjdGl2aXR5fSBjcmVhdGVBY3Rpdml0eSBNZXRhZGF0YSBvZiB0aGUgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5OiBDcmVhdGVBY3Rpdml0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVBY3Rpdml0eScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoY3JlYXRlQWN0aXZpdHkgPT09IG51bGwgfHwgY3JlYXRlQWN0aXZpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVBY3Rpdml0eScsJ1JlcXVpcmVkIHBhcmFtZXRlciBjcmVhdGVBY3Rpdml0eSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgY3JlYXRlQWN0aXZpdHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShjcmVhdGVBY3Rpdml0eSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlQWN0aXZpdHkgOiB7fSkgOiAoY3JlYXRlQWN0aXZpdHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBtZXRhZGF0YSBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZWZlcmVuY2VzIGFuIEFtcGhvcmEgZHVyaW5nIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFtcGhvcmFJZCBUaGUgSWQgb2YgdGhlIEFtcGhvcmEgdG8gcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0FtcGhvcmFSZWZlcmVuY2V9IGFtcGhvcmFSZWZlcmVuY2UgSW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIGFtcGhvcmFJZDogc3RyaW5nLCBhbXBob3JhUmVmZXJlbmNlOiBBbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdydW5JZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocnVuSWQgPT09IG51bGwgfHwgcnVuSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdydW5JZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBydW5JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnYW1waG9yYUlkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChhbXBob3JhSWQgPT09IG51bGwgfHwgYW1waG9yYUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignYW1waG9yYUlkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGFtcGhvcmFJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnYW1waG9yYVJlZmVyZW5jZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoYW1waG9yYVJlZmVyZW5jZSA9PT0gbnVsbCB8fCBhbXBob3JhUmVmZXJlbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignYW1waG9yYVJlZmVyZW5jZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBhbXBob3JhUmVmZXJlbmNlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH0vUnVucy97cnVuSWR9L2FtcGhvcmFlL3thbXBob3JhSWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJydW5JZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHJ1bklkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiYW1waG9yYUlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoYW1waG9yYUlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBhbXBob3JhUmVmZXJlbmNlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoYW1waG9yYVJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkID8gYW1waG9yYVJlZmVyZW5jZSA6IHt9KSA6IChhbXBob3JhUmVmZXJlbmNlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU3RhcnRzIGEgbmV3IHJ1biBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBpZCBpbiB3aGljaCB0byBzdGFydCBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNTdGFydFJ1bihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1N0YXJ0UnVuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYWN0aXZpdGllcy97aWR9L1J1bnNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbmQgY29tcGxldGVzIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVSdW59IHVwZGF0ZVJ1biBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1VwZGF0ZVJ1bihpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCB1cGRhdGVSdW46IFVwZGF0ZVJ1biwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNVcGRhdGVSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdydW5JZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocnVuSWQgPT09IG51bGwgfHwgcnVuSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdydW5JZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBydW5JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNVcGRhdGVSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1cGRhdGVSdW4nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHVwZGF0ZVJ1biA9PT0gbnVsbCB8fCB1cGRhdGVSdW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1cGRhdGVSdW4nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgdXBkYXRlUnVuIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1VwZGF0ZVJ1bi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfS9SdW5zL3tydW5JZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInJ1bklkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocnVuSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiB1cGRhdGVSdW4gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1cGRhdGVSdW4gIT09IHVuZGVmaW5lZCA/IHVwZGF0ZVJ1biA6IHt9KSA6ICh1cGRhdGVSdW4gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFjdGl2aXRpZXNBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQWN0aXZpdGllc0FwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQWN0aXZpdHl9IGNyZWF0ZUFjdGl2aXR5IE1ldGFkYXRhIG9mIHRoZSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkoY3JlYXRlQWN0aXZpdHk6IENyZWF0ZUFjdGl2aXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBY3Rpdml0eT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyB0aGUgbWV0YWRhdGEgb2YgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFjdGl2aXR5PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJlZmVyZW5jZXMgYW4gQW1waG9yYSBkdXJpbmcgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYW1waG9yYUlkIFRoZSBJZCBvZiB0aGUgQW1waG9yYSB0byByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7QW1waG9yYVJlZmVyZW5jZX0gYW1waG9yYVJlZmVyZW5jZSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgYW1waG9yYUlkOiBzdHJpbmcsIGFtcGhvcmFSZWZlcmVuY2U6IEFtcGhvcmFSZWZlcmVuY2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFtcGhvcmFSZWZlcmVuY2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkLCBydW5JZCwgYW1waG9yYUlkLCBhbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFN0YXJ0cyBhIG5ldyBydW4gb2YgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgaWQgaW4gd2hpY2ggdG8gc3RhcnQgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzU3RhcnRSdW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UnVuPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzU3RhcnRSdW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbmQgY29tcGxldGVzIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVSdW59IHVwZGF0ZVJ1biBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1VwZGF0ZVJ1bihpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCB1cGRhdGVSdW46IFVwZGF0ZVJ1biwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UnVuPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzVXBkYXRlUnVuKGlkLCBydW5JZCwgdXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQWN0aXZpdGllc0FwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpdml0aWVzQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBY3Rpdml0eX0gY3JlYXRlQWN0aXZpdHkgTWV0YWRhdGEgb2YgdGhlIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eTogQ3JlYXRlQWN0aXZpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyB0aGUgbWV0YWRhdGEgb2YgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZWZlcmVuY2VzIGFuIEFtcGhvcmEgZHVyaW5nIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFtcGhvcmFJZCBUaGUgSWQgb2YgdGhlIEFtcGhvcmEgdG8gcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0FtcGhvcmFSZWZlcmVuY2V9IGFtcGhvcmFSZWZlcmVuY2UgSW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIGFtcGhvcmFJZDogc3RyaW5nLCBhbXBob3JhUmVmZXJlbmNlOiBBbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkLCBydW5JZCwgYW1waG9yYUlkLCBhbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFN0YXJ0cyBhIG5ldyBydW4gb2YgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgaWQgaW4gd2hpY2ggdG8gc3RhcnQgYSBydW4uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzU3RhcnRSdW4oaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzU3RhcnRSdW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbmQgY29tcGxldGVzIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVSdW59IHVwZGF0ZVJ1biBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1VwZGF0ZVJ1bihpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCB1cGRhdGVSdW46IFVwZGF0ZVJ1biwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzVXBkYXRlUnVuKGlkLCBydW5JZCwgdXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIEFjdGl2aXRpZXNBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQWN0aXZpdGllc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBBY3Rpdml0aWVzQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBhY3Rpdml0eS5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFjdGl2aXR5fSBjcmVhdGVBY3Rpdml0eSBNZXRhZGF0YSBvZiB0aGUgbmV3IGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eTogQ3JlYXRlQWN0aXZpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBhY3Rpdml0eS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIG1ldGFkYXRhIG9mIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVhZEFjdGl2aXR5KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZWZlcmVuY2VzIGFuIEFtcGhvcmEgZHVyaW5nIGEgcnVuLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFtcGhvcmFJZCBUaGUgSWQgb2YgdGhlIEFtcGhvcmEgdG8gcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSB7QW1waG9yYVJlZmVyZW5jZX0gYW1waG9yYVJlZmVyZW5jZSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVmZXJlbmNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIGFtcGhvcmFJZDogc3RyaW5nLCBhbXBob3JhUmVmZXJlbmNlOiBBbXBob3JhUmVmZXJlbmNlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZCwgcnVuSWQsIGFtcGhvcmFJZCwgYW1waG9yYVJlZmVyZW5jZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgU3RhcnRzIGEgbmV3IHJ1biBvZiBhbiBhY3Rpdml0eS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IGlkIGluIHdoaWNoIHRvIHN0YXJ0IGEgcnVuLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNTdGFydFJ1bihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzU3RhcnRSdW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW5kIGNvbXBsZXRlcyBhIHJ1bi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAqIEBwYXJhbSB7VXBkYXRlUnVufSB1cGRhdGVSdW4gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdGllc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY3Rpdml0aWVzVXBkYXRlUnVuKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIHVwZGF0ZVJ1bjogVXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzVXBkYXRlUnVuKGlkLCBydW5JZCwgdXBkYXRlUnVuLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIEFtcGhvcmFlQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYVF1YWxpdHlHZXQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFRdWFsaXR5R2V0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9xdWFsaXR5YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVhbGl0eX0gcXVhbGl0eSBUaGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eVNldChpZDogc3RyaW5nLCBxdWFsaXR5OiBRdWFsaXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYVF1YWxpdHlTZXQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdxdWFsaXR5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChxdWFsaXR5ID09PSBudWxsIHx8IHF1YWxpdHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdxdWFsaXR5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHF1YWxpdHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhUXVhbGl0eVNldC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vcXVhbGl0eWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHF1YWxpdHkgIT09IHVuZGVmaW5lZCA/IHF1YWxpdHkgOiB7fSkgOiAocXVhbGl0eSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBmb3IgYWxsIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkOiBzdHJpbmcsIGFsbEFjY2Vzc1J1bGU6IEFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnYWxsQWNjZXNzUnVsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoYWxsQWNjZXNzUnVsZSA9PT0gbnVsbCB8fCBhbGxBY2Nlc3NSdWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignYWxsQWNjZXNzUnVsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBhbGxBY2Nlc3NSdWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yQWxsYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBhbGxBY2Nlc3NSdWxlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoYWxsQWNjZXNzUnVsZSAhPT0gdW5kZWZpbmVkID8gYWxsQWNjZXNzUnVsZSA6IHt9KSA6IChhbGxBY2Nlc3NSdWxlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9uQWNjZXNzUnVsZX0gb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU6IE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnb3JnYW5pc2F0aW9uQWNjZXNzUnVsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAob3JnYW5pc2F0aW9uQWNjZXNzUnVsZSA9PT0gbnVsbCB8fCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignb3JnYW5pc2F0aW9uQWNjZXNzUnVsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yT3JnYW5pc2F0aW9uYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkob3JnYW5pc2F0aW9uQWNjZXNzUnVsZSAhPT0gdW5kZWZpbmVkID8gb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSA6IHt9KSA6IChvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBydWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7VXNlckFjY2Vzc1J1bGV9IHVzZXJBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAndXNlckFjY2Vzc1J1bGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHVzZXJBY2Nlc3NSdWxlID09PSBudWxsIHx8IHVzZXJBY2Nlc3NSdWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigndXNlckFjY2Vzc1J1bGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgdXNlckFjY2Vzc1J1bGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlci4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yVXNlcmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgdXNlckFjY2Vzc1J1bGUgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1c2VyQWNjZXNzUnVsZSAhPT0gdW5kZWZpbmVkID8gdXNlckFjY2Vzc1J1bGUgOiB7fSkgOiAodXNlckFjY2Vzc1J1bGUgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFjY2VzcyBDb250cm9sIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlSWQgVGhlIElkIG9mIHRoZSBydWxlIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQ6IHN0cmluZywgcnVsZUlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncnVsZUlkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChydWxlSWQgPT09IG51bGwgfHwgcnVsZUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncnVsZUlkJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJ1bGVJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL3tydWxlSWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJydWxlSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhydWxlSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdERUxFVEUnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgXFwnZm9yIGFsbFxcJyBydWxlLCBpZiBpdCBleGlzdHMsIGVsc2UgYW4gZW1wdHkgMjAwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yQWxsYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byBvcmdhbmlzYXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JPcmdhbmlzYXRpb25gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0ZvclVzZXJgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGVtcHR5IEFtcGhvcmEgaW4gdGhlIHVzZXJcXCdzIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhfSBjcmVhdGVBbXBob3JhIEluZm9ybWF0aW9uIGZvciB0aGUgbmV3IEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhOiBDcmVhdGVBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2NyZWF0ZUFtcGhvcmEnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFtcGhvcmEgPT09IG51bGwgfHwgY3JlYXRlQW1waG9yYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2NyZWF0ZUFtcGhvcmEnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQW1waG9yYSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWVgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgY3JlYXRlQW1waG9yYSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGNyZWF0ZUFtcGhvcmEgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZUFtcGhvcmEgOiB7fSkgOiAoY3JlYXRlQW1waG9yYSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdERUxFVEUnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZmlsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZmlsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBmaWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdERUxFVEUnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZmlsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZmlsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBmaWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXMve2ZpbGV9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJmaWxlXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZmlsZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBBbXBob3JhXFwncyBmaWxlcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gQ2FuIGJlIGFscGhhYmV0aWNhbCBvciBsYXN0TW9kaWZpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzTGlzdEZpbGVzKGlkOiBzdHJpbmcsIG9yZGVyQnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzTGlzdEZpbGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcmRlckJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydvcmRlckJ5J10gPSBvcmRlckJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVNZXRhZGF0YS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX0vbWV0YWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYSBsaXN0IG9mIEFtcGhvcmEgZm9yIHlvdXJzZWxmIG9yIHlvdXIgb3JnLCBjcmVhdGVkIG9yIHB1cmNoYXNlZCBieSB5b3UgKG9yIG9yZ2FuaXNhdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUeXBlXSBcXCYjMzk7Y3JlYXRlZFxcJiMzOTsgb3IgXFwmIzM5O3B1cmNoYXNlZFxcJiMzOTsuIERlZmF1bHRzIHRvIGNyZWF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWVgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY29wZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnc2NvcGUnXSA9IHNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWNjZXNzVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnYWNjZXNzVHlwZSddID0gYWNjZXNzVHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVJlYWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsOiBTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdzaWduYWwnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHNpZ25hbCA9PT0gbnVsbCB8fCBzaWduYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdzaWduYWwnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgc2lnbmFsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBzaWduYWwgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShzaWduYWwgIT09IHVuZGVmaW5lZCA/IHNpZ25hbCA6IHt9KSA6IChzaWduYWwgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3Byb3BlcnR5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gbnVsbCB8fCBwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3Byb3BlcnR5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHByb3BlcnR5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL3twcm9wZXJ0eX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInByb3BlcnR5XCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocHJvcGVydHkpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaWduYWxJZCBTaWduYWwgRGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVTaWduYWx9IHVwZGF0ZVNpZ25hbCBTaWduYWwgcHJvcGVydGllcyB0byB1cGRhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsSWQ6IHN0cmluZywgdXBkYXRlU2lnbmFsOiBVcGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdzaWduYWxJZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoc2lnbmFsSWQgPT09IG51bGwgfHwgc2lnbmFsSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdzaWduYWxJZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBzaWduYWxJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3VwZGF0ZVNpZ25hbCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodXBkYXRlU2lnbmFsID09PSBudWxsIHx8IHVwZGF0ZVNpZ25hbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3VwZGF0ZVNpZ25hbCcsJ1JlcXVpcmVkIHBhcmFtZXRlciB1cGRhdGVTaWduYWwgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMve3NpZ25hbElkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wic2lnbmFsSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhzaWduYWxJZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BVVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgdXBkYXRlU2lnbmFsICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkodXBkYXRlU2lnbmFsICE9PSB1bmRlZmluZWQgPyB1cGRhdGVTaWduYWwgOiB7fSkgOiAodXBkYXRlU2lnbmFsIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFscy92YWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFsVmFsdWVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncmVxdWVzdEJvZHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3RCb2R5ID09PSBudWxsIHx8IHJlcXVlc3RCb2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncmVxdWVzdEJvZHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdEJvZHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFscy9iYXRjaHZhbHVlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncmVxdWVzdEJvZHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3RCb2R5ID09PSBudWxsIHx8IHJlcXVlc3RCb2R5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncmVxdWVzdEJvZHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcmVxdWVzdEJvZHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2JhdGNoU2lnbmFsVmFsdWVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7RGV0YWlsZWRBbXBob3JhfSBkZXRhaWxlZEFtcGhvcmEgSW5mb3JtYXRpb24gdG8gdXBkYXRlLiBOdWxscyBhcmUgTk9UIGlnbm9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBkZXRhaWxlZEFtcGhvcmE6IERldGFpbGVkQW1waG9yYSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlVXBkYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZGV0YWlsZWRBbXBob3JhJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChkZXRhaWxlZEFtcGhvcmEgPT09IG51bGwgfHwgZGV0YWlsZWRBbXBob3JhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZGV0YWlsZWRBbXBob3JhJywnUmVxdWlyZWQgcGFyYW1ldGVyIGRldGFpbGVkQW1waG9yYSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlVXBkYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBkZXRhaWxlZEFtcGhvcmEgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShkZXRhaWxlZEFtcGhvcmEgIT09IHVuZGVmaW5lZCA/IGRldGFpbGVkQW1waG9yYSA6IHt9KSA6IChkZXRhaWxlZEFtcGhvcmEgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBQdXJjaGFzZXMgYW4gQW1waG9yYSBhcyB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHB1cmNoYXNlc1B1cmNoYXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvQW1waG9yYWUve2lkfS9QdXJjaGFzZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBBbXBob3JhZUFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBbXBob3JhZUFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYVF1YWxpdHlHZXQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UXVhbGl0eT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5R2V0KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1YWxpdHl9IHF1YWxpdHkgVGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYVF1YWxpdHlTZXQoaWQ6IHN0cmluZywgcXVhbGl0eTogUXVhbGl0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UXVhbGl0eT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5U2V0KGlkLCBxdWFsaXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBmb3IgYWxsIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkOiBzdHJpbmcsIGFsbEFjY2Vzc1J1bGU6IEFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFsbEFjY2Vzc1J1bGU+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkLCBhbGxBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbkFjY2Vzc1J1bGV9IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxVc2VyQWNjZXNzUnVsZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBydWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7VXNlckFjY2Vzc1J1bGV9IHVzZXJBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8VXNlckFjY2Vzc1J1bGU+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZCwgdXNlckFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVsZUlkIFRoZSBJZCBvZiB0aGUgcnVsZSB0byBkZWxldGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkLCBydWxlSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgXFwnZm9yIGFsbFxcJyBydWxlLCBpZiBpdCBleGlzdHMsIGVsc2UgYW4gZW1wdHkgMjAwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFsbEFjY2Vzc1J1bGU+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGxpc3Qgb2YgYWNjZXNzIHJ1bGVzIGFwcGxpZWQgdG8gdXNlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxVc2VyQWNjZXNzUnVsZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgZW1wdHkgQW1waG9yYSBpbiB0aGUgdXNlclxcJ3Mgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmF9IGNyZWF0ZUFtcGhvcmEgSW5mb3JtYXRpb24gZm9yIHRoZSBuZXcgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmE6IENyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBmaWxlLiBSZXR1cm5zIGEgYmxvYiBVUkwgdG8gdXBsb2FkIHRvLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxVcGxvYWRSZXNwb25zZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZCwgZmlsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBDYW4gYmUgYWxwaGFiZXRpY2FsIG9yIGxhc3RNb2RpZmllZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQsIG9yZGVyQnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkLCBmaWxlLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVHlwZV0gXFwmIzM5O2NyZWF0ZWRcXCYjMzk7IG9yIFxcJiMzOTtwdXJjaGFzZWRcXCYjMzk7LiBEZWZhdWx0cyB0byBjcmVhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxEZXRhaWxlZEFtcGhvcmE+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVMaXN0KHNjb3BlLCBhY2Nlc3NUeXBlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxEZXRhaWxlZEFtcGhvcmE+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsOiBTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFNpZ25hbD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZCwgc2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb3IgaWQgb2YgdGhlIHNpZ25hbCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxTaWduYWw+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQsIHByb3BlcnR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxTaWduYWw+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8U2lnbmFsPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkLCBzaWduYWxJZCwgdXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtEZXRhaWxlZEFtcGhvcmF9IGRldGFpbGVkQW1waG9yYSBJbmZvcm1hdGlvbiB0byB1cGRhdGUuIE51bGxzIGFyZSBOT1QgaWdub3JlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlVXBkYXRlKGlkOiBzdHJpbmcsIGRldGFpbGVkQW1waG9yYTogRGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxEZXRhaWxlZEFtcGhvcmE+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVVwZGF0ZShpZCwgZGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwdXJjaGFzZXNQdXJjaGFzZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5wdXJjaGFzZXNQdXJjaGFzZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFtcGhvcmFlQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFtcGhvcmFlQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eUdldChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eUdldChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5U2V0KGlkLCBxdWFsaXR5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBmb3IgYWxsIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkOiBzdHJpbmcsIGFsbEFjY2Vzc1J1bGU6IEFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQsIGFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9uQWNjZXNzUnVsZX0gb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU6IE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBydWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7VXNlckFjY2Vzc1J1bGV9IHVzZXJBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQsIHVzZXJBY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQWNjZXNzIENvbnRyb2wgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZDogc3RyaW5nLCBydWxlSWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZCwgcnVsZUlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIFxcJ2ZvciBhbGxcXCcgcnVsZSwgaWYgaXQgZXhpc3RzLCBlbHNlIGFuIGVtcHR5IDIwMC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGVtcHR5IEFtcGhvcmEgaW4gdGhlIHVzZXJcXCdzIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhfSBjcmVhdGVBbXBob3JhIEluZm9ybWF0aW9uIGZvciB0aGUgbmV3IEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhOiBDcmVhdGVBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZURlbGV0ZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgZmlsZS4gUmV0dXJucyBhIGJsb2IgVVJMIHRvIHVwbG9hZCB0by5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIENhbiBiZSBhbHBoYWJldGljYWwgb3IgbGFzdE1vZGlmaWVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzTGlzdEZpbGVzKGlkLCBvcmRlckJ5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlTWV0YWRhdGEoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYSBsaXN0IG9mIEFtcGhvcmEgZm9yIHlvdXJzZWxmIG9yIHlvdXIgb3JnLCBjcmVhdGVkIG9yIHB1cmNoYXNlZCBieSB5b3UgKG9yIG9yZ2FuaXNhdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUeXBlXSBcXCYjMzk7Y3JlYXRlZFxcJiMzOTsgb3IgXFwmIzM5O3B1cmNoYXNlZFxcJiMzOTsuIERlZmF1bHRzIHRvIGNyZWF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlTGlzdChzY29wZSwgYWNjZXNzVHlwZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbDogU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQsIHNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkLCBwcm9wZXJ0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkLCBzaWduYWxJZCwgdXBkYXRlU2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0RldGFpbGVkQW1waG9yYX0gZGV0YWlsZWRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZGV0YWlsZWRBbXBob3JhOiBEZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBkZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUHVyY2hhc2VzIGFuIEFtcGhvcmEgYXMgdGhlIGxvZ2dlZCBpbiB1c2VyLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLnB1cmNoYXNlc1B1cmNoYXNlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIEFtcGhvcmFlQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEFtcGhvcmFlQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIEFtcGhvcmFlQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYVF1YWxpdHlHZXQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFRdWFsaXR5R2V0KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7UXVhbGl0eX0gcXVhbGl0eSBUaGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eVNldChpZCwgcXVhbGl0eSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIGZvciBhbGwgb24gdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQ6IHN0cmluZywgYWxsQWNjZXNzUnVsZTogQWxsQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JBbGwoaWQsIGFsbEFjY2Vzc1J1bGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZCwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBydWxlIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkLCB1c2VyQWNjZXNzUnVsZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlKGlkOiBzdHJpbmcsIHJ1bGVJZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZCwgcnVsZUlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBcXCdmb3IgYWxsXFwnIHJ1bGUsIGlmIGl0IGV4aXN0cywgZWxzZSBhbiBlbXB0eSAyMDAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byBvcmdhbmlzYXRpb25zLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhfSBjcmVhdGVBbXBob3JhIEluZm9ybWF0aW9uIGZvciB0aGUgbmV3IEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmE6IENyZWF0ZUFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZURlbGV0ZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkLCBmaWxlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQsIGZpbGUsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gQ2FuIGJlIGFscGhhYmV0aWNhbCBvciBsYXN0TW9kaWZpZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQsIG9yZGVyQnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1dyaXRlRmlsZU1ldGFkYXRhKGlkLCBmaWxlLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBhIGxpc3Qgb2YgQW1waG9yYSBmb3IgeW91cnNlbGYgb3IgeW91ciBvcmcsIGNyZWF0ZWQgb3IgcHVyY2hhc2VkIGJ5IHlvdSAob3Igb3JnYW5pc2F0aW9uKS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFthY2Nlc3NUeXBlXSBcXCYjMzk7Y3JlYXRlZFxcJiMzOTsgb3IgXFwmIzM5O3B1cmNoYXNlZFxcJiMzOTsuIERlZmF1bHRzIHRvIGNyZWF0ZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlTGlzdChzY29wZT86IHN0cmluZywgYWNjZXNzVHlwZT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlTGlzdChzY29wZSwgYWNjZXNzVHlwZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgU2lnbmFsIERldGFpbHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWw6IFNpZ25hbCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZCwgc2lnbmFsLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgc2lnbmFsIHByb3BlcnR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZCwgcHJvcGVydHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQ6IHN0cmluZywgc2lnbmFsSWQ6IHN0cmluZywgdXBkYXRlU2lnbmFsOiBVcGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwoaWQsIHNpZ25hbElkLCB1cGRhdGVTaWduYWwsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZCwgcmVxdWVzdEJvZHksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9PiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkLCByZXF1ZXN0Qm9keSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQsIHJlcXVlc3RCb2R5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtEZXRhaWxlZEFtcGhvcmF9IGRldGFpbGVkQW1waG9yYSBJbmZvcm1hdGlvbiB0byB1cGRhdGUuIE51bGxzIGFyZSBOT1QgaWdub3JlZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZGV0YWlsZWRBbXBob3JhOiBEZXRhaWxlZEFtcGhvcmEsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVVwZGF0ZShpZCwgZGV0YWlsZWRBbXBob3JhLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBQdXJjaGFzZXMgYW4gQW1waG9yYSBhcyB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5wdXJjaGFzZXNQdXJjaGFzZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBdXRoZW50aWNhdGlvbkFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAgICAgKiBAcGFyYW0ge0xvZ2luUmVxdWVzdH0gbG9naW5SZXF1ZXN0IFRva2VuIFJlcXVlc3QgUGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2xvZ2luUmVxdWVzdCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAobG9naW5SZXF1ZXN0ID09PSBudWxsIHx8IGxvZ2luUmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2xvZ2luUmVxdWVzdCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBsb2dpblJlcXVlc3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2F1dGhlbnRpY2F0aW9uL3JlcXVlc3RgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgbG9naW5SZXF1ZXN0ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkobG9naW5SZXF1ZXN0ICE9PSB1bmRlZmluZWQgPyBsb2dpblJlcXVlc3QgOiB7fSkgOiAobG9naW5SZXF1ZXN0IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBBdXRoZW50aWNhdGlvbkFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvbkFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYSBKV1QgKEpTT04gV2ViIFRva2VuKS4gICAgICAgICAgICAgXG4gICAgICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IGxvZ2luUmVxdWVzdCBUb2tlbiBSZXF1ZXN0IFBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEF1dGhlbnRpY2F0aW9uQXBpRnAoY29uZmlndXJhdGlvbikuYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEF1dGhlbnRpY2F0aW9uQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgKiBAcGFyYW0ge0xvZ2luUmVxdWVzdH0gbG9naW5SZXF1ZXN0IFRva2VuIFJlcXVlc3QgUGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQXV0aGVudGljYXRpb25BcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEF1dGhlbnRpY2F0aW9uQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogSWRlbnRpdHlBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgSWRlbnRpdHlBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGlkZW50aXR5R2V0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9pZGVudGl0eWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBpZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gSWRlbnRpdHlBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5pZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogSWRlbnRpdHlBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgSWRlbnRpdHlBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgaWRlbnRpdHlHZXQoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIElkZW50aXR5QXBpRnAoY29uZmlndXJhdGlvbikuaWRlbnRpdHlHZXQoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBJZGVudGl0eUFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eUFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBJZGVudGl0eUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBpZGVudGl0eUdldCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBJZGVudGl0eUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuaWRlbnRpdHlHZXQoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgTWFya2V0QXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEZpbmRzIEFtcGhvcmEgdXNpbmcgYSBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIEEgc3RyaW5nIGFzIGEgc2VhcmNoIHRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdG9wXSBIb3cgbWFueSByZXN1bHRzIHRvIHJldHVybi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBIb3cgbWFueSBwYWdlcyAoaW4gbXVsdGlwbGVzIG9mIHRvcCkgdG8gc2tpcC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG1hcmtldEZpbmQocXVlcnk/OiBzdHJpbmcsIHRvcD86IG51bWJlciwgc2tpcD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9tYXJrZXQvc2VhcmNoYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocXVlcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsndG9wJ10gPSB0b3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChza2lwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydza2lwJ10gPSBza2lwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gU2VhcmNoIFRleHQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBtYXJrZXRMb29rdXBMb2NhdGlvbihxdWVyeT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9sb2NhdGlvbi9mdXp6eWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydxdWVyeSddID0gcXVlcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogTWFya2V0QXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IE1hcmtldEFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEZpbmRzIEFtcGhvcmEgdXNpbmcgYSBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIEEgc3RyaW5nIGFzIGEgc2VhcmNoIHRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdG9wXSBIb3cgbWFueSByZXN1bHRzIHRvIHJldHVybi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBIb3cgbWFueSBwYWdlcyAoaW4gbXVsdGlwbGVzIG9mIHRvcCkgdG8gc2tpcC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG1hcmtldEZpbmQocXVlcnk/OiBzdHJpbmcsIHRvcD86IG51bWJlciwgc2tpcD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8QmFzaWNBbXBob3JhPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBNYXJrZXRBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5tYXJrZXRGaW5kKHF1ZXJ5LCB0b3AsIHNraXAsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRXhlY3V0ZXMgYSBmdXp6eSBsb2NhdGlvbiBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIFNlYXJjaCBUZXh0LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnk/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEZ1enp5U2VhcmNoUmVzcG9uc2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gTWFya2V0QXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikubWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBNYXJrZXRBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgTWFya2V0QXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRmluZHMgQW1waG9yYSB1c2luZyBhIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gQSBzdHJpbmcgYXMgYSBzZWFyY2ggdGVybS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEhvdyBtYW55IHBhZ2VzIChpbiBtdWx0aXBsZXMgb2YgdG9wKSB0byBza2lwLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgbWFya2V0RmluZChxdWVyeT86IHN0cmluZywgdG9wPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gTWFya2V0QXBpRnAoY29uZmlndXJhdGlvbikubWFya2V0RmluZChxdWVyeSwgdG9wLCBza2lwLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG1hcmtldExvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gTWFya2V0QXBpRnAoY29uZmlndXJhdGlvbikubWFya2V0TG9va3VwTG9jYXRpb24ocXVlcnksIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogTWFya2V0QXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIE1hcmtldEFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBNYXJrZXRBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBGaW5kcyBBbXBob3JhIHVzaW5nIGEgZnV6enkgc2VhcmNoLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcXVlcnldIEEgc3RyaW5nIGFzIGEgc2VhcmNoIHRlcm0uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt0b3BdIEhvdyBtYW55IHJlc3VsdHMgdG8gcmV0dXJuLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gSG93IG1hbnkgcGFnZXMgKGluIG11bHRpcGxlcyBvZiB0b3ApIHRvIHNraXAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE1hcmtldEFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBtYXJrZXRGaW5kKHF1ZXJ5Pzogc3RyaW5nLCB0b3A/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE1hcmtldEFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikubWFya2V0RmluZChxdWVyeSwgdG9wLCBza2lwLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgTWFya2V0QXBpXG4gICAgICovXG4gICAgcHVibGljIG1hcmtldExvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBNYXJrZXRBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm1hcmtldExvb2t1cExvY2F0aW9uKHF1ZXJ5LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIE9yZ2FuaXNhdGlvbnNBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY2NvdW50R2V0UGxhbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9BY2NvdW50L1BsYW5gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY2NvdW50UmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9BY2NvdW50YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gSW5mb3JtYXRpb24gb2YgdGhlIG5ldyBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ29yZ2FuaXNhdGlvbicgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAob3JnYW5pc2F0aW9uID09PSBudWxsIHx8IG9yZ2FuaXNhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ29yZ2FuaXNhdGlvbicsJ1JlcXVpcmVkIHBhcmFtZXRlciBvcmdhbmlzYXRpb24gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9uc2A7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBvcmdhbmlzYXRpb24gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShvcmdhbmlzYXRpb24gIT09IHVuZGVmaW5lZCA/IG9yZ2FuaXNhdGlvbiA6IHt9KSA6IChvcmdhbmlzYXRpb24gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zUmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBpbnZpdGF0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH0vSW52aXRhdGlvbnNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJZCBvZiB0aGUgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH0vVGVybXNPZlVzZWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zVXBkYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnb3JnYW5pc2F0aW9uJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChvcmdhbmlzYXRpb24gPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignb3JnYW5pc2F0aW9uJywnUmVxdWlyZWQgcGFyYW1ldGVyIG9yZ2FuaXNhdGlvbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BVVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2Ygb3JnYW5pc2F0aW9uICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkob3JnYW5pc2F0aW9uICE9PSB1bmRlZmluZWQgPyBvcmdhbmlzYXRpb24gOiB7fSkgOiAob3JnYW5pc2F0aW9uIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBPcmdhbmlzYXRpb25zQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZ2FuaXNhdGlvbnNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFBsYW5JbmZvcm1hdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWNjb3VudEdldFBsYW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBY2NvdW50PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPE9yZ2FuaXNhdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0RlbGV0ZShpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPE9yZ2FuaXNhdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGludml0YXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxJbnZpdGF0aW9uPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJZCBvZiB0aGUgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PFRlcm1zT2ZVc2U+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gT3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uLiBBbGwgZmllbGRzIGFyZSB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IE9yZ2FuaXNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVXBkYXRlKGlkLCBvcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBPcmdhbmlzYXRpb25zQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IE9yZ2FuaXNhdGlvbnNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgcGxhbiBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikuYWNjb3VudEdldFBsYW4oaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjY291bnRSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgT3JnYW5pc2F0aW9uLiBUaGlzIHdpbGwgYXNzaWduIHRoZSBsb2dnZWQgaW4gdXNlciB0byB0aGUgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uIG9mIHRoZSBuZXcgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgaW52aXRhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGEgbGlzdCBvZiBhbiBPcmdhbmlzYXRpb25cXCdzIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJZCBvZiB0aGUgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1VwZGF0ZShpZCwgb3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIE9yZ2FuaXNhdGlvbnNBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgT3JnYW5pc2F0aW9uc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBPcmdhbmlzYXRpb25zQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIHBsYW4gaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NvdW50R2V0UGxhbihpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY2NvdW50R2V0UGxhbihpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIGFjY291bnQgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NvdW50UmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zRGVsZXRlKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBkZXRhaWxzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBpbnZpdGF0aW9ucy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gT3JnYW5pc2F0aW9uXFwncyBUZXJtcyBvZiBVc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBJZCBvZiB0aGUgT3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5vcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBPcmdhbmlzYXRpb24gSW5mb3JtYXRpb24uIEFsbCBmaWVsZHMgYXJlIHVwZGF0ZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1VwZGF0ZShpZCwgb3JnYW5pc2F0aW9uLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdlbmVyYWwgc2VhcmNoIHRlcm0gZm9yIHRleHQgY29tcGFyaXNvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsb25dIExvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3NlYXJjaC9hbXBob3JhZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRlcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3Rlcm0nXSA9IHRlcm07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYWJlbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2xhYmVscyddID0gbGFiZWxzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydsYXQnXSA9IGxhdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnbG9uJ10gPSBsb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydkaXN0J10gPSBkaXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5TG9jYXRpb25gO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2xhdCddID0gbGF0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydsb24nXSA9IGxvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ2Rpc3QnXSA9IGRpc3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL2FtcGhvcmFlL2J5T3JnYW5pc2F0aW9uYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JnSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ29yZ0lkJ10gPSBvcmdJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL29yZ2FuaXNhdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0ZXJtJ10gPSB0ZXJtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gR2VuZXJhbCBzZWFyY2ggdGVybSBmb3IgdGV4dCBjb21wYXJpc29uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsc10gQ29tbWEgc2VwYXJhdGVkIGxhYmVscyB0aGF0IG11c3QgYmUgaW5jbHVkZWQgaW4gcmVzdWx0cy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gY2VudGVyIG9mIHNlYXJjaCBhcmVhIChkZXNjcmliaW5nIGEgY2lyY2xlKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0/OiBzdHJpbmcsIGxhYmVscz86IHN0cmluZywgbGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWUodGVybSwgbGFiZWxzLCBsYXQsIGxvbiwgZGlzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeUxvY2F0aW9uKGxhdCwgbG9uLCBkaXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQ/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFycmF5PEJhc2ljQW1waG9yYT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gU2VhcmNoQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBTZWFyY2ggVGVybS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybT86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8T3JnYW5pc2F0aW9uPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZWFyY2hBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdlbmVyYWwgc2VhcmNoIHRlcm0gZm9yIHRleHQgY29tcGFyaXNvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsb25dIExvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAoY29uZmlndXJhdGlvbikuc2VhcmNoU2VhcmNoQW1waG9yYWUodGVybSwgbGFiZWxzLCBsYXQsIGxvbiwgZGlzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUgYnkgbG9jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIERpc3RhbmNlIGZyb20gTGF0aXR1ZGUgYW5kIExvbmdpdHVkZSBpbiB3aGljaCB0byBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlIGluIGFuIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmdJZF0gT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZD86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaEFwaUZwKGNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlQnlPcmdhbmlzYXRpb24ob3JnSWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogU2VhcmNoQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFNlYXJjaEFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBHZW5lcmFsIHNlYXJjaCB0ZXJtIGZvciB0ZXh0IGNvbXBhcmlzb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtsYWJlbHNdIENvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIExhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbG9uXSBMb25naXR1ZGUgKGNlbnRlciBvZiBzZWFyY2ggYXJlYSkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBEaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFNlYXJjaEFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBzZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtPzogc3RyaW5nLCBsYWJlbHM/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0sIGxhYmVscywgbGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBieSBsb2N0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBMYXRpdHVkZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gTG9uZ2l0dWRlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlzdF0gRGlzdGFuY2UgZnJvbSBMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlIGluIHdoaWNoIHRvIHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgU2VhcmNoQXBpXG4gICAgICovXG4gICAgcHVibGljIHNlYXJjaFNlYXJjaEFtcGhvcmFlQnlMb2NhdGlvbihsYXQ/OiBudW1iZXIsIGxvbj86IG51bWJlciwgZGlzdD86IG51bWJlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5TG9jYXRpb24obGF0LCBsb24sIGRpc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZSBpbiBhbiBPcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmdJZF0gT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBTZWFyY2hBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoU2VhcmNoQW1waG9yYWVCeU9yZ2FuaXNhdGlvbihvcmdJZD86IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZUJ5T3JnYW5pc2F0aW9uKG9yZ0lkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIFNlYXJjaCBUZXJtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBTZWFyY2hBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtPzogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBUZXJtc09mVXNlQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQWNjZXB0cyBhIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBUZXJtcyBvZiBVc2UgaWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlQWNjZXB0KGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0ZXJtc09mVXNlQWNjZXB0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZS97aWR9L0FjY2VwdHNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlVGVybXNPZlVzZX0gY3JlYXRlVGVybXNPZlVzZSBUaGUgdGVybXMgb2YgdXNlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVUZXJtc09mVXNlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVUZXJtc09mVXNlID09PSBudWxsIHx8IGNyZWF0ZVRlcm1zT2ZVc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVUZXJtc09mVXNlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZVRlcm1zT2ZVc2Ugd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0ZXJtc09mVXNlQ3JlYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVUZXJtc09mVXNlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlVGVybXNPZlVzZSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlVGVybXNPZlVzZSA6IHt9KSA6IChjcmVhdGVUZXJtc09mVXNlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9UZXJtc09mVXNlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIHhBbXBob3JhZGF0YVZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsneC1hbXBob3JhZGF0YS12ZXJzaW9uJ10gPSBTdHJpbmcoeEFtcGhvcmFkYXRhVmVyc2lvbik7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlTGlzdCh4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL1Rlcm1zT2ZVc2VgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUZXJtc09mVXNlQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRlcm1zT2ZVc2VBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBY2NlcHRzIGEgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIFRlcm1zIG9mIFVzZSBpZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VBY2NlcHQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQWNjZXB0KGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBUZXJtcyBvZiBVc2Ugb2JqZWN0LlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZVRlcm1zT2ZVc2V9IGNyZWF0ZVRlcm1zT2ZVc2UgVGhlIHRlcm1zIG9mIHVzZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2U6IENyZWF0ZVRlcm1zT2ZVc2UsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFRlcm1zT2ZVc2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSB0ZXJtcyBvZiB1c2UgaWQgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VEZWxldGUoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8VGVybXNPZlVzZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VMaXN0KHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxUZXJtc09mVXNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFRlcm1zT2ZVc2VBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGVybXNPZlVzZUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFjY2VwdHMgYSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUFjY2VwdChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VBY2NlcHQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlVGVybXNPZlVzZX0gY3JlYXRlVGVybXNPZlVzZSBUaGUgdGVybXMgb2YgdXNlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2UsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VMaXN0KHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAoY29uZmlndXJhdGlvbikudGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAoY29uZmlndXJhdGlvbikudGVybXNPZlVzZVJlYWQoaWQsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogVGVybXNPZlVzZUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBUZXJtc09mVXNlQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFRlcm1zT2ZVc2VBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBBY2NlcHRzIGEgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQXBpXG4gICAgICovXG4gICAgcHVibGljIHRlcm1zT2ZVc2VBY2NlcHQoaWQ6IHN0cmluZywgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUFjY2VwdChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtDcmVhdGVUZXJtc09mVXNlfSBjcmVhdGVUZXJtc09mVXNlIFRoZSB0ZXJtcyBvZiB1c2UgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQXBpXG4gICAgICovXG4gICAgcHVibGljIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUNyZWF0ZShjcmVhdGVUZXJtc09mVXNlLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIHRlcm1zIG9mIHVzZSBpZCB0byBkZWxldGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZURlbGV0ZShpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCB4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGFsbCBUZXJtcyBvZiBVc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUxpc3QoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUZXJtc09mVXNlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0OiBRdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncXVlcnlSZXF1ZXN0JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChxdWVyeVJlcXVlc3QgPT09IG51bGwgfHwgcXVlcnlSZXF1ZXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncXVlcnlSZXF1ZXN0JywnUmVxdWlyZWQgcGFyYW1ldGVyIHF1ZXJ5UmVxdWVzdCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS90aW1lc2VyaWVzL3F1ZXJ5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHF1ZXJ5UmVxdWVzdCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHF1ZXJ5UmVxdWVzdCAhPT0gdW5kZWZpbmVkID8gcXVlcnlSZXF1ZXN0IDoge30pIDogKHF1ZXJ5UmVxdWVzdCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVGltZVNlcmllc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lU2VyaWVzQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0OiBRdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFF1ZXJ5UmVzdWx0UGFnZT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBUaW1lU2VyaWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikudGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3QsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRpbWVTZXJpZXNBcGlGcChjb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFRpbWVTZXJpZXNBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgVGltZVNlcmllc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgKiBAcGFyYW0ge1F1ZXJ5UmVxdWVzdH0gcXVlcnlSZXF1ZXN0IFRpbWUgU2VyaWVzIHF1ZXJ5LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC90c2ljbGllbnQvYmxvYi9tYXN0ZXIvZG9jcy9TZXJ2ZXIubWQjZnVuY3Rpb25zIC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGltZVNlcmllc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCB4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUaW1lU2VyaWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IFVzZXIuIFJldHVybnMgdGhlIHBhc3N3b3JkLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmFVc2VyfSBjcmVhdGVBbXBob3JhVXNlciBVc2VyIHBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQW1waG9yYVVzZXInIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFtcGhvcmFVc2VyID09PSBudWxsIHx8IGNyZWF0ZUFtcGhvcmFVc2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQW1waG9yYVVzZXInLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQW1waG9yYVVzZXIgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1c2Vyc0NyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3VzZXJzYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGNyZWF0ZUFtcGhvcmFVc2VyICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlQW1waG9yYVVzZXIgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZUFtcGhvcmFVc2VyIDoge30pIDogKGNyZWF0ZUFtcGhvcmFVc2VyIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvdXNlcnMvc2VsZmA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHhBbXBob3JhZGF0YVZlcnNpb24gIT09IHVuZGVmaW5lZCAmJiB4QW1waG9yYWRhdGFWZXJzaW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ3gtYW1waG9yYWRhdGEtdmVyc2lvbiddID0gU3RyaW5nKHhBbXBob3JhZGF0YVZlcnNpb24pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYVVzZXJ9IGNyZWF0ZUFtcGhvcmFVc2VyIFVzZXIgcGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QW1waG9yYVVzZXI+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVXNlcnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QW1waG9yYVVzZXI+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVXNlcnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS51c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYVVzZXJ9IGNyZWF0ZUFtcGhvcmFVc2VyIFVzZXIgcGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyOiBDcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAoY29uZmlndXJhdGlvbikudXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc1JlYWRTZWxmKHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBVc2Vyc0FwaUZwKGNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBVc2Vyc0FwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBVc2Vyc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBVc2Vyc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgVXNlci4gUmV0dXJucyB0aGUgcGFzc3dvcmQuXG4gICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbeEFtcGhvcmFkYXRhVmVyc2lvbl0gQVBJIFZlcnNpb24gTnVtYmVyXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBVc2Vyc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIHhBbXBob3JhZGF0YVZlcnNpb24/OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFVzZXJzQXBpXG4gICAgICovXG4gICAgcHVibGljIHVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVXNlcnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYoeEFtcGhvcmFkYXRhVmVyc2lvbiwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3ZlcnNpb25gO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh4QW1waG9yYWRhdGFWZXJzaW9uICE9PSB1bmRlZmluZWQgJiYgeEFtcGhvcmFkYXRhVmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWyd4LWFtcGhvcmFkYXRhLXZlcnNpb24nXSA9IFN0cmluZyh4QW1waG9yYWRhdGFWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBWZXJzaW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVmVyc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBWZXJzaW9uQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt4QW1waG9yYWRhdGFWZXJzaW9uXSBBUEkgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uPzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVmVyc2lvbkFwaUZwKGNvbmZpZ3VyYXRpb24pLnZlcnNpb25HZXRDdXJyZW50VmVyc2lvbih4QW1waG9yYWRhdGFWZXJzaW9uLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFZlcnNpb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVmVyc2lvbkFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBWZXJzaW9uQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY3VycmVudCBzZXJ2ZXIgdmVyc2lvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3hBbXBob3JhZGF0YVZlcnNpb25dIEFQSSBWZXJzaW9uIE51bWJlclxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uR2V0Q3VycmVudFZlcnNpb24oeEFtcGhvcmFkYXRhVmVyc2lvbj86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVmVyc2lvbkFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKHhBbXBob3JhZGF0YVZlcnNpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbiJdfQ==