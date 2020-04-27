"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccessRuleDtoBase model module.
 * @module model/AccessRuleDtoBase
 * @version 0.9.7
 */
var AccessRuleDtoBase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccessRuleDtoBase</code>.
   * @alias module:model/AccessRuleDtoBase
   */
  function AccessRuleDtoBase() {
    _classCallCheck(this, AccessRuleDtoBase);

    AccessRuleDtoBase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccessRuleDtoBase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccessRuleDtoBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessRuleDtoBase} obj Optional instance to populate.
     * @return {module:model/AccessRuleDtoBase} The populated <code>AccessRuleDtoBase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccessRuleDtoBase();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('allowOrDeny')) {
          obj['allowOrDeny'] = _ApiClient["default"].convertToType(data['allowOrDeny'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccessRuleDtoBase;
}();
/**
 * @member {String} id
 */


AccessRuleDtoBase.prototype['id'] = undefined;
/**
 * @member {String} allowOrDeny
 */

AccessRuleDtoBase.prototype['allowOrDeny'] = undefined;
/**
 * @member {Number} priority
 */

AccessRuleDtoBase.prototype['priority'] = undefined;
var _default = AccessRuleDtoBase;
exports["default"] = _default;