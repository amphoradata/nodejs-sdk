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
 * The AggregateSeries model module.
 * @module model/AggregateSeries
 * @version 0.9.7
 */
var AggregateSeries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AggregateSeries</code>.
   * @alias module:model/AggregateSeries
   */
  function AggregateSeries() {
    _classCallCheck(this, AggregateSeries);

    AggregateSeries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AggregateSeries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AggregateSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateSeries} obj Optional instance to populate.
     * @return {module:model/AggregateSeries} The populated <code>AggregateSeries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AggregateSeries();

        if (data.hasOwnProperty('timeSeriesId')) {
          obj['timeSeriesId'] = _ApiClient["default"].convertToType(data['timeSeriesId'], [Object]);
        }

        if (data.hasOwnProperty('searchSpan')) {
          obj['searchSpan'] = _ApiClient["default"].convertToType(data['searchSpan'], _OneOfDateTimeRange["default"]);
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('interval')) {
          obj['interval'] = _ApiClient["default"].convertToType(data['interval'], 'String');
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

  return AggregateSeries;
}();
/**
 * @member {Array.<Object>} timeSeriesId
 */


AggregateSeries.prototype['timeSeriesId'] = undefined;
/**
 * @member {module:model/OneOfDateTimeRange} searchSpan
 */

AggregateSeries.prototype['searchSpan'] = undefined;
/**
 * @member {module:model/OneOfTsx} filter
 */

AggregateSeries.prototype['filter'] = undefined;
/**
 * @member {String} interval
 */

AggregateSeries.prototype['interval'] = undefined;
/**
 * @member {Array.<String>} projectedVariables
 */

AggregateSeries.prototype['projectedVariables'] = undefined;
/**
 * @member {Object.<String, module:model/Variable>} inlineVariables
 */

AggregateSeries.prototype['inlineVariables'] = undefined;
var _default = AggregateSeries;
exports["default"] = _default;