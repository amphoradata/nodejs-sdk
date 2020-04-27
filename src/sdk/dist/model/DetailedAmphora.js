"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeStore = _interopRequireDefault(require("./AttributeStore"));

var _DetailedAmphoraAllOf = _interopRequireDefault(require("./DetailedAmphoraAllOf"));

var _EditAmphora = _interopRequireDefault(require("./EditAmphora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DetailedAmphora model module.
 * @module model/DetailedAmphora
 * @version 0.9.7
 */
var DetailedAmphora = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DetailedAmphora</code>.
   * @alias module:model/DetailedAmphora
   * @implements module:model/EditAmphora
   * @implements module:model/DetailedAmphoraAllOf
   * @param name {String} 
   * @param price {Number} 
   * @param description {String} 
   */
  function DetailedAmphora(name, price, description) {
    _classCallCheck(this, DetailedAmphora);

    _EditAmphora["default"].initialize(this, name, price, description);

    _DetailedAmphoraAllOf["default"].initialize(this);

    DetailedAmphora.initialize(this, name, price, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetailedAmphora, null, [{
    key: "initialize",
    value: function initialize(obj, name, price, description) {
      obj['name'] = name;
      obj['price'] = price;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>DetailedAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedAmphora} obj Optional instance to populate.
     * @return {module:model/DetailedAmphora} The populated <code>DetailedAmphora</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetailedAmphora();

        _EditAmphora["default"].constructFromObject(data, obj);

        _DetailedAmphoraAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('organisationId')) {
          obj['organisationId'] = _ApiClient["default"].convertToType(data['organisationId'], 'String');
        }

        if (data.hasOwnProperty('purchaseCount')) {
          obj['purchaseCount'] = _ApiClient["default"].convertToType(data['purchaseCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DetailedAmphora;
}();
/**
 * @member {String} id
 */


DetailedAmphora.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

DetailedAmphora.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

DetailedAmphora.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

DetailedAmphora.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

DetailedAmphora.prototype['price'] = undefined;
/**
 * @member {String} labels
 */

DetailedAmphora.prototype['labels'] = undefined;
/**
 * @member {String} description
 */

DetailedAmphora.prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

DetailedAmphora.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

DetailedAmphora.prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

DetailedAmphora.prototype['termsAndConditionsId'] = undefined;
/**
 * @member {Object.<String, module:model/AttributeStore>} fileAttributes
 */

DetailedAmphora.prototype['fileAttributes'] = undefined;
/**
 * @member {String} organisationId
 */

DetailedAmphora.prototype['organisationId'] = undefined;
/**
 * @member {Number} purchaseCount
 */

DetailedAmphora.prototype['purchaseCount'] = undefined; // Implement EditAmphora interface:

/**
 * @member {String} id
 */

_EditAmphora["default"].prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

_EditAmphora["default"].prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

_EditAmphora["default"].prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

_EditAmphora["default"].prototype['name'] = undefined;
/**
 * @member {Number} price
 */

_EditAmphora["default"].prototype['price'] = undefined;
/**
 * @member {String} labels
 */

_EditAmphora["default"].prototype['labels'] = undefined;
/**
 * @member {String} description
 */

_EditAmphora["default"].prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

_EditAmphora["default"].prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

_EditAmphora["default"].prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

_EditAmphora["default"].prototype['termsAndConditionsId'] = undefined;
/**
 * @member {Object.<String, module:model/AttributeStore>} fileAttributes
 */

_EditAmphora["default"].prototype['fileAttributes'] = undefined; // Implement DetailedAmphoraAllOf interface:

/**
 * @member {String} organisationId
 */

_DetailedAmphoraAllOf["default"].prototype['organisationId'] = undefined;
/**
 * @member {Number} purchaseCount
 */

_DetailedAmphoraAllOf["default"].prototype['purchaseCount'] = undefined;
var _default = DetailedAmphora;
exports["default"] = _default;