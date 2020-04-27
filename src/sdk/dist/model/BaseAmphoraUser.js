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
 * The BaseAmphoraUser model module.
 * @module model/BaseAmphoraUser
 * @version 0.9.7
 */
var BaseAmphoraUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BaseAmphoraUser</code>.
   * @alias module:model/BaseAmphoraUser
   * @param fullName {String} 
   * @param userName {String} 
   */
  function BaseAmphoraUser(fullName, userName) {
    _classCallCheck(this, BaseAmphoraUser);

    BaseAmphoraUser.initialize(this, fullName, userName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BaseAmphoraUser, null, [{
    key: "initialize",
    value: function initialize(obj, fullName, userName) {
      obj['fullName'] = fullName;
      obj['userName'] = userName;
    }
    /**
     * Constructs a <code>BaseAmphoraUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseAmphoraUser} obj Optional instance to populate.
     * @return {module:model/BaseAmphoraUser} The populated <code>BaseAmphoraUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BaseAmphoraUser();

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
      }

      return obj;
    }
  }]);

  return BaseAmphoraUser;
}();
/**
 * @member {String} phoneNumber
 */


BaseAmphoraUser.prototype['phoneNumber'] = undefined;
/**
 * @member {String} about
 */

BaseAmphoraUser.prototype['about'] = undefined;
/**
 * @member {String} fullName
 */

BaseAmphoraUser.prototype['fullName'] = undefined;
/**
 * @member {String} userName
 */

BaseAmphoraUser.prototype['userName'] = undefined;
var _default = BaseAmphoraUser;
exports["default"] = _default;