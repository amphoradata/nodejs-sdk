"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AmphoraUserAllOf = _interopRequireDefault(require("./AmphoraUserAllOf"));

var _BaseAmphoraUser = _interopRequireDefault(require("./BaseAmphoraUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AmphoraUser model module.
 * @module model/AmphoraUser
 * @version 0.9.7
 */
var AmphoraUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AmphoraUser</code>.
   * @alias module:model/AmphoraUser
   * @implements module:model/BaseAmphoraUser
   * @implements module:model/AmphoraUserAllOf
   * @param fullName {String} 
   * @param userName {String} 
   */
  function AmphoraUser(fullName, userName) {
    _classCallCheck(this, AmphoraUser);

    _BaseAmphoraUser["default"].initialize(this, fullName, userName);

    _AmphoraUserAllOf["default"].initialize(this);

    AmphoraUser.initialize(this, fullName, userName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AmphoraUser, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, userName) {
      obj['fullName'] = fullName;
      obj['userName'] = userName;
    }
    /**
     * Constructs a <code>AmphoraUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AmphoraUser} obj Optional instance to populate.
     * @return {module:model/AmphoraUser} The populated <code>AmphoraUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AmphoraUser();

        _BaseAmphoraUser["default"].constructFromObject(data, obj);

        _AmphoraUserAllOf["default"].constructFromObject(data, obj);

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

  return AmphoraUser;
}();
/**
 * @member {String} phoneNumber
 */


AmphoraUser.prototype['phoneNumber'] = undefined;
/**
 * @member {String} about
 */

AmphoraUser.prototype['about'] = undefined;
/**
 * @member {String} fullName
 */

AmphoraUser.prototype['fullName'] = undefined;
/**
 * @member {String} userName
 */

AmphoraUser.prototype['userName'] = undefined;
/**
 * @member {String} id
 */

AmphoraUser.prototype['id'] = undefined;
/**
 * @member {String} email
 */

AmphoraUser.prototype['email'] = undefined;
/**
 * @member {String} organisationId
 */

AmphoraUser.prototype['organisationId'] = undefined;
/**
 * @member {Date} lastModified
 */

AmphoraUser.prototype['lastModified'] = undefined; // Implement BaseAmphoraUser interface:

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

_BaseAmphoraUser["default"].prototype['userName'] = undefined; // Implement AmphoraUserAllOf interface:

/**
 * @member {String} id
 */

_AmphoraUserAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} email
 */

_AmphoraUserAllOf["default"].prototype['email'] = undefined;
/**
 * @member {String} organisationId
 */

_AmphoraUserAllOf["default"].prototype['organisationId'] = undefined;
/**
 * @member {Date} lastModified
 */

_AmphoraUserAllOf["default"].prototype['lastModified'] = undefined;
var _default = AmphoraUser;
exports["default"] = _default;