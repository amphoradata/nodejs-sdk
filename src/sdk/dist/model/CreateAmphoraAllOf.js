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
 * The CreateAmphoraAllOf model module.
 * @module model/CreateAmphoraAllOf
 * @version 0.9.7
 */
var CreateAmphoraAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateAmphoraAllOf</code>.
   * @alias module:model/CreateAmphoraAllOf
   * @param description {String} 
   */
  function CreateAmphoraAllOf(description) {
    _classCallCheck(this, CreateAmphoraAllOf);

    CreateAmphoraAllOf.initialize(this, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateAmphoraAllOf, null, [{
    key: "initialize",
    value: function initialize(obj, description) {
      obj['description'] = description;
    }
    /**
     * Constructs a <code>CreateAmphoraAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraAllOf} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraAllOf} The populated <code>CreateAmphoraAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateAmphoraAllOf();

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

  return CreateAmphoraAllOf;
}();
/**
 * @member {String} description
 */


CreateAmphoraAllOf.prototype['description'] = undefined;
/**
 * @member {Number} lat
 */

CreateAmphoraAllOf.prototype['lat'] = undefined;
/**
 * @member {Number} lon
 */

CreateAmphoraAllOf.prototype['lon'] = undefined;
/**
 * @member {String} termsAndConditionsId
 */

CreateAmphoraAllOf.prototype['termsAndConditionsId'] = undefined;
var _default = CreateAmphoraAllOf;
exports["default"] = _default;