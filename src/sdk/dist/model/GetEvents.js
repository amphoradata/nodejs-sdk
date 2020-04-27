"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfDateTimeRange = _interopRequireDefault(require("./OneOfDateTimeRange"));

var _OneOfTsx = _interopRequireDefault(require("./OneOfTsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetEvents model module.
 * @module model/GetEvents
 * @version 0.9.7
 */
var GetEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetEvents</code>.
   * @alias module:model/GetEvents
   */
  function GetEvents() {
    _classCallCheck(this, GetEvents);

    GetEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEvents} obj Optional instance to populate.
     * @return {module:model/GetEvents} The populated <code>GetEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetEvents();

        if (data.hasOwnProperty('timeSeriesId')) {
          obj['timeSeriesId'] = _ApiClient["default"].convertToType(data['timeSeriesId'], [Object]);
        }

        if (data.hasOwnProperty('searchSpan')) {
          obj['searchSpan'] = _ApiClient["default"].convertToType(data['searchSpan'], _OneOfDateTimeRange["default"]);
        }

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('projectedProperties')) {
          obj['projectedProperties'] = _ApiClient["default"].convertToType(data['projectedProperties'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return GetEvents;
}();
/**
 * @member {Array.<Object>} timeSeriesId
 */


GetEvents.prototype['timeSeriesId'] = undefined;
/**
 * @member {module:model/OneOfDateTimeRange} searchSpan
 */

GetEvents.prototype['searchSpan'] = undefined;
/**
 * @member {module:model/OneOfTsx} filter
 */

GetEvents.prototype['filter'] = undefined;
/**
 * @member {Array.<String>} projectedProperties
 */

GetEvents.prototype['projectedProperties'] = undefined;
var _default = GetEvents;
exports["default"] = _default;