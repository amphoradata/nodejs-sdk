"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfPosition = _interopRequireDefault(require("./OneOfPosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntryPoint model module.
 * @module model/EntryPoint
 * @version 0.9.7
 */
var EntryPoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntryPoint</code>.
   * @alias module:model/EntryPoint
   */
  function EntryPoint() {
    _classCallCheck(this, EntryPoint);

    EntryPoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntryPoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntryPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntryPoint} obj Optional instance to populate.
     * @return {module:model/EntryPoint} The populated <code>EntryPoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntryPoint();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], _OneOfPosition["default"]);
        }
      }

      return obj;
    }
  }]);

  return EntryPoint;
}();
/**
 * @member {String} type
 */


EntryPoint.prototype['type'] = undefined;
/**
 * @member {module:model/OneOfPosition} position
 */

EntryPoint.prototype['position'] = undefined;
var _default = EntryPoint;
exports["default"] = _default;