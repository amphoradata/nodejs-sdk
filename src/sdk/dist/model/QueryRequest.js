"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfAggregateSeries = _interopRequireDefault(require("./OneOfAggregateSeries"));

var _OneOfGetEvents = _interopRequireDefault(require("./OneOfGetEvents"));

var _OneOfGetSeries = _interopRequireDefault(require("./OneOfGetSeries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The QueryRequest model module.
 * @module model/QueryRequest
 * @version 0.9.7
 */
var QueryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QueryRequest</code>.
   * @alias module:model/QueryRequest
   */
  function QueryRequest() {
    _classCallCheck(this, QueryRequest);

    QueryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QueryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QueryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryRequest} obj Optional instance to populate.
     * @return {module:model/QueryRequest} The populated <code>QueryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QueryRequest();

        if (data.hasOwnProperty('getEvents')) {
          obj['getEvents'] = _ApiClient["default"].convertToType(data['getEvents'], _OneOfGetEvents["default"]);
        }

        if (data.hasOwnProperty('getSeries')) {
          obj['getSeries'] = _ApiClient["default"].convertToType(data['getSeries'], _OneOfGetSeries["default"]);
        }

        if (data.hasOwnProperty('aggregateSeries')) {
          obj['aggregateSeries'] = _ApiClient["default"].convertToType(data['aggregateSeries'], _OneOfAggregateSeries["default"]);
        }
      }

      return obj;
    }
  }]);

  return QueryRequest;
}();
/**
 * @member {module:model/OneOfGetEvents} getEvents
 */


QueryRequest.prototype['getEvents'] = undefined;
/**
 * @member {module:model/OneOfGetSeries} getSeries
 */

QueryRequest.prototype['getSeries'] = undefined;
/**
 * @member {module:model/OneOfAggregateSeries} aggregateSeries
 */

QueryRequest.prototype['aggregateSeries'] = undefined;
var _default = QueryRequest;
exports["default"] = _default;