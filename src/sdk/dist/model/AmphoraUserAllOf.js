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
 * The AmphoraUserAllOf model module.
 * @module model/AmphoraUserAllOf
 * @version 0.9.7
 */
var AmphoraUserAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AmphoraUserAllOf</code>.
   * @alias module:model/AmphoraUserAllOf
   */
  function AmphoraUserAllOf() {
    _classCallCheck(this, AmphoraUserAllOf);

    AmphoraUserAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AmphoraUserAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AmphoraUserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AmphoraUserAllOf} obj Optional instance to populate.
     * @return {module:model/AmphoraUserAllOf} The populated <code>AmphoraUserAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AmphoraUserAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('organisationId')) {
          obj['organisationId'] = _ApiClient["default"].convertToType(data['organisationId'], 'String');
        }

        if (data.hasOwnProperty('lastModified')) {
          obj['lastModified'] = _ApiClient["default"].convertToType(data['lastModified'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return AmphoraUserAllOf;
}();
/**
 * @member {String} id
 */


AmphoraUserAllOf.prototype['id'] = undefined;
/**
 * @member {String} email
 */

AmphoraUserAllOf.prototype['email'] = undefined;
/**
 * @member {String} organisationId
 */

AmphoraUserAllOf.prototype['organisationId'] = undefined;
/**
 * @member {Date} lastModified
 */

AmphoraUserAllOf.prototype['lastModified'] = undefined;
var _default = AmphoraUserAllOf;
exports["default"] = _default;