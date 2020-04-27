"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Entity = _interopRequireDefault(require("./Entity"));

var _OrganisationAllOf = _interopRequireDefault(require("./OrganisationAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Organisation model module.
 * @module model/Organisation
 * @version 0.9.7
 */
var Organisation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Organisation</code>.
   * @alias module:model/Organisation
   * @implements module:model/Entity
   * @implements module:model/OrganisationAllOf
   * @param name {String} 
   * @param about {String} 
   * @param websiteUrl {String} 
   */
  function Organisation(name, about, websiteUrl) {
    _classCallCheck(this, Organisation);

    _Entity["default"].initialize(this);

    _OrganisationAllOf["default"].initialize(this, name, about, websiteUrl);

    Organisation.initialize(this, name, about, websiteUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Organisation, null, [{
    key: "initialize",
    value: function initialize(obj, name, about, websiteUrl) {
      obj['name'] = name;
      obj['about'] = about;
      obj['websiteUrl'] = websiteUrl;
    }
    /**
     * Constructs a <code>Organisation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Organisation} obj Optional instance to populate.
     * @return {module:model/Organisation} The populated <code>Organisation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Organisation();

        _Entity["default"].constructFromObject(data, obj);

        _OrganisationAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isDeleted')) {
          obj['isDeleted'] = _ApiClient["default"].convertToType(data['isDeleted'], 'Boolean');
        }

        if (data.hasOwnProperty('createdDate')) {
          obj['createdDate'] = _ApiClient["default"].convertToType(data['createdDate'], 'Date');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('about')) {
          obj['about'] = _ApiClient["default"].convertToType(data['about'], 'String');
        }

        if (data.hasOwnProperty('websiteUrl')) {
          obj['websiteUrl'] = _ApiClient["default"].convertToType(data['websiteUrl'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Organisation;
}();
/**
 * @member {String} id
 */


Organisation.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

Organisation.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

Organisation.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

Organisation.prototype['name'] = undefined;
/**
 * @member {String} about
 */

Organisation.prototype['about'] = undefined;
/**
 * @member {String} websiteUrl
 */

Organisation.prototype['websiteUrl'] = undefined;
/**
 * @member {String} address
 */

Organisation.prototype['address'] = undefined; // Implement Entity interface:

/**
 * @member {String} id
 */

_Entity["default"].prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

_Entity["default"].prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

_Entity["default"].prototype['createdDate'] = undefined; // Implement OrganisationAllOf interface:

/**
 * @member {String} name
 */

_OrganisationAllOf["default"].prototype['name'] = undefined;
/**
 * @member {String} about
 */

_OrganisationAllOf["default"].prototype['about'] = undefined;
/**
 * @member {String} websiteUrl
 */

_OrganisationAllOf["default"].prototype['websiteUrl'] = undefined;
/**
 * @member {String} address
 */

_OrganisationAllOf["default"].prototype['address'] = undefined;
var _default = Organisation;
exports["default"] = _default;