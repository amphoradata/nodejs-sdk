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
 * The Address model module.
 * @module model/Address
 * @version 0.9.7
 */
var Address = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   */
  function Address() {
    _classCallCheck(this, Address);

    Address.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Address, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address();

        if (data.hasOwnProperty('streetNumber')) {
          obj['streetNumber'] = _ApiClient["default"].convertToType(data['streetNumber'], 'String');
        }

        if (data.hasOwnProperty('streetName')) {
          obj['streetName'] = _ApiClient["default"].convertToType(data['streetName'], 'String');
        }

        if (data.hasOwnProperty('municipalitySubdivision')) {
          obj['municipalitySubdivision'] = _ApiClient["default"].convertToType(data['municipalitySubdivision'], 'String');
        }

        if (data.hasOwnProperty('municipality')) {
          obj['municipality'] = _ApiClient["default"].convertToType(data['municipality'], 'String');
        }

        if (data.hasOwnProperty('countrySecondarySubdivision')) {
          obj['countrySecondarySubdivision'] = _ApiClient["default"].convertToType(data['countrySecondarySubdivision'], 'String');
        }

        if (data.hasOwnProperty('countrySubdivision')) {
          obj['countrySubdivision'] = _ApiClient["default"].convertToType(data['countrySubdivision'], 'String');
        }

        if (data.hasOwnProperty('postalCode')) {
          obj['postalCode'] = _ApiClient["default"].convertToType(data['postalCode'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('countryCodeIso3')) {
          obj['countryCodeIso3'] = _ApiClient["default"].convertToType(data['countryCodeIso3'], 'String');
        }

        if (data.hasOwnProperty('freeformAddress')) {
          obj['freeformAddress'] = _ApiClient["default"].convertToType(data['freeformAddress'], 'String');
        }

        if (data.hasOwnProperty('localName')) {
          obj['localName'] = _ApiClient["default"].convertToType(data['localName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Address;
}();
/**
 * @member {String} streetNumber
 */


Address.prototype['streetNumber'] = undefined;
/**
 * @member {String} streetName
 */

Address.prototype['streetName'] = undefined;
/**
 * @member {String} municipalitySubdivision
 */

Address.prototype['municipalitySubdivision'] = undefined;
/**
 * @member {String} municipality
 */

Address.prototype['municipality'] = undefined;
/**
 * @member {String} countrySecondarySubdivision
 */

Address.prototype['countrySecondarySubdivision'] = undefined;
/**
 * @member {String} countrySubdivision
 */

Address.prototype['countrySubdivision'] = undefined;
/**
 * @member {String} postalCode
 */

Address.prototype['postalCode'] = undefined;
/**
 * @member {String} countryCode
 */

Address.prototype['countryCode'] = undefined;
/**
 * @member {String} country
 */

Address.prototype['country'] = undefined;
/**
 * @member {String} countryCodeIso3
 */

Address.prototype['countryCodeIso3'] = undefined;
/**
 * @member {String} freeformAddress
 */

Address.prototype['freeformAddress'] = undefined;
/**
 * @member {String} localName
 */

Address.prototype['localName'] = undefined;
var _default = Address;
exports["default"] = _default;