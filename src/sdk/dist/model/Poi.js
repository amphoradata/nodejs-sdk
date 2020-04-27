"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CategorySet = _interopRequireDefault(require("./CategorySet"));

var _Classification = _interopRequireDefault(require("./Classification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Poi model module.
 * @module model/Poi
 * @version 0.9.7
 */
var Poi = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Poi</code>.
   * @alias module:model/Poi
   */
  function Poi() {
    _classCallCheck(this, Poi);

    Poi.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Poi, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Poi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Poi} obj Optional instance to populate.
     * @return {module:model/Poi} The populated <code>Poi</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Poi();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('phone')) {
          obj['phone'] = _ApiClient["default"].convertToType(data['phone'], 'String');
        }

        if (data.hasOwnProperty('categorySet')) {
          obj['categorySet'] = _ApiClient["default"].convertToType(data['categorySet'], [_CategorySet["default"]]);
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], ['String']);
        }

        if (data.hasOwnProperty('classifications')) {
          obj['classifications'] = _ApiClient["default"].convertToType(data['classifications'], [_Classification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Poi;
}();
/**
 * @member {String} name
 */


Poi.prototype['name'] = undefined;
/**
 * @member {String} phone
 */

Poi.prototype['phone'] = undefined;
/**
 * @member {Array.<module:model/CategorySet>} categorySet
 */

Poi.prototype['categorySet'] = undefined;
/**
 * @member {Array.<String>} categories
 */

Poi.prototype['categories'] = undefined;
/**
 * @member {Array.<module:model/Classification>} classifications
 */

Poi.prototype['classifications'] = undefined;
var _default = Poi;
exports["default"] = _default;