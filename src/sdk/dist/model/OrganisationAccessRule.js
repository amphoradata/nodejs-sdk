"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessRuleDtoBase = _interopRequireDefault(require("./AccessRuleDtoBase"));

var _OrganisationAccessRuleAllOf = _interopRequireDefault(require("./OrganisationAccessRuleAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OrganisationAccessRule model module.
 * @module model/OrganisationAccessRule
 * @version 0.9.7
 */
var OrganisationAccessRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganisationAccessRule</code>.
   * @alias module:model/OrganisationAccessRule
   * @implements module:model/AccessRuleDtoBase
   * @implements module:model/OrganisationAccessRuleAllOf
   * @param organisationId {String} 
   */
  function OrganisationAccessRule(organisationId) {
    _classCallCheck(this, OrganisationAccessRule);

    _AccessRuleDtoBase["default"].initialize(this);

    _OrganisationAccessRuleAllOf["default"].initialize(this, organisationId);

    OrganisationAccessRule.initialize(this, organisationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganisationAccessRule, null, [{
    key: "initialize",
    value: function initialize(obj, organisationId) {
      obj['organisationId'] = organisationId;
    }
    /**
     * Constructs a <code>OrganisationAccessRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationAccessRule} obj Optional instance to populate.
     * @return {module:model/OrganisationAccessRule} The populated <code>OrganisationAccessRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganisationAccessRule();

        _AccessRuleDtoBase["default"].constructFromObject(data, obj);

        _OrganisationAccessRuleAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('allowOrDeny')) {
          obj['allowOrDeny'] = _ApiClient["default"].convertToType(data['allowOrDeny'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'Number');
        }

        if (data.hasOwnProperty('organisationId')) {
          obj['organisationId'] = _ApiClient["default"].convertToType(data['organisationId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return OrganisationAccessRule;
}();
/**
 * @member {String} id
 */


OrganisationAccessRule.prototype['id'] = undefined;
/**
 * @member {String} allowOrDeny
 */

OrganisationAccessRule.prototype['allowOrDeny'] = undefined;
/**
 * @member {Number} priority
 */

OrganisationAccessRule.prototype['priority'] = undefined;
/**
 * @member {String} organisationId
 */

OrganisationAccessRule.prototype['organisationId'] = undefined; // Implement AccessRuleDtoBase interface:

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

_AccessRuleDtoBase["default"].prototype['priority'] = undefined; // Implement OrganisationAccessRuleAllOf interface:

/**
 * @member {String} organisationId
 */

_OrganisationAccessRuleAllOf["default"].prototype['organisationId'] = undefined;
var _default = OrganisationAccessRule;
exports["default"] = _default;