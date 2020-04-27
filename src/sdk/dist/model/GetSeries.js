"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfDateTimeRange = _interopRequireDefault(require("./OneOfDateTimeRange"));

var _OneOfTsx = _interopRequireDefault(require("./OneOfTsx"));

var _Variable = _interopRequireDefault(require("./Variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetSeries model module.
 * @module model/GetSeries
 * @version 0.9.7
 */
var GetSeries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetSeries</code>.
   * @alias module:model/GetSeries
   */
  function GetSeries() {
    _classCallCheck(this, GetSeries);

    GetSeries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetSeries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSeries} obj Optional instance to populate.
     * @return {module:model/GetSeries} The populated <code>GetSeries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetSeries();

        if (data.hasOwnProperty('timeSeriesId')) {
          obj['timeSeriesId'] = _ApiClient["default"].convertToType(data['timeSeriesId'], [Object]);
        }

        if (data.hasOwnProperty('searchSpan')) {
          obj['searchSpan'] = _ApiClient["default"].convertToType(data['searchSpan'], _OneOfDateTimeRange["default"]);
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('projectedVariables')) {
          obj['projectedVariables'] = _ApiClient["default"].convertToType(data['projectedVariables'], ['String']);
        }

        if (data.hasOwnProperty('inlineVariables')) {
          obj['inlineVariables'] = _ApiClient["default"].convertToType(data['inlineVariables'], {
            'String': _Variable["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return GetSeries;
}();
/**
 * @member {Array.<Object>} timeSeriesId
 */


GetSeries.prototype['timeSeriesId'] = undefined;
/**
 * @member {module:model/OneOfDateTimeRange} searchSpan
 */

GetSeries.prototype['searchSpan'] = undefined;
/**
 * @member {module:model/OneOfTsx} filter
 */

GetSeries.prototype['filter'] = undefined;
/**
 * @member {Array.<String>} projectedVariables
 */

GetSeries.prototype['projectedVariables'] = undefined;
/**
 * @member {Object.<String, module:model/Variable>} inlineVariables
 */

GetSeries.prototype['inlineVariables'] = undefined;
var _default = GetSeries;
exports["default"] = _default;