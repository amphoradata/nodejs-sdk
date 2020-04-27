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
 * The BasicAmphoraAllOf model module.
 * @module model/BasicAmphoraAllOf
 * @version 0.9.7
 */
var BasicAmphoraAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BasicAmphoraAllOf</code>.
   * @alias module:model/BasicAmphoraAllOf
   * @param name {String} 
   * @param price {Number} 
   */
  function BasicAmphoraAllOf(name, price) {
    _classCallCheck(this, BasicAmphoraAllOf);

    BasicAmphoraAllOf.initialize(this, name, price);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BasicAmphoraAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, name, price) {
      obj['name'] = name;
      obj['price'] = price;
    }
    /**
     * Constructs a <code>BasicAmphoraAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicAmphoraAllOf} obj Optional instance to populate.
     * @return {module:model/BasicAmphoraAllOf} The populated <code>BasicAmphoraAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BasicAmphoraAllOf();

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

  return BasicAmphoraAllOf;
}();
/**
 * @member {String} name
 */


BasicAmphoraAllOf.prototype['name'] = undefined;
/**
 * @member {Number} price
 */

BasicAmphoraAllOf.prototype['price'] = undefined;
/**
 * @member {String} labels
 */

BasicAmphoraAllOf.prototype['labels'] = undefined;
var _default = BasicAmphoraAllOf;
exports["default"] = _default;