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
 * The NumericVariable model module.
 * @module model/NumericVariable
 * @version 0.9.7
 */
var NumericVariable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NumericVariable</code>.
   * @alias module:model/NumericVariable
   * @param kind {String} 
   */
  function NumericVariable(kind) {
    _classCallCheck(this, NumericVariable);

    NumericVariable.initialize(this, kind);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NumericVariable, null, [{
    key: "initialize",
    value: function initialize(obj, kind) {
      obj['kind'] = kind;
    }
    /**
     * Constructs a <code>NumericVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NumericVariable} obj Optional instance to populate.
     * @return {module:model/NumericVariable} The populated <code>NumericVariable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NumericVariable();

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('aggregation')) {
          obj['aggregation'] = _ApiClient["default"].convertToType(data['aggregation'], _OneOfTsx["default"]);
        }
      }

      return obj;
    }
  }]);

  return NumericVariable;
}();
/**
 * @member {module:model/OneOfTsx} filter
 */


NumericVariable.prototype['filter'] = undefined;
/**
 * @member {String} kind
 */

NumericVariable.prototype['kind'] = undefined;
/**
 * @member {module:model/OneOfTsx} value
 */

NumericVariable.prototype['value'] = undefined;
/**
 * @member {module:model/OneOfTsx} aggregation
 */

NumericVariable.prototype['aggregation'] = undefined;
var _default = NumericVariable;
exports["default"] = _default;