"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventProperty = _interopRequireDefault(require("./EventProperty"));

var _PropertyValuesAllOf = _interopRequireDefault(require("./PropertyValuesAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PropertyValues model module.
 * @module model/PropertyValues
 * @version 0.9.7
 */
var PropertyValues = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PropertyValues</code>.
   * @alias module:model/PropertyValues
   * @implements module:model/EventProperty
   * @implements module:model/PropertyValuesAllOf
   */
  function PropertyValues() {
    _classCallCheck(this, PropertyValues);

    _EventProperty["default"].initialize(this);

    _PropertyValuesAllOf["default"].initialize(this);

    PropertyValues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PropertyValues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PropertyValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyValues} obj Optional instance to populate.
     * @return {module:model/PropertyValues} The populated <code>PropertyValues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PropertyValues();

        _EventProperty["default"].constructFromObject(data, obj);

        _PropertyValuesAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return PropertyValues;
}();
/**
 * @member {String} name
 */


PropertyValues.prototype['name'] = undefined;
/**
 * @member {String} type
 */

PropertyValues.prototype['type'] = undefined;
/**
 * @member {Array.<Object>} values
 */

PropertyValues.prototype['values'] = undefined; // Implement EventProperty interface:

/**
 * @member {String} name
 */

_EventProperty["default"].prototype['name'] = undefined;
/**
 * @member {String} type
 */

_EventProperty["default"].prototype['type'] = undefined; // Implement PropertyValuesAllOf interface:

/**
 * @member {Array.<Object>} values
 */

_PropertyValuesAllOf["default"].prototype['values'] = undefined;
var _default = PropertyValues;
exports["default"] = _default;