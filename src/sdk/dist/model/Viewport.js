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
 * The Viewport model module.
 * @module model/Viewport
 * @version 0.9.7
 */
var Viewport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Viewport</code>.
   * @alias module:model/Viewport
   */
  function Viewport() {
    _classCallCheck(this, Viewport);

    Viewport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Viewport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Viewport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Viewport} obj Optional instance to populate.
     * @return {module:model/Viewport} The populated <code>Viewport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Viewport();

        if (data.hasOwnProperty('topLeftPoint')) {
          obj['topLeftPoint'] = _ApiClient["default"].convertToType(data['topLeftPoint'], _OneOfPosition["default"]);
        }

        if (data.hasOwnProperty('btmRightPoint')) {
          obj['btmRightPoint'] = _ApiClient["default"].convertToType(data['btmRightPoint'], _OneOfPosition["default"]);
        }
      }

      return obj;
    }
  }]);

  return Viewport;
}();
/**
 * @member {module:model/OneOfPosition} topLeftPoint
 */


Viewport.prototype['topLeftPoint'] = undefined;
/**
 * @member {module:model/OneOfPosition} btmRightPoint
 */

Viewport.prototype['btmRightPoint'] = undefined;
var _default = Viewport;
exports["default"] = _default;