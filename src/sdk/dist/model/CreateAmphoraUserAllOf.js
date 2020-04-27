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
 * The CreateAmphoraUserAllOf model module.
 * @module model/CreateAmphoraUserAllOf
 * @version 0.9.7
 */
var CreateAmphoraUserAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAmphoraUserAllOf</code>.
   * @alias module:model/CreateAmphoraUserAllOf
   * @param password {String} 
   * @param email {String} 
   */
  function CreateAmphoraUserAllOf(password, email) {
    _classCallCheck(this, CreateAmphoraUserAllOf);

    CreateAmphoraUserAllOf.initialize(this, password, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAmphoraUserAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, password, email) {
      obj['password'] = password;
      obj['email'] = email;
    }
    /**
     * Constructs a <code>CreateAmphoraUserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraUserAllOf} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraUserAllOf} The populated <code>CreateAmphoraUserAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAmphoraUserAllOf();

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('confirmPassword')) {
          obj['confirmPassword'] = _ApiClient["default"].convertToType(data['confirmPassword'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateAmphoraUserAllOf;
}();
/**
 * @member {String} password
 */


CreateAmphoraUserAllOf.prototype['password'] = undefined;
/**
 * @member {String} confirmPassword
 */

CreateAmphoraUserAllOf.prototype['confirmPassword'] = undefined;
/**
 * @member {String} email
 */

CreateAmphoraUserAllOf.prototype['email'] = undefined;
var _default = CreateAmphoraUserAllOf;
exports["default"] = _default;