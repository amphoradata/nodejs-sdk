"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicAmphora = _interopRequireDefault(require("./BasicAmphora"));

var _CreateAmphoraAllOf = _interopRequireDefault(require("./CreateAmphoraAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateAmphora model module.
 * @module model/CreateAmphora
 * @version 0.9.7
 */
var CreateAmphora = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAmphora</code>.
   * @alias module:model/CreateAmphora
   * @implements module:model/BasicAmphora
   * @implements module:model/CreateAmphoraAllOf
   * @param name {String} 
   * @param price {Number} 
   * @param description {String} 
   */
  function CreateAmphora(name, price, description) {
    _classCallCheck(this, CreateAmphora);

    _BasicAmphora["default"].initialize(this, name, price);

    _CreateAmphoraAllOf["default"].initialize(this, description);

    CreateAmphora.initialize(this, name, price, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAmphora, null, [{
    key: "initialize",
    value: function initialize(obj, name, price, description) {
      obj['name'] = name;
      obj['price'] = price;
      obj['description'] = description;
    }
    /**
     * Constructs a <code>CreateAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphora} obj Optional instance to populate.
     * @return {module:model/CreateAmphora} The populated <code>CreateAmphora</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAmphora();

        _BasicAmphora["default"].constructFromObject(data, obj);

        _CreateAmphoraAllOf["default"].constructFromObject(data, obj);

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
      }

      return obj;
    }
  }]);

  return CreateAmphora;
}();
/**
 * @member {String} id
 */


CreateAmphora.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

CreateAmphora.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

CreateAmphora.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

CreateAmphora.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

CreateAmphora.prototype['price'] = undefined;
/**
 * @member {String} labels
 */

CreateAmphora.prototype['labels'] = undefined;
/**
 * @member {String} description
 */

CreateAmphora.prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

CreateAmphora.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

CreateAmphora.prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

CreateAmphora.prototype['termsAndConditionsId'] = undefined; // Implement BasicAmphora interface:

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

_BasicAmphora["default"].prototype['labels'] = undefined; // Implement CreateAmphoraAllOf interface:

/**
 * @member {String} description
 */

_CreateAmphoraAllOf["default"].prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

_CreateAmphoraAllOf["default"].prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

_CreateAmphoraAllOf["default"].prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

_CreateAmphoraAllOf["default"].prototype['termsAndConditionsId'] = undefined;
var _default = CreateAmphora;
exports["default"] = _default;