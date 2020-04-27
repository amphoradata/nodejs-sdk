"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfTsx = _interopRequireDefault(require("./OneOfTsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AggregateVariable model module.
 * @module model/AggregateVariable
 * @version 0.9.7
 */
var AggregateVariable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AggregateVariable</code>.
   * @alias module:model/AggregateVariable
   * @param kind {String} 
   */
  function AggregateVariable(kind) {
    _classCallCheck(this, AggregateVariable);

    AggregateVariable.initialize(this, kind);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AggregateVariable, null, [{
    key: "initialize",
    value: function initialize(obj, kind) {
      obj['kind'] = kind;
    }
    /**
     * Constructs a <code>AggregateVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregateVariable} obj Optional instance to populate.
     * @return {module:model/AggregateVariable} The populated <code>AggregateVariable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AggregateVariable();

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('aggregation')) {
          obj['aggregation'] = _ApiClient["default"].convertToType(data['aggregation'], _OneOfTsx["default"]);
        }
      }

      return obj;
    }
  }]);

  return AggregateVariable;
}();
/**
 * @member {module:model/OneOfTsx} filter
 */


AggregateVariable.prototype['filter'] = undefined;
/**
 * @member {String} kind
 */

AggregateVariable.prototype['kind'] = undefined;
/**
 * @member {module:model/OneOfTsx} aggregation
 */

AggregateVariable.prototype['aggregation'] = undefined;
var _default = AggregateVariable;
exports["default"] = _default;