"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeStore = _interopRequireDefault(require("./AttributeStore"));

var _BasicAmphora = _interopRequireDefault(require("./BasicAmphora"));

var _EditAmphoraAllOf = _interopRequireDefault(require("./EditAmphoraAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EditAmphora model module.
 * @module model/EditAmphora
 * @version 0.9.7
 */
var EditAmphora = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EditAmphora</code>.
   * @alias module:model/EditAmphora
   * @implements module:model/BasicAmphora
   * @implements module:model/EditAmphoraAllOf
   * @param name {String} 
   * @param price {Number} 
   * @param description {String} 
   */
  function EditAmphora(name, price, description) {
    _classCallCheck(this, EditAmphora);

    _BasicAmphora["default"].initialize(this, name, price);

    _EditAmphoraAllOf["default"].initialize(this, description);

    EditAmphora.initialize(this, name, price, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EditAmphora, null, [{
    key: "initialize",
    value: function initialize(obj, name, price, description) {
      obj['name'] = name;
      obj['price'] = price;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>EditAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditAmphora} obj Optional instance to populate.
     * @return {module:model/EditAmphora} The populated <code>EditAmphora</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EditAmphora();

        _BasicAmphora["default"].constructFromObject(data, obj);

        _EditAmphoraAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], 'String');
        }

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

  return EditAmphora;
}();
/**
 * @member {String} id
 */


EditAmphora.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

EditAmphora.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

EditAmphora.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

EditAmphora.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

EditAmphora.prototype['price'] = undefined;
/**
 * @member {String} labels
 */

EditAmphora.prototype['labels'] = undefined;
/**
 * @member {String} description
 */

EditAmphora.prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

EditAmphora.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

EditAmphora.prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

EditAmphora.prototype['termsAndConditionsId'] = undefined;
/**
 * @member {Object.<String, module:model/AttributeStore>} fileAttributes
 */

EditAmphora.prototype['fileAttributes'] = undefined; // Implement BasicAmphora interface:

/**
 * @member {String} id
 */

_BasicAmphora["default"].prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

_BasicAmphora["default"].prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

_BasicAmphora["default"].prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

_BasicAmphora["default"].prototype['name'] = undefined;
/**
 * @member {Number} price
 */

_BasicAmphora["default"].prototype['price'] = undefined;
/**
 * @member {String} labels
 */

_BasicAmphora["default"].prototype['labels'] = undefined; // Implement EditAmphoraAllOf interface:

/**
 * @member {String} description
 */

_EditAmphoraAllOf["default"].prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

_EditAmphoraAllOf["default"].prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

_EditAmphoraAllOf["default"].prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

_EditAmphoraAllOf["default"].prototype['termsAndConditionsId'] = undefined;
/**
 * @member {Object.<String, module:model/AttributeStore>} fileAttributes
 */

_EditAmphoraAllOf["default"].prototype['fileAttributes'] = undefined;
var _default = EditAmphora;
exports["default"] = _default;