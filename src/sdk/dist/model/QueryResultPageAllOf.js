"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PropertyValues = _interopRequireDefault(require("./PropertyValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The QueryResultPageAllOf model module.
 * @module model/QueryResultPageAllOf
 * @version 0.9.7
 */
var QueryResultPageAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QueryResultPageAllOf</code>.
   * @alias module:model/QueryResultPageAllOf
   */
  function QueryResultPageAllOf() {
    _classCallCheck(this, QueryResultPageAllOf);

    QueryResultPageAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QueryResultPageAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QueryResultPageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryResultPageAllOf} obj Optional instance to populate.
     * @return {module:model/QueryResultPageAllOf} The populated <code>QueryResultPageAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QueryResultPageAllOf();

        if (data.hasOwnProperty('timestamps')) {
          obj['timestamps'] = _ApiClient["default"].convertToType(data['timestamps'], ['Date']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_PropertyValues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return QueryResultPageAllOf;
}();
/**
 * @member {Array.<Date>} timestamps
 */


QueryResultPageAllOf.prototype['timestamps'] = undefined;
/**
 * @member {Array.<module:model/PropertyValues>} properties
 */

QueryResultPageAllOf.prototype['properties'] = undefined;
var _default = QueryResultPageAllOf;
exports["default"] = _default;