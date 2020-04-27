"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessRuleDtoBase = _interopRequireDefault(require("./AccessRuleDtoBase"));

var _UserAccessRuleAllOf = _interopRequireDefault(require("./UserAccessRuleAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserAccessRule model module.
 * @module model/UserAccessRule
 * @version 0.9.7
 */
var UserAccessRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserAccessRule</code>.
   * @alias module:model/UserAccessRule
   * @implements module:model/AccessRuleDtoBase
   * @implements module:model/UserAccessRuleAllOf
   * @param username {String} 
   */
  function UserAccessRule(username) {
    _classCallCheck(this, UserAccessRule);

    _AccessRuleDtoBase["default"].initialize(this);

    _UserAccessRuleAllOf["default"].initialize(this, username);

    UserAccessRule.initialize(this, username);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserAccessRule, null, [{
    key: "initialize",
    value: function initialize(obj, username) {
      obj['username'] = username;
    }
    /**
     * Constructs a <code>UserAccessRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserAccessRule} obj Optional instance to populate.
     * @return {module:model/UserAccessRule} The populated <code>UserAccessRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserAccessRule();

        _AccessRuleDtoBase["default"].constructFromObject(data, obj);

        _UserAccessRuleAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('allowOrDeny')) {
          obj['allowOrDeny'] = _ApiClient["default"].convertToType(data['allowOrDeny'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserAccessRule;
}();
/**
 * @member {String} id
 */


UserAccessRule.prototype['id'] = undefined;
/**
 * @member {String} allowOrDeny
 */

UserAccessRule.prototype['allowOrDeny'] = undefined;
/**
 * @member {Number} priority
 */

UserAccessRule.prototype['priority'] = undefined;
/**
 * @member {String} username
 */

UserAccessRule.prototype['username'] = undefined; // Implement AccessRuleDtoBase interface:

/**
 * @member {String} id
 */

_AccessRuleDtoBase["default"].prototype['id'] = undefined;
/**
 * @member {String} allowOrDeny
 */

_AccessRuleDtoBase["default"].prototype['allowOrDeny'] = undefined;
/**
 * @member {Number} priority
 */

_AccessRuleDtoBase["default"].prototype['priority'] = undefined; // Implement UserAccessRuleAllOf interface:

/**
 * @member {String} username
 */

_UserAccessRuleAllOf["default"].prototype['username'] = undefined;
var _default = UserAccessRule;
exports["default"] = _default;