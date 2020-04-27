"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeStore = _interopRequireDefault(require("./AttributeStore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EditAmphoraAllOf model module.
 * @module model/EditAmphoraAllOf
 * @version 0.9.7
 */
var EditAmphoraAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EditAmphoraAllOf</code>.
   * @alias module:model/EditAmphoraAllOf
   * @param description {String} 
   */
  function EditAmphoraAllOf(description) {
    _classCallCheck(this, EditAmphoraAllOf);

    EditAmphoraAllOf.initialize(this, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EditAmphoraAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, description) {
      obj['description'] = description;
    }
    /**
     * Constructs a <code>EditAmphoraAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditAmphoraAllOf} obj Optional instance to populate.
     * @return {module:model/EditAmphoraAllOf} The populated <code>EditAmphoraAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EditAmphoraAllOf();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('lat')) {
          obj['lat'] = _ApiClient["default"].convertToType(data['lat'], 'Number');
        }

        if (data.hasOwnProperty('lon')) {
          obj['lon'] = _ApiClient["default"].convertToType(data['lon'], 'Number');
        }

        if (data.hasOwnProperty('termsAndConditionsId')) {
          obj['termsAndConditionsId'] = _ApiClient["default"].convertToType(data['termsAndConditionsId'], 'String');
        }

        if (data.hasOwnProperty('fileAttributes')) {
          obj['fileAttributes'] = _ApiClient["default"].convertToType(data['fileAttributes'], {
            'String': _AttributeStore["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return EditAmphoraAllOf;
}();
/**
 * @member {String} description
 */


EditAmphoraAllOf.prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

EditAmphoraAllOf.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

EditAmphoraAllOf.prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

EditAmphoraAllOf.prototype['termsAndConditionsId'] = undefined;
/**
 * @member {Object.<String, module:model/AttributeStore>} fileAttributes
 */

EditAmphoraAllOf.prototype['fileAttributes'] = undefined;
var _default = EditAmphoraAllOf;
exports["default"] = _default;