"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VersionApi = exports.VersionApiFactory = exports.VersionApiFp = exports.VersionApiAxiosParamCreator = exports.UsersApi = exports.UsersApiFactory = exports.UsersApiFp = exports.UsersApiAxiosParamCreator = exports.TimeSeriesApi = exports.TimeSeriesApiFactory = exports.TimeSeriesApiFp = exports.TimeSeriesApiAxiosParamCreator = exports.TermsOfUseApi = exports.TermsOfUseApiFactory = exports.TermsOfUseApiFp = exports.TermsOfUseApiAxiosParamCreator = exports.SearchApi = exports.SearchApiFactory = exports.SearchApiFp = exports.SearchApiAxiosParamCreator = exports.PermissionApi = exports.PermissionApiFactory = exports.PermissionApiFp = exports.PermissionApiAxiosParamCreator = exports.OrganisationsApi = exports.OrganisationsApiFactory = exports.OrganisationsApiFp = exports.OrganisationsApiAxiosParamCreator = exports.IdentityApi = exports.IdentityApiFactory = exports.IdentityApiFp = exports.IdentityApiAxiosParamCreator = exports.GeoApi = exports.GeoApiFactory = exports.GeoApiFp = exports.GeoApiAxiosParamCreator = exports.AuthenticationApi = exports.AuthenticationApiFactory = exports.AuthenticationApiFp = exports.AuthenticationApiAxiosParamCreator = exports.ApplicationsApi = exports.ApplicationsApiFactory = exports.ApplicationsApiFp = exports.ApplicationsApiAxiosParamCreator = exports.AmphoraeApi = exports.AmphoraeApiFactory = exports.AmphoraeApiFp = exports.AmphoraeApiAxiosParamCreator = exports.ActivitiesApi = exports.ActivitiesApiFactory = exports.ActivitiesApiFp = exports.ActivitiesApiAxiosParamCreator = exports.PlanTypes = void 0;

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
 * @interface Position
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesCreateActivity(createActivity, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesDeleteActivity(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesReadActivity(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesStartRun(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun, options) {
      var localVarAxiosArgs = ActivitiesApiAxiosParamCreator(configuration).activitiesUpdateRun(id, runId, updateRun, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesCreateActivity: function activitiesCreateActivity(createActivity, options) {
      return ActivitiesApiFp(configuration).activitiesCreateActivity(createActivity, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesDeleteActivity: function activitiesDeleteActivity(id, options) {
      return ActivitiesApiFp(configuration).activitiesDeleteActivity(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReadActivity: function activitiesReadActivity(id, options) {
      return ActivitiesApiFp(configuration).activitiesReadActivity(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesReferenceAmphora: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options) {
      return ActivitiesApiFp(configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options)(axios, basePath);
    },

    /**
     * 
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesStartRun: function activitiesStartRun(id, options) {
      return ActivitiesApiFp(configuration).activitiesStartRun(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    activitiesUpdateRun: function activitiesUpdateRun(id, runId, updateRun, options) {
      return ActivitiesApiFp(configuration).activitiesUpdateRun(id, runId, updateRun, options)(axios, basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */
    value: function activitiesCreateActivity(createActivity, options) {
      return ActivitiesApiFp(this.configuration).activitiesCreateActivity(createActivity, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an activity.
     * @param {string} id The activity Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesDeleteActivity",
    value: function activitiesDeleteActivity(id, options) {
      return ActivitiesApiFp(this.configuration).activitiesDeleteActivity(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets the metadata of an activity.
     * @param {string} id The activity Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesReadActivity",
    value: function activitiesReadActivity(id, options) {
      return ActivitiesApiFp(this.configuration).activitiesReadActivity(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary References an Amphora during a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {string} amphoraId The Id of the Amphora to reference.
     * @param {AmphoraReference} amphoraReference Information about the reference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesReferenceAmphora",
    value: function activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options) {
      return ActivitiesApiFp(this.configuration).activitiesReferenceAmphora(id, runId, amphoraId, amphoraReference, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Starts a new run of an activity.
     * @param {string} id The activity id in which to start a run.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesStartRun",
    value: function activitiesStartRun(id, options) {
      return ActivitiesApiFp(this.configuration).activitiesStartRun(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates and completes a run.
     * @param {string} id The activity Id.
     * @param {string} runId The run Id.
     * @param {UpdateRun} updateRun Information about the update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivitiesApi
     */

  }, {
    key: "activitiesUpdateRun",
    value: function activitiesUpdateRun(id, runId, updateRun, options) {
      return ActivitiesApiFp(this.configuration).activitiesUpdateRun(id, runId, updateRun, options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @summary Lists an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Gets or sets the the orderBy parameter. Options are Alphabetical or LastModified.
     * @param {string} [prefix] Gets or sets a prefix filter for all file names. Is case sensitive.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, prefix, take, skip) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

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
        localVarQueryParameter['OrderBy'] = orderBy;
      }

      if (prefix !== undefined) {
        localVarQueryParameter['Prefix'] = prefix;
      }

      if (take !== undefined) {
        localVarQueryParameter['Take'] = take;
      }

      if (skip !== undefined) {
        localVarQueryParameter['Skip'] = skip;
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
     * @summary Queries an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {FileQueryOptions} fileQueryOptions Option for querying the files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesQueryFiles: function amphoraeFilesQueryFiles(id, fileQueryOptions) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesQueryFiles.');
      } // verify required parameter 'fileQueryOptions' is not null or undefined


      if (fileQueryOptions === null || fileQueryOptions === undefined) {
        throw new _base.RequiredError('fileQueryOptions', 'Required parameter fileQueryOptions was null or undefined when calling amphoraeFilesQueryFiles.');
      }

      var localVarPath = "/api/amphorae/{id}/files".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof fileQueryOptions !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(fileQueryOptions !== undefined ? fileQueryOptions : {}) : fileQueryOptions || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Get\'s the attributes of a file.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesReadFileAttributes: function amphoraeFilesReadFileAttributes(id, file) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesReadFileAttributes.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesReadFileAttributes.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}/attributes".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileAttributes: function amphoraeFilesWriteFileAttributes(id, file, requestBody) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeFilesWriteFileAttributes.');
      } // verify required parameter 'file' is not null or undefined


      if (file === null || file === undefined) {
        throw new _base.RequiredError('file', 'Required parameter file was null or undefined when calling amphoraeFilesWriteFileAttributes.');
      } // verify required parameter 'requestBody' is not null or undefined


      if (requestBody === null || requestBody === undefined) {
        throw new _base.RequiredError('requestBody', 'Required parameter requestBody was null or undefined when calling amphoraeFilesWriteFileAttributes.');
      }

      var localVarPath = "/api/amphorae/{id}/files/{file}/attributes".replace("{".concat("id", "}"), encodeURIComponent(String(id))).replace("{".concat("file", "}"), encodeURIComponent(String(file)));
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
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, take, skip) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
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

      if (take !== undefined) {
        localVarQueryParameter['Take'] = take;
      }

      if (skip !== undefined) {
        localVarQueryParameter['Skip'] = skip;
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {CreateSignal} createSignal Signal Details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, createSignal) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeSignalsCreateSignal.');
      } // verify required parameter 'createSignal' is not null or undefined


      if (createSignal === null || createSignal === undefined) {
        throw new _base.RequiredError('createSignal', 'Required parameter createSignal was null or undefined when calling amphoraeSignalsCreateSignal.');
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

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof createSignal !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createSignal !== undefined ? createSignal : {}) : createSignal || "";
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {EditAmphora} editAmphora Information to update. Nulls are NOT ignored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, editAmphora) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling amphoraeUpdate.');
      } // verify required parameter 'editAmphora' is not null or undefined


      if (editAmphora === null || editAmphora === undefined) {
        throw new _base.RequiredError('editAmphora', 'Required parameter editAmphora was null or undefined when calling amphoraeUpdate.');
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

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof editAmphora !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(editAmphora !== undefined ? editAmphora : {}) : editAmphora || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraQualityGet(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraQualitySet(id, quality, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsDelete(id, ruleId, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetForAllRule(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetOrganisationRules(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeAccessControlsGetUserRules(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeCreate(createAmphora, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeDelete(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesCreateFileRequest(id, file, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesDeleteFile(id, file, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesDownloadFile(id, file, options);
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
     * @summary Lists an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Gets or sets the the orderBy parameter. Options are Alphabetical or LastModified.
     * @param {string} [prefix] Gets or sets a prefix filter for all file names. Is case sensitive.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options);
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
     * @summary Queries an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {FileQueryOptions} fileQueryOptions Option for querying the files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesQueryFiles: function amphoraeFilesQueryFiles(id, fileQueryOptions, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesQueryFiles(id, fileQueryOptions, options);
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
     * @summary Get\'s the attributes of a file.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesReadFileAttributes: function amphoraeFilesReadFileAttributes(id, file, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesReadFileAttributes(id, file, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileAttributes: function amphoraeFilesWriteFileAttributes(id, file, requestBody, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeFilesWriteFileAttributes(id, file, requestBody, options);
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
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, take, skip, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeList(scope, accessType, take, skip, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeRead(id, options);
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
     * @param {CreateSignal} createSignal Signal Details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, createSignal, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsCreateSignal(id, createSignal, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsGetSignal(id, property, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsGetSignals(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignal(id, requestBody, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignal2(id, requestBody, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, options);
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
     * @param {EditAmphora} editAmphora Information to update. Nulls are NOT ignored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, editAmphora, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).amphoraeUpdate(id, editAmphora, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id, options) {
      var localVarAxiosArgs = AmphoraeApiAxiosParamCreator(configuration).purchasesPurchase(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualityGet: function amphoraQualityGet(id, options) {
      return AmphoraeApiFp(configuration).amphoraQualityGet(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraQualitySet: function amphoraQualitySet(id, quality, options) {
      return AmphoraeApiFp(configuration).amphoraQualitySet(id, quality, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForAll: function amphoraeAccessControlsCreateForAll(id, allAccessRule, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForOrganisation: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsCreateForUser: function amphoraeAccessControlsCreateForUser(id, userAccessRule, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsDelete: function amphoraeAccessControlsDelete(id, ruleId, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsDelete(id, ruleId, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetForAllRule: function amphoraeAccessControlsGetForAllRule(id, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetForAllRule(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetOrganisationRules: function amphoraeAccessControlsGetOrganisationRules(id, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetOrganisationRules(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeAccessControlsGetUserRules: function amphoraeAccessControlsGetUserRules(id, options) {
      return AmphoraeApiFp(configuration).amphoraeAccessControlsGetUserRules(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeCreate: function amphoraeCreate(createAmphora, options) {
      return AmphoraeApiFp(configuration).amphoraeCreate(createAmphora, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeDelete: function amphoraeDelete(id, options) {
      return AmphoraeApiFp(configuration).amphoraeDelete(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesCreateFileRequest: function amphoraeFilesCreateFileRequest(id, file, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesCreateFileRequest(id, file, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDeleteFile: function amphoraeFilesDeleteFile(id, file, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesDeleteFile(id, file, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesDownloadFile: function amphoraeFilesDownloadFile(id, file, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesDownloadFile(id, file, options)(axios, basePath);
    },

    /**
     * 
     * @summary Lists an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Gets or sets the the orderBy parameter. Options are Alphabetical or LastModified.
     * @param {string} [prefix] Gets or sets a prefix filter for all file names. Is case sensitive.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesListFiles: function amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options)(axios, basePath);
    },

    /**
     * 
     * @summary Queries an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {FileQueryOptions} fileQueryOptions Option for querying the files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesQueryFiles: function amphoraeFilesQueryFiles(id, fileQueryOptions, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesQueryFiles(id, fileQueryOptions, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the attributes of a file.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesReadFileAttributes: function amphoraeFilesReadFileAttributes(id, file, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesReadFileAttributes(id, file, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeFilesWriteFileAttributes: function amphoraeFilesWriteFileAttributes(id, file, requestBody, options) {
      return AmphoraeApiFp(configuration).amphoraeFilesWriteFileAttributes(id, file, requestBody, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeList: function amphoraeList(scope, accessType, take, skip, options) {
      return AmphoraeApiFp(configuration).amphoraeList(scope, accessType, take, skip, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeRead: function amphoraeRead(id, options) {
      return AmphoraeApiFp(configuration).amphoraeRead(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {CreateSignal} createSignal Signal Details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsCreateSignal: function amphoraeSignalsCreateSignal(id, createSignal, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsCreateSignal(id, createSignal, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignal: function amphoraeSignalsGetSignal(id, property, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsGetSignal(id, property, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsGetSignals: function amphoraeSignalsGetSignals(id, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsGetSignals(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUpdateSignal: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal: function amphoraeSignalsUploadSignal(id, requestBody, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignal(id, requestBody, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignal2: function amphoraeSignalsUploadSignal2(id, requestBody, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignal2(id, requestBody, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch: function amphoraeSignalsUploadSignalBatch(id, requestBody, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, options)(axios, basePath);
    },

    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeSignalsUploadSignalBatch2: function amphoraeSignalsUploadSignalBatch2(id, requestBody, options) {
      return AmphoraeApiFp(configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {EditAmphora} editAmphora Information to update. Nulls are NOT ignored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    amphoraeUpdate: function amphoraeUpdate(id, editAmphora, options) {
      return AmphoraeApiFp(configuration).amphoraeUpdate(id, editAmphora, options)(axios, basePath);
    },

    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purchasesPurchase: function purchasesPurchase(id, options) {
      return AmphoraeApiFp(configuration).purchasesPurchase(id, options)(axios, basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */
    value: function amphoraQualityGet(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraQualityGet(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Sets the data quality metrics for this Amphora.
     * @param {string} id Amphora Id.
     * @param {Quality} quality The data quality metrics.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraQualitySet",
    value: function amphoraQualitySet(id, quality, options) {
      return AmphoraeApiFp(this.configuration).amphoraQualitySet(id, quality, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates an Access Control Rule for all on this Amphora.
     * @param {string} id Amphora Id.
     * @param {AllAccessRule} allAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsCreateForAll",
    value: function amphoraeAccessControlsCreateForAll(id, allAccessRule, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForAll(id, allAccessRule, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates an Access Control Rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {OrganisationAccessRule} organisationAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsCreateForOrganisation",
    value: function amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForOrganisation(id, organisationAccessRule, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates an Access Control rule on this Amphora.
     * @param {string} id Amphora Id.
     * @param {UserAccessRule} userAccessRule The rule to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsCreateForUser",
    value: function amphoraeAccessControlsCreateForUser(id, userAccessRule, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsCreateForUser(id, userAccessRule, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an Access Control on this Amphora.
     * @param {string} id Amphora Id.
     * @param {string} ruleId The Id of the rule to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsDelete",
    value: function amphoraeAccessControlsDelete(id, ruleId, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsDelete(id, ruleId, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the \'for all\' rule, if it exists, else an empty 200.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetForAllRule",
    value: function amphoraeAccessControlsGetForAllRule(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetForAllRule(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the list of access rules applied to organisations.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetOrganisationRules",
    value: function amphoraeAccessControlsGetOrganisationRules(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetOrganisationRules(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the list of access rules applied to users.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeAccessControlsGetUserRules",
    value: function amphoraeAccessControlsGetUserRules(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeAccessControlsGetUserRules(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a new empty Amphora in the user\'s organisation.
     * @param {CreateAmphora} createAmphora Information for the new Amphora.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeCreate",
    value: function amphoraeCreate(createAmphora, options) {
      return AmphoraeApiFp(this.configuration).amphoraeCreate(createAmphora, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an Amphora.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeDelete",
    value: function amphoraeDelete(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeDelete(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a file. Returns a blob URL to upload to.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesCreateFileRequest",
    value: function amphoraeFilesCreateFileRequest(id, file, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesCreateFileRequest(id, file, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesDeleteFile",
    value: function amphoraeFilesDeleteFile(id, file, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesDeleteFile(id, file, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the contents of a file. Returns application/octet-stream.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesDownloadFile",
    value: function amphoraeFilesDownloadFile(id, file, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesDownloadFile(id, file, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Lists an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {string} [orderBy] Gets or sets the the orderBy parameter. Options are Alphabetical or LastModified.
     * @param {string} [prefix] Gets or sets a prefix filter for all file names. Is case sensitive.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesListFiles",
    value: function amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesListFiles(id, orderBy, prefix, take, skip, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Queries an Amphora\'s files.
     * @param {string} id Amphora Id.
     * @param {FileQueryOptions} fileQueryOptions Option for querying the files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesQueryFiles",
    value: function amphoraeFilesQueryFiles(id, fileQueryOptions, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesQueryFiles(id, fileQueryOptions, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the attributes of a file.
     * @param {string} id Amphora Id.
     * @param {string} file The name of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesReadFileAttributes",
    value: function amphoraeFilesReadFileAttributes(id, file, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesReadFileAttributes(id, file, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {string} file 
     * @param {{ [key: string]: string; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeFilesWriteFileAttributes",
    value: function amphoraeFilesWriteFileAttributes(id, file, requestBody, options) {
      return AmphoraeApiFp(this.configuration).amphoraeFilesWriteFileAttributes(id, file, requestBody, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets a list of Amphora for yourself or your org, created or purchased by you (or organisation).
     * @param {string} [scope] \&#39;self\&#39; or \&#39;organisation\&#39;. Defaults to self.
     * @param {string} [accessType] \&#39;created\&#39; or \&#39;purchased\&#39;. Defaults to created.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeList",
    value: function amphoraeList(scope, accessType, take, skip, options) {
      return AmphoraeApiFp(this.configuration).amphoraeList(scope, accessType, take, skip, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeRead",
    value: function amphoraeRead(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeRead(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {CreateSignal} createSignal Signal Details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsCreateSignal",
    value: function amphoraeSignalsCreateSignal(id, createSignal, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsCreateSignal(id, createSignal, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {string} property The name or id of the signal property.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsGetSignal",
    value: function amphoraeSignalsGetSignal(id, property, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsGetSignal(id, property, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s the signals associated with an Amphora.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsGetSignals",
    value: function amphoraeSignalsGetSignals(id, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsGetSignals(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Associates a signal with an Amphora. Signal is created if not existing.
     * @param {string} id Amphora Id.
     * @param {string} signalId Signal Details.
     * @param {UpdateSignal} updateSignal Signal properties to update.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUpdateSignal",
    value: function amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUpdateSignal(id, signalId, updateSignal, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignal",
    value: function amphoraeSignalsUploadSignal(id, requestBody, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignal(id, requestBody, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {{ [key: string]: object; }} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignal2",
    value: function amphoraeSignalsUploadSignal2(id, requestBody, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignal2(id, requestBody, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch",
    value: function amphoraeSignalsUploadSignalBatch(id, requestBody, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignalBatch(id, requestBody, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @param {string} id 
     * @param {Array<{ [key: string]: object; }>} requestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeSignalsUploadSignalBatch2",
    value: function amphoraeSignalsUploadSignalBatch2(id, requestBody, options) {
      return AmphoraeApiFp(this.configuration).amphoraeSignalsUploadSignalBatch2(id, requestBody, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {string} id Amphora Id.
     * @param {EditAmphora} editAmphora Information to update. Nulls are NOT ignored.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "amphoraeUpdate",
    value: function amphoraeUpdate(id, editAmphora, options) {
      return AmphoraeApiFp(this.configuration).amphoraeUpdate(id, editAmphora, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Purchases an Amphora as the logged in user.
     * @param {string} id Amphora Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmphoraeApi
     */

  }, {
    key: "purchasesPurchase",
    value: function purchasesPurchase(id, options) {
      return AmphoraeApiFp(this.configuration).purchasesPurchase(id, options)(this.axios, this.basePath);
    }
  }]);

  return AmphoraeApi;
}(_base.BaseAPI);
/**
 * ApplicationsApi - axios parameter creator
 * @export
 */


exports.AmphoraeApi = AmphoraeApi;

var ApplicationsApiAxiosParamCreator = function ApplicationsApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Creates a new application. Applications are external websites that Amphora users can sign in to.
     * @param {CreateApplication} createApplication An application to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsCreateApplication: function applicationsCreateApplication(createApplication) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // verify required parameter 'createApplication' is not null or undefined
      if (createApplication === null || createApplication === undefined) {
        throw new _base.RequiredError('createApplication', 'Required parameter createApplication was null or undefined when calling applicationsCreateApplication.');
      }

      var localVarPath = "/api/applications";
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

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof createApplication !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(createApplication !== undefined ? createApplication : {}) : createApplication || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    },

    /**
     * 
     * @summary Deletes an application. Must be done by an Organisation administrator.
     * @param {string} id The application id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsDeleteApplication: function applicationsDeleteApplication(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling applicationsDeleteApplication.');
      }

      var localVarPath = "/api/applications/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Gets an application by Id, if it exists.
     * @param {string} id The id of the application to get.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsReadApplication: function applicationsReadApplication(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling applicationsReadApplication.');
      }

      var localVarPath = "/api/applications/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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
     * @summary Updates an application by Id, if it exists.
     * @param {string} id The id of the application to update.
     * @param {UpdateApplication} updateApplication The information to update (old locations will be deleted).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsUpdateApplication: function applicationsUpdateApplication(id, updateApplication) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new _base.RequiredError('id', 'Required parameter id was null or undefined when calling applicationsUpdateApplication.');
      } // verify required parameter 'updateApplication' is not null or undefined


      if (updateApplication === null || updateApplication === undefined) {
        throw new _base.RequiredError('updateApplication', 'Required parameter updateApplication was null or undefined when calling applicationsUpdateApplication.');
      }

      var localVarPath = "/api/applications/{id}".replace("{".concat("id", "}"), encodeURIComponent(String(id)));
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

      localVarHeaderParameter['Content-Type'] = 'application/json';
      localVarUrlObj.query = _objectSpread({}, localVarUrlObj.query, {}, localVarQueryParameter, {}, options.query); // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943

      delete localVarUrlObj.search;
      localVarRequestOptions.headers = _objectSpread({}, localVarHeaderParameter, {}, options.headers);
      var needsSerialization = typeof updateApplication !== "string" || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization ? JSON.stringify(updateApplication !== undefined ? updateApplication : {}) : updateApplication || "";
      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};
/**
 * ApplicationsApi - functional programming interface
 * @export
 */


exports.ApplicationsApiAxiosParamCreator = ApplicationsApiAxiosParamCreator;

var ApplicationsApiFp = function ApplicationsApiFp(configuration) {
  return {
    /**
     * 
     * @summary Creates a new application. Applications are external websites that Amphora users can sign in to.
     * @param {CreateApplication} createApplication An application to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsCreateApplication: function applicationsCreateApplication(createApplication, options) {
      var localVarAxiosArgs = ApplicationsApiAxiosParamCreator(configuration).applicationsCreateApplication(createApplication, options);
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
     * @summary Deletes an application. Must be done by an Organisation administrator.
     * @param {string} id The application id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsDeleteApplication: function applicationsDeleteApplication(id, options) {
      var localVarAxiosArgs = ApplicationsApiAxiosParamCreator(configuration).applicationsDeleteApplication(id, options);
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
     * @summary Gets an application by Id, if it exists.
     * @param {string} id The id of the application to get.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsReadApplication: function applicationsReadApplication(id, options) {
      var localVarAxiosArgs = ApplicationsApiAxiosParamCreator(configuration).applicationsReadApplication(id, options);
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
     * @summary Updates an application by Id, if it exists.
     * @param {string} id The id of the application to update.
     * @param {UpdateApplication} updateApplication The information to update (old locations will be deleted).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsUpdateApplication: function applicationsUpdateApplication(id, updateApplication, options) {
      var localVarAxiosArgs = ApplicationsApiAxiosParamCreator(configuration).applicationsUpdateApplication(id, updateApplication, options);
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
 * ApplicationsApi - factory interface
 * @export
 */


exports.ApplicationsApiFp = ApplicationsApiFp;

var ApplicationsApiFactory = function ApplicationsApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Creates a new application. Applications are external websites that Amphora users can sign in to.
     * @param {CreateApplication} createApplication An application to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsCreateApplication: function applicationsCreateApplication(createApplication, options) {
      return ApplicationsApiFp(configuration).applicationsCreateApplication(createApplication, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an application. Must be done by an Organisation administrator.
     * @param {string} id The application id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsDeleteApplication: function applicationsDeleteApplication(id, options) {
      return ApplicationsApiFp(configuration).applicationsDeleteApplication(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets an application by Id, if it exists.
     * @param {string} id The id of the application to get.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsReadApplication: function applicationsReadApplication(id, options) {
      return ApplicationsApiFp(configuration).applicationsReadApplication(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates an application by Id, if it exists.
     * @param {string} id The id of the application to update.
     * @param {UpdateApplication} updateApplication The information to update (old locations will be deleted).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    applicationsUpdateApplication: function applicationsUpdateApplication(id, updateApplication, options) {
      return ApplicationsApiFp(configuration).applicationsUpdateApplication(id, updateApplication, options)(axios, basePath);
    }
  };
};
/**
 * ApplicationsApi - object-oriented interface
 * @export
 * @class ApplicationsApi
 * @extends {BaseAPI}
 */


exports.ApplicationsApiFactory = ApplicationsApiFactory;

var ApplicationsApi = /*#__PURE__*/function (_BaseAPI3) {
  _inherits(ApplicationsApi, _BaseAPI3);

  var _super3 = _createSuper(ApplicationsApi);

  function ApplicationsApi() {
    _classCallCheck(this, ApplicationsApi);

    return _super3.apply(this, arguments);
  }

  _createClass(ApplicationsApi, [{
    key: "applicationsCreateApplication",

    /**
     * 
     * @summary Creates a new application. Applications are external websites that Amphora users can sign in to.
     * @param {CreateApplication} createApplication An application to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationsApi
     */
    value: function applicationsCreateApplication(createApplication, options) {
      return ApplicationsApiFp(this.configuration).applicationsCreateApplication(createApplication, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an application. Must be done by an Organisation administrator.
     * @param {string} id The application id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationsApi
     */

  }, {
    key: "applicationsDeleteApplication",
    value: function applicationsDeleteApplication(id, options) {
      return ApplicationsApiFp(this.configuration).applicationsDeleteApplication(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets an application by Id, if it exists.
     * @param {string} id The id of the application to get.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationsApi
     */

  }, {
    key: "applicationsReadApplication",
    value: function applicationsReadApplication(id, options) {
      return ApplicationsApiFp(this.configuration).applicationsReadApplication(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates an application by Id, if it exists.
     * @param {string} id The id of the application to update.
     * @param {UpdateApplication} updateApplication The information to update (old locations will be deleted).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplicationsApi
     */

  }, {
    key: "applicationsUpdateApplication",
    value: function applicationsUpdateApplication(id, updateApplication, options) {
      return ApplicationsApiFp(this.configuration).applicationsUpdateApplication(id, updateApplication, options)(this.axios, this.basePath);
    }
  }]);

  return ApplicationsApi;
}(_base.BaseAPI);
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */


exports.ApplicationsApi = ApplicationsApi;

var AuthenticationApiAxiosParamCreator = function AuthenticationApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest, options) {
      var localVarAxiosArgs = AuthenticationApiAxiosParamCreator(configuration).authenticationRequestToken(loginRequest, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticationRequestToken: function authenticationRequestToken(loginRequest, options) {
      return AuthenticationApiFp(configuration).authenticationRequestToken(loginRequest, options)(axios, basePath);
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

var AuthenticationApi = /*#__PURE__*/function (_BaseAPI4) {
  _inherits(AuthenticationApi, _BaseAPI4);

  var _super4 = _createSuper(AuthenticationApi);

  function AuthenticationApi() {
    _classCallCheck(this, AuthenticationApi);

    return _super4.apply(this, arguments);
  }

  _createClass(AuthenticationApi, [{
    key: "authenticationRequestToken",

    /**
     * 
     * @summary Returns a JWT (JSON Web Token).             
     * @param {LoginRequest} loginRequest Token Request Parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    value: function authenticationRequestToken(loginRequest, options) {
      return AuthenticationApiFp(this.configuration).authenticationRequestToken(loginRequest, options)(this.axios, this.basePath);
    }
  }]);

  return AuthenticationApi;
}(_base.BaseAPI);
/**
 * GeoApi - axios parameter creator
 * @export
 */


exports.AuthenticationApi = AuthenticationApi;

var GeoApiAxiosParamCreator = function GeoApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    geoLookupLocation: function geoLookupLocation(query) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var localVarPath = "/api/geo/search/fuzzy";
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
 * GeoApi - functional programming interface
 * @export
 */


exports.GeoApiAxiosParamCreator = GeoApiAxiosParamCreator;

var GeoApiFp = function GeoApiFp(configuration) {
  return {
    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    geoLookupLocation: function geoLookupLocation(query, options) {
      var localVarAxiosArgs = GeoApiAxiosParamCreator(configuration).geoLookupLocation(query, options);
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
 * GeoApi - factory interface
 * @export
 */


exports.GeoApiFp = GeoApiFp;

var GeoApiFactory = function GeoApiFactory(configuration, basePath, axios) {
  return {
    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    geoLookupLocation: function geoLookupLocation(query, options) {
      return GeoApiFp(configuration).geoLookupLocation(query, options)(axios, basePath);
    }
  };
};
/**
 * GeoApi - object-oriented interface
 * @export
 * @class GeoApi
 * @extends {BaseAPI}
 */


exports.GeoApiFactory = GeoApiFactory;

var GeoApi = /*#__PURE__*/function (_BaseAPI5) {
  _inherits(GeoApi, _BaseAPI5);

  var _super5 = _createSuper(GeoApi);

  function GeoApi() {
    _classCallCheck(this, GeoApi);

    return _super5.apply(this, arguments);
  }

  _createClass(GeoApi, [{
    key: "geoLookupLocation",

    /**
     * 
     * @summary Executes a fuzzy location search.
     * @param {string} [query] Search Text.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeoApi
     */
    value: function geoLookupLocation(query, options) {
      return GeoApiFp(this.configuration).geoLookupLocation(query, options)(this.axios, this.basePath);
    }
  }]);

  return GeoApi;
}(_base.BaseAPI);
/**
 * IdentityApi - axios parameter creator
 * @export
 */


exports.GeoApi = GeoApi;

var IdentityApiAxiosParamCreator = function IdentityApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet(options) {
      var localVarAxiosArgs = IdentityApiAxiosParamCreator(configuration).identityGet(options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityGet: function identityGet(options) {
      return IdentityApiFp(configuration).identityGet(options)(axios, basePath);
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

var IdentityApi = /*#__PURE__*/function (_BaseAPI6) {
  _inherits(IdentityApi, _BaseAPI6);

  var _super6 = _createSuper(IdentityApi);

  function IdentityApi() {
    _classCallCheck(this, IdentityApi);

    return _super6.apply(this, arguments);
  }

  _createClass(IdentityApi, [{
    key: "identityGet",

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IdentityApi
     */
    value: function identityGet(options) {
      return IdentityApiFp(this.configuration).identityGet(options)(this.axios, this.basePath);
    }
  }]);

  return IdentityApi;
}(_base.BaseAPI);
/**
 * OrganisationsApi - axios parameter creator
 * @export
 */


exports.IdentityApi = IdentityApi;

var OrganisationsApiAxiosParamCreator = function OrganisationsApiAxiosParamCreator(configuration) {
  return {
    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).accountGetPlan(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).accountRead(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsCreate(organisation, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsDelete(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsRead(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsReadInvitations(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsTermsOfUseRead(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation, options) {
      var localVarAxiosArgs = OrganisationsApiAxiosParamCreator(configuration).organisationsUpdate(id, organisation, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountGetPlan: function accountGetPlan(id, options) {
      return OrganisationsApiFp(configuration).accountGetPlan(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    accountRead: function accountRead(id, options) {
      return OrganisationsApiFp(configuration).accountRead(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsCreate: function organisationsCreate(organisation, options) {
      return OrganisationsApiFp(configuration).organisationsCreate(organisation, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsDelete: function organisationsDelete(id, options) {
      return OrganisationsApiFp(configuration).organisationsDelete(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsRead: function organisationsRead(id, options) {
      return OrganisationsApiFp(configuration).organisationsRead(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsReadInvitations: function organisationsReadInvitations(id, options) {
      return OrganisationsApiFp(configuration).organisationsReadInvitations(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsTermsOfUseRead: function organisationsTermsOfUseRead(id, options) {
      return OrganisationsApiFp(configuration).organisationsTermsOfUseRead(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationsUpdate: function organisationsUpdate(id, organisation, options) {
      return OrganisationsApiFp(configuration).organisationsUpdate(id, organisation, options)(axios, basePath);
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

var OrganisationsApi = /*#__PURE__*/function (_BaseAPI7) {
  _inherits(OrganisationsApi, _BaseAPI7);

  var _super7 = _createSuper(OrganisationsApi);

  function OrganisationsApi() {
    _classCallCheck(this, OrganisationsApi);

    return _super7.apply(this, arguments);
  }

  _createClass(OrganisationsApi, [{
    key: "accountGetPlan",

    /**
     * 
     * @summary Get\'s an Organisation\'s plan information.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */
    value: function accountGetPlan(id, options) {
      return OrganisationsApiFp(this.configuration).accountGetPlan(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s an Organisation\'s account information.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "accountRead",
    value: function accountRead(id, options) {
      return OrganisationsApiFp(this.configuration).accountRead(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a new Organisation. This will assign the logged in user to the organisation.
     * @param {Organisation} organisation Information of the new Organisation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsCreate",
    value: function organisationsCreate(organisation, options) {
      return OrganisationsApiFp(this.configuration).organisationsCreate(organisation, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes an organisation.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsDelete",
    value: function organisationsDelete(id, options) {
      return OrganisationsApiFp(this.configuration).organisationsDelete(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets an organisation\'s details.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsRead",
    value: function organisationsRead(id, options) {
      return OrganisationsApiFp(this.configuration).organisationsRead(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Gets an organisation\'s invitations.
     * @param {string} id Organisation Id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsReadInvitations",
    value: function organisationsReadInvitations(id, options) {
      return OrganisationsApiFp(this.configuration).organisationsReadInvitations(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s a list of an Organisation\'s Terms of Use.
     * @param {string} id The Id of the Organisation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsTermsOfUseRead",
    value: function organisationsTermsOfUseRead(id, options) {
      return OrganisationsApiFp(this.configuration).organisationsTermsOfUseRead(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Updates an organisation.
     * @param {string} id Organisation Id.
     * @param {Organisation} organisation Organisation Information. All fields are updated.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationsApi
     */

  }, {
    key: "organisationsUpdate",
    value: function organisationsUpdate(id, organisation, options) {
      return OrganisationsApiFp(this.configuration).organisationsUpdate(id, organisation, options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest, options) {
      var localVarAxiosArgs = PermissionApiAxiosParamCreator(configuration).permissionGetPermissions(permissionsRequest, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    permissionGetPermissions: function permissionGetPermissions(permissionsRequest, options) {
      return PermissionApiFp(configuration).permissionGetPermissions(permissionsRequest, options)(axios, basePath);
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

var PermissionApi = /*#__PURE__*/function (_BaseAPI8) {
  _inherits(PermissionApi, _BaseAPI8);

  var _super8 = _createSuper(PermissionApi);

  function PermissionApi() {
    _classCallCheck(this, PermissionApi);

    return _super8.apply(this, arguments);
  }

  _createClass(PermissionApi, [{
    key: "permissionGetPermissions",

    /**
     * 
     * @summary The permission level for each object id in the request.
     * @param {PermissionsRequest} permissionsRequest A request object containing the list of ids to check.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermissionApi
     */
    value: function permissionGetPermissions(permissionsRequest, options) {
      return PermissionApiFp(this.configuration).permissionGetPermissions(permissionsRequest, options)(this.axios, this.basePath);
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
     * @param {string} [term] Gets or sets the free text search term.
     * @param {string} [labels] Gets or sets the comma separated labels that must be included in results.
     * @param {string} [orgId] Gets or sets the Organisation ID for the Amphora.
     * @param {number} [lat] Gets or sets the latitude (center of search area).
     * @param {number} [lon] Gets or sets the longitude (center of search area).
     * @param {number} [dist] Gets or sets the distance from center of search area (describing a circle).
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip) {
      var options = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
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
        localVarQueryParameter['Term'] = term;
      }

      if (labels !== undefined) {
        localVarQueryParameter['Labels'] = labels;
      }

      if (orgId !== undefined) {
        localVarQueryParameter['OrgId'] = orgId;
      }

      if (lat !== undefined) {
        localVarQueryParameter['Lat'] = lat;
      }

      if (lon !== undefined) {
        localVarQueryParameter['Lon'] = lon;
      }

      if (dist !== undefined) {
        localVarQueryParameter['Dist'] = dist;
      }

      if (take !== undefined) {
        localVarQueryParameter['Take'] = take;
      }

      if (skip !== undefined) {
        localVarQueryParameter['Skip'] = skip;
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
     * @param {string} [term] Gets or sets the free text search term.
     * @param {string} [labels] Gets or sets the comma separated labels that must be included in results.
     * @param {string} [orgId] Gets or sets the Organisation ID for the Amphora.
     * @param {number} [lat] Gets or sets the latitude (center of search area).
     * @param {number} [lon] Gets or sets the longitude (center of search area).
     * @param {number} [dist] Gets or sets the distance from center of search area (describing a circle).
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term, options) {
      var localVarAxiosArgs = SearchApiAxiosParamCreator(configuration).searchSearchOrganisations(term, options);
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
     * @param {string} [term] Gets or sets the free text search term.
     * @param {string} [labels] Gets or sets the comma separated labels that must be included in results.
     * @param {string} [orgId] Gets or sets the Organisation ID for the Amphora.
     * @param {number} [lat] Gets or sets the latitude (center of search area).
     * @param {number} [lon] Gets or sets the longitude (center of search area).
     * @param {number} [dist] Gets or sets the distance from center of search area (describing a circle).
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchAmphorae: function searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options) {
      return SearchApiFp(configuration).searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options)(axios, basePath);
    },

    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSearchOrganisations: function searchSearchOrganisations(term, options) {
      return SearchApiFp(configuration).searchSearchOrganisations(term, options)(axios, basePath);
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

var SearchApi = /*#__PURE__*/function (_BaseAPI9) {
  _inherits(SearchApi, _BaseAPI9);

  var _super9 = _createSuper(SearchApi);

  function SearchApi() {
    _classCallCheck(this, SearchApi);

    return _super9.apply(this, arguments);
  }

  _createClass(SearchApi, [{
    key: "searchSearchAmphorae",

    /**
     * 
     * @summary Searches for Amphorae.
     * @param {string} [term] Gets or sets the free text search term.
     * @param {string} [labels] Gets or sets the comma separated labels that must be included in results.
     * @param {string} [orgId] Gets or sets the Organisation ID for the Amphora.
     * @param {number} [lat] Gets or sets the latitude (center of search area).
     * @param {number} [lon] Gets or sets the longitude (center of search area).
     * @param {number} [dist] Gets or sets the distance from center of search area (describing a circle).
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    value: function searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options) {
      return SearchApiFp(this.configuration).searchSearchAmphorae(term, labels, orgId, lat, lon, dist, take, skip, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Searches for Organisations with fuzzy search.
     * @param {string} [term] Search Term.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */

  }, {
    key: "searchSearchOrganisations",
    value: function searchSearchOrganisations(term, options) {
      return SearchApiFp(this.configuration).searchSearchOrganisations(term, options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(take, skip) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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

      if (take !== undefined) {
        localVarQueryParameter['Take'] = take;
      }

      if (skip !== undefined) {
        localVarQueryParameter['Skip'] = skip;
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseAccept(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseCreate(createTermsOfUse, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseDelete(id, options);
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
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(take, skip, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseList(take, skip, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id, options) {
      var localVarAxiosArgs = TermsOfUseApiAxiosParamCreator(configuration).termsOfUseRead(id, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseAccept: function termsOfUseAccept(id, options) {
      return TermsOfUseApiFp(configuration).termsOfUseAccept(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseCreate: function termsOfUseCreate(createTermsOfUse, options) {
      return TermsOfUseApiFp(configuration).termsOfUseCreate(createTermsOfUse, options)(axios, basePath);
    },

    /**
     * 
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseDelete: function termsOfUseDelete(id, options) {
      return TermsOfUseApiFp(configuration).termsOfUseDelete(id, options)(axios, basePath);
    },

    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseList: function termsOfUseList(take, skip, options) {
      return TermsOfUseApiFp(configuration).termsOfUseList(take, skip, options)(axios, basePath);
    },

    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    termsOfUseRead: function termsOfUseRead(id, options) {
      return TermsOfUseApiFp(configuration).termsOfUseRead(id, options)(axios, basePath);
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

var TermsOfUseApi = /*#__PURE__*/function (_BaseAPI10) {
  _inherits(TermsOfUseApi, _BaseAPI10);

  var _super10 = _createSuper(TermsOfUseApi);

  function TermsOfUseApi() {
    _classCallCheck(this, TermsOfUseApi);

    return _super10.apply(this, arguments);
  }

  _createClass(TermsOfUseApi, [{
    key: "termsOfUseAccept",

    /**
     * 
     * @summary Accepts a Terms of Use.
     * @param {string} id The Terms of Use id.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */
    value: function termsOfUseAccept(id, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseAccept(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Creates a Terms of Use object.
     * @param {CreateTermsOfUse} createTermsOfUse The terms of use to create.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseCreate",
    value: function termsOfUseCreate(createTermsOfUse, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseCreate(createTermsOfUse, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Deletes a Terms of Use object.
     * @param {string} id The terms of use id to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseDelete",
    value: function termsOfUseDelete(id, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseDelete(id, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {number} [take] Gets or sets how many files to return. Defaults to 64.
     * @param {number} [skip] Gets or sets how many files to skip before returning. Defaults to 0.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseList",
    value: function termsOfUseList(take, skip, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseList(take, skip, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Returns all Terms of Use.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsOfUseApi
     */

  }, {
    key: "termsOfUseRead",
    value: function termsOfUseRead(id, options) {
      return TermsOfUseApiFp(this.configuration).termsOfUseRead(id, options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest, options) {
      var localVarAxiosArgs = TimeSeriesApiAxiosParamCreator(configuration).timeSeriesQueryTimeSeries(queryRequest, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    timeSeriesQueryTimeSeries: function timeSeriesQueryTimeSeries(queryRequest, options) {
      return TimeSeriesApiFp(configuration).timeSeriesQueryTimeSeries(queryRequest, options)(axios, basePath);
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

var TimeSeriesApi = /*#__PURE__*/function (_BaseAPI11) {
  _inherits(TimeSeriesApi, _BaseAPI11);

  var _super11 = _createSuper(TimeSeriesApi);

  function TimeSeriesApi() {
    _classCallCheck(this, TimeSeriesApi);

    return _super11.apply(this, arguments);
  }

  _createClass(TimeSeriesApi, [{
    key: "timeSeriesQueryTimeSeries",

    /**
     * 
     * @summary Updates the details of an Amphora by Id.
     * @param {QueryRequest} queryRequest Time Series query. See https://github.com/microsoft/tsiclient/blob/master/docs/Server.md#functions .
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeSeriesApi
     */
    value: function timeSeriesQueryTimeSeries(queryRequest, options) {
      return TimeSeriesApiFp(this.configuration).timeSeriesQueryTimeSeries(queryRequest, options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser, options) {
      var localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).usersCreate(createAmphoraUser, options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf(options) {
      var localVarAxiosArgs = UsersApiAxiosParamCreator(configuration).usersReadSelf(options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersCreate: function usersCreate(createAmphoraUser, options) {
      return UsersApiFp(configuration).usersCreate(createAmphoraUser, options)(axios, basePath);
    },

    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    usersReadSelf: function usersReadSelf(options) {
      return UsersApiFp(configuration).usersReadSelf(options)(axios, basePath);
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

var UsersApi = /*#__PURE__*/function (_BaseAPI12) {
  _inherits(UsersApi, _BaseAPI12);

  var _super12 = _createSuper(UsersApi);

  function UsersApi() {
    _classCallCheck(this, UsersApi);

    return _super12.apply(this, arguments);
  }

  _createClass(UsersApi, [{
    key: "usersCreate",

    /**
     * 
     * @summary Creates a new User. Returns the password.
     * @param {CreateAmphoraUser} createAmphoraUser User parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    value: function usersCreate(createAmphoraUser, options) {
      return UsersApiFp(this.configuration).usersCreate(createAmphoraUser, options)(this.axios, this.basePath);
    }
    /**
     * 
     * @summary Get\'s logged in users information.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */

  }, {
    key: "usersReadSelf",
    value: function usersReadSelf(options) {
      return UsersApiFp(this.configuration).usersReadSelf(options)(this.axios, this.basePath);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion(options) {
      var localVarAxiosArgs = VersionApiAxiosParamCreator(configuration).versionGetCurrentVersion(options);
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionGetCurrentVersion: function versionGetCurrentVersion(options) {
      return VersionApiFp(configuration).versionGetCurrentVersion(options)(axios, basePath);
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

var VersionApi = /*#__PURE__*/function (_BaseAPI13) {
  _inherits(VersionApi, _BaseAPI13);

  var _super13 = _createSuper(VersionApi);

  function VersionApi() {
    _classCallCheck(this, VersionApi);

    return _super13.apply(this, arguments);
  }

  _createClass(VersionApi, [{
    key: "versionGetCurrentVersion",

    /**
     * 
     * @summary Get\'s the current server version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionApi
     */
    value: function versionGetCurrentVersion(options) {
      return VersionApiFp(this.configuration).versionGetCurrentVersion(options)(this.axios, this.basePath);
    }
  }]);

  return VersionApi;
}(_base.BaseAPI);

exports.VersionApi = VersionApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nkay9hcGkudHMiXSwibmFtZXMiOlsiUGxhblR5cGVzIiwiQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwiY29uZmlndXJhdGlvbiIsImFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eSIsImNyZWF0ZUFjdGl2aXR5Iiwib3B0aW9ucyIsInVuZGVmaW5lZCIsIlJlcXVpcmVkRXJyb3IiLCJsb2NhbFZhclBhdGgiLCJsb2NhbFZhclVybE9iaiIsImdsb2JhbEltcG9ydFVybCIsInBhcnNlIiwiYmFzZU9wdGlvbnMiLCJsb2NhbFZhclJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwibG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIiLCJsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyIiwiYXBpS2V5IiwibG9jYWxWYXJBcGlLZXlWYWx1ZSIsInF1ZXJ5Iiwic2VhcmNoIiwiaGVhZGVycyIsIm5lZWRzU2VyaWFsaXphdGlvbiIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwiZm9ybWF0IiwiYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5IiwiaWQiLCJyZXBsYWNlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU3RyaW5nIiwiYWN0aXZpdGllc1JlYWRBY3Rpdml0eSIsImFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhIiwicnVuSWQiLCJhbXBob3JhSWQiLCJhbXBob3JhUmVmZXJlbmNlIiwiYWN0aXZpdGllc1N0YXJ0UnVuIiwiYWN0aXZpdGllc1VwZGF0ZVJ1biIsInVwZGF0ZVJ1biIsIkFjdGl2aXRpZXNBcGlGcCIsImxvY2FsVmFyQXhpb3NBcmdzIiwiYXhpb3MiLCJnbG9iYWxBeGlvcyIsImJhc2VQYXRoIiwiQkFTRV9QQVRIIiwiYXhpb3NSZXF1ZXN0QXJncyIsInJlcXVlc3QiLCJBY3Rpdml0aWVzQXBpRmFjdG9yeSIsIkFjdGl2aXRpZXNBcGkiLCJCYXNlQVBJIiwiQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvciIsImFtcGhvcmFRdWFsaXR5R2V0IiwiYW1waG9yYVF1YWxpdHlTZXQiLCJxdWFsaXR5IiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbCIsImFsbEFjY2Vzc1J1bGUiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uIiwib3JnYW5pc2F0aW9uQWNjZXNzUnVsZSIsImFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyIiwidXNlckFjY2Vzc1J1bGUiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlIiwicnVsZUlkIiwiYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMiLCJhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzIiwiYW1waG9yYWVDcmVhdGUiLCJjcmVhdGVBbXBob3JhIiwiYW1waG9yYWVEZWxldGUiLCJhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QiLCJmaWxlIiwiYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUiLCJhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlIiwiYW1waG9yYWVGaWxlc0xpc3RGaWxlcyIsIm9yZGVyQnkiLCJwcmVmaXgiLCJ0YWtlIiwic2tpcCIsImFtcGhvcmFlRmlsZXNRdWVyeUZpbGVzIiwiZmlsZVF1ZXJ5T3B0aW9ucyIsImFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMiLCJhbXBob3JhZUZpbGVzV3JpdGVGaWxlQXR0cmlidXRlcyIsInJlcXVlc3RCb2R5IiwiYW1waG9yYWVMaXN0Iiwic2NvcGUiLCJhY2Nlc3NUeXBlIiwiYW1waG9yYWVSZWFkIiwiYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsIiwiY3JlYXRlU2lnbmFsIiwiYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsIiwicHJvcGVydHkiLCJhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzIiwiYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsIiwic2lnbmFsSWQiLCJ1cGRhdGVTaWduYWwiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwiLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyIiwiYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2giLCJhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIiLCJhbXBob3JhZVVwZGF0ZSIsImVkaXRBbXBob3JhIiwicHVyY2hhc2VzUHVyY2hhc2UiLCJBbXBob3JhZUFwaUZwIiwiQW1waG9yYWVBcGlGYWN0b3J5IiwiQW1waG9yYWVBcGkiLCJBcHBsaWNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvciIsImFwcGxpY2F0aW9uc0NyZWF0ZUFwcGxpY2F0aW9uIiwiY3JlYXRlQXBwbGljYXRpb24iLCJhcHBsaWNhdGlvbnNEZWxldGVBcHBsaWNhdGlvbiIsImFwcGxpY2F0aW9uc1JlYWRBcHBsaWNhdGlvbiIsImFwcGxpY2F0aW9uc1VwZGF0ZUFwcGxpY2F0aW9uIiwidXBkYXRlQXBwbGljYXRpb24iLCJBcHBsaWNhdGlvbnNBcGlGcCIsIkFwcGxpY2F0aW9uc0FwaUZhY3RvcnkiLCJBcHBsaWNhdGlvbnNBcGkiLCJBdXRoZW50aWNhdGlvbkFwaUF4aW9zUGFyYW1DcmVhdG9yIiwiYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4iLCJsb2dpblJlcXVlc3QiLCJBdXRoZW50aWNhdGlvbkFwaUZwIiwiQXV0aGVudGljYXRpb25BcGlGYWN0b3J5IiwiQXV0aGVudGljYXRpb25BcGkiLCJHZW9BcGlBeGlvc1BhcmFtQ3JlYXRvciIsImdlb0xvb2t1cExvY2F0aW9uIiwiR2VvQXBpRnAiLCJHZW9BcGlGYWN0b3J5IiwiR2VvQXBpIiwiSWRlbnRpdHlBcGlBeGlvc1BhcmFtQ3JlYXRvciIsImlkZW50aXR5R2V0IiwiSWRlbnRpdHlBcGlGcCIsIklkZW50aXR5QXBpRmFjdG9yeSIsIklkZW50aXR5QXBpIiwiT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwiYWNjb3VudEdldFBsYW4iLCJhY2NvdW50UmVhZCIsIm9yZ2FuaXNhdGlvbnNDcmVhdGUiLCJvcmdhbmlzYXRpb24iLCJvcmdhbmlzYXRpb25zRGVsZXRlIiwib3JnYW5pc2F0aW9uc1JlYWQiLCJvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zIiwib3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkIiwib3JnYW5pc2F0aW9uc1VwZGF0ZSIsIk9yZ2FuaXNhdGlvbnNBcGlGcCIsIk9yZ2FuaXNhdGlvbnNBcGlGYWN0b3J5IiwiT3JnYW5pc2F0aW9uc0FwaSIsIlBlcm1pc3Npb25BcGlBeGlvc1BhcmFtQ3JlYXRvciIsInBlcm1pc3Npb25HZXRQZXJtaXNzaW9ucyIsInBlcm1pc3Npb25zUmVxdWVzdCIsIlBlcm1pc3Npb25BcGlGcCIsIlBlcm1pc3Npb25BcGlGYWN0b3J5IiwiUGVybWlzc2lvbkFwaSIsIlNlYXJjaEFwaUF4aW9zUGFyYW1DcmVhdG9yIiwic2VhcmNoU2VhcmNoQW1waG9yYWUiLCJ0ZXJtIiwibGFiZWxzIiwib3JnSWQiLCJsYXQiLCJsb24iLCJkaXN0Iiwic2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyIsIlNlYXJjaEFwaUZwIiwiU2VhcmNoQXBpRmFjdG9yeSIsIlNlYXJjaEFwaSIsIlRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvciIsInRlcm1zT2ZVc2VBY2NlcHQiLCJ0ZXJtc09mVXNlQ3JlYXRlIiwiY3JlYXRlVGVybXNPZlVzZSIsInRlcm1zT2ZVc2VEZWxldGUiLCJ0ZXJtc09mVXNlTGlzdCIsInRlcm1zT2ZVc2VSZWFkIiwiVGVybXNPZlVzZUFwaUZwIiwiVGVybXNPZlVzZUFwaUZhY3RvcnkiLCJUZXJtc09mVXNlQXBpIiwiVGltZVNlcmllc0FwaUF4aW9zUGFyYW1DcmVhdG9yIiwidGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyIsInF1ZXJ5UmVxdWVzdCIsIlRpbWVTZXJpZXNBcGlGcCIsIlRpbWVTZXJpZXNBcGlGYWN0b3J5IiwiVGltZVNlcmllc0FwaSIsIlVzZXJzQXBpQXhpb3NQYXJhbUNyZWF0b3IiLCJ1c2Vyc0NyZWF0ZSIsImNyZWF0ZUFtcGhvcmFVc2VyIiwidXNlcnNSZWFkU2VsZiIsIlVzZXJzQXBpRnAiLCJVc2Vyc0FwaUZhY3RvcnkiLCJVc2Vyc0FwaSIsIlZlcnNpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciIsInZlcnNpb25HZXRDdXJyZW50VmVyc2lvbiIsIlZlcnNpb25BcGlGcCIsIlZlcnNpb25BcGlGYWN0b3J5IiwiVmVyc2lvbkFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWNBOztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwb0RBOzs7OztJQUtZQSxTO0FBTVo7Ozs7Ozs7O1dBTllBLFM7QUFBQUEsRUFBQUEsUyxDQUFBQSxTO0FBQUFBLEVBQUFBLFMsQ0FBQUEsUztBQUFBQSxFQUFBQSxTLENBQUFBLFM7R0FBQUEsUyx5QkFBQUEsUzs7QUFna0JaOzs7O0FBSU8sSUFBTUMsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQyxDQUFVQyxhQUFWLEVBQXlDO0FBQ25GLFNBQU87QUFDSDs7Ozs7OztBQU9BQyxJQUFBQSx3QkFSRyxvQ0FRc0JDLGNBUnRCLEVBUXNGO0FBQUEsVUFBaENDLE9BQWdDLHVFQUFqQixFQUFpQjs7QUFDckY7QUFDQSxVQUFJRCxjQUFjLEtBQUssSUFBbkIsSUFBMkJBLGNBQWMsS0FBS0UsU0FBbEQsRUFBNkQ7QUFDekQsY0FBTSxJQUFJQyxtQkFBSixDQUFrQixnQkFBbEIsRUFBbUMsZ0dBQW5DLENBQU47QUFDSDs7QUFDRCxVQUFNQyxZQUFZLG9CQUFsQjtBQUNBLFVBQU1DLGNBQWMsR0FBR0MsZUFBZSxDQUFDQyxLQUFoQixDQUFzQkgsWUFBdEIsRUFBb0MsSUFBcEMsQ0FBdkI7QUFDQSxVQUFJSSxXQUFKOztBQUNBLFVBQUlWLGFBQUosRUFBbUI7QUFDZlUsUUFBQUEsV0FBVyxHQUFHVixhQUFhLENBQUNVLFdBQTVCO0FBQ0g7O0FBQ0QsVUFBTUMsc0JBQXNCO0FBQUtDLFFBQUFBLE1BQU0sRUFBRTtBQUFi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QUFQO0FBZUgsQ0FoQk07QUFrQlA7Ozs7Ozs7O0FBSU8sSUFBTThJLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBVTNMLGFBQVYsRUFBeUMyQyxRQUF6QyxFQUE0REYsS0FBNUQsRUFBbUY7QUFDaEgsU0FBTztBQUNIOzs7Ozs7QUFNQWdKLElBQUFBLHdCQVBHLG9DQU9zQnRMLE9BUHRCLEVBT3FDO0FBQ3BDLGFBQU91TCxZQUFZLENBQUMxTCxhQUFELENBQVosQ0FBNEJ5TCx3QkFBNUIsQ0FBcUR0TCxPQUFyRCxFQUE4RHNDLEtBQTlELEVBQXFFRSxRQUFyRSxDQUFQO0FBQ0g7QUFURSxHQUFQO0FBV0gsQ0FaTTtBQWNQOzs7Ozs7Ozs7O0lBTWFpSixVOzs7Ozs7Ozs7Ozs7OztBQUNUOzs7Ozs7OzZDQU9nQ3pMLE8sRUFBZTtBQUMzQyxhQUFPdUwsWUFBWSxDQUFDLEtBQUsxTCxhQUFOLENBQVosQ0FBaUN5TCx3QkFBakMsQ0FBMER0TCxPQUExRCxFQUFtRSxLQUFLc0MsS0FBeEUsRUFBK0UsS0FBS0UsUUFBcEYsQ0FBUDtBQUNIOzs7O0VBVjJCTSxhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGVcbi8qKlxuICogQW1waG9yYSBEYXRhXG4gKiAgICAgICAgICAgICAgQ29ubmVjdCBpbmZvcm1hdGlvbiBpbiByZWFsIHRpbWUgd2l0aCBBbXBob3JhIERhdGEuICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBtb3JlIGF0IGh0dHBzOi8vZG9jcy5hbXBob3JhZGF0YS5jb21cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMC4xMC4xNVxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0ICogYXMgZ2xvYmFsSW1wb3J0VXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCBnbG9iYWxBeGlvcywgeyBBeGlvc1Byb21pc2UsIEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG4vLyBTb21lIGltcG9ydHMgbm90IHVzZWQgZGVwZW5kaW5nIG9uIHRlbXBsYXRlIGNvbmRpdGlvbnNcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IEJBU0VfUEFUSCwgQ09MTEVDVElPTl9GT1JNQVRTLCBSZXF1ZXN0QXJncywgQmFzZUFQSSwgUmVxdWlyZWRFcnJvciB9IGZyb20gJy4vYmFzZSc7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjY2Vzc0xldmVsUXVlcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NMZXZlbFF1ZXJ5IHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgVGhlIGlkIG9mIHRoZSBBbXBob3JhIHlvdSBhcmUgY2hlY2tpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzTGV2ZWxRdWVyeVxuICAgICAqL1xuICAgIGFtcGhvcmFJZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBhY2Nlc3MgbGV2ZWwgdGhhdCB3aWxsIGJlIGNoZWNrZWQuIFJhbmdlcyBmcm9tIDAgKG5vbmUpIHRvIDI1NiAoQWRtaW5pc3RlcikuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzTGV2ZWxRdWVyeVxuICAgICAqL1xuICAgIGFjY2Vzc0xldmVsPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWNjZXNzTGV2ZWxSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0xldmVsUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBUaGUgaWQgb2YgdGhlIEFtcGhvcmEgeW91IGFyZSBjaGVja2luZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NMZXZlbFJlc3BvbnNlXG4gICAgICovXG4gICAgYW1waG9yYUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGFjY2VzcyBsZXZlbCB0aGF0IHdpbGwgYmUgY2hlY2tlZC4gUmFuZ2VzIGZyb20gMCAobm9uZSkgdG8gMjU2IChBZG1pbmlzdGVyKS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NMZXZlbFJlc3BvbnNlXG4gICAgICovXG4gICAgYWNjZXNzTGV2ZWw/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIGlzIGF1dGhvcml6ZWQgYXQgdGhhdCBsZXZlbC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQWNjZXNzTGV2ZWxSZXNwb25zZVxuICAgICAqL1xuICAgIGlzQXV0aG9yaXplZD86IGJvb2xlYW47XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY2Nlc3NMZXZlbFJlc3BvbnNlQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NMZXZlbFJlc3BvbnNlQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciBpcyBhdXRob3JpemVkIGF0IHRoYXQgbGV2ZWwuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEFjY2Vzc0xldmVsUmVzcG9uc2VBbGxPZlxuICAgICAqL1xuICAgIGlzQXV0aG9yaXplZD86IGJvb2xlYW47XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBY2Nlc3NSdWxlRHRvQmFzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc1J1bGVEdG9CYXNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIGFsbG93T3JEZW55Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBY2Nlc3NSdWxlRHRvQmFzZVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWNjb3VudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFjY291bnRcbiAgICAgKi9cbiAgICBiYWxhbmNlPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWN0aXZpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWN0aXZpdHlcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5XG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5XG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxSdW4+fVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eVxuICAgICAqL1xuICAgIHJ1bnM/OiBBcnJheTxSdW4+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFjdGl2aXR5QWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0eUFsbE9mXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJ1bj59XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXR5QWxsT2ZcbiAgICAgKi9cbiAgICBydW5zPzogQXJyYXk8UnVuPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBZGRyZXNzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIHN0cmVldE51bWJlcj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIHN0cmVldE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBtdW5pY2lwYWxpdHlTdWJkaXZpc2lvbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIG11bmljaXBhbGl0eT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGNvdW50cnlTZWNvbmRhcnlTdWJkaXZpc2lvbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGNvdW50cnlTdWJkaXZpc2lvbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIHBvc3RhbENvZGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5Q29kZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWRkcmVzc1xuICAgICAqL1xuICAgIGNvdW50cnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBjb3VudHJ5Q29kZUlzbzM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBmcmVlZm9ybUFkZHJlc3M/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFkZHJlc3NcbiAgICAgKi9cbiAgICBsb2NhbE5hbWU/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQWdncmVnYXRlU2VyaWVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRlU2VyaWVzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8b2JqZWN0Pn1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgdGltZVNlcmllc0lkPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGVUaW1lUmFuZ2V9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIHNlYXJjaFNwYW4/OiBEYXRlVGltZVJhbmdlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFnZ3JlZ2F0ZVNlcmllc1xuICAgICAqL1xuICAgIGludGVydmFsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVTZXJpZXNcbiAgICAgKi9cbiAgICBwcm9qZWN0ZWRWYXJpYWJsZXM/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfX1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlU2VyaWVzXG4gICAgICovXG4gICAgaW5saW5lVmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBWYXJpYWJsZTsgfSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBZ2dyZWdhdGVWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZVZhcmlhYmxlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBBZ2dyZWdhdGVWYXJpYWJsZVxuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgQWdncmVnYXRlVmFyaWFibGVcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGlvbj86IFRzeCB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBbGxBY2Nlc3NSdWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxsQWNjZXNzUnVsZSBleHRlbmRzIEFjY2Vzc1J1bGVEdG9CYXNlIHtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFtcGhvcmFSZWZlcmVuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbXBob3JhUmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhUmVmZXJlbmNlXG4gICAgICovXG4gICAgYW1waG9yYUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhUmVmZXJlbmNlXG4gICAgICovXG4gICAgZmlsZXNDb25zdW1lZD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVJlZmVyZW5jZVxuICAgICAqL1xuICAgIGZpbGVzUHJvZHVjZWQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFSZWZlcmVuY2VcbiAgICAgKi9cbiAgICBzaWduYWxzQ29uc3VtZWQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFSZWZlcmVuY2VcbiAgICAgKi9cbiAgICBzaWduYWxzUHJvZHVjZWQ/OiBudW1iZXIgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQW1waG9yYVVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbXBob3JhVXNlciB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBwaG9uZU51bWJlcj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBhYm91dD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBmdWxsTmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZSB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBBbXBob3JhVXNlckFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1waG9yYVVzZXJBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFVc2VyQWxsT2ZcbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYVVzZXJBbGxPZlxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGUgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQXBwTG9jYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBMb2NhdGlvbiB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBleHBlY3RlZCBvcmlnaW4gZnJvbSBhIFhNTEh0dHBSZXF1ZXN0IE11c3Qgbm90IGVuZCBpbiBcXCcvXFwnLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFwcExvY2F0aW9uXG4gICAgICovXG4gICAgb3JpZ2luPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYWxsb3dlZCByZWRpcmVjdHMgYWZ0ZXIgbG9naW4sIHJlbGF0aXZlIHRvIE9yaWdpbi4gTXVzdCBiZWdpbiB3aXRoIGEgXFwnL1xcJy5cbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgQXBwTG9jYXRpb25cbiAgICAgKi9cbiAgICBhbGxvd2VkUmVkaXJlY3RQYXRocz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYWxsb3dlZCByZWRpcmVjdCBhZnRlciBsb2dvdXQuIE11c3QgYmUgYW4gYWJzb2x1dGUgdXJsLlxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBBcHBMb2NhdGlvblxuICAgICAqL1xuICAgIHBvc3RMb2dvdXRSZWRpcmVjdHM/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBcHBMb2NhdGlvblxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFwcExvY2F0aW9uQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBMb2NhdGlvbkFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBcHBMb2NhdGlvbkFsbE9mXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQXBwTG9jYXRpb25CYXNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTG9jYXRpb25CYXNlIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGV4cGVjdGVkIG9yaWdpbiBmcm9tIGEgWE1MSHR0cFJlcXVlc3QgTXVzdCBub3QgZW5kIGluIFxcJy9cXCcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQXBwTG9jYXRpb25CYXNlXG4gICAgICovXG4gICAgb3JpZ2luPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYWxsb3dlZCByZWRpcmVjdHMgYWZ0ZXIgbG9naW4sIHJlbGF0aXZlIHRvIE9yaWdpbi4gTXVzdCBiZWdpbiB3aXRoIGEgXFwnL1xcJy5cbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgQXBwTG9jYXRpb25CYXNlXG4gICAgICovXG4gICAgYWxsb3dlZFJlZGlyZWN0UGF0aHM/OiBBcnJheTxzdHJpbmc+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGFsbG93ZWQgcmVkaXJlY3QgYWZ0ZXIgbG9nb3V0LiBNdXN0IGJlIGFuIGFic29sdXRlIHVybC5cbiAgICAgKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKiBAbWVtYmVyb2YgQXBwTG9jYXRpb25CYXNlXG4gICAgICovXG4gICAgcG9zdExvZ291dFJlZGlyZWN0cz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBuYW1lIG9mIHlvdXIgYXBwbGljYXRpb24uIFdpbGwgYmUgc2hvd24gb24gdGhlIGNvbnNlbnQgcGFnZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvblxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIHVybCBmb3IgZnJvbnQgY2hhbm5lbCBIVFRQIGxvZ291dHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBsb2dvdXRVcmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIGNvbGxlY3Rpb24gb2YgbG9jYXRpb25zIHlvdXIgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAgICogQHR5cGUge0FycmF5PEFwcExvY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBsb2NhdGlvbnM/OiBBcnJheTxBcHBMb2NhdGlvbj4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQXBwbGljYXRpb25BbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQWxsT2ZcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIGEgY29sbGVjdGlvbiBvZiBsb2NhdGlvbnMgeW91ciBhcHBsaWNhdGlvbiB3aWxsIHJ1bi5cbiAgICAgKiBAdHlwZSB7QXJyYXk8QXBwTG9jYXRpb24+fVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgbG9jYXRpb25zPzogQXJyYXk8QXBwTG9jYXRpb24+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEFwcGxpY2F0aW9uQmFzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uQmFzZSB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBuYW1lIG9mIHlvdXIgYXBwbGljYXRpb24uIFdpbGwgYmUgc2hvd24gb24gdGhlIGNvbnNlbnQgcGFnZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbkJhc2VcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSB1cmwgZm9yIGZyb250IGNoYW5uZWwgSFRUUCBsb2dvdXRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uQmFzZVxuICAgICAqL1xuICAgIGxvZ291dFVybD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNlQW1waG9yYVVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNlQW1waG9yYVVzZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBob25lTnVtYmVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBhYm91dD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZnVsbE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2VBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNpY0FtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FtcGhvcmEge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBvd25lclxcJ3Mgb3JnYW5pc2F0aW9uIElkLiBXaWxsIGJlIHNldCBieSB0aGUgc2VydmVyIHVwb24gY3JlYXRpb24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEJhc2ljQW1waG9yYVxuICAgICAqL1xuICAgIGxhYmVscz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFRoZSBiYXNpYyBtZXRhZGF0YSBvZiBhbiBBbXBob3JhLlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBCYXNpY0FtcGhvcmFBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljQW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG93bmVyXFwncyBvcmdhbmlzYXRpb24gSWQuIFdpbGwgYmUgc2V0IGJ5IHRoZSBzZXJ2ZXIgdXBvbiBjcmVhdGlvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBCYXNpY0FtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQmFzaWNBbXBob3JhQWxsT2ZcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQWN0aXZpdHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBY3Rpdml0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQWN0aXZpdHlcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBjcmVhdGVkRGF0ZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgb3duZXJcXCdzIG9yZ2FuaXNhdGlvbiBJZC4gV2lsbCBiZSBzZXQgYnkgdGhlIHNlcnZlciB1cG9uIGNyZWF0aW9uLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFcbiAgICAgKi9cbiAgICBvcmdhbmlzYXRpb25JZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgbGFiZWxzPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQW1waG9yYVVzZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgcGhvbmVOdW1iZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgYWJvdXQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZnVsbE5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQW1waG9yYVVzZXJcbiAgICAgKi9cbiAgICBjb25maXJtUGFzc3dvcmQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZUFtcGhvcmFVc2VyXG4gICAgICovXG4gICAgZW1haWw6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFtcGhvcmFVc2VyQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBbXBob3JhVXNlckFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgY29uZmlybVBhc3N3b3JkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBbXBob3JhVXNlckFsbE9mXG4gICAgICovXG4gICAgZW1haWw6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZUFwcExvY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlQXBwTG9jYXRpb24gZXh0ZW5kcyBBcHBMb2NhdGlvbkJhc2Uge1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVBcHBsaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBuYW1lIG9mIHlvdXIgYXBwbGljYXRpb24uIFdpbGwgYmUgc2hvd24gb24gdGhlIGNvbnNlbnQgcGFnZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVBcHBsaWNhdGlvblxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIHVybCBmb3IgZnJvbnQgY2hhbm5lbCBIVFRQIGxvZ291dHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBsb2dvdXRVcmw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIGNvbGxlY3Rpb24gb2YgbG9jYXRpb25zIHlvdXIgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAgICogQHR5cGUge0FycmF5PENyZWF0ZUFwcExvY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBsb2NhdGlvbnM/OiBBcnJheTxDcmVhdGVBcHBMb2NhdGlvbj4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgQ3JlYXRlQXBwbGljYXRpb25BbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFwcGxpY2F0aW9uQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIGNvbGxlY3Rpb24gb2YgbG9jYXRpb25zIHlvdXIgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAgICogQHR5cGUge0FycmF5PENyZWF0ZUFwcExvY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlQXBwbGljYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGxvY2F0aW9ucz86IEFycmF5PENyZWF0ZUFwcExvY2F0aW9uPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDcmVhdGVTaWduYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTaWduYWwge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZVNpZ25hbFxuICAgICAqL1xuICAgIHByb3BlcnR5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVTaWduYWxcbiAgICAgKi9cbiAgICB2YWx1ZVR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX1cbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXRlU2lnbmFsXG4gICAgICovXG4gICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIENyZWF0ZVRlcm1zT2ZVc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVUZXJtc09mVXNlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBDcmVhdGVUZXJtc09mVXNlXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIENyZWF0ZVRlcm1zT2ZVc2VcbiAgICAgKi9cbiAgICBjb250ZW50czogc3RyaW5nO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRGF0ZVRpbWVSYW5nZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUaW1lUmFuZ2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBEYXRlVGltZVJhbmdlXG4gICAgICovXG4gICAgZnJvbT86IERhdGU7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERhdGVUaW1lUmFuZ2VcbiAgICAgKi9cbiAgICB0bz86IERhdGU7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmEge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGNyZWF0ZWREYXRlPzogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBvd25lclxcJ3Mgb3JnYW5pc2F0aW9uIElkLiBXaWxsIGJlIHNldCBieSB0aGUgc2VydmVyIHVwb24gY3JlYXRpb24uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBwcmljZTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGxhYmVscz86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYXQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYVxuICAgICAqL1xuICAgIGxvbj86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRGV0YWlsZWRBbXBob3JhXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBwdXJjaGFzZUNvdW50PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFcbiAgICAgKi9cbiAgICBzaWduYWxDb3VudD86IG51bWJlciB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBEZXRhaWxlZEFtcGhvcmFBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERldGFpbGVkQW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEZXRhaWxlZEFtcGhvcmFBbGxPZlxuICAgICAqL1xuICAgIHB1cmNoYXNlQ291bnQ/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERldGFpbGVkQW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgc2lnbmFsQ291bnQ/OiBudW1iZXIgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRWRpdEFtcGhvcmFcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0QW1waG9yYSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgaXNEZWxldGVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG93bmVyXFwncyBvcmdhbmlzYXRpb24gSWQuIFdpbGwgYmUgc2V0IGJ5IHRoZSBzZXJ2ZXIgdXBvbiBjcmVhdGlvbi5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIG9yZ2FuaXNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIG5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIHByaWNlOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsYWJlbHM/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYVxuICAgICAqL1xuICAgIGxhdD86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgRWRpdEFtcGhvcmFcbiAgICAgKi9cbiAgICBsb24/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEVkaXRBbXBob3JhXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVkaXRBbXBob3JhQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFZGl0QW1waG9yYUFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFZGl0QW1waG9yYUFsbE9mXG4gICAgICovXG4gICAgdGVybXNPZlVzZUlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEVudGl0eVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBFbnRpdHlcbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgRW50aXR5XG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEV2ZW50UHJvcGVydHlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFdmVudFByb3BlcnR5IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBFdmVudFByb3BlcnR5XG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRXZlbnRQcm9wZXJ0eVxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRmlsZUxpc3RPcHRpb25zXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUxpc3RPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBGaWxlTGlzdE9wdGlvbnNcbiAgICAgKi9cbiAgICB0YWtlPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEZpbGVMaXN0T3B0aW9uc1xuICAgICAqL1xuICAgIHNraXA/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgdGhlIG9yZGVyQnkgcGFyYW1ldGVyLiBPcHRpb25zIGFyZSBBbHBoYWJldGljYWwgb3IgTGFzdE1vZGlmaWVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEZpbGVMaXN0T3B0aW9uc1xuICAgICAqL1xuICAgIG9yZGVyQnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIHByZWZpeCBmaWx0ZXIgZm9yIGFsbCBmaWxlIG5hbWVzLiBJcyBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBGaWxlTGlzdE9wdGlvbnNcbiAgICAgKi9cbiAgICBwcmVmaXg/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRmlsZUxpc3RPcHRpb25zQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlTGlzdE9wdGlvbnNBbGxPZiB7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0aGUgb3JkZXJCeSBwYXJhbWV0ZXIuIE9wdGlvbnMgYXJlIEFscGhhYmV0aWNhbCBvciBMYXN0TW9kaWZpZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRmlsZUxpc3RPcHRpb25zQWxsT2ZcbiAgICAgKi9cbiAgICBvcmRlckJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBwcmVmaXggZmlsdGVyIGZvciBhbGwgZmlsZSBuYW1lcy4gSXMgY2FzZSBzZW5zaXRpdmUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgRmlsZUxpc3RPcHRpb25zQWxsT2ZcbiAgICAgKi9cbiAgICBwcmVmaXg/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRmlsZVF1ZXJ5T3B0aW9uc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVRdWVyeU9wdGlvbnMge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEZpbGVRdWVyeU9wdGlvbnNcbiAgICAgKi9cbiAgICB0YWtlPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEZpbGVRdWVyeU9wdGlvbnNcbiAgICAgKi9cbiAgICBza2lwPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHRoZSBvcmRlckJ5IHBhcmFtZXRlci4gT3B0aW9ucyBhcmUgQWxwaGFiZXRpY2FsIG9yIExhc3RNb2RpZmllZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBGaWxlUXVlcnlPcHRpb25zXG4gICAgICovXG4gICAgb3JkZXJCeT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXRzIGEgcHJlZml4IGZpbHRlciBmb3IgYWxsIGZpbGUgbmFtZXMuIElzIGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEZpbGVRdWVyeU9wdGlvbnNcbiAgICAgKi9cbiAgICBwcmVmaXg/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYXR0cmlidXRlIGZpbHRlcnMuXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBGaWxlUXVlcnlPcHRpb25zXG4gICAgICovXG4gICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgd2hldGhlciBhbGwgYXR0cmlidXRlcyBhcmUgcmVxdWlyZWQgdG8gbWF0Y2guIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBGaWxlUXVlcnlPcHRpb25zXG4gICAgICovXG4gICAgYWxsQXR0cmlidXRlcz86IGJvb2xlYW47XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBGaWxlUXVlcnlPcHRpb25zQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlUXVlcnlPcHRpb25zQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgYXR0cmlidXRlIGZpbHRlcnMuXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBGaWxlUXVlcnlPcHRpb25zQWxsT2ZcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB3aGV0aGVyIGFsbCBhdHRyaWJ1dGVzIGFyZSByZXF1aXJlZCB0byBtYXRjaC4gRGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEZpbGVRdWVyeU9wdGlvbnNBbGxPZlxuICAgICAqL1xuICAgIGFsbEF0dHJpYnV0ZXM/OiBib29sZWFuO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgRnV6enlTZWFyY2hSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1enp5U2VhcmNoUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtTdW1tYXJ5fVxuICAgICAqIEBtZW1iZXJvZiBGdXp6eVNlYXJjaFJlc3BvbnNlXG4gICAgICovXG4gICAgc3VtbWFyeT86IFN1bW1hcnkgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxSZXN1bHQ+fVxuICAgICAqIEBtZW1iZXJvZiBGdXp6eVNlYXJjaFJlc3BvbnNlXG4gICAgICovXG4gICAgcmVzdWx0cz86IEFycmF5PFJlc3VsdD4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgR2V0RXZlbnRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2V0RXZlbnRzIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8b2JqZWN0Pn1cbiAgICAgKiBAbWVtYmVyb2YgR2V0RXZlbnRzXG4gICAgICovXG4gICAgdGltZVNlcmllc0lkPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGVUaW1lUmFuZ2V9XG4gICAgICogQG1lbWJlcm9mIEdldEV2ZW50c1xuICAgICAqL1xuICAgIHNlYXJjaFNwYW4/OiBEYXRlVGltZVJhbmdlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBmaWx0ZXI/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRFdmVudHNcbiAgICAgKi9cbiAgICBwcm9qZWN0ZWRQcm9wZXJ0aWVzPzogQXJyYXk8c3RyaW5nPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBHZXRTZXJpZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHZXRTZXJpZXMge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICB0aW1lU2VyaWVzSWQ/OiBBcnJheTxvYmplY3Q+IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZVRpbWVSYW5nZX1cbiAgICAgKiBAbWVtYmVyb2YgR2V0U2VyaWVzXG4gICAgICovXG4gICAgc2VhcmNoU3Bhbj86IERhdGVUaW1lUmFuZ2UgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PHN0cmluZz59XG4gICAgICogQG1lbWJlcm9mIEdldFNlcmllc1xuICAgICAqL1xuICAgIHByb2plY3RlZFZhcmlhYmxlcz86IEFycmF5PHN0cmluZz4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9fVxuICAgICAqIEBtZW1iZXJvZiBHZXRTZXJpZXNcbiAgICAgKi9cbiAgICBpbmxpbmVWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IFZhcmlhYmxlOyB9IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIEludml0YXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnZpdGF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBJbnZpdGF0aW9uXG4gICAgICovXG4gICAgdGFyZ2V0RW1haWw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBJbnZpdGF0aW9uXG4gICAgICovXG4gICAgdGFyZ2V0T3JnYW5pc2F0aW9uSWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIEludml0YXRpb25cbiAgICAgKi9cbiAgICBzdGF0ZT86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBMb2dpblJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVxdWVzdFxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgTG9naW5SZXF1ZXN0XG4gICAgICovXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE51bWVyaWNWYXJpYWJsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgZmlsdGVyPzogVHN4IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBOdW1lcmljVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1RzeH1cbiAgICAgKiBAbWVtYmVyb2YgTnVtZXJpY1ZhcmlhYmxlXG4gICAgICovXG4gICAgdmFsdWU/OiBUc3ggfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtUc3h9XG4gICAgICogQG1lbWJlcm9mIE51bWVyaWNWYXJpYWJsZVxuICAgICAqL1xuICAgIGFnZ3JlZ2F0aW9uPzogVHN4IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBpc0RlbGV0ZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgY3JlYXRlZERhdGU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25cbiAgICAgKi9cbiAgICB3ZWJzaXRlVXJsOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uXG4gICAgICovXG4gICAgYWRkcmVzcz86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgYWxsb3dPckRlbnk/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uQWNjZXNzUnVsZUFsbE9mXG4gICAgICovXG4gICAgb3JnYW5pc2F0aW9uSWQ6IHN0cmluZztcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9yZ2FuaXNhdGlvbkFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT3JnYW5pc2F0aW9uQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgYWJvdXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIHdlYnNpdGVVcmw6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGFnZWRSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VkUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBhZ2VkUmVzcG9uc2VcbiAgICAgKi9cbiAgICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQYWdpbmF0ZWRSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRlZFJlc3BvbnNlIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBQYWdpbmF0ZWRSZXNwb25zZVxuICAgICAqL1xuICAgIHRha2U/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byBza2lwIGJlZm9yZSByZXR1cm5pbmcuIERlZmF1bHRzIHRvIDAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUGFnaW5hdGVkUmVzcG9uc2VcbiAgICAgKi9cbiAgICBza2lwPzogbnVtYmVyIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBlcm1pc3Npb25zUmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PEFjY2Vzc0xldmVsUXVlcnk+fVxuICAgICAqIEBtZW1iZXJvZiBQZXJtaXNzaW9uc1JlcXVlc3RcbiAgICAgKi9cbiAgICBhY2Nlc3NRdWVyaWVzPzogQXJyYXk8QWNjZXNzTGV2ZWxRdWVyeT4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGVybWlzc2lvbnNSZXNwb25zZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zUmVzcG9uc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxBY2Nlc3NMZXZlbFJlc3BvbnNlPn1cbiAgICAgKiBAbWVtYmVyb2YgUGVybWlzc2lvbnNSZXNwb25zZVxuICAgICAqL1xuICAgIGFjY2Vzc1Jlc3BvbnNlcz86IEFycmF5PEFjY2Vzc0xldmVsUmVzcG9uc2U+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBsYW5JbmZvcm1hdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYW5JbmZvcm1hdGlvbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1BsYW5UeXBlc31cbiAgICAgKiBAbWVtYmVyb2YgUGxhbkluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcGxhblR5cGU/OiBQbGFuVHlwZXM7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxhbkluZm9ybWF0aW9uXG4gICAgICovXG4gICAgZnJpZW5kbHlOYW1lPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZW51bSBQbGFuVHlwZXMge1xuICAgIE5VTUJFUl8wID0gMCxcbiAgICBOVU1CRVJfMSA9IDEsXG4gICAgTlVNQkVSXzIgPSAyXG59XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBvc2l0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb24ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFBvc2l0aW9uXG4gICAgICovXG4gICAgbGF0PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFBvc2l0aW9uXG4gICAgICovXG4gICAgbG9uPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvYmxlbURldGFpbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9ibGVtRGV0YWlscyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBQcm9ibGVtRGV0YWlsc1xuICAgICAqL1xuICAgIHN0YXR1cz86IG51bWJlciB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBkZXRhaWw/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFByb2JsZW1EZXRhaWxzXG4gICAgICovXG4gICAgaW5zdGFuY2U/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX1cbiAgICAgKiBAbWVtYmVyb2YgUHJvYmxlbURldGFpbHNcbiAgICAgKi9cbiAgICBleHRlbnNpb25zPzogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eVZhbHVlcyB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUHJvcGVydHlWYWx1ZXNcbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc1xuICAgICAqL1xuICAgIHZhbHVlcz86IEFycmF5PG9iamVjdD4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUHJvcGVydHlWYWx1ZXNBbGxPZlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsdWVzQWxsT2Yge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxvYmplY3Q+fVxuICAgICAqIEBtZW1iZXJvZiBQcm9wZXJ0eVZhbHVlc0FsbE9mXG4gICAgICovXG4gICAgdmFsdWVzPzogQXJyYXk8b2JqZWN0PiB8IG51bGw7XG59XG4vKipcbiAqIFF1YWxpdHkgbWV0cmljcyBmb3IgYW4gQW1waG9yYSwgYmV0d2VlbiAxIGFuZCA0LlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWFsaXR5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVhbGl0eSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgUXVhbGl0eVxuICAgICAqL1xuICAgIGFjY3VyYWN5PzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBRdWFsaXR5XG4gICAgICovXG4gICAgY29tcGxldGVuZXNzPzogbnVtYmVyIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBRdWFsaXR5XG4gICAgICovXG4gICAgZ3JhbnVsYXJpdHk/OiBudW1iZXIgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFF1YWxpdHlcbiAgICAgKi9cbiAgICByZWxpYWJpbGl0eT86IG51bWJlciB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBRdWVyeVJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtHZXRFdmVudHN9XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVxdWVzdFxuICAgICAqL1xuICAgIGdldEV2ZW50cz86IEdldEV2ZW50cyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0dldFNlcmllc31cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXF1ZXN0XG4gICAgICovXG4gICAgZ2V0U2VyaWVzPzogR2V0U2VyaWVzIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QWdncmVnYXRlU2VyaWVzfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlcXVlc3RcbiAgICAgKi9cbiAgICBhZ2dyZWdhdGVTZXJpZXM/OiBBZ2dyZWdhdGVTZXJpZXMgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VcbiAgICAgKi9cbiAgICBjb250aW51YXRpb25Ub2tlbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PERhdGU+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VcbiAgICAgKi9cbiAgICB0aW1lc3RhbXBzPzogQXJyYXk8RGF0ZT4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxQcm9wZXJ0eVZhbHVlcz59XG4gICAgICogQG1lbWJlcm9mIFF1ZXJ5UmVzdWx0UGFnZVxuICAgICAqL1xuICAgIHByb3BlcnRpZXM/OiBBcnJheTxQcm9wZXJ0eVZhbHVlcz4gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUXVlcnlSZXN1bHRQYWdlQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlc3VsdFBhZ2VBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PERhdGU+fVxuICAgICAqIEBtZW1iZXJvZiBRdWVyeVJlc3VsdFBhZ2VBbGxPZlxuICAgICAqL1xuICAgIHRpbWVzdGFtcHM/OiBBcnJheTxEYXRlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFByb3BlcnR5VmFsdWVzPn1cbiAgICAgKiBAbWVtYmVyb2YgUXVlcnlSZXN1bHRQYWdlQWxsT2ZcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzPzogQXJyYXk8UHJvcGVydHlWYWx1ZXM+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUmVzdWx0XG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFJlc3VsdFxuICAgICAqL1xuICAgIHNjb3JlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBZGRyZXNzfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1Bvc2l0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBwb3NpdGlvbj86IFBvc2l0aW9uIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZXN1bHRcbiAgICAgKi9cbiAgICBpbmZvPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJ1blxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJ1biB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtWZXJzaW9uSW5mb31cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgdmVyc2lvbkluZm8/OiBWZXJzaW9uSW5mbyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgc3RhcnRlZEJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgc3VjY2Vzcz86IGJvb2xlYW4gfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBSdW5cbiAgICAgKi9cbiAgICBzdGFydFRpbWU/OiBEYXRlIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7RGF0ZX1cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgZW5kVGltZT86IERhdGUgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxBbXBob3JhUmVmZXJlbmNlPn1cbiAgICAgKiBAbWVtYmVyb2YgUnVuXG4gICAgICovXG4gICAgYW1waG9yYVJlZmVyZW5jZXM/OiBBcnJheTxBbXBob3JhUmVmZXJlbmNlPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBTaWduYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaWduYWwge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFNpZ25hbFxuICAgICAqL1xuICAgIHByb3BlcnR5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICB2YWx1ZVR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX1cbiAgICAgKiBAbWVtYmVyb2YgU2lnbmFsXG4gICAgICovXG4gICAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9IHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTaWduYWxcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBTdW1tYXJ5XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3VtbWFyeSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3VtbWFyeVxuICAgICAqL1xuICAgIHF1ZXJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgcXVlcnlUeXBlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgbnVtUmVzdWx0cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBTdW1tYXJ5XG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFN1bW1hcnlcbiAgICAgKi9cbiAgICBmdXp6eUxldmVsPzogbnVtYmVyO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVGVybXNPZlVzZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlcm1zT2ZVc2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VcbiAgICAgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZVxuICAgICAqL1xuICAgIGNvbnRlbnRzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFRzeFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRzeCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVHN4XG4gICAgICovXG4gICAgdHN4Pzogc3RyaW5nIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwZGF0ZUFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlQXBwbGljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgbmFtZSBvZiB5b3VyIGFwcGxpY2F0aW9uLiBXaWxsIGJlIHNob3duIG9uIHRoZSBjb25zZW50IHBhZ2UuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXBkYXRlQXBwbGljYXRpb25cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSB1cmwgZm9yIGZyb250IGNoYW5uZWwgSFRUUCBsb2dvdXRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVwZGF0ZUFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgbG9nb3V0VXJsPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVBcHBsaWNhdGlvblxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgYSBjb2xsZWN0aW9uIG9mIGxvY2F0aW9ucyB5b3VyIGFwcGxpY2F0aW9uIHdpbGwgcnVuLlxuICAgICAqIEB0eXBlIHtBcnJheTxDcmVhdGVBcHBMb2NhdGlvbj59XG4gICAgICogQG1lbWJlcm9mIFVwZGF0ZUFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgbG9jYXRpb25zPzogQXJyYXk8Q3JlYXRlQXBwTG9jYXRpb24+IHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwZGF0ZUFwcGxpY2F0aW9uQWxsT2ZcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVBcHBsaWNhdGlvbkFsbE9mIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVBcHBsaWNhdGlvbkFsbE9mXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyBhIGNvbGxlY3Rpb24gb2YgbG9jYXRpb25zIHlvdXIgYXBwbGljYXRpb24gd2lsbCBydW4uXG4gICAgICogQHR5cGUge0FycmF5PENyZWF0ZUFwcExvY2F0aW9uPn1cbiAgICAgKiBAbWVtYmVyb2YgVXBkYXRlQXBwbGljYXRpb25BbGxPZlxuICAgICAqL1xuICAgIGxvY2F0aW9ucz86IEFycmF5PENyZWF0ZUFwcExvY2F0aW9uPiB8IG51bGw7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVcGRhdGVSdW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVSdW4ge1xuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB3aGV0aGVyIHRoZSBydW4gZmFpbGVkIG9yIHN1Y2NlZWRlZC4gU2V0dGluZyB0aGlzIHdpbGwgZW5kIHRoZSBydW4uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIFVwZGF0ZVJ1blxuICAgICAqL1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuIHwgbnVsbDtcbn1cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZVNpZ25hbCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fVxuICAgICAqIEBtZW1iZXJvZiBVcGRhdGVTaWduYWxcbiAgICAgKi9cbiAgICBtZXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXBsb2FkUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXBsb2FkUmVzcG9uc2VcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmcgfCBudWxsO1xufVxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBpZD86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBhbGxvd09yRGVueT86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVcbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQWNjZXNzUnVsZVxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBVc2VyQWNjZXNzUnVsZUFsbE9mXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckFjY2Vzc1J1bGVBbGxPZiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckFjY2Vzc1J1bGVBbGxPZlxuICAgICAqL1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWYXJpYWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VHN4fVxuICAgICAqIEBtZW1iZXJvZiBWYXJpYWJsZVxuICAgICAqL1xuICAgIGZpbHRlcj86IFRzeCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVmFyaWFibGVcbiAgICAgKi9cbiAgICBraW5kOiBzdHJpbmc7XG59XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBWZXJzaW9uSW5mb1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFZlcnNpb25JbmZvIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBWZXJzaW9uSW5mb1xuICAgICAqL1xuICAgIG1ham9yPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFZlcnNpb25JbmZvXG4gICAgICovXG4gICAgbWlub3I/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkluZm9cbiAgICAgKi9cbiAgICBwYXRjaD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBY3Rpdml0aWVzQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBY3Rpdml0eX0gY3JlYXRlQWN0aXZpdHkgTWV0YWRhdGEgb2YgdGhlIG5ldyBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eTogQ3JlYXRlQWN0aXZpdHksIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQWN0aXZpdHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFjdGl2aXR5ID09PSBudWxsIHx8IGNyZWF0ZUFjdGl2aXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQWN0aXZpdHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQWN0aXZpdHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVBY3Rpdml0eSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGNyZWF0ZUFjdGl2aXR5ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVBY3Rpdml0eSA6IHt9KSA6IChjcmVhdGVBY3Rpdml0eSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBtZXRhZGF0YSBvZiBhbiBhY3Rpdml0eS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmVmZXJlbmNlcyBhbiBBbXBob3JhIGR1cmluZyBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhbXBob3JhSWQgVGhlIElkIG9mIHRoZSBBbXBob3JhIHRvIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtBbXBob3JhUmVmZXJlbmNlfSBhbXBob3JhUmVmZXJlbmNlIEluZm9ybWF0aW9uIGFib3V0IHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCBhbXBob3JhSWQ6IHN0cmluZywgYW1waG9yYVJlZmVyZW5jZTogQW1waG9yYVJlZmVyZW5jZSwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncnVuSWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHJ1bklkID09PSBudWxsIHx8IHJ1bklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncnVuSWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcnVuSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2FtcGhvcmFJZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoYW1waG9yYUlkID09PSBudWxsIHx8IGFtcGhvcmFJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2FtcGhvcmFJZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBhbXBob3JhSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2FtcGhvcmFSZWZlcmVuY2UnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGFtcGhvcmFSZWZlcmVuY2UgPT09IG51bGwgfHwgYW1waG9yYVJlZmVyZW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2FtcGhvcmFSZWZlcmVuY2UnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgYW1waG9yYVJlZmVyZW5jZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYWN0aXZpdGllcy97aWR9L1J1bnMve3J1bklkfS9hbXBob3JhZS97YW1waG9yYUlkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wicnVuSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhydW5JZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImFtcGhvcmFJZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGFtcGhvcmFJZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BVVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGFtcGhvcmFSZWZlcmVuY2UgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShhbXBob3JhUmVmZXJlbmNlICE9PSB1bmRlZmluZWQgPyBhbXBob3JhUmVmZXJlbmNlIDoge30pIDogKGFtcGhvcmFSZWZlcmVuY2UgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IGlkIGluIHdoaWNoIHRvIHN0YXJ0IGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1N0YXJ0UnVuKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY3Rpdml0aWVzU3RhcnRSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hY3Rpdml0aWVzL3tpZH0vUnVuc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbmQgY29tcGxldGVzIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVcGRhdGVSdW59IHVwZGF0ZVJ1biBJbmZvcm1hdGlvbiBhYm91dCB0aGUgdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1VwZGF0ZVJ1bihpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCB1cGRhdGVSdW46IFVwZGF0ZVJ1biwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNVcGRhdGVSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdydW5JZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocnVuSWQgPT09IG51bGwgfHwgcnVuSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdydW5JZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBydW5JZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjdGl2aXRpZXNVcGRhdGVSdW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1cGRhdGVSdW4nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHVwZGF0ZVJ1biA9PT0gbnVsbCB8fCB1cGRhdGVSdW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1cGRhdGVSdW4nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgdXBkYXRlUnVuIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYWN0aXZpdGllc1VwZGF0ZVJ1bi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FjdGl2aXRpZXMve2lkfS9SdW5zL3tydW5JZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInJ1bklkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocnVuSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgdXBkYXRlUnVuICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkodXBkYXRlUnVuICE9PSB1bmRlZmluZWQgPyB1cGRhdGVSdW4gOiB7fSkgOiAodXBkYXRlUnVuIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBBY3Rpdml0aWVzQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGl2aXRpZXNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFjdGl2aXR5fSBjcmVhdGVBY3Rpdml0eSBNZXRhZGF0YSBvZiB0aGUgbmV3IGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5OiBDcmVhdGVBY3Rpdml0eSwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QWN0aXZpdHk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQWN0aXZpdGllc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIG1ldGFkYXRhIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBY3Rpdml0eT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZWZlcmVuY2VzIGFuIEFtcGhvcmEgZHVyaW5nIGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcnVuSWQgVGhlIHJ1biBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGFtcGhvcmFJZCBUaGUgSWQgb2YgdGhlIEFtcGhvcmEgdG8gcmVmZXJlbmNlLlxuICAgICAgICAgKiBAcGFyYW0ge0FtcGhvcmFSZWZlcmVuY2V9IGFtcGhvcmFSZWZlcmVuY2UgSW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkOiBzdHJpbmcsIHJ1bklkOiBzdHJpbmcsIGFtcGhvcmFJZDogc3RyaW5nLCBhbXBob3JhUmVmZXJlbmNlOiBBbXBob3JhUmVmZXJlbmNlLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbXBob3JhUmVmZXJlbmNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFjdGl2aXRpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZCwgcnVuSWQsIGFtcGhvcmFJZCwgYW1waG9yYVJlZmVyZW5jZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IGlkIGluIHdoaWNoIHRvIHN0YXJ0IGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1N0YXJ0UnVuKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFJ1bj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1N0YXJ0UnVuKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW5kIGNvbXBsZXRlcyBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlUnVufSB1cGRhdGVSdW4gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNVcGRhdGVSdW4oaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgdXBkYXRlUnVuOiBVcGRhdGVSdW4sIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFJ1bj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBY3Rpdml0aWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1VwZGF0ZVJ1bihpZCwgcnVuSWQsIHVwZGF0ZVJ1biwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFjdGl2aXRpZXNBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQWN0aXZpdGllc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQWN0aXZpdHl9IGNyZWF0ZUFjdGl2aXR5IE1ldGFkYXRhIG9mIHRoZSBuZXcgYWN0aXZpdHkuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzQ3JlYXRlQWN0aXZpdHkoY3JlYXRlQWN0aXZpdHk6IENyZWF0ZUFjdGl2aXR5LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNDcmVhdGVBY3Rpdml0eShjcmVhdGVBY3Rpdml0eSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0RlbGV0ZUFjdGl2aXR5KGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIG1ldGFkYXRhIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmVmZXJlbmNlcyBhbiBBbXBob3JhIGR1cmluZyBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhbXBob3JhSWQgVGhlIElkIG9mIHRoZSBBbXBob3JhIHRvIHJlZmVyZW5jZS5cbiAgICAgICAgICogQHBhcmFtIHtBbXBob3JhUmVmZXJlbmNlfSBhbXBob3JhUmVmZXJlbmNlIEluZm9ybWF0aW9uIGFib3V0IHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCBhbXBob3JhSWQ6IHN0cmluZywgYW1waG9yYVJlZmVyZW5jZTogQW1waG9yYVJlZmVyZW5jZSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcChjb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzUmVmZXJlbmNlQW1waG9yYShpZCwgcnVuSWQsIGFtcGhvcmFJZCwgYW1waG9yYVJlZmVyZW5jZSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IGlkIGluIHdoaWNoIHRvIHN0YXJ0IGEgcnVuLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdGllc1N0YXJ0UnVuKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1N0YXJ0UnVuKGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW5kIGNvbXBsZXRlcyBhIHJ1bi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhY3Rpdml0eSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bklkIFRoZSBydW4gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlUnVufSB1cGRhdGVSdW4gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXRpZXNVcGRhdGVSdW4oaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgdXBkYXRlUnVuOiBVcGRhdGVSdW4sIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAoY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1VwZGF0ZVJ1bihpZCwgcnVuSWQsIHVwZGF0ZVJ1biwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBBY3Rpdml0aWVzQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEFjdGl2aXRpZXNBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgQWN0aXZpdGllc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgYWN0aXZpdHkuXG4gICAgICogQHBhcmFtIHtDcmVhdGVBY3Rpdml0eX0gY3JlYXRlQWN0aXZpdHkgTWV0YWRhdGEgb2YgdGhlIG5ldyBhY3Rpdml0eS5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5OiBDcmVhdGVBY3Rpdml0eSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYWN0aXZpdGllc0NyZWF0ZUFjdGl2aXR5KGNyZWF0ZUFjdGl2aXR5LCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNEZWxldGVBY3Rpdml0eShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzRGVsZXRlQWN0aXZpdHkoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIG1ldGFkYXRhIG9mIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNSZWFkQWN0aXZpdHkoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1JlYWRBY3Rpdml0eShpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgUmVmZXJlbmNlcyBhbiBBbXBob3JhIGR1cmluZyBhIHJ1bi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhbXBob3JhSWQgVGhlIElkIG9mIHRoZSBBbXBob3JhIHRvIHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FtcGhvcmFSZWZlcmVuY2V9IGFtcGhvcmFSZWZlcmVuY2UgSW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc1JlZmVyZW5jZUFtcGhvcmEoaWQ6IHN0cmluZywgcnVuSWQ6IHN0cmluZywgYW1waG9yYUlkOiBzdHJpbmcsIGFtcGhvcmFSZWZlcmVuY2U6IEFtcGhvcmFSZWZlcmVuY2UsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFjdGl2aXRpZXNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjdGl2aXRpZXNSZWZlcmVuY2VBbXBob3JhKGlkLCBydW5JZCwgYW1waG9yYUlkLCBhbXBob3JhUmVmZXJlbmNlLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTdGFydHMgYSBuZXcgcnVuIG9mIGFuIGFjdGl2aXR5LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYWN0aXZpdHkgaWQgaW4gd2hpY2ggdG8gc3RhcnQgYSBydW4uXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBY3Rpdml0aWVzQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjdGl2aXRpZXNTdGFydFJ1bihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBY3Rpdml0aWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY3Rpdml0aWVzU3RhcnRSdW4oaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW5kIGNvbXBsZXRlcyBhIHJ1bi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFjdGl2aXR5IElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydW5JZCBUaGUgcnVuIElkLlxuICAgICAqIEBwYXJhbSB7VXBkYXRlUnVufSB1cGRhdGVSdW4gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFjdGl2aXRpZXNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZpdGllc1VwZGF0ZVJ1bihpZDogc3RyaW5nLCBydW5JZDogc3RyaW5nLCB1cGRhdGVSdW46IFVwZGF0ZVJ1biwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQWN0aXZpdGllc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYWN0aXZpdGllc1VwZGF0ZVJ1bihpZCwgcnVuSWQsIHVwZGF0ZVJ1biwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBbXBob3JhZUFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5R2V0KGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhUXVhbGl0eUdldC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vcXVhbGl0eWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhUXVhbGl0eVNldC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3F1YWxpdHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHF1YWxpdHkgPT09IG51bGwgfHwgcXVhbGl0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3F1YWxpdHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcXVhbGl0eSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFRdWFsaXR5U2V0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9xdWFsaXR5YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcXVhbGl0eSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHF1YWxpdHkgIT09IHVuZGVmaW5lZCA/IHF1YWxpdHkgOiB7fSkgOiAocXVhbGl0eSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBmb3IgYWxsIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkOiBzdHJpbmcsIGFsbEFjY2Vzc1J1bGU6IEFsbEFjY2Vzc1J1bGUsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnYWxsQWNjZXNzUnVsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoYWxsQWNjZXNzUnVsZSA9PT0gbnVsbCB8fCBhbGxBY2Nlc3NSdWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignYWxsQWNjZXNzUnVsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBhbGxBY2Nlc3NSdWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vQWNjZXNzQ29udHJvbHMvRm9yQWxsYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgYWxsQWNjZXNzUnVsZSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGFsbEFjY2Vzc1J1bGUgIT09IHVuZGVmaW5lZCA/IGFsbEFjY2Vzc1J1bGUgOiB7fSkgOiAoYWxsQWNjZXNzUnVsZSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbkFjY2Vzc1J1bGV9IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ29yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ29yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0Zvck9yZ2FuaXNhdGlvbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShvcmdhbmlzYXRpb25BY2Nlc3NSdWxlICE9PSB1bmRlZmluZWQgPyBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIDoge30pIDogKG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtVc2VyQWNjZXNzUnVsZX0gdXNlckFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQ6IHN0cmluZywgdXNlckFjY2Vzc1J1bGU6IFVzZXJBY2Nlc3NSdWxlLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1c2VyQWNjZXNzUnVsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodXNlckFjY2Vzc1J1bGUgPT09IG51bGwgfHwgdXNlckFjY2Vzc1J1bGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1c2VyQWNjZXNzUnVsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciB1c2VyQWNjZXNzUnVsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9BY2Nlc3NDb250cm9scy9Gb3JVc2VyYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgdXNlckFjY2Vzc1J1bGUgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1c2VyQWNjZXNzUnVsZSAhPT0gdW5kZWZpbmVkID8gdXNlckFjY2Vzc1J1bGUgOiB7fSkgOiAodXNlckFjY2Vzc1J1bGUgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFjY2VzcyBDb250cm9sIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlSWQgVGhlIElkIG9mIHRoZSBydWxlIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQ6IHN0cmluZywgcnVsZUlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzRGVsZXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncnVsZUlkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChydWxlSWQgPT09IG51bGwgfHwgcnVsZUlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncnVsZUlkJywnUmVxdWlyZWQgcGFyYW1ldGVyIHJ1bGVJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL3tydWxlSWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJydWxlSWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhydWxlSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdERUxFVEUnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIFxcJ2ZvciBhbGxcXCcgcnVsZSwgaWYgaXQgZXhpc3RzLCBlbHNlIGFuIGVtcHR5IDIwMC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0ZvckFsbGBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldE9yZ2FuaXNhdGlvblJ1bGVzKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0Zvck9yZ2FuaXNhdGlvbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L0FjY2Vzc0NvbnRyb2xzL0ZvclVzZXJgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdjcmVhdGVBbXBob3JhJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVBbXBob3JhID09PSBudWxsIHx8IGNyZWF0ZUFtcGhvcmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdjcmVhdGVBbXBob3JhJywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZUFtcGhvcmEgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUNyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVBbXBob3JhICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlQW1waG9yYSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlQW1waG9yYSA6IHt9KSA6IChjcmVhdGVBbXBob3JhIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZURlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEZWxldGVGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlID09PSBudWxsIHx8IGZpbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGUgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImZpbGVcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhmaWxlKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBMaXN0cyBhbiBBbXBob3JhXFwncyBmaWxlcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gR2V0cyBvciBzZXRzIHRoZSB0aGUgb3JkZXJCeSBwYXJhbWV0ZXIuIE9wdGlvbnMgYXJlIEFscGhhYmV0aWNhbCBvciBMYXN0TW9kaWZpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJlZml4XSBHZXRzIG9yIHNldHMgYSBwcmVmaXggZmlsdGVyIGZvciBhbGwgZmlsZSBuYW1lcy4gSXMgY2FzZSBzZW5zaXRpdmUuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGFrZV0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHJldHVybi4gRGVmYXVsdHMgdG8gNjQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc0xpc3RGaWxlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JkZXJCeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnT3JkZXJCeSddID0gb3JkZXJCeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnUHJlZml4J10gPSBwcmVmaXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YWtlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydUYWtlJ10gPSB0YWtlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2tpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnU2tpcCddID0gc2tpcDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFF1ZXJpZXMgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0ZpbGVRdWVyeU9wdGlvbnN9IGZpbGVRdWVyeU9wdGlvbnMgT3B0aW9uIGZvciBxdWVyeWluZyB0aGUgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzUXVlcnlGaWxlcyhpZDogc3RyaW5nLCBmaWxlUXVlcnlPcHRpb25zOiBGaWxlUXVlcnlPcHRpb25zLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1F1ZXJ5RmlsZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdmaWxlUXVlcnlPcHRpb25zJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChmaWxlUXVlcnlPcHRpb25zID09PSBudWxsIHx8IGZpbGVRdWVyeU9wdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdmaWxlUXVlcnlPcHRpb25zJywnUmVxdWlyZWQgcGFyYW1ldGVyIGZpbGVRdWVyeU9wdGlvbnMgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZUZpbGVzUXVlcnlGaWxlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vZmlsZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBmaWxlUXVlcnlPcHRpb25zICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoZmlsZVF1ZXJ5T3B0aW9ucyAhPT0gdW5kZWZpbmVkID8gZmlsZVF1ZXJ5T3B0aW9ucyA6IHt9KSA6IChmaWxlUXVlcnlPcHRpb25zIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgYXR0cmlidXRlcyBvZiBhIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1JlYWRGaWxlQXR0cmlidXRlcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2ZpbGUnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGZpbGUgPT09IG51bGwgfHwgZmlsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2ZpbGUnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgZmlsZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L2ZpbGVzL3tmaWxlfS9hdHRyaWJ1dGVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJmaWxlXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoZmlsZSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzV3JpdGVGaWxlQXR0cmlidXRlcyhpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVBdHRyaWJ1dGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnZmlsZScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZmlsZSA9PT0gbnVsbCB8fCBmaWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignZmlsZScsJ1JlcXVpcmVkIHBhcmFtZXRlciBmaWxlIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVGaWxlc1dyaXRlRmlsZUF0dHJpYnV0ZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVBdHRyaWJ1dGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9maWxlcy97ZmlsZX0vYXR0cmlidXRlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiZmlsZVwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGZpbGUpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVHlwZV0gXFwmIzM5O2NyZWF0ZWRcXCYjMzk7IG9yIFxcJiMzOTtwdXJjaGFzZWRcXCYjMzk7LiBEZWZhdWx0cyB0byBjcmVhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byBza2lwIGJlZm9yZSByZXR1cm5pbmcuIERlZmF1bHRzIHRvIDAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHRha2U/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWVgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY29wZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnc2NvcGUnXSA9IHNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWNjZXNzVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnYWNjZXNzVHlwZSddID0gYWNjZXNzVHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRha2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ1Rha2UnXSA9IHRha2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChza2lwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydTa2lwJ10gPSBza2lwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVSZWFkKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVJlYWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZVNpZ25hbH0gY3JlYXRlU2lnbmFsIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIGNyZWF0ZVNpZ25hbDogQ3JlYXRlU2lnbmFsLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlU2lnbmFsJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChjcmVhdGVTaWduYWwgPT09IG51bGwgfHwgY3JlYXRlU2lnbmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlU2lnbmFsJywnUmVxdWlyZWQgcGFyYW1ldGVyIGNyZWF0ZVNpZ25hbCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFsc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIGNyZWF0ZVNpZ25hbCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGNyZWF0ZVNpZ25hbCAhPT0gdW5kZWZpbmVkID8gY3JlYXRlU2lnbmFsIDoge30pIDogKGNyZWF0ZVNpZ25hbCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb3IgaWQgb2YgdGhlIHNpZ25hbCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAncHJvcGVydHknIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBudWxsIHx8IHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcigncHJvcGVydHknLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcHJvcGVydHkgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMve3Byb3BlcnR5fWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wicHJvcGVydHlcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhwcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgc2lnbmFscyBhc3NvY2lhdGVkIHdpdGggYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbmFsSWQgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7VXBkYXRlU2lnbmFsfSB1cGRhdGVTaWduYWwgU2lnbmFsIHByb3BlcnRpZXMgdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkOiBzdHJpbmcsIHNpZ25hbElkOiBzdHJpbmcsIHVwZGF0ZVNpZ25hbDogVXBkYXRlU2lnbmFsLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnc2lnbmFsSWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHNpZ25hbElkID09PSBudWxsIHx8IHNpZ25hbElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignc2lnbmFsSWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgc2lnbmFsSWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGRhdGVTaWduYWwuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICd1cGRhdGVTaWduYWwnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHVwZGF0ZVNpZ25hbCA9PT0gbnVsbCB8fCB1cGRhdGVTaWduYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCd1cGRhdGVTaWduYWwnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgdXBkYXRlU2lnbmFsIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL3tzaWduYWxJZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcInNpZ25hbElkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoc2lnbmFsSWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQVVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiB1cGRhdGVTaWduYWwgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1cGRhdGVTaWduYWwgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZVNpZ25hbCA6IHt9KSA6ICh1cGRhdGVTaWduYWwgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfS9zaWduYWxzL3ZhbHVlc2BcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHJlcXVlc3RCb2R5ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkgIT09IHVuZGVmaW5lZCA/IHJlcXVlc3RCb2R5IDoge30pIDogKHJlcXVlc3RCb2R5IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vc2lnbmFsVmFsdWVzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcmVxdWVzdEJvZHkgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSAhPT0gdW5kZWZpbmVkID8gcmVxdWVzdEJvZHkgOiB7fSkgOiAocmVxdWVzdEJvZHkgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3JlcXVlc3RCb2R5JyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Qm9keSA9PT0gbnVsbCB8fCByZXF1ZXN0Qm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3JlcXVlc3RCb2R5JywnUmVxdWlyZWQgcGFyYW1ldGVyIHJlcXVlc3RCb2R5IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2guJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hbXBob3JhZS97aWR9L3NpZ25hbHMvYmF0Y2h2YWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdyZXF1ZXN0Qm9keScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocmVxdWVzdEJvZHkgPT09IG51bGwgfHwgcmVxdWVzdEJvZHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdyZXF1ZXN0Qm9keScsJ1JlcXVpcmVkIHBhcmFtZXRlciByZXF1ZXN0Qm9keSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FtcGhvcmFlL3tpZH0vYmF0Y2hTaWduYWxWYWx1ZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiByZXF1ZXN0Qm9keSAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5ICE9PSB1bmRlZmluZWQgPyByZXF1ZXN0Qm9keSA6IHt9KSA6IChyZXF1ZXN0Qm9keSB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7RWRpdEFtcGhvcmF9IGVkaXRBbXBob3JhIEluZm9ybWF0aW9uIHRvIHVwZGF0ZS4gTnVsbHMgYXJlIE5PVCBpZ25vcmVkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVVcGRhdGUoaWQ6IHN0cmluZywgZWRpdEFtcGhvcmE6IEVkaXRBbXBob3JhLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYW1waG9yYWVVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdlZGl0QW1waG9yYScgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoZWRpdEFtcGhvcmEgPT09IG51bGwgfHwgZWRpdEFtcGhvcmEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdlZGl0QW1waG9yYScsJ1JlcXVpcmVkIHBhcmFtZXRlciBlZGl0QW1waG9yYSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFtcGhvcmFlVXBkYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYW1waG9yYWUve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgZWRpdEFtcGhvcmEgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShlZGl0QW1waG9yYSAhPT0gdW5kZWZpbmVkID8gZWRpdEFtcGhvcmEgOiB7fSkgOiAoZWRpdEFtcGhvcmEgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBQdXJjaGFzZXMgYW4gQW1waG9yYSBhcyB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHB1cmNoYXNlc1B1cmNoYXNlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvQW1waG9yYWUve2lkfS9QdXJjaGFzZXNgXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQW1waG9yYWVBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQW1waG9yYWVBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5R2V0KGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFF1YWxpdHk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eUdldChpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZXRzIHRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcyBmb3IgdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFF1YWxpdHk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eVNldChpZCwgcXVhbGl0eSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgZm9yIGFsbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0FsbEFjY2Vzc1J1bGV9IGFsbEFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZDogc3RyaW5nLCBhbGxBY2Nlc3NSdWxlOiBBbGxBY2Nlc3NSdWxlLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbGxBY2Nlc3NSdWxlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZCwgYWxsQWNjZXNzUnVsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb25BY2Nlc3NSdWxlfSBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JPcmdhbmlzYXRpb24oaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uQWNjZXNzUnVsZTogT3JnYW5pc2F0aW9uQWNjZXNzUnVsZSwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8VXNlckFjY2Vzc1J1bGU+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgcnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZDogc3RyaW5nLCB1c2VyQWNjZXNzUnVsZTogVXNlckFjY2Vzc1J1bGUsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFVzZXJBY2Nlc3NSdWxlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvclVzZXIoaWQsIHVzZXJBY2Nlc3NSdWxlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQWNjZXNzIENvbnRyb2wgb24gdGhpcyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZDogc3RyaW5nLCBydWxlSWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZCwgcnVsZUlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIFxcJ2ZvciBhbGxcXCcgcnVsZSwgaWYgaXQgZXhpc3RzLCBlbHNlIGFuIGVtcHR5IDIwMC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0Rm9yQWxsUnVsZShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbGxBY2Nlc3NSdWxlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byBvcmdhbmlzYXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxPcmdhbmlzYXRpb25BY2Nlc3NSdWxlPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIHVzZXJzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8VXNlckFjY2Vzc1J1bGU+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldFVzZXJSdWxlcyhpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGVtcHR5IEFtcGhvcmEgaW4gdGhlIHVzZXJcXCdzIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhfSBjcmVhdGVBbXBob3JhIEluZm9ybWF0aW9uIGZvciB0aGUgbmV3IEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhOiBDcmVhdGVBbXBob3JhLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxEZXRhaWxlZEFtcGhvcmE+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUNyZWF0ZShjcmVhdGVBbXBob3JhLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZURlbGV0ZShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZURlbGV0ZShpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgZmlsZS4gUmV0dXJucyBhIGJsb2IgVVJMIHRvIHVwbG9hZCB0by5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8VXBsb2FkUmVzcG9uc2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQsIGZpbGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgY29udGVudHMgb2YgYSBmaWxlLiBSZXR1cm5zIGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZCwgZmlsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0Rvd25sb2FkRmlsZShpZCwgZmlsZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBMaXN0cyBhbiBBbXBob3JhXFwncyBmaWxlcy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gR2V0cyBvciBzZXRzIHRoZSB0aGUgb3JkZXJCeSBwYXJhbWV0ZXIuIE9wdGlvbnMgYXJlIEFscGhhYmV0aWNhbCBvciBMYXN0TW9kaWZpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJlZml4XSBHZXRzIG9yIHNldHMgYSBwcmVmaXggZmlsdGVyIGZvciBhbGwgZmlsZSBuYW1lcy4gSXMgY2FzZSBzZW5zaXRpdmUuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGFrZV0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHJldHVybi4gRGVmYXVsdHMgdG8gNjQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgcHJlZml4LCB0YWtlLCBza2lwLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFF1ZXJpZXMgYW4gQW1waG9yYVxcJ3MgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0ZpbGVRdWVyeU9wdGlvbnN9IGZpbGVRdWVyeU9wdGlvbnMgT3B0aW9uIGZvciBxdWVyeWluZyB0aGUgZmlsZXMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzUXVlcnlGaWxlcyhpZDogc3RyaW5nLCBmaWxlUXVlcnlPcHRpb25zOiBGaWxlUXVlcnlPcHRpb25zLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1F1ZXJ5RmlsZXMoaWQsIGZpbGVRdWVyeU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgYXR0cmlidXRlcyBvZiBhIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMoaWQsIGZpbGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzV3JpdGVGaWxlQXR0cmlidXRlcyhpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzV3JpdGVGaWxlQXR0cmlidXRlcyhpZCwgZmlsZSwgcmVxdWVzdEJvZHksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhIGxpc3Qgb2YgQW1waG9yYSBmb3IgeW91cnNlbGYgb3IgeW91ciBvcmcsIGNyZWF0ZWQgb3IgcHVyY2hhc2VkIGJ5IHlvdSAob3Igb3JnYW5pc2F0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtzY29wZV0gXFwmIzM5O3NlbGZcXCYjMzk7IG9yIFxcJiMzOTtvcmdhbmlzYXRpb25cXCYjMzk7LiBEZWZhdWx0cyB0byBzZWxmLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0YWtlXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVMaXN0KHNjb3BlPzogc3RyaW5nLCBhY2Nlc3NUeXBlPzogc3RyaW5nLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxEZXRhaWxlZEFtcGhvcmE+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVMaXN0KHNjb3BlLCBhY2Nlc3NUeXBlLCB0YWtlLCBza2lwLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlUmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxEZXRhaWxlZEFtcGhvcmE+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVJlYWQoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlU2lnbmFsfSBjcmVhdGVTaWduYWwgU2lnbmFsIERldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQ6IHN0cmluZywgY3JlYXRlU2lnbmFsOiBDcmVhdGVTaWduYWwsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFNpZ25hbD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0NyZWF0ZVNpZ25hbChpZCwgY3JlYXRlU2lnbmFsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgVGhlIG5hbWUgb3IgaWQgb2YgdGhlIHNpZ25hbCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZDogc3RyaW5nLCBwcm9wZXJ0eTogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxTaWduYWw+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQsIHByb3BlcnR5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxTaWduYWw+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8U2lnbmFsPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkLCBzaWduYWxJZCwgdXBkYXRlU2lnbmFsLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkLCByZXF1ZXN0Qm9keSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0sIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkLCByZXF1ZXN0Qm9keSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+fSByZXF1ZXN0Qm9keSBcbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQW1waG9yYWVBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Piwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8dm9pZD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbEJhdGNoMihpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtFZGl0QW1waG9yYX0gZWRpdEFtcGhvcmEgSW5mb3JtYXRpb24gdG8gdXBkYXRlLiBOdWxscyBhcmUgTk9UIGlnbm9yZWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBlZGl0QW1waG9yYTogRWRpdEFtcGhvcmEsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPERldGFpbGVkQW1waG9yYT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBbXBob3JhZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlVXBkYXRlKGlkLCBlZGl0QW1waG9yYSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBQdXJjaGFzZXMgYW4gQW1waG9yYSBhcyB0aGUgbG9nZ2VkIGluIHVzZXIuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgcHVyY2hhc2VzUHVyY2hhc2UoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFtcGhvcmFlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikucHVyY2hhc2VzUHVyY2hhc2UoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBBbXBob3JhZUFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBbXBob3JhZUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYVF1YWxpdHlHZXQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlHZXQoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2V0cyB0aGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MgZm9yIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVhbGl0eX0gcXVhbGl0eSBUaGUgZGF0YSBxdWFsaXR5IG1ldHJpY3MuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhUXVhbGl0eVNldChpZDogc3RyaW5nLCBxdWFsaXR5OiBRdWFsaXR5LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eVNldChpZCwgcXVhbGl0eSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgZm9yIGFsbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0FsbEFjY2Vzc1J1bGV9IGFsbEFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvckFsbChpZDogc3RyaW5nLCBhbGxBY2Nlc3NSdWxlOiBBbGxBY2Nlc3NSdWxlLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkLCBhbGxBY2Nlc3NSdWxlLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgUnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbkFjY2Vzc1J1bGV9IG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUgVGhlIHJ1bGUgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0NyZWF0ZUZvck9yZ2FuaXNhdGlvbihpZDogc3RyaW5nLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlOiBPcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYW4gQWNjZXNzIENvbnRyb2wgcnVsZSBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge1VzZXJBY2Nlc3NSdWxlfSB1c2VyQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yVXNlcihpZDogc3RyaW5nLCB1c2VyQWNjZXNzUnVsZTogVXNlckFjY2Vzc1J1bGUsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkLCB1c2VyQWNjZXNzUnVsZSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFjY2VzcyBDb250cm9sIG9uIHRoaXMgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlSWQgVGhlIElkIG9mIHRoZSBydWxlIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQ6IHN0cmluZywgcnVsZUlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQsIHJ1bGVJZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBcXCdmb3IgYWxsXFwnIHJ1bGUsIGlmIGl0IGV4aXN0cywgZWxzZSBhbiBlbXB0eSAyMDAuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byBvcmdhbmlzYXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0VXNlclJ1bGVzKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBlbXB0eSBBbXBob3JhIGluIHRoZSB1c2VyXFwncyBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVEZWxldGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVEZWxldGUoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNDcmVhdGVGaWxlUmVxdWVzdChpZCwgZmlsZSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUZpbGVzRGVsZXRlRmlsZShpZDogc3RyaW5nLCBmaWxlOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEZWxldGVGaWxlKGlkLCBmaWxlLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkLCBmaWxlLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IExpc3RzIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlckJ5XSBHZXRzIG9yIHNldHMgdGhlIHRoZSBvcmRlckJ5IHBhcmFtZXRlci4gT3B0aW9ucyBhcmUgQWxwaGFiZXRpY2FsIG9yIExhc3RNb2RpZmllZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcmVmaXhdIEdldHMgb3Igc2V0cyBhIHByZWZpeCBmaWx0ZXIgZm9yIGFsbCBmaWxlIG5hbWVzLiBJcyBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0YWtlXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZDogc3RyaW5nLCBvcmRlckJ5Pzogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcsIHRha2U/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQsIG9yZGVyQnksIHByZWZpeCwgdGFrZSwgc2tpcCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBRdWVyaWVzIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtGaWxlUXVlcnlPcHRpb25zfSBmaWxlUXVlcnlPcHRpb25zIE9wdGlvbiBmb3IgcXVlcnlpbmcgdGhlIGZpbGVzLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc1F1ZXJ5RmlsZXMoaWQ6IHN0cmluZywgZmlsZVF1ZXJ5T3B0aW9uczogRmlsZVF1ZXJ5T3B0aW9ucywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1F1ZXJ5RmlsZXMoaWQsIGZpbGVRdWVyeU9wdGlvbnMsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgYXR0cmlidXRlcyBvZiBhIGZpbGUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBUaGUgbmFtZSBvZiB0aGUgZmlsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzUmVhZEZpbGVBdHRyaWJ1dGVzKGlkLCBmaWxlLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgXG4gICAgICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH19IHJlcXVlc3RCb2R5IFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVGaWxlc1dyaXRlRmlsZUF0dHJpYnV0ZXMoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCByZXF1ZXN0Qm9keTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0sIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNXcml0ZUZpbGVBdHRyaWJ1dGVzKGlkLCBmaWxlLCByZXF1ZXN0Qm9keSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Njb3BlXSBcXCYjMzk7c2VsZlxcJiMzOTsgb3IgXFwmIzM5O29yZ2FuaXNhdGlvblxcJiMzOTsuIERlZmF1bHRzIHRvIHNlbGYuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVHlwZV0gXFwmIzM5O2NyZWF0ZWRcXCYjMzk7IG9yIFxcJiMzOTtwdXJjaGFzZWRcXCYjMzk7LiBEZWZhdWx0cyB0byBjcmVhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byBza2lwIGJlZm9yZSByZXR1cm5pbmcuIERlZmF1bHRzIHRvIDAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZUxpc3Qoc2NvcGU/OiBzdHJpbmcsIGFjY2Vzc1R5cGU/OiBzdHJpbmcsIHRha2U/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKGNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlTGlzdChzY29wZSwgYWNjZXNzVHlwZSwgdGFrZSwgc2tpcCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVSZWFkKGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFzc29jaWF0ZXMgYSBzaWduYWwgd2l0aCBhbiBBbXBob3JhLiBTaWduYWwgaXMgY3JlYXRlZCBpZiBub3QgZXhpc3RpbmcuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZVNpZ25hbH0gY3JlYXRlU2lnbmFsIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIGNyZWF0ZVNpZ25hbDogQ3JlYXRlU2lnbmFsLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNDcmVhdGVTaWduYWwoaWQsIGNyZWF0ZVNpZ25hbCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFsKGlkLCBwcm9wZXJ0eSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBzaWduYWxzIGFzc29jaWF0ZWQgd2l0aCBhbiBBbXBob3JhLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbHMoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzR2V0U2lnbmFscyhpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNpZ25hbElkIFNpZ25hbCBEZXRhaWxzLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBkYXRlU2lnbmFsKGlkLCBzaWduYWxJZCwgdXBkYXRlU2lnbmFsLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwoaWQsIHJlcXVlc3RCb2R5LCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgICAgICogQHBhcmFtIHt7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfX0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWwyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IEFycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Piwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkLCByZXF1ZXN0Qm9keSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAgICAgKiBAcGFyYW0ge0VkaXRBbXBob3JhfSBlZGl0QW1waG9yYSBJbmZvcm1hdGlvbiB0byB1cGRhdGUuIE51bGxzIGFyZSBOT1QgaWdub3JlZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFtcGhvcmFlVXBkYXRlKGlkOiBzdHJpbmcsIGVkaXRBbXBob3JhOiBFZGl0QW1waG9yYSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAoY29uZmlndXJhdGlvbikuYW1waG9yYWVVcGRhdGUoaWQsIGVkaXRBbXBob3JhLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwdXJjaGFzZXNQdXJjaGFzZShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcChjb25maWd1cmF0aW9uKS5wdXJjaGFzZXNQdXJjaGFzZShpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBBbXBob3JhZUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBBbXBob3JhZUFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbXBob3JhZUFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhUXVhbGl0eUdldChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYVF1YWxpdHlHZXQoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNldHMgdGhlIGRhdGEgcXVhbGl0eSBtZXRyaWNzIGZvciB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtRdWFsaXR5fSBxdWFsaXR5IFRoZSBkYXRhIHF1YWxpdHkgbWV0cmljcy5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFRdWFsaXR5U2V0KGlkOiBzdHJpbmcsIHF1YWxpdHk6IFF1YWxpdHksIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhUXVhbGl0eVNldChpZCwgcXVhbGl0eSwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBSdWxlIGZvciBhbGwgb24gdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7QWxsQWNjZXNzUnVsZX0gYWxsQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkOiBzdHJpbmcsIGFsbEFjY2Vzc1J1bGU6IEFsbEFjY2Vzc1J1bGUsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yQWxsKGlkLCBhbGxBY2Nlc3NSdWxlLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIFJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9uQWNjZXNzUnVsZX0gb3JnYW5pc2F0aW9uQWNjZXNzUnVsZSBUaGUgcnVsZSB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGU6IE9yZ2FuaXNhdGlvbkFjY2Vzc1J1bGUsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUFjY2Vzc0NvbnRyb2xzQ3JlYXRlRm9yT3JnYW5pc2F0aW9uKGlkLCBvcmdhbmlzYXRpb25BY2Nlc3NSdWxlLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGFuIEFjY2VzcyBDb250cm9sIHJ1bGUgb24gdGhpcyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7VXNlckFjY2Vzc1J1bGV9IHVzZXJBY2Nlc3NSdWxlIFRoZSBydWxlIHRvIGNyZWF0ZS5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkOiBzdHJpbmcsIHVzZXJBY2Nlc3NSdWxlOiBVc2VyQWNjZXNzUnVsZSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNDcmVhdGVGb3JVc2VyKGlkLCB1c2VyQWNjZXNzUnVsZSwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBBY2Nlc3MgQ29udHJvbCBvbiB0aGlzIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGVJZCBUaGUgSWQgb2YgdGhlIHJ1bGUgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0RlbGV0ZShpZDogc3RyaW5nLCBydWxlSWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNEZWxldGUoaWQsIHJ1bGVJZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgXFwnZm9yIGFsbFxcJyBydWxlLCBpZiBpdCBleGlzdHMsIGVsc2UgYW4gZW1wdHkgMjAwLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVBY2Nlc3NDb250cm9sc0dldEZvckFsbFJ1bGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRGb3JBbGxSdWxlKGlkLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBsaXN0IG9mIGFjY2VzcyBydWxlcyBhcHBsaWVkIHRvIG9yZ2FuaXNhdGlvbnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUFjY2Vzc0NvbnRyb2xzR2V0T3JnYW5pc2F0aW9uUnVsZXMoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRPcmdhbmlzYXRpb25SdWxlcyhpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgbGlzdCBvZiBhY2Nlc3MgcnVsZXMgYXBwbGllZCB0byB1c2Vycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQWNjZXNzQ29udHJvbHNHZXRVc2VyUnVsZXMoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgZW1wdHkgQW1waG9yYSBpbiB0aGUgdXNlclxcJ3Mgb3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7Q3JlYXRlQW1waG9yYX0gY3JlYXRlQW1waG9yYSBJbmZvcm1hdGlvbiBmb3IgdGhlIG5ldyBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVDcmVhdGUoY3JlYXRlQW1waG9yYTogQ3JlYXRlQW1waG9yYSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlQ3JlYXRlKGNyZWF0ZUFtcGhvcmEsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gQW1waG9yYS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRGVsZXRlKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZURlbGV0ZShpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIGZpbGUuIFJldHVybnMgYSBibG9iIFVSTCB0byB1cGxvYWQgdG8uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzQ3JlYXRlRmlsZVJlcXVlc3QoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0NyZWF0ZUZpbGVSZXF1ZXN0KGlkLCBmaWxlLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjb250ZW50cyBvZiBhIGZpbGUuIFJldHVybnMgYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBuYW1lIG9mIHRoZSBmaWxlLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQ6IHN0cmluZywgZmlsZTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0RlbGV0ZUZpbGUoaWQsIGZpbGUsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZS4gUmV0dXJucyBhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzRG93bmxvYWRGaWxlKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNEb3dubG9hZEZpbGUoaWQsIGZpbGUsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IExpc3RzIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJCeV0gR2V0cyBvciBzZXRzIHRoZSB0aGUgb3JkZXJCeSBwYXJhbWV0ZXIuIE9wdGlvbnMgYXJlIEFscGhhYmV0aWNhbCBvciBMYXN0TW9kaWZpZWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcmVmaXhdIEdldHMgb3Igc2V0cyBhIHByZWZpeCBmaWx0ZXIgZm9yIGFsbCBmaWxlIG5hbWVzLiBJcyBjYXNlIHNlbnNpdGl2ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNMaXN0RmlsZXMoaWQ6IHN0cmluZywgb3JkZXJCeT86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc0xpc3RGaWxlcyhpZCwgb3JkZXJCeSwgcHJlZml4LCB0YWtlLCBza2lwLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBRdWVyaWVzIGFuIEFtcGhvcmFcXCdzIGZpbGVzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7RmlsZVF1ZXJ5T3B0aW9uc30gZmlsZVF1ZXJ5T3B0aW9ucyBPcHRpb24gZm9yIHF1ZXJ5aW5nIHRoZSBmaWxlcy5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNRdWVyeUZpbGVzKGlkOiBzdHJpbmcsIGZpbGVRdWVyeU9wdGlvbnM6IEZpbGVRdWVyeU9wdGlvbnMsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZUZpbGVzUXVlcnlGaWxlcyhpZCwgZmlsZVF1ZXJ5T3B0aW9ucywgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyB0aGUgYXR0cmlidXRlcyBvZiBhIGZpbGUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgVGhlIG5hbWUgb2YgdGhlIGZpbGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZUZpbGVzUmVhZEZpbGVBdHRyaWJ1dGVzKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlRmlsZXNSZWFkRmlsZUF0dHJpYnV0ZXMoaWQsIGZpbGUsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBcbiAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlRmlsZXNXcml0ZUZpbGVBdHRyaWJ1dGVzKGlkOiBzdHJpbmcsIGZpbGU6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVGaWxlc1dyaXRlRmlsZUF0dHJpYnV0ZXMoaWQsIGZpbGUsIHJlcXVlc3RCb2R5LCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRzIGEgbGlzdCBvZiBBbXBob3JhIGZvciB5b3Vyc2VsZiBvciB5b3VyIG9yZywgY3JlYXRlZCBvciBwdXJjaGFzZWQgYnkgeW91IChvciBvcmdhbmlzYXRpb24pLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbc2NvcGVdIFxcJiMzOTtzZWxmXFwmIzM5OyBvciBcXCYjMzk7b3JnYW5pc2F0aW9uXFwmIzM5Oy4gRGVmYXVsdHMgdG8gc2VsZi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2Vzc1R5cGVdIFxcJiMzOTtjcmVhdGVkXFwmIzM5OyBvciBcXCYjMzk7cHVyY2hhc2VkXFwmIzM5Oy4gRGVmYXVsdHMgdG8gY3JlYXRlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlTGlzdChzY29wZT86IHN0cmluZywgYWNjZXNzVHlwZT86IHN0cmluZywgdGFrZT86IG51bWJlciwgc2tpcD86IG51bWJlciwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlTGlzdChzY29wZSwgYWNjZXNzVHlwZSwgdGFrZSwgc2tpcCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlUmVhZChpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQXNzb2NpYXRlcyBhIHNpZ25hbCB3aXRoIGFuIEFtcGhvcmEuIFNpZ25hbCBpcyBjcmVhdGVkIGlmIG5vdCBleGlzdGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZVNpZ25hbH0gY3JlYXRlU2lnbmFsIFNpZ25hbCBEZXRhaWxzLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkOiBzdHJpbmcsIGNyZWF0ZVNpZ25hbDogQ3JlYXRlU2lnbmFsLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzQ3JlYXRlU2lnbmFsKGlkLCBjcmVhdGVTaWduYWwsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBzaWduYWwgcHJvcGVydHkuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWwoaWQ6IHN0cmluZywgcHJvcGVydHk6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc0dldFNpZ25hbChpZCwgcHJvcGVydHksIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIHNpZ25hbHMgYXNzb2NpYXRlZCB3aXRoIGFuIEFtcGhvcmEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNHZXRTaWduYWxzKGlkLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBBc3NvY2lhdGVzIGEgc2lnbmFsIHdpdGggYW4gQW1waG9yYS4gU2lnbmFsIGlzIGNyZWF0ZWQgaWYgbm90IGV4aXN0aW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBBbXBob3JhIElkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaWduYWxJZCBTaWduYWwgRGV0YWlscy5cbiAgICAgKiBAcGFyYW0ge1VwZGF0ZVNpZ25hbH0gdXBkYXRlU2lnbmFsIFNpZ25hbCBwcm9wZXJ0aWVzIHRvIHVwZGF0ZS5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZDogc3RyaW5nLCBzaWduYWxJZDogc3RyaW5nLCB1cGRhdGVTaWduYWw6IFVwZGF0ZVNpZ25hbCwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwZGF0ZVNpZ25hbChpZCwgc2lnbmFsSWQsIHVwZGF0ZVNpZ25hbCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAqIEBwYXJhbSB7eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH19IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiB7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQW1waG9yYWVBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbChpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge3sgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9fSByZXF1ZXN0Qm9keSBcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIGFtcGhvcmFlU2lnbmFsc1VwbG9hZFNpZ25hbDIoaWQ6IHN0cmluZywgcmVxdWVzdEJvZHk6IHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsMihpZCwgcmVxdWVzdEJvZHksIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0ge0FycmF5PHsgW2tleTogc3RyaW5nXTogb2JqZWN0OyB9Pn0gcmVxdWVzdEJvZHkgXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaChpZDogc3RyaW5nLCByZXF1ZXN0Qm9keTogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBvYmplY3Q7IH0+LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBbXBob3JhZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikuYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2goaWQsIHJlcXVlc3RCb2R5LCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICogQHBhcmFtIHtBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT59IHJlcXVlc3RCb2R5IFxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQW1waG9yYWVBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYW1waG9yYWVTaWduYWxzVXBsb2FkU2lnbmFsQmF0Y2gyKGlkOiBzdHJpbmcsIHJlcXVlc3RCb2R5OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IG9iamVjdDsgfT4sIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVNpZ25hbHNVcGxvYWRTaWduYWxCYXRjaDIoaWQsIHJlcXVlc3RCb2R5LCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIEFtcGhvcmEgSWQuXG4gICAgICogQHBhcmFtIHtFZGl0QW1waG9yYX0gZWRpdEFtcGhvcmEgSW5mb3JtYXRpb24gdG8gdXBkYXRlLiBOdWxscyBhcmUgTk9UIGlnbm9yZWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBbXBob3JhZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhbXBob3JhZVVwZGF0ZShpZDogc3RyaW5nLCBlZGl0QW1waG9yYTogRWRpdEFtcGhvcmEsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hbXBob3JhZVVwZGF0ZShpZCwgZWRpdEFtcGhvcmEsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFB1cmNoYXNlcyBhbiBBbXBob3JhIGFzIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgQW1waG9yYSBJZC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFtcGhvcmFlQXBpXG4gICAgICovXG4gICAgcHVibGljIHB1cmNoYXNlc1B1cmNoYXNlKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEFtcGhvcmFlQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5wdXJjaGFzZXNQdXJjaGFzZShpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBcHBsaWNhdGlvbnNBcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgYXBwbGljYXRpb24uIEFwcGxpY2F0aW9ucyBhcmUgZXh0ZXJuYWwgd2Vic2l0ZXMgdGhhdCBBbXBob3JhIHVzZXJzIGNhbiBzaWduIGluIHRvLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFwcGxpY2F0aW9ufSBjcmVhdGVBcHBsaWNhdGlvbiBBbiBhcHBsaWNhdGlvbiB0byBjcmVhdGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNDcmVhdGVBcHBsaWNhdGlvbihjcmVhdGVBcHBsaWNhdGlvbjogQ3JlYXRlQXBwbGljYXRpb24sIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQXBwbGljYXRpb24nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFwcGxpY2F0aW9uID09PSBudWxsIHx8IGNyZWF0ZUFwcGxpY2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQXBwbGljYXRpb24nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQXBwbGljYXRpb24gd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhcHBsaWNhdGlvbnNDcmVhdGVBcHBsaWNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FwcGxpY2F0aW9uc2A7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgY3JlYXRlQXBwbGljYXRpb24gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShjcmVhdGVBcHBsaWNhdGlvbiAhPT0gdW5kZWZpbmVkID8gY3JlYXRlQXBwbGljYXRpb24gOiB7fSkgOiAoY3JlYXRlQXBwbGljYXRpb24gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFwcGxpY2F0aW9uLiBNdXN0IGJlIGRvbmUgYnkgYW4gT3JnYW5pc2F0aW9uIGFkbWluaXN0cmF0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYXBwbGljYXRpb24gaWQgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbGljYXRpb25zRGVsZXRlQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFwcGxpY2F0aW9uc0RlbGV0ZUFwcGxpY2F0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvYXBwbGljYXRpb25zL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBhcHBsaWNhdGlvbiBieSBJZCwgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBnZXQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNSZWFkQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFwcGxpY2F0aW9uc1JlYWRBcHBsaWNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL2FwcGxpY2F0aW9ucy97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gYXBwbGljYXRpb24gYnkgSWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZUFwcGxpY2F0aW9ufSB1cGRhdGVBcHBsaWNhdGlvbiBUaGUgaW5mb3JtYXRpb24gdG8gdXBkYXRlIChvbGQgbG9jYXRpb25zIHdpbGwgYmUgZGVsZXRlZCkuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbihpZDogc3RyaW5nLCB1cGRhdGVBcHBsaWNhdGlvbjogVXBkYXRlQXBwbGljYXRpb24sIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3VwZGF0ZUFwcGxpY2F0aW9uJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICh1cGRhdGVBcHBsaWNhdGlvbiA9PT0gbnVsbCB8fCB1cGRhdGVBcHBsaWNhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3VwZGF0ZUFwcGxpY2F0aW9uJywnUmVxdWlyZWQgcGFyYW1ldGVyIHVwZGF0ZUFwcGxpY2F0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYXBwbGljYXRpb25zVXBkYXRlQXBwbGljYXRpb24uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hcHBsaWNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUFVUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgdXBkYXRlQXBwbGljYXRpb24gIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeSh1cGRhdGVBcHBsaWNhdGlvbiAhPT0gdW5kZWZpbmVkID8gdXBkYXRlQXBwbGljYXRpb24gOiB7fSkgOiAodXBkYXRlQXBwbGljYXRpb24gfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFwcGxpY2F0aW9uc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbnNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFwcGxpY2F0aW9uLiBBcHBsaWNhdGlvbnMgYXJlIGV4dGVybmFsIHdlYnNpdGVzIHRoYXQgQW1waG9yYSB1c2VycyBjYW4gc2lnbiBpbiB0by5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBcHBsaWNhdGlvbn0gY3JlYXRlQXBwbGljYXRpb24gQW4gYXBwbGljYXRpb24gdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbGljYXRpb25zQ3JlYXRlQXBwbGljYXRpb24oY3JlYXRlQXBwbGljYXRpb246IENyZWF0ZUFwcGxpY2F0aW9uLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcHBsaWNhdGlvbj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBBcHBsaWNhdGlvbnNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNDcmVhdGVBcHBsaWNhdGlvbihjcmVhdGVBcHBsaWNhdGlvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFwcGxpY2F0aW9uLiBNdXN0IGJlIGRvbmUgYnkgYW4gT3JnYW5pc2F0aW9uIGFkbWluaXN0cmF0b3IuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgYXBwbGljYXRpb24gaWQgdG8gZGVsZXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbGljYXRpb25zRGVsZXRlQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXBwbGljYXRpb24+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQXBwbGljYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYXBwbGljYXRpb25zRGVsZXRlQXBwbGljYXRpb24oaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBhcHBsaWNhdGlvbiBieSBJZCwgaWYgaXQgZXhpc3RzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBnZXQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNSZWFkQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXBwbGljYXRpb24+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gQXBwbGljYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYXBwbGljYXRpb25zUmVhZEFwcGxpY2F0aW9uKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gYXBwbGljYXRpb24gYnkgSWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZUFwcGxpY2F0aW9ufSB1cGRhdGVBcHBsaWNhdGlvbiBUaGUgaW5mb3JtYXRpb24gdG8gdXBkYXRlIChvbGQgbG9jYXRpb25zIHdpbGwgYmUgZGVsZXRlZCkuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbihpZDogc3RyaW5nLCB1cGRhdGVBcHBsaWNhdGlvbjogVXBkYXRlQXBwbGljYXRpb24sIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPEFwcGxpY2F0aW9uPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEFwcGxpY2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFwcGxpY2F0aW9uc1VwZGF0ZUFwcGxpY2F0aW9uKGlkLCB1cGRhdGVBcHBsaWNhdGlvbiwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEFwcGxpY2F0aW9uc0FwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGlvbnNBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFwcGxpY2F0aW9uLiBBcHBsaWNhdGlvbnMgYXJlIGV4dGVybmFsIHdlYnNpdGVzIHRoYXQgQW1waG9yYSB1c2VycyBjYW4gc2lnbiBpbiB0by5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBcHBsaWNhdGlvbn0gY3JlYXRlQXBwbGljYXRpb24gQW4gYXBwbGljYXRpb24gdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbGljYXRpb25zQ3JlYXRlQXBwbGljYXRpb24oY3JlYXRlQXBwbGljYXRpb246IENyZWF0ZUFwcGxpY2F0aW9uLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQXBwbGljYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikuYXBwbGljYXRpb25zQ3JlYXRlQXBwbGljYXRpb24oY3JlYXRlQXBwbGljYXRpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBhcHBsaWNhdGlvbi4gTXVzdCBiZSBkb25lIGJ5IGFuIE9yZ2FuaXNhdGlvbiBhZG1pbmlzdHJhdG9yLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGFwcGxpY2F0aW9uIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFwcGxpY2F0aW9uc0RlbGV0ZUFwcGxpY2F0aW9uKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBcHBsaWNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNEZWxldGVBcHBsaWNhdGlvbihpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIGFwcGxpY2F0aW9uIGJ5IElkLCBpZiBpdCBleGlzdHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGdldC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFwcGxpY2F0aW9uc1JlYWRBcHBsaWNhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQXBwbGljYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikuYXBwbGljYXRpb25zUmVhZEFwcGxpY2F0aW9uKGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gYXBwbGljYXRpb24gYnkgSWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgYXBwbGljYXRpb24gdG8gdXBkYXRlLlxuICAgICAgICAgKiBAcGFyYW0ge1VwZGF0ZUFwcGxpY2F0aW9ufSB1cGRhdGVBcHBsaWNhdGlvbiBUaGUgaW5mb3JtYXRpb24gdG8gdXBkYXRlIChvbGQgbG9jYXRpb25zIHdpbGwgYmUgZGVsZXRlZCkuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbihpZDogc3RyaW5nLCB1cGRhdGVBcHBsaWNhdGlvbjogVXBkYXRlQXBwbGljYXRpb24sIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBBcHBsaWNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbihpZCwgdXBkYXRlQXBwbGljYXRpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQXBwbGljYXRpb25zQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEFwcGxpY2F0aW9uc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbnNBcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IGFwcGxpY2F0aW9uLiBBcHBsaWNhdGlvbnMgYXJlIGV4dGVybmFsIHdlYnNpdGVzIHRoYXQgQW1waG9yYSB1c2VycyBjYW4gc2lnbiBpbiB0by5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFwcGxpY2F0aW9ufSBjcmVhdGVBcHBsaWNhdGlvbiBBbiBhcHBsaWNhdGlvbiB0byBjcmVhdGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwbGljYXRpb25zQ3JlYXRlQXBwbGljYXRpb24oY3JlYXRlQXBwbGljYXRpb246IENyZWF0ZUFwcGxpY2F0aW9uLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBBcHBsaWNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFwcGxpY2F0aW9uc0NyZWF0ZUFwcGxpY2F0aW9uKGNyZWF0ZUFwcGxpY2F0aW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBEZWxldGVzIGFuIGFwcGxpY2F0aW9uLiBNdXN0IGJlIGRvbmUgYnkgYW4gT3JnYW5pc2F0aW9uIGFkbWluaXN0cmF0b3IuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBhcHBsaWNhdGlvbiBpZCB0byBkZWxldGUuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBBcHBsaWNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXBwbGljYXRpb25zRGVsZXRlQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNEZWxldGVBcHBsaWNhdGlvbihpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBhbiBhcHBsaWNhdGlvbiBieSBJZCwgaWYgaXQgZXhpc3RzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgaWQgb2YgdGhlIGFwcGxpY2F0aW9uIHRvIGdldC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEFwcGxpY2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBsaWNhdGlvbnNSZWFkQXBwbGljYXRpb24oaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNSZWFkQXBwbGljYXRpb24oaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gYXBwbGljYXRpb24gYnkgSWQsIGlmIGl0IGV4aXN0cy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBhcHBsaWNhdGlvbiB0byB1cGRhdGUuXG4gICAgICogQHBhcmFtIHtVcGRhdGVBcHBsaWNhdGlvbn0gdXBkYXRlQXBwbGljYXRpb24gVGhlIGluZm9ybWF0aW9uIHRvIHVwZGF0ZSAob2xkIGxvY2F0aW9ucyB3aWxsIGJlIGRlbGV0ZWQpLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQXBwbGljYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIGFwcGxpY2F0aW9uc1VwZGF0ZUFwcGxpY2F0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZUFwcGxpY2F0aW9uOiBVcGRhdGVBcHBsaWNhdGlvbiwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gQXBwbGljYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hcHBsaWNhdGlvbnNVcGRhdGVBcHBsaWNhdGlvbihpZCwgdXBkYXRlQXBwbGljYXRpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25BcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IGxvZ2luUmVxdWVzdCBUb2tlbiBSZXF1ZXN0IFBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdsb2dpblJlcXVlc3QnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGxvZ2luUmVxdWVzdCA9PT0gbnVsbCB8fCBsb2dpblJlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdsb2dpblJlcXVlc3QnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgbG9naW5SZXF1ZXN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9hdXRoZW50aWNhdGlvbi9yZXF1ZXN0YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBsb2dpblJlcXVlc3QgIT09IFwic3RyaW5nXCIpIHx8IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPT09ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuZGF0YSA9ICBuZWVkc1NlcmlhbGl6YXRpb24gPyBKU09OLnN0cmluZ2lmeShsb2dpblJlcXVlc3QgIT09IHVuZGVmaW5lZCA/IGxvZ2luUmVxdWVzdCA6IHt9KSA6IChsb2dpblJlcXVlc3QgfHwgXCJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIEF1dGhlbnRpY2F0aW9uQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhIEpXVCAoSlNPTiBXZWIgVG9rZW4pLiAgICAgICAgICAgICBcbiAgICAgICAgICogQHBhcmFtIHtMb2dpblJlcXVlc3R9IGxvZ2luUmVxdWVzdCBUb2tlbiBSZXF1ZXN0IFBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8c3RyaW5nPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEF1dGhlbnRpY2F0aW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQXV0aGVudGljYXRpb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAgICAgKiBAcGFyYW0ge0xvZ2luUmVxdWVzdH0gbG9naW5SZXF1ZXN0IFRva2VuIFJlcXVlc3QgUGFyYW1ldGVycy5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGF1dGhlbnRpY2F0aW9uUmVxdWVzdFRva2VuKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gQXV0aGVudGljYXRpb25BcGlGcChjb25maWd1cmF0aW9uKS5hdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3QsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogQXV0aGVudGljYXRpb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQXV0aGVudGljYXRpb25BcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBSZXR1cm5zIGEgSldUIChKU09OIFdlYiBUb2tlbikuICAgICAgICAgICAgIFxuICAgICAqIEBwYXJhbSB7TG9naW5SZXF1ZXN0fSBsb2dpblJlcXVlc3QgVG9rZW4gUmVxdWVzdCBQYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgQXV0aGVudGljYXRpb25BcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25SZXF1ZXN0VG9rZW4obG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIEF1dGhlbnRpY2F0aW9uQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hdXRoZW50aWNhdGlvblJlcXVlc3RUb2tlbihsb2dpblJlcXVlc3QsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogR2VvQXBpIC0gYXhpb3MgcGFyYW1ldGVyIGNyZWF0b3JcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEdlb0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFtxdWVyeV0gU2VhcmNoIFRleHQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBnZW9Mb29rdXBMb2NhdGlvbihxdWVyeT86IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9nZW8vc2VhcmNoL2Z1enp5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocXVlcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ3F1ZXJ5J10gPSBxdWVyeTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogR2VvQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEdlb0FwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGdlb0xvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxGdXp6eVNlYXJjaFJlc3BvbnNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IEdlb0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmdlb0xvb2t1cExvY2F0aW9uKHF1ZXJ5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogR2VvQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IEdlb0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEV4ZWN1dGVzIGEgZnV6enkgbG9jYXRpb24gc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGdlb0xvb2t1cExvY2F0aW9uKHF1ZXJ5Pzogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gR2VvQXBpRnAoY29uZmlndXJhdGlvbikuZ2VvTG9va3VwTG9jYXRpb24ocXVlcnksIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogR2VvQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIEdlb0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBHZW9BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBFeGVjdXRlcyBhIGZ1enp5IGxvY2F0aW9uIHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3F1ZXJ5XSBTZWFyY2ggVGV4dC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIEdlb0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBnZW9Mb29rdXBMb2NhdGlvbihxdWVyeT86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gR2VvQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5nZW9Mb29rdXBMb2NhdGlvbihxdWVyeSwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgaWRlbnRpdHlHZXQob3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2lkZW50aXR5YDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBJZGVudGl0eUFwaUZwID0gZnVuY3Rpb24oY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBpZGVudGl0eUdldChvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gSWRlbnRpdHlBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS5pZGVudGl0eUdldChvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogSWRlbnRpdHlBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgSWRlbnRpdHlBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgaWRlbnRpdHlHZXQob3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIElkZW50aXR5QXBpRnAoY29uZmlndXJhdGlvbikuaWRlbnRpdHlHZXQob3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBJZGVudGl0eUFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBJZGVudGl0eUFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBJZGVudGl0eUFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgSWRlbnRpdHlBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgaWRlbnRpdHlHZXQob3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gSWRlbnRpdHlBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmlkZW50aXR5R2V0KG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudEdldFBsYW4oaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGFjY291bnRHZXRQbGFuLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0FjY291bnQvUGxhbmBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjY291bnRSZWFkKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBhY2NvdW50UmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9BY2NvdW50YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IENyZWF0ZXMgYSBuZXcgT3JnYW5pc2F0aW9uLiBUaGlzIHdpbGwgYXNzaWduIHRoZSBsb2dnZWQgaW4gdXNlciB0byB0aGUgb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIEluZm9ybWF0aW9uIG9mIHRoZSBuZXcgT3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdvcmdhbmlzYXRpb24nIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKG9yZ2FuaXNhdGlvbiA9PT0gbnVsbCB8fCBvcmdhbmlzYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdvcmdhbmlzYXRpb24nLCdSZXF1aXJlZCBwYXJhbWV0ZXIgb3JnYW5pc2F0aW9uIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc0NyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbiAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KG9yZ2FuaXNhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3JnYW5pc2F0aW9uIDoge30pIDogKG9yZ2FuaXNhdGlvbiB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0RlbGV0ZShpZDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgb3JnYW5pc2F0aW9uc0RlbGV0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnREVMRVRFJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zUmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfWBcbiAgICAgICAgICAgICAgICAucmVwbGFjZShgeyR7XCJpZFwifX1gLCBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGlkKSkpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgaW52aXRhdGlvbnMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvT3JnYW5pc2F0aW9ucy97aWR9L0ludml0YXRpb25zYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIElkIG9mIHRoZSBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL09yZ2FuaXNhdGlvbnMve2lkfS9UZXJtc09mVXNlYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnaWQnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGlkID09PSBudWxsIHx8IGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignaWQnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgaWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBvcmdhbmlzYXRpb25zVXBkYXRlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnb3JnYW5pc2F0aW9uJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChvcmdhbmlzYXRpb24gPT09IG51bGwgfHwgb3JnYW5pc2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignb3JnYW5pc2F0aW9uJywnUmVxdWlyZWQgcGFyYW1ldGVyIG9yZ2FuaXNhdGlvbiB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIG9yZ2FuaXNhdGlvbnNVcGRhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9PcmdhbmlzYXRpb25zL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BVVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIG9yZ2FuaXNhdGlvbiAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KG9yZ2FuaXNhdGlvbiAhPT0gdW5kZWZpbmVkID8gb3JnYW5pc2F0aW9uIDoge30pIDogKG9yZ2FuaXNhdGlvbiB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBPcmdhbmlzYXRpb25zQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIHBsYW4gaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50R2V0UGxhbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxQbGFuSW5mb3JtYXRpb24+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLmFjY291bnRHZXRQbGFuKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBhY2NvdW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudFJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QWNjb3VudD4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikuYWNjb3VudFJlYWQoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T3JnYW5pc2F0aW9ufSBvcmdhbmlzYXRpb24gSW5mb3JtYXRpb24gb2YgdGhlIG5ldyBPcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zQ3JlYXRlKG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxPcmdhbmlzYXRpb24+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc0RlbGV0ZShpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNEZWxldGUoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGRldGFpbHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zUmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxPcmdhbmlzYXRpb24+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNSZWFkKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBpbnZpdGF0aW9ucy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8SW52aXRhdGlvbj4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gT3JnYW5pc2F0aW9uc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gT3JnYW5pc2F0aW9uXFwncyBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxUZXJtc09mVXNlPj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQ6IHN0cmluZywgb3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBPcmdhbmlzYXRpb25zQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1VwZGF0ZShpZCwgb3JnYW5pc2F0aW9uLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogT3JnYW5pc2F0aW9uc0FwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBPcmdhbmlzYXRpb25zQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhbiBPcmdhbmlzYXRpb25cXCdzIHBsYW4gaW5mb3JtYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBhY2NvdW50R2V0UGxhbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLmFjY291bnRHZXRQbGFuKGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBhY2NvdW50IGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgYWNjb3VudFJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcChjb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IE9yZ2FuaXNhdGlvbi4gVGhpcyB3aWxsIGFzc2lnbiB0aGUgbG9nZ2VkIGluIHVzZXIgdG8gdGhlIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNDcmVhdGUob3JnYW5pc2F0aW9uOiBPcmdhbmlzYXRpb24sIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb24sIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zRGVsZXRlKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0RlbGV0ZShpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRzIGFuIG9yZ2FuaXNhdGlvblxcJ3MgZGV0YWlscy5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNSZWFkKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAoY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGludml0YXRpb25zLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgb3JnYW5pc2F0aW9uc1JlYWRJbnZpdGF0aW9ucyhpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgR2V0XFwncyBhIGxpc3Qgb2YgYW4gT3JnYW5pc2F0aW9uXFwncyBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIG9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIGFuIG9yZ2FuaXNhdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBPcmdhbmlzYXRpb24gSW5mb3JtYXRpb24uIEFsbCBmaWVsZHMgYXJlIHVwZGF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBvcmdhbmlzYXRpb25zVXBkYXRlKGlkOiBzdHJpbmcsIG9yZ2FuaXNhdGlvbjogT3JnYW5pc2F0aW9uLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKGNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNVcGRhdGUoaWQsIG9yZ2FuaXNhdGlvbiwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBPcmdhbmlzYXRpb25zQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIE9yZ2FuaXNhdGlvbnNBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgT3JnYW5pc2F0aW9uc0FwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYW4gT3JnYW5pc2F0aW9uXFwncyBwbGFuIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIGFjY291bnRHZXRQbGFuKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLmFjY291bnRHZXRQbGFuKGlkLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGFuIE9yZ2FuaXNhdGlvblxcJ3MgYWNjb3VudCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NvdW50UmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBPcmdhbmlzYXRpb25zQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5hY2NvdW50UmVhZChpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBPcmdhbmlzYXRpb24uIFRoaXMgd2lsbCBhc3NpZ24gdGhlIGxvZ2dlZCBpbiB1c2VyIHRvIHRoZSBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtPcmdhbmlzYXRpb259IG9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbiBvZiB0aGUgbmV3IE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0NyZWF0ZShvcmdhbmlzYXRpb24sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IERlbGV0ZXMgYW4gb3JnYW5pc2F0aW9uLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBPcmdhbmlzYXRpb24gSWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBPcmdhbmlzYXRpb25zQXBpXG4gICAgICovXG4gICAgcHVibGljIG9yZ2FuaXNhdGlvbnNEZWxldGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc0RlbGV0ZShpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0cyBhbiBvcmdhbmlzYXRpb25cXCdzIGRldGFpbHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1JlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1JlYWQoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldHMgYW4gb3JnYW5pc2F0aW9uXFwncyBpbnZpdGF0aW9ucy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgT3JnYW5pc2F0aW9uIElkLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgT3JnYW5pc2F0aW9uc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyBvcmdhbmlzYXRpb25zUmVhZEludml0YXRpb25zKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNSZWFkSW52aXRhdGlvbnMoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgYSBsaXN0IG9mIGFuIE9yZ2FuaXNhdGlvblxcJ3MgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgSWQgb2YgdGhlIE9yZ2FuaXNhdGlvbi5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1Rlcm1zT2ZVc2VSZWFkKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIE9yZ2FuaXNhdGlvbnNBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLm9yZ2FuaXNhdGlvbnNUZXJtc09mVXNlUmVhZChpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVXBkYXRlcyBhbiBvcmdhbmlzYXRpb24uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIE9yZ2FuaXNhdGlvbiBJZC5cbiAgICAgKiBAcGFyYW0ge09yZ2FuaXNhdGlvbn0gb3JnYW5pc2F0aW9uIE9yZ2FuaXNhdGlvbiBJbmZvcm1hdGlvbi4gQWxsIGZpZWxkcyBhcmUgdXBkYXRlZC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIE9yZ2FuaXNhdGlvbnNBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgb3JnYW5pc2F0aW9uc1VwZGF0ZShpZDogc3RyaW5nLCBvcmdhbmlzYXRpb246IE9yZ2FuaXNhdGlvbiwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gT3JnYW5pc2F0aW9uc0FwaUZwKHRoaXMuY29uZmlndXJhdGlvbikub3JnYW5pc2F0aW9uc1VwZGF0ZShpZCwgb3JnYW5pc2F0aW9uLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFBlcm1pc3Npb25BcGkgLSBheGlvcyBwYXJhbWV0ZXIgY3JlYXRvclxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgUGVybWlzc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBUaGUgcGVybWlzc2lvbiBsZXZlbCBmb3IgZWFjaCBvYmplY3QgaWQgaW4gdGhlIHJlcXVlc3QuXG4gICAgICAgICAqIEBwYXJhbSB7UGVybWlzc2lvbnNSZXF1ZXN0fSBwZXJtaXNzaW9uc1JlcXVlc3QgQSByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIGlkcyB0byBjaGVjay5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHBlcm1pc3Npb25HZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uc1JlcXVlc3Q6IFBlcm1pc3Npb25zUmVxdWVzdCwgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdwZXJtaXNzaW9uc1JlcXVlc3QnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHBlcm1pc3Npb25zUmVxdWVzdCA9PT0gbnVsbCB8fCBwZXJtaXNzaW9uc1JlcXVlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdwZXJtaXNzaW9uc1JlcXVlc3QnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgcGVybWlzc2lvbnNSZXF1ZXN0IHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcGVybWlzc2lvbkdldFBlcm1pc3Npb25zLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvcGVybWlzc2lvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnUE9TVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG4gICAgICAgICAgICBjb25zdCBuZWVkc1NlcmlhbGl6YXRpb24gPSAodHlwZW9mIHBlcm1pc3Npb25zUmVxdWVzdCAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KHBlcm1pc3Npb25zUmVxdWVzdCAhPT0gdW5kZWZpbmVkID8gcGVybWlzc2lvbnNSZXF1ZXN0IDoge30pIDogKHBlcm1pc3Npb25zUmVxdWVzdCB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogUGVybWlzc2lvbkFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBQZXJtaXNzaW9uQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgVGhlIHBlcm1pc3Npb24gbGV2ZWwgZm9yIGVhY2ggb2JqZWN0IGlkIGluIHRoZSByZXF1ZXN0LlxuICAgICAgICAgKiBAcGFyYW0ge1Blcm1pc3Npb25zUmVxdWVzdH0gcGVybWlzc2lvbnNSZXF1ZXN0IEEgcmVxdWVzdCBvYmplY3QgY29udGFpbmluZyB0aGUgbGlzdCBvZiBpZHMgdG8gY2hlY2suXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBwZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0OiBQZXJtaXNzaW9uc1JlcXVlc3QsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPFBlcm1pc3Npb25zUmVzcG9uc2U+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gUGVybWlzc2lvbkFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnBlcm1pc3Npb25HZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uc1JlcXVlc3QsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBQZXJtaXNzaW9uQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBUaGUgcGVybWlzc2lvbiBsZXZlbCBmb3IgZWFjaCBvYmplY3QgaWQgaW4gdGhlIHJlcXVlc3QuXG4gICAgICAgICAqIEBwYXJhbSB7UGVybWlzc2lvbnNSZXF1ZXN0fSBwZXJtaXNzaW9uc1JlcXVlc3QgQSByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIGlkcyB0byBjaGVjay5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHBlcm1pc3Npb25HZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9uc1JlcXVlc3Q6IFBlcm1pc3Npb25zUmVxdWVzdCwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFBlcm1pc3Npb25BcGlGcChjb25maWd1cmF0aW9uKS5wZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0LCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFBlcm1pc3Npb25BcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUGVybWlzc2lvbkFwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVGhlIHBlcm1pc3Npb24gbGV2ZWwgZm9yIGVhY2ggb2JqZWN0IGlkIGluIHRoZSByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7UGVybWlzc2lvbnNSZXF1ZXN0fSBwZXJtaXNzaW9uc1JlcXVlc3QgQSByZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIHRoZSBsaXN0IG9mIGlkcyB0byBjaGVjay5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFBlcm1pc3Npb25BcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgcGVybWlzc2lvbkdldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zUmVxdWVzdDogUGVybWlzc2lvbnNSZXF1ZXN0LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBQZXJtaXNzaW9uQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5wZXJtaXNzaW9uR2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnNSZXF1ZXN0LCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlBeGlvc1BhcmFtQ3JlYXRvciA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdldHMgb3Igc2V0cyB0aGUgZnJlZSB0ZXh0IHNlYXJjaCB0ZXJtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsc10gR2V0cyBvciBzZXRzIHRoZSBjb21tYSBzZXBhcmF0ZWQgbGFiZWxzIHRoYXQgbXVzdCBiZSBpbmNsdWRlZCBpbiByZXN1bHRzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZ0lkXSBHZXRzIG9yIHNldHMgdGhlIE9yZ2FuaXNhdGlvbiBJRCBmb3IgdGhlIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBHZXRzIG9yIHNldHMgdGhlIGxhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gR2V0cyBvciBzZXRzIHRoZSBsb25naXR1ZGUgKGNlbnRlciBvZiBzZWFyY2ggYXJlYSkuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlzdF0gR2V0cyBvciBzZXRzIHRoZSBkaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGFrZV0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHJldHVybi4gRGVmYXVsdHMgdG8gNjQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0/OiBzdHJpbmcsIGxhYmVscz86IHN0cmluZywgb3JnSWQ/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3NlYXJjaC9hbXBob3JhZWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRlcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ1Rlcm0nXSA9IHRlcm07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsYWJlbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ0xhYmVscyddID0gbGFiZWxzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3JnSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ09yZ0lkJ10gPSBvcmdJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxhdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnTGF0J10gPSBsYXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ0xvbiddID0gbG9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnRGlzdCddID0gZGlzdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRha2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXJbJ1Rha2UnXSA9IHRha2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChza2lwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydTa2lwJ10gPSBza2lwO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIE9yZ2FuaXNhdGlvbnMgd2l0aCBmdXp6eSBzZWFyY2guXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gU2VhcmNoIFRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICBzZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0/OiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvc2VhcmNoL29yZ2FuaXNhdGlvbnNgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWyd0ZXJtJ10gPSB0ZXJtO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZWFyY2hBcGkgLSBmdW5jdGlvbmFsIHByb2dyYW1taW5nIGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgU2VhcmNoZXMgZm9yIEFtcGhvcmFlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdldHMgb3Igc2V0cyB0aGUgZnJlZSB0ZXh0IHNlYXJjaCB0ZXJtLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsc10gR2V0cyBvciBzZXRzIHRoZSBjb21tYSBzZXBhcmF0ZWQgbGFiZWxzIHRoYXQgbXVzdCBiZSBpbmNsdWRlZCBpbiByZXN1bHRzLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZ0lkXSBHZXRzIG9yIHNldHMgdGhlIE9yZ2FuaXNhdGlvbiBJRCBmb3IgdGhlIEFtcGhvcmEuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBHZXRzIG9yIHNldHMgdGhlIGxhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW2xvbl0gR2V0cyBvciBzZXRzIHRoZSBsb25naXR1ZGUgKGNlbnRlciBvZiBzZWFyY2ggYXJlYSkuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZGlzdF0gR2V0cyBvciBzZXRzIHRoZSBkaXN0YW5jZSBmcm9tIGNlbnRlciBvZiBzZWFyY2ggYXJlYSAoZGVzY3JpYmluZyBhIGNpcmNsZSkuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGFrZV0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHJldHVybi4gRGVmYXVsdHMgdG8gNjQuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0/OiBzdHJpbmcsIGxhYmVscz86IHN0cmluZywgb3JnSWQ/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxCYXNpY0FtcGhvcmE+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFNlYXJjaEFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0sIGxhYmVscywgb3JnSWQsIGxhdCwgbG9uLCBkaXN0LCB0YWtlLCBza2lwLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBPcmdhbmlzYXRpb25zIHdpdGggZnV6enkgc2VhcmNoLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIFNlYXJjaCBUZXJtLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoT3JnYW5pc2F0aW9ucyh0ZXJtPzogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBcnJheTxPcmdhbmlzYXRpb24+PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFNlYXJjaEFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFNlYXJjaEFwaSAtIGZhY3RvcnkgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hBcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgQW1waG9yYWUuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdGVybV0gR2V0cyBvciBzZXRzIHRoZSBmcmVlIHRleHQgc2VhcmNoIHRlcm0uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFiZWxzXSBHZXRzIG9yIHNldHMgdGhlIGNvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3JnSWRdIEdldHMgb3Igc2V0cyB0aGUgT3JnYW5pc2F0aW9uIElEIGZvciB0aGUgQW1waG9yYS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtsYXRdIEdldHMgb3Igc2V0cyB0aGUgbGF0aXR1ZGUgKGNlbnRlciBvZiBzZWFyY2ggYXJlYSkuXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbG9uXSBHZXRzIG9yIHNldHMgdGhlIGxvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtkaXN0XSBHZXRzIG9yIHNldHMgdGhlIGRpc3RhbmNlIGZyb20gY2VudGVyIG9mIHNlYXJjaCBhcmVhIChkZXNjcmliaW5nIGEgY2lyY2xlKS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0YWtlXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VhcmNoU2VhcmNoQW1waG9yYWUodGVybT86IHN0cmluZywgbGFiZWxzPzogc3RyaW5nLCBvcmdJZD86IHN0cmluZywgbGF0PzogbnVtYmVyLCBsb24/OiBudW1iZXIsIGRpc3Q/OiBudW1iZXIsIHRha2U/OiBudW1iZXIsIHNraXA/OiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBTZWFyY2hBcGlGcChjb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hBbXBob3JhZSh0ZXJtLCBsYWJlbHMsIG9yZ0lkLCBsYXQsIGxvbiwgZGlzdCwgdGFrZSwgc2tpcCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXJtXSBTZWFyY2ggVGVybS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybT86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFNlYXJjaEFwaUZwKGNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybSwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBTZWFyY2hBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgU2VhcmNoQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFNlYXJjaGVzIGZvciBBbXBob3JhZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIEdldHMgb3Igc2V0cyB0aGUgZnJlZSB0ZXh0IHNlYXJjaCB0ZXJtLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFiZWxzXSBHZXRzIG9yIHNldHMgdGhlIGNvbW1hIHNlcGFyYXRlZCBsYWJlbHMgdGhhdCBtdXN0IGJlIGluY2x1ZGVkIGluIHJlc3VsdHMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcmdJZF0gR2V0cyBvciBzZXRzIHRoZSBPcmdhbmlzYXRpb24gSUQgZm9yIHRoZSBBbXBob3JhLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGF0XSBHZXRzIG9yIHNldHMgdGhlIGxhdGl0dWRlIChjZW50ZXIgb2Ygc2VhcmNoIGFyZWEpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbG9uXSBHZXRzIG9yIHNldHMgdGhlIGxvbmdpdHVkZSAoY2VudGVyIG9mIHNlYXJjaCBhcmVhKS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2Rpc3RdIEdldHMgb3Igc2V0cyB0aGUgZGlzdGFuY2UgZnJvbSBjZW50ZXIgb2Ygc2VhcmNoIGFyZWEgKGRlc2NyaWJpbmcgYSBjaXJjbGUpLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbdGFrZV0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHJldHVybi4gRGVmYXVsdHMgdG8gNjQuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgU2VhcmNoQXBpXG4gICAgICovXG4gICAgcHVibGljIHNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0/OiBzdHJpbmcsIGxhYmVscz86IHN0cmluZywgb3JnSWQ/OiBzdHJpbmcsIGxhdD86IG51bWJlciwgbG9uPzogbnVtYmVyLCBkaXN0PzogbnVtYmVyLCB0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBTZWFyY2hBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnNlYXJjaFNlYXJjaEFtcGhvcmFlKHRlcm0sIGxhYmVscywgb3JnSWQsIGxhdCwgbG9uLCBkaXN0LCB0YWtlLCBza2lwLCBvcHRpb25zKSh0aGlzLmF4aW9zLCB0aGlzLmJhc2VQYXRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBTZWFyY2hlcyBmb3IgT3JnYW5pc2F0aW9ucyB3aXRoIGZ1enp5IHNlYXJjaC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Rlcm1dIFNlYXJjaCBUZXJtLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgU2VhcmNoQXBpXG4gICAgICovXG4gICAgcHVibGljIHNlYXJjaFNlYXJjaE9yZ2FuaXNhdGlvbnModGVybT86IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gU2VhcmNoQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS5zZWFyY2hTZWFyY2hPcmdhbmlzYXRpb25zKHRlcm0sIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogVGVybXNPZlVzZUFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUZXJtc09mVXNlQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFjY2VwdHMgYSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUFjY2VwdChpZDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2lkJyBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChpZCA9PT0gbnVsbCB8fCBpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2lkJywnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgdGVybXNPZlVzZUFjY2VwdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL1Rlcm1zT2ZVc2Uve2lkfS9BY2NlcHRzYFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVUZXJtc09mVXNlfSBjcmVhdGVUZXJtc09mVXNlIFRoZSB0ZXJtcyBvZiB1c2UgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUNyZWF0ZShjcmVhdGVUZXJtc09mVXNlOiBDcmVhdGVUZXJtc09mVXNlLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ2NyZWF0ZVRlcm1zT2ZVc2UnIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZVRlcm1zT2ZVc2UgPT09IG51bGwgfHwgY3JlYXRlVGVybXNPZlVzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ2NyZWF0ZVRlcm1zT2ZVc2UnLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlVGVybXNPZlVzZSB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VDcmVhdGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9UZXJtc09mVXNlYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVUZXJtc09mVXNlICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkoY3JlYXRlVGVybXNPZlVzZSAhPT0gdW5kZWZpbmVkID8gY3JlYXRlVGVybXNPZlVzZSA6IHt9KSA6IChjcmVhdGVUZXJtc09mVXNlIHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VEZWxldGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS9UZXJtc09mVXNlL3tpZH1gXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoYHske1wiaWRcIn19YCwgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhpZCkpKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0RFTEVURScsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gW3NraXBdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byBza2lwIGJlZm9yZSByZXR1cm5pbmcuIERlZmF1bHRzIHRvIDAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlTGlzdCh0YWtlPzogbnVtYmVyLCBza2lwPzogbnVtYmVyLCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL1Rlcm1zT2ZVc2VgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YWtlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyWydUYWtlJ10gPSB0YWtlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2tpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJRdWVyeVBhcmFtZXRlclsnU2tpcCddID0gc2tpcDtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICAvLyB2ZXJpZnkgcmVxdWlyZWQgcGFyYW1ldGVyICdpZCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSZXF1aXJlZEVycm9yKCdpZCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBpZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIHRlcm1zT2ZVc2VSZWFkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvVGVybXNPZlVzZS97aWR9YFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKGB7JHtcImlkXCJ9fWAsIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaWQpKSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdHRVQnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH1cbn07XG5cbi8qKlxuICogVGVybXNPZlVzZUFwaSAtIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUZXJtc09mVXNlQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQWNjZXB0cyBhIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBUZXJtcyBvZiBVc2UgaWQuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlQWNjZXB0KGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPGFueT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBUZXJtc09mVXNlQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikudGVybXNPZlVzZUFjY2VwdChpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgVGVybXMgb2YgVXNlIG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVUZXJtc09mVXNlfSBjcmVhdGVUZXJtc09mVXNlIFRoZSB0ZXJtcyBvZiB1c2UgdG8gY3JlYXRlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUNyZWF0ZShjcmVhdGVUZXJtc09mVXNlOiBDcmVhdGVUZXJtc09mVXNlLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxUZXJtc09mVXNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8YW55PiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0YWtlXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUxpc3QodGFrZT86IG51bWJlciwgc2tpcD86IG51bWJlciwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8QXJyYXk8VGVybXNPZlVzZT4+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXhpb3NBcmdzID0gVGVybXNPZlVzZUFwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VMaXN0KHRha2UsIHNraXAsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0ZXJtc09mVXNlUmVhZChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxUZXJtc09mVXNlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRlcm1zT2ZVc2VBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFRlcm1zT2ZVc2VBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGVybXNPZlVzZUFwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEFjY2VwdHMgYSBUZXJtcyBvZiBVc2UuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgVGVybXMgb2YgVXNlIGlkLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUFjY2VwdChpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKGNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VBY2NlcHQoaWQsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7Q3JlYXRlVGVybXNPZlVzZX0gY3JlYXRlVGVybXNPZlVzZSBUaGUgdGVybXMgb2YgdXNlIHRvIGNyZWF0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZTogQ3JlYXRlVGVybXNPZlVzZSwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2UsIG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgdGVybXMgb2YgdXNlIGlkIHRvIGRlbGV0ZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHRlcm1zT2ZVc2VEZWxldGUoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlRGVsZXRlKGlkLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFt0YWtlXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gcmV0dXJuLiBEZWZhdWx0cyB0byA2NC5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IFtza2lwXSBHZXRzIG9yIHNldHMgaG93IG1hbnkgZmlsZXMgdG8gc2tpcCBiZWZvcmUgcmV0dXJuaW5nLiBEZWZhdWx0cyB0byAwLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZUxpc3QodGFrZT86IG51bWJlciwgc2tpcD86IG51bWJlciwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlTGlzdCh0YWtlLCBza2lwLCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcChjb25maWd1cmF0aW9uKS50ZXJtc09mVXNlUmVhZChpZCwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUZXJtc09mVXNlQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFRlcm1zT2ZVc2VBcGlcbiAqIEBleHRlbmRzIHtCYXNlQVBJfVxuICovXG5leHBvcnQgY2xhc3MgVGVybXNPZlVzZUFwaSBleHRlbmRzIEJhc2VBUEkge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IEFjY2VwdHMgYSBUZXJtcyBvZiBVc2UuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBUZXJtcyBvZiBVc2UgaWQuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBUZXJtc09mVXNlQXBpXG4gICAgICovXG4gICAgcHVibGljIHRlcm1zT2ZVc2VBY2NlcHQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUFjY2VwdChpZCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtDcmVhdGVUZXJtc09mVXNlfSBjcmVhdGVUZXJtc09mVXNlIFRoZSB0ZXJtcyBvZiB1c2UgdG8gY3JlYXRlLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc09mVXNlQ3JlYXRlKGNyZWF0ZVRlcm1zT2ZVc2U6IENyZWF0ZVRlcm1zT2ZVc2UsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VDcmVhdGUoY3JlYXRlVGVybXNPZlVzZSwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgRGVsZXRlcyBhIFRlcm1zIG9mIFVzZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSB0ZXJtcyBvZiB1c2UgaWQgdG8gZGVsZXRlLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGVybXNPZlVzZUFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXJtc09mVXNlRGVsZXRlKGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFRlcm1zT2ZVc2VBcGlGcCh0aGlzLmNvbmZpZ3VyYXRpb24pLnRlcm1zT2ZVc2VEZWxldGUoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBzdW1tYXJ5IFJldHVybnMgYWxsIFRlcm1zIG9mIFVzZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Rha2VdIEdldHMgb3Igc2V0cyBob3cgbWFueSBmaWxlcyB0byByZXR1cm4uIERlZmF1bHRzIHRvIDY0LlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbc2tpcF0gR2V0cyBvciBzZXRzIGhvdyBtYW55IGZpbGVzIHRvIHNraXAgYmVmb3JlIHJldHVybmluZy4gRGVmYXVsdHMgdG8gMC5cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZUxpc3QodGFrZT86IG51bWJlciwgc2tpcD86IG51bWJlciwgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZUxpc3QodGFrZSwgc2tpcCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgUmV0dXJucyBhbGwgVGVybXMgb2YgVXNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICogQG1lbWJlcm9mIFRlcm1zT2ZVc2VBcGlcbiAgICAgKi9cbiAgICBwdWJsaWMgdGVybXNPZlVzZVJlYWQoaWQ6IHN0cmluZywgb3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVGVybXNPZlVzZUFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudGVybXNPZlVzZVJlYWQoaWQsIG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogVGltZVNlcmllc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lU2VyaWVzQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWVyeVJlcXVlc3R9IHF1ZXJ5UmVxdWVzdCBUaW1lIFNlcmllcyBxdWVyeS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdHNpY2xpZW50L2Jsb2IvbWFzdGVyL2RvY3MvU2VydmVyLm1kI2Z1bmN0aW9ucyAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCBvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIC8vIHZlcmlmeSByZXF1aXJlZCBwYXJhbWV0ZXIgJ3F1ZXJ5UmVxdWVzdCcgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAocXVlcnlSZXF1ZXN0ID09PSBudWxsIHx8IHF1ZXJ5UmVxdWVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJlcXVpcmVkRXJyb3IoJ3F1ZXJ5UmVxdWVzdCcsJ1JlcXVpcmVkIHBhcmFtZXRlciBxdWVyeVJlcXVlc3Qgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJQYXRoID0gYC9hcGkvdGltZXNlcmllcy9xdWVyeWA7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclVybE9iaiA9IGdsb2JhbEltcG9ydFVybC5wYXJzZShsb2NhbFZhclBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGJhc2VPcHRpb25zO1xuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBiYXNlT3B0aW9ucyA9IGNvbmZpZ3VyYXRpb24uYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclJlcXVlc3RPcHRpb25zID0geyBtZXRob2Q6ICdQT1NUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgICAgICBsb2NhbFZhclVybE9iai5xdWVyeSA9IHsuLi5sb2NhbFZhclVybE9iai5xdWVyeSwgLi4ubG9jYWxWYXJRdWVyeVBhcmFtZXRlciwgLi4ub3B0aW9ucy5xdWVyeX07XG4gICAgICAgICAgICAvLyBmaXggb3ZlcnJpZGUgcXVlcnkgc3RyaW5nIERldGFpbDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc1MTc2NzMvMTA3Nzk0M1xuICAgICAgICAgICAgZGVsZXRlIGxvY2FsVmFyVXJsT2JqLnNlYXJjaDtcbiAgICAgICAgICAgIGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMuaGVhZGVycyA9IHsuLi5sb2NhbFZhckhlYWRlclBhcmFtZXRlciwgLi4ub3B0aW9ucy5oZWFkZXJzfTtcbiAgICAgICAgICAgIGNvbnN0IG5lZWRzU2VyaWFsaXphdGlvbiA9ICh0eXBlb2YgcXVlcnlSZXF1ZXN0ICE9PSBcInN0cmluZ1wiKSB8fCBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmRhdGEgPSAgbmVlZHNTZXJpYWxpemF0aW9uID8gSlNPTi5zdHJpbmdpZnkocXVlcnlSZXF1ZXN0ICE9PSB1bmRlZmluZWQgPyBxdWVyeVJlcXVlc3QgOiB7fSkgOiAocXVlcnlSZXF1ZXN0IHx8IFwiXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBUaW1lU2VyaWVzQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVTZXJpZXNBcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBVcGRhdGVzIHRoZSBkZXRhaWxzIG9mIGFuIEFtcGhvcmEgYnkgSWQuXG4gICAgICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZVNlcmllc1F1ZXJ5VGltZVNlcmllcyhxdWVyeVJlcXVlc3Q6IFF1ZXJ5UmVxdWVzdCwgb3B0aW9ucz86IGFueSk6IChheGlvcz86IEF4aW9zSW5zdGFuY2UsIGJhc2VQYXRoPzogc3RyaW5nKSA9PiBBeGlvc1Byb21pc2U8UXVlcnlSZXN1bHRQYWdlPiB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckF4aW9zQXJncyA9IFRpbWVTZXJpZXNBcGlBeGlvc1BhcmFtQ3JlYXRvcihjb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFRpbWVTZXJpZXNBcGkgLSBmYWN0b3J5IGludGVyZmFjZVxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgVGltZVNlcmllc0FwaUZhY3RvcnkgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIGJhc2VQYXRoPzogc3RyaW5nLCBheGlvcz86IEF4aW9zSW5zdGFuY2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IFVwZGF0ZXMgdGhlIGRldGFpbHMgb2YgYW4gQW1waG9yYSBieSBJZC5cbiAgICAgICAgICogQHBhcmFtIHtRdWVyeVJlcXVlc3R9IHF1ZXJ5UmVxdWVzdCBUaW1lIFNlcmllcyBxdWVyeS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvdHNpY2xpZW50L2Jsb2IvbWFzdGVyL2RvY3MvU2VydmVyLm1kI2Z1bmN0aW9ucyAuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVGltZVNlcmllc0FwaUZwKGNvbmZpZ3VyYXRpb24pLnRpbWVTZXJpZXNRdWVyeVRpbWVTZXJpZXMocXVlcnlSZXF1ZXN0LCBvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFRpbWVTZXJpZXNBcGkgLSBvYmplY3Qtb3JpZW50ZWQgaW50ZXJmYWNlXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgVGltZVNlcmllc0FwaVxuICogQGV4dGVuZHMge0Jhc2VBUEl9XG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lU2VyaWVzQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgVXBkYXRlcyB0aGUgZGV0YWlscyBvZiBhbiBBbXBob3JhIGJ5IElkLlxuICAgICAqIEBwYXJhbSB7UXVlcnlSZXF1ZXN0fSBxdWVyeVJlcXVlc3QgVGltZSBTZXJpZXMgcXVlcnkuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3RzaWNsaWVudC9ibG9iL21hc3Rlci9kb2NzL1NlcnZlci5tZCNmdW5jdGlvbnMgLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVGltZVNlcmllc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdDogUXVlcnlSZXF1ZXN0LCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgIHJldHVybiBUaW1lU2VyaWVzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS50aW1lU2VyaWVzUXVlcnlUaW1lU2VyaWVzKHF1ZXJ5UmVxdWVzdCwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBVc2Vyc0FwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBDcmVhdGVzIGEgbmV3IFVzZXIuIFJldHVybnMgdGhlIHBhc3N3b3JkLlxuICAgICAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmFVc2VyfSBjcmVhdGVBbXBob3JhVXNlciBVc2VyIHBhcmFtZXRlcnMuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIG9wdGlvbnM6IGFueSA9IHt9KTogUmVxdWVzdEFyZ3Mge1xuICAgICAgICAgICAgLy8gdmVyaWZ5IHJlcXVpcmVkIHBhcmFtZXRlciAnY3JlYXRlQW1waG9yYVVzZXInIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKGNyZWF0ZUFtcGhvcmFVc2VyID09PSBudWxsIHx8IGNyZWF0ZUFtcGhvcmFVc2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVxdWlyZWRFcnJvcignY3JlYXRlQW1waG9yYVVzZXInLCdSZXF1aXJlZCBwYXJhbWV0ZXIgY3JlYXRlQW1waG9yYVVzZXIgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyB1c2Vyc0NyZWF0ZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3VzZXJzYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ1BPU1QnLCAuLi5iYXNlT3B0aW9ucywgLi4ub3B0aW9uc307XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhckhlYWRlclBhcmFtZXRlciA9IHt9IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIEJlYXJlciByZXF1aXJlZFxuICAgICAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24gJiYgY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhckFwaUtleVZhbHVlID0gdHlwZW9mIGNvbmZpZ3VyYXRpb24uYXBpS2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIDogY29uZmlndXJhdGlvbi5hcGlLZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXJbXCJBdXRob3JpemF0aW9uXCJdID0gbG9jYWxWYXJBcGlLZXlWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgXG4gICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlclsnQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuICAgICAgICAgICAgY29uc3QgbmVlZHNTZXJpYWxpemF0aW9uID0gKHR5cGVvZiBjcmVhdGVBbXBob3JhVXNlciAhPT0gXCJzdHJpbmdcIikgfHwgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5kYXRhID0gIG5lZWRzU2VyaWFsaXphdGlvbiA/IEpTT04uc3RyaW5naWZ5KGNyZWF0ZUFtcGhvcmFVc2VyICE9PSB1bmRlZmluZWQgPyBjcmVhdGVBbXBob3JhVXNlciA6IHt9KSA6IChjcmVhdGVBbXBob3JhVXNlciB8fCBcIlwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdsb2JhbEltcG9ydFVybC5mb3JtYXQobG9jYWxWYXJVcmxPYmopLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNSZWFkU2VsZihvcHRpb25zOiBhbnkgPSB7fSk6IFJlcXVlc3RBcmdzIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUGF0aCA9IGAvYXBpL3VzZXJzL3NlbGZgO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJVcmxPYmogPSBnbG9iYWxJbXBvcnRVcmwucGFyc2UobG9jYWxWYXJQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBiYXNlT3B0aW9ucztcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYmFzZU9wdGlvbnMgPSBjb25maWd1cmF0aW9uLmJhc2VPcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyA9IHsgbWV0aG9kOiAnR0VUJywgLi4uYmFzZU9wdGlvbnMsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIgPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclF1ZXJ5UGFyYW1ldGVyID0ge30gYXMgYW55O1xuXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiBCZWFyZXIgcmVxdWlyZWRcbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uICYmIGNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBcGlLZXlWYWx1ZSA9IHR5cGVvZiBjb25maWd1cmF0aW9uLmFwaUtleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICA/IGNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZ3VyYXRpb24uYXBpS2V5O1xuICAgICAgICAgICAgICAgIGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyW1wiQXV0aG9yaXphdGlvblwiXSA9IGxvY2FsVmFyQXBpS2V5VmFsdWU7XG4gICAgICAgICAgICB9XG5cblxuICAgIFxuICAgICAgICAgICAgbG9jYWxWYXJVcmxPYmoucXVlcnkgPSB7Li4ubG9jYWxWYXJVcmxPYmoucXVlcnksIC4uLmxvY2FsVmFyUXVlcnlQYXJhbWV0ZXIsIC4uLm9wdGlvbnMucXVlcnl9O1xuICAgICAgICAgICAgLy8gZml4IG92ZXJyaWRlIHF1ZXJ5IHN0cmluZyBEZXRhaWw6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTE3NjczLzEwNzc5NDNcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFZhclVybE9iai5zZWFyY2g7XG4gICAgICAgICAgICBsb2NhbFZhclJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSB7Li4ubG9jYWxWYXJIZWFkZXJQYXJhbWV0ZXIsIC4uLm9wdGlvbnMuaGVhZGVyc307XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdXJsOiBnbG9iYWxJbXBvcnRVcmwuZm9ybWF0KGxvY2FsVmFyVXJsT2JqKSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBsb2NhbFZhclJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJzQXBpRnAgPSBmdW5jdGlvbihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXI6IENyZWF0ZUFtcGhvcmFVc2VyLCBvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbXBob3JhVXNlcj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnVzZXJzQ3JlYXRlKGNyZWF0ZUFtcGhvcmFVc2VyLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiAoYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcywgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aW9zUmVxdWVzdEFyZ3MgPSB7Li4ubG9jYWxWYXJBeGlvc0FyZ3Mub3B0aW9ucywgdXJsOiBiYXNlUGF0aCArIGxvY2FsVmFyQXhpb3NBcmdzLnVybH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnJlcXVlc3QoYXhpb3NSZXF1ZXN0QXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgbG9nZ2VkIGluIHVzZXJzIGluZm9ybWF0aW9uLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNSZWFkU2VsZihvcHRpb25zPzogYW55KTogKGF4aW9zPzogQXhpb3NJbnN0YW5jZSwgYmFzZVBhdGg/OiBzdHJpbmcpID0+IEF4aW9zUHJvbWlzZTxBbXBob3JhVXNlcj4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBVc2Vyc0FwaUF4aW9zUGFyYW1DcmVhdG9yKGNvbmZpZ3VyYXRpb24pLnVzZXJzUmVhZFNlbGYob3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gKGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MsIGJhc2VQYXRoOiBzdHJpbmcgPSBCQVNFX1BBVEgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvc1JlcXVlc3RBcmdzID0gey4uLmxvY2FsVmFyQXhpb3NBcmdzLm9wdGlvbnMsIHVybDogYmFzZVBhdGggKyBsb2NhbFZhckF4aW9zQXJncy51cmx9O1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5yZXF1ZXN0KGF4aW9zUmVxdWVzdEFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFVzZXJzQXBpRmFjdG9yeSA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbiwgYmFzZVBhdGg/OiBzdHJpbmcsIGF4aW9zPzogQXhpb3NJbnN0YW5jZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgICAgICogQHBhcmFtIHtDcmVhdGVBbXBob3JhVXNlcn0gY3JlYXRlQW1waG9yYVVzZXIgVXNlciBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlcnNDcmVhdGUoY3JlYXRlQW1waG9yYVVzZXI6IENyZWF0ZUFtcGhvcmFVc2VyLCBvcHRpb25zPzogYW55KSB7XG4gICAgICAgICAgICByZXR1cm4gVXNlcnNBcGlGcChjb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgb3B0aW9ucykoYXhpb3MsIGJhc2VQYXRoKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIGxvZ2dlZCBpbiB1c2VycyBpbmZvcm1hdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgICAgICovXG4gICAgICAgIHVzZXJzUmVhZFNlbGYob3B0aW9ucz86IGFueSkge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAoY29uZmlndXJhdGlvbikudXNlcnNSZWFkU2VsZihvcHRpb25zKShheGlvcywgYmFzZVBhdGgpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG4vKipcbiAqIFVzZXJzQXBpIC0gb2JqZWN0LW9yaWVudGVkIGludGVyZmFjZVxuICogQGV4cG9ydFxuICogQGNsYXNzIFVzZXJzQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJzQXBpIGV4dGVuZHMgQmFzZUFQSSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgQ3JlYXRlcyBhIG5ldyBVc2VyLiBSZXR1cm5zIHRoZSBwYXNzd29yZC5cbiAgICAgKiBAcGFyYW0ge0NyZWF0ZUFtcGhvcmFVc2VyfSBjcmVhdGVBbXBob3JhVXNlciBVc2VyIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBVc2Vyc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB1c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlcjogQ3JlYXRlQW1waG9yYVVzZXIsIG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS51c2Vyc0NyZWF0ZShjcmVhdGVBbXBob3JhVXNlciwgb3B0aW9ucykodGhpcy5heGlvcywgdGhpcy5iYXNlUGF0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHN1bW1hcnkgR2V0XFwncyBsb2dnZWQgaW4gdXNlcnMgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9uc10gT3ZlcnJpZGUgaHR0cCByZXF1ZXN0IG9wdGlvbi5cbiAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAqIEBtZW1iZXJvZiBVc2Vyc0FwaVxuICAgICAqL1xuICAgIHB1YmxpYyB1c2Vyc1JlYWRTZWxmKG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJzQXBpRnAodGhpcy5jb25maWd1cmF0aW9uKS51c2Vyc1JlYWRTZWxmKG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIGF4aW9zIHBhcmFtZXRlciBjcmVhdG9yXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBWZXJzaW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogXG4gICAgICAgICAqIEBzdW1tYXJ5IEdldFxcJ3MgdGhlIGN1cnJlbnQgc2VydmVyIHZlcnNpb24uXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICAgICAqIEB0aHJvd3Mge1JlcXVpcmVkRXJyb3J9XG4gICAgICAgICAqL1xuICAgICAgICB2ZXJzaW9uR2V0Q3VycmVudFZlcnNpb24ob3B0aW9uczogYW55ID0ge30pOiBSZXF1ZXN0QXJncyB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFZhclBhdGggPSBgL2FwaS92ZXJzaW9uYDtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyVXJsT2JqID0gZ2xvYmFsSW1wb3J0VXJsLnBhcnNlKGxvY2FsVmFyUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYmFzZU9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGJhc2VPcHRpb25zID0gY29uZmlndXJhdGlvbi5iYXNlT3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyUmVxdWVzdE9wdGlvbnMgPSB7IG1ldGhvZDogJ0dFVCcsIC4uLmJhc2VPcHRpb25zLCAuLi5vcHRpb25zfTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFySGVhZGVyUGFyYW1ldGVyID0ge30gYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJRdWVyeVBhcmFtZXRlciA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRpb24gQmVhcmVyIHJlcXVpcmVkXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFyQXBpS2V5VmFsdWUgPSB0eXBlb2YgY29uZmlndXJhdGlvbi5hcGlLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBjb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgOiBjb25maWd1cmF0aW9uLmFwaUtleTtcbiAgICAgICAgICAgICAgICBsb2NhbFZhckhlYWRlclBhcmFtZXRlcltcIkF1dGhvcml6YXRpb25cIl0gPSBsb2NhbFZhckFwaUtleVZhbHVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICBcbiAgICAgICAgICAgIGxvY2FsVmFyVXJsT2JqLnF1ZXJ5ID0gey4uLmxvY2FsVmFyVXJsT2JqLnF1ZXJ5LCAuLi5sb2NhbFZhclF1ZXJ5UGFyYW1ldGVyLCAuLi5vcHRpb25zLnF1ZXJ5fTtcbiAgICAgICAgICAgIC8vIGZpeCBvdmVycmlkZSBxdWVyeSBzdHJpbmcgRGV0YWlsOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzUxNzY3My8xMDc3OTQzXG4gICAgICAgICAgICBkZWxldGUgbG9jYWxWYXJVcmxPYmouc2VhcmNoO1xuICAgICAgICAgICAgbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gey4uLmxvY2FsVmFySGVhZGVyUGFyYW1ldGVyLCAuLi5vcHRpb25zLmhlYWRlcnN9O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVybDogZ2xvYmFsSW1wb3J0VXJsLmZvcm1hdChsb2NhbFZhclVybE9iaiksXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbG9jYWxWYXJSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlGcCA9IGZ1bmN0aW9uKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKG9wdGlvbnM/OiBhbnkpOiAoYXhpb3M/OiBBeGlvc0luc3RhbmNlLCBiYXNlUGF0aD86IHN0cmluZykgPT4gQXhpb3NQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxWYXJBeGlvc0FyZ3MgPSBWZXJzaW9uQXBpQXhpb3NQYXJhbUNyZWF0b3IoY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIChheGlvczogQXhpb3NJbnN0YW5jZSA9IGdsb2JhbEF4aW9zLCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRIKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3NSZXF1ZXN0QXJncyA9IHsuLi5sb2NhbFZhckF4aW9zQXJncy5vcHRpb25zLCB1cmw6IGJhc2VQYXRoICsgbG9jYWxWYXJBeGlvc0FyZ3MudXJsfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MucmVxdWVzdChheGlvc1JlcXVlc3RBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfVxufTtcblxuLyoqXG4gKiBWZXJzaW9uQXBpIC0gZmFjdG9yeSBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGNvbnN0IFZlcnNpb25BcGlGYWN0b3J5ID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBiYXNlUGF0aD86IHN0cmluZywgYXhpb3M/OiBBeGlvc0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zXSBPdmVycmlkZSBodHRwIHJlcXVlc3Qgb3B0aW9uLlxuICAgICAgICAgKiBAdGhyb3dzIHtSZXF1aXJlZEVycm9yfVxuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgICAgIHJldHVybiBWZXJzaW9uQXBpRnAoY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKG9wdGlvbnMpKGF4aW9zLCBiYXNlUGF0aCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbi8qKlxuICogVmVyc2lvbkFwaSAtIG9iamVjdC1vcmllbnRlZCBpbnRlcmZhY2VcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBWZXJzaW9uQXBpXG4gKiBAZXh0ZW5kcyB7QmFzZUFQSX1cbiAqL1xuZXhwb3J0IGNsYXNzIFZlcnNpb25BcGkgZXh0ZW5kcyBCYXNlQVBJIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAc3VtbWFyeSBHZXRcXCdzIHRoZSBjdXJyZW50IHNlcnZlciB2ZXJzaW9uLlxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnNdIE92ZXJyaWRlIGh0dHAgcmVxdWVzdCBvcHRpb24uXG4gICAgICogQHRocm93cyB7UmVxdWlyZWRFcnJvcn1cbiAgICAgKiBAbWVtYmVyb2YgVmVyc2lvbkFwaVxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJzaW9uR2V0Q3VycmVudFZlcnNpb24ob3B0aW9ucz86IGFueSkge1xuICAgICAgICByZXR1cm4gVmVyc2lvbkFwaUZwKHRoaXMuY29uZmlndXJhdGlvbikudmVyc2lvbkdldEN1cnJlbnRWZXJzaW9uKG9wdGlvbnMpKHRoaXMuYXhpb3MsIHRoaXMuYmFzZVBhdGgpO1xuICAgIH1cblxufVxuXG5cbiJdfQ==