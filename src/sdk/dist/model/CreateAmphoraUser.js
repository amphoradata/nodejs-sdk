"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BaseAmphoraUser = _interopRequireDefault(require("./BaseAmphoraUser"));

var _CreateAmphoraUserAllOf = _interopRequireDefault(require("./CreateAmphoraUserAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAmphoraUser model module.
 * @module model/CreateAmphoraUser
 * @version 0.9.7
 */
var CreateAmphoraUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAmphoraUser</code>.
   * @alias module:model/CreateAmphoraUser
   * @implements module:model/BaseAmphoraUser
   * @implements module:model/CreateAmphoraUserAllOf
   * @param fullName {String} 
   * @param userName {String} 
   * @param password {String} 
   * @param email {String} 
   */
  function CreateAmphoraUser(fullName, userName, password, email) {
    _classCallCheck(this, CreateAmphoraUser);

    _BaseAmphoraUser["default"].initialize(this, fullName, userName);

    _CreateAmphoraUserAllOf["default"].initialize(this, password, email);

    CreateAmphoraUser.initialize(this, fullName, userName, password, email);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAmphoraUser, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, userName, password, email) {
      obj['fullName'] = fullName;
      obj['userName'] = userName;
      obj['password'] = password;
      obj['email'] = email;
    }
    /**
     * Constructs a <code>CreateAmphoraUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraUser} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraUser} The populated <code>CreateAmphoraUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAmphoraUser();

        _BaseAmphoraUser["default"].constructFromObject(data, obj);

        _CreateAmphoraUserAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('phoneNumber')) {
          obj['phoneNumber'] = _ApiClient["default"].convertToType(data['phoneNumber'], 'String');
        }

        if (data.hasOwnProperty('about')) {
          obj['about'] = _ApiClient["default"].convertToType(data['about'], 'String');
        }

        if (data.hasOwnProperty('fullName')) {
          obj['fullName'] = _ApiClient["default"].convertToType(data['fullName'], 'String');
        }

        if (data.hasOwnProperty('userName')) {
          obj['userName'] = _ApiClient["default"].convertToType(data['userName'], 'String');
        }

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

  return CreateAmphoraUser;
}();
/**
 * @member {String} phoneNumber
 */


CreateAmphoraUser.prototype['phoneNumber'] = undefined;
/**
 * @member {String} about
 */

CreateAmphoraUser.prototype['about'] = undefined;
/**
 * @member {String} fullName
 */

CreateAmphoraUser.prototype['fullName'] = undefined;
/**
 * @member {String} userName
 */

CreateAmphoraUser.prototype['userName'] = undefined;
/**
 * @member {String} password
 */

CreateAmphoraUser.prototype['password'] = undefined;
/**
 * @member {String} confirmPassword
 */

CreateAmphoraUser.prototype['confirmPassword'] = undefined;
/**
 * @member {String} email
 */

CreateAmphoraUser.prototype['email'] = undefined; // Implement BaseAmphoraUser interface:

/**
 * @member {String} phoneNumber
 */

_BaseAmphoraUser["default"].prototype['phoneNumber'] = undefined;
/**
 * @member {String} about
 */

_BaseAmphoraUser["default"].prototype['about'] = undefined;
/**
 * @member {String} fullName
 */

_BaseAmphoraUser["default"].prototype['fullName'] = undefined;
/**
 * @member {String} userName
 */

_BaseAmphoraUser["default"].prototype['userName'] = undefined; // Implement CreateAmphoraUserAllOf interface:

/**
 * @member {String} password
 */

_CreateAmphoraUserAllOf["default"].prototype['password'] = undefined;
/**
 * @member {String} confirmPassword
 */

_CreateAmphoraUserAllOf["default"].prototype['confirmPassword'] = undefined;
/**
 * @member {String} email
 */

_CreateAmphoraUserAllOf["default"].prototype['email'] = undefined;
var _default = CreateAmphoraUser;
exports["default"] = _default;