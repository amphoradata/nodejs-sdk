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
 * The TermsAndConditions model module.
 * @module model/TermsAndConditions
 * @version 0.9.7
 */
var TermsAndConditions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TermsAndConditions</code>.
   * @alias module:model/TermsAndConditions
   * @param id {String} 
   * @param name {String} 
   * @param contents {String} 
   */
  function TermsAndConditions(id, name, contents) {
    _classCallCheck(this, TermsAndConditions);

    TermsAndConditions.initialize(this, id, name, contents);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TermsAndConditions, null, [{
    key: "initialize",
    value: function initialize(obj, id, name, contents) {
      obj['id'] = id;
      obj['name'] = name;
      obj['contents'] = contents;
    }
    /**
     * Constructs a <code>TermsAndConditions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TermsAndConditions} obj Optional instance to populate.
     * @return {module:model/TermsAndConditions} The populated <code>TermsAndConditions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TermsAndConditions();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('contents')) {
          obj['contents'] = _ApiClient["default"].convertToType(data['contents'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TermsAndConditions;
}();
/**
 * @member {String} id
 */


TermsAndConditions.prototype['id'] = undefined;
/**
 * @member {String} name
 */

TermsAndConditions.prototype['name'] = undefined;
/**
 * @member {String} contents
 */

TermsAndConditions.prototype['contents'] = undefined;
var _default = TermsAndConditions;
exports["default"] = _default;