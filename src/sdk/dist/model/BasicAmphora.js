"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicAmphoraAllOf = _interopRequireDefault(require("./BasicAmphoraAllOf"));

var _Entity = _interopRequireDefault(require("./Entity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BasicAmphora model module.
 * @module model/BasicAmphora
 * @version 0.9.7
 */
var BasicAmphora = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BasicAmphora</code>.
   * @alias module:model/BasicAmphora
   * @implements module:model/Entity
   * @implements module:model/BasicAmphoraAllOf
   * @param name {String} 
   * @param price {Number} 
   */
  function BasicAmphora(name, price) {
    _classCallCheck(this, BasicAmphora);

    _Entity["default"].initialize(this);

    _BasicAmphoraAllOf["default"].initialize(this, name, price);

    BasicAmphora.initialize(this, name, price);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicAmphora, null, [{
    key: "initialize",
    value: function initialize(obj, name, price) {
      obj['name'] = name;
      obj['price'] = price;
    }
    /**
     * Constructs a <code>BasicAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicAmphora} obj Optional instance to populate.
     * @return {module:model/BasicAmphora} The populated <code>BasicAmphora</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicAmphora();

        _Entity["default"].constructFromObject(data, obj);

        _BasicAmphoraAllOf["default"].constructFromObject(data, obj);

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
      }

      return obj;
    }
  }]);

  return BasicAmphora;
}();
/**
 * @member {String} id
 */


BasicAmphora.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */

BasicAmphora.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */

BasicAmphora.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */

BasicAmphora.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

BasicAmphora.prototype['price'] = undefined;
/**
 * @member {String} labels
 */

BasicAmphora.prototype['labels'] = undefined; // Implement Entity interface:

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

_Entity["default"].prototype['createdDate'] = undefined; // Implement BasicAmphoraAllOf interface:

/**
 * @member {String} name
 */

_BasicAmphoraAllOf["default"].prototype['name'] = undefined;
/**
 * @member {Number} price
 */

_BasicAmphoraAllOf["default"].prototype['price'] = undefined;
/**
 * @member {String} labels
 */

_BasicAmphoraAllOf["default"].prototype['labels'] = undefined;
var _default = BasicAmphora;
exports["default"] = _default;