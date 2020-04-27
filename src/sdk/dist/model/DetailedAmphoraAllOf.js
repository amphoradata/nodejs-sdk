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
 * The DetailedAmphoraAllOf model module.
 * @module model/DetailedAmphoraAllOf
 * @version 0.9.7
 */
var DetailedAmphoraAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DetailedAmphoraAllOf</code>.
   * @alias module:model/DetailedAmphoraAllOf
   */
  function DetailedAmphoraAllOf() {
    _classCallCheck(this, DetailedAmphoraAllOf);

    DetailedAmphoraAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetailedAmphoraAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DetailedAmphoraAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetailedAmphoraAllOf} obj Optional instance to populate.
     * @return {module:model/DetailedAmphoraAllOf} The populated <code>DetailedAmphoraAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetailedAmphoraAllOf();

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

  return DetailedAmphoraAllOf;
}();
/**
 * @member {String} organisationId
 */


DetailedAmphoraAllOf.prototype['organisationId'] = undefined;
/**
 * @member {Number} purchaseCount
 */

DetailedAmphoraAllOf.prototype['purchaseCount'] = undefined;
var _default = DetailedAmphoraAllOf;
exports["default"] = _default;