"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PlanTypes = _interopRequireDefault(require("./PlanTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PlanInformation model module.
 * @module model/PlanInformation
 * @version 0.9.7
 */
var PlanInformation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PlanInformation</code>.
   * @alias module:model/PlanInformation
   */
  function PlanInformation() {
    _classCallCheck(this, PlanInformation);

    PlanInformation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PlanInformation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlanInformation} obj Optional instance to populate.
     * @return {module:model/PlanInformation} The populated <code>PlanInformation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PlanInformation();

        if (data.hasOwnProperty('planType')) {
          obj['planType'] = _PlanTypes["default"].constructFromObject(data['planType']);
        }

        if (data.hasOwnProperty('friendlyName')) {
          obj['friendlyName'] = _ApiClient["default"].convertToType(data['friendlyName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PlanInformation;
}();
/**
 * @member {module:model/PlanTypes} planType
 */


PlanInformation.prototype['planType'] = undefined;
/**
 * @member {String} friendlyName
 */

PlanInformation.prototype['friendlyName'] = undefined;
var _default = PlanInformation;
exports["default"] = _default;