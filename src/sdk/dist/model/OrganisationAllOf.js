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
 * The OrganisationAllOf model module.
 * @module model/OrganisationAllOf
 * @version 0.9.7
 */
var OrganisationAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrganisationAllOf</code>.
   * @alias module:model/OrganisationAllOf
   * @param name {String} 
   * @param about {String} 
   * @param websiteUrl {String} 
   */
  function OrganisationAllOf(name, about, websiteUrl) {
    _classCallCheck(this, OrganisationAllOf);

    OrganisationAllOf.initialize(this, name, about, websiteUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrganisationAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, name, about, websiteUrl) {
      obj['name'] = name;
      obj['about'] = about;
      obj['websiteUrl'] = websiteUrl;
    }
    /**
     * Constructs a <code>OrganisationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganisationAllOf} obj Optional instance to populate.
     * @return {module:model/OrganisationAllOf} The populated <code>OrganisationAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrganisationAllOf();

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

  return OrganisationAllOf;
}();
/**
 * @member {String} name
 */


OrganisationAllOf.prototype['name'] = undefined;
/**
 * @member {String} about
 */

OrganisationAllOf.prototype['about'] = undefined;
/**
 * @member {String} websiteUrl
 */

OrganisationAllOf.prototype['websiteUrl'] = undefined;
/**
 * @member {String} address
 */

OrganisationAllOf.prototype['address'] = undefined;
var _default = OrganisationAllOf;
exports["default"] = _default;