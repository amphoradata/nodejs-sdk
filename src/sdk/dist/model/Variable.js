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
 * The Variable model module.
 * @module model/Variable
 * @version 0.9.7
 */
var Variable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Variable</code>.
   * @alias module:model/Variable
   * @param kind {String} 
   */
  function Variable(kind) {
    _classCallCheck(this, Variable);

    Variable.initialize(this, kind);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Variable, null, [{
    key: "initialize",
    value: function initialize(obj, kind) {
      obj['kind'] = kind;
    }
    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Variable();

        if (data.hasOwnProperty('filter')) {
          obj['filter'] = _ApiClient["default"].convertToType(data['filter'], _OneOfTsx["default"]);
        }

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Variable;
}();
/**
 * @member {module:model/OneOfTsx} filter
 */


Variable.prototype['filter'] = undefined;
/**
 * @member {String} kind
 */

Variable.prototype['kind'] = undefined;
var _default = Variable;
exports["default"] = _default;