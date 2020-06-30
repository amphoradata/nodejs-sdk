"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BASE_PATH = "https://app.amphoradata.com".replace(/\/+$/, "");
/**
 *
 * @export
 */

exports.BASE_PATH = BASE_PATH;
var COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|"
};
/**
 *
 * @export
 * @interface RequestArgs
 */

exports.COLLECTION_FORMATS = COLLECTION_FORMATS;

/**
 *
 * @export
 * @class BaseAPI
 */
var BaseAPI = function BaseAPI(configuration) {
  var basePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BASE_PATH;
  var axios = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _axios["default"];

  _classCallCheck(this, BaseAPI);

  this.basePath = basePath;
  this.axios = axios;

  _defineProperty(this, "configuration", void 0);

  if (configuration) {
    this.configuration = configuration;
    this.basePath = configuration.basePath || this.basePath;
  }
};

exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */

var RequiredError = /*#__PURE__*/function (_Error) {
  _inherits(RequiredError, _Error);

  var _super = _createSuper(RequiredError);

  function RequiredError(field, msg) {
    var _this;

    _classCallCheck(this, RequiredError);

    _this = _super.call(this, msg);
    _this.field = field;

    _defineProperty(_assertThisInitialized(_this), "name", "RequiredError");

    return _this;
  }

  return RequiredError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.RequiredError = RequiredError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nkay9iYXNlLnRzIl0sIm5hbWVzIjpbIkJBU0VfUEFUSCIsInJlcGxhY2UiLCJDT0xMRUNUSU9OX0ZPUk1BVFMiLCJjc3YiLCJzc3YiLCJ0c3YiLCJwaXBlcyIsIkJhc2VBUEkiLCJjb25maWd1cmF0aW9uIiwiYmFzZVBhdGgiLCJheGlvcyIsImdsb2JhbEF4aW9zIiwiUmVxdWlyZWRFcnJvciIsImZpZWxkIiwibXNnIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFNBQVMsR0FBRyw4QkFBOEJDLE9BQTlCLENBQXNDLE1BQXRDLEVBQThDLEVBQTlDLENBQWxCO0FBRVA7Ozs7OztBQUlPLElBQU1DLGtCQUFrQixHQUFHO0FBQzlCQyxFQUFBQSxHQUFHLEVBQUUsR0FEeUI7QUFFOUJDLEVBQUFBLEdBQUcsRUFBRSxHQUZ5QjtBQUc5QkMsRUFBQUEsR0FBRyxFQUFFLElBSHlCO0FBSTlCQyxFQUFBQSxLQUFLLEVBQUU7QUFKdUIsQ0FBM0I7QUFPUDs7Ozs7Ozs7QUFVQTs7Ozs7SUFLYUMsTyxHQUdULGlCQUFZQyxhQUFaLEVBQWlJO0FBQUEsTUFBNUVDLFFBQTRFLHVFQUF6RFQsU0FBeUQ7QUFBQSxNQUFwQ1UsS0FBb0MsdUVBQWJDLGlCQUFhOztBQUFBOztBQUFBLE9BQTVFRixRQUE0RSxHQUE1RUEsUUFBNEU7QUFBQSxPQUFwQ0MsS0FBb0MsR0FBcENBLEtBQW9DOztBQUFBOztBQUM3SCxNQUFJRixhQUFKLEVBQW1CO0FBQ2YsU0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRCxhQUFhLENBQUNDLFFBQWQsSUFBMEIsS0FBS0EsUUFBL0M7QUFDSDtBQUNKLEM7OztBQUNKO0FBRUQ7Ozs7Ozs7SUFNYUcsYTs7Ozs7QUFFVCx5QkFBbUJDLEtBQW5CLEVBQWtDQyxHQUFsQyxFQUFnRDtBQUFBOztBQUFBOztBQUM1Qyw4QkFBTUEsR0FBTjtBQUQ0QyxVQUE3QkQsS0FBNkIsR0FBN0JBLEtBQTZCOztBQUFBLDJEQUR4QixlQUN3Qjs7QUFBQTtBQUUvQzs7O2lDQUo4QkUsSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlXG4vKipcbiAqIEFtcGhvcmEgRGF0YVxuICogICAgICAgICAgICAgIENvbm5lY3QgaW5mb3JtYXRpb24gaW4gcmVhbCB0aW1lIHdpdGggQW1waG9yYSBEYXRhLiAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhcm4gbW9yZSBhdCBodHRwczovL2RvY3MuYW1waG9yYWRhdGEuY29tXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDAuMTAuOFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcbi8vIFNvbWUgaW1wb3J0cyBub3QgdXNlZCBkZXBlbmRpbmcgb24gdGVtcGxhdGUgY29uZGl0aW9uc1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGdsb2JhbEF4aW9zLCB7IEF4aW9zUHJvbWlzZSwgQXhpb3NJbnN0YW5jZSB9IGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IEJBU0VfUEFUSCA9IFwiaHR0cHM6Ly9hcHAuYW1waG9yYWRhdGEuY29tXCIucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgQ09MTEVDVElPTl9GT1JNQVRTID0ge1xuICAgIGNzdjogXCIsXCIsXG4gICAgc3N2OiBcIiBcIixcbiAgICB0c3Y6IFwiXFx0XCIsXG4gICAgcGlwZXM6IFwifFwiLFxufTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBSZXF1ZXN0QXJnc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RBcmdzIHtcbiAgICB1cmw6IHN0cmluZztcbiAgICBvcHRpb25zOiBhbnk7XG59XG5cbi8qKlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCYXNlQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlQVBJIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24/OiBDb25maWd1cmF0aW9uLCBwcm90ZWN0ZWQgYmFzZVBhdGg6IHN0cmluZyA9IEJBU0VfUEFUSCwgcHJvdGVjdGVkIGF4aW9zOiBBeGlvc0luc3RhbmNlID0gZ2xvYmFsQXhpb3MpIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvbi5iYXNlUGF0aCB8fCB0aGlzLmJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlcXVpcmVkRXJyb3JcbiAqIEBleHRlbmRzIHtFcnJvcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVpcmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgbmFtZTogXCJSZXF1aXJlZEVycm9yXCIgPSBcIlJlcXVpcmVkRXJyb3JcIjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmllbGQ6IHN0cmluZywgbXNnPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1zZyk7XG4gICAgfVxufVxuIl19