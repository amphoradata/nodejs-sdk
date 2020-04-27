"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfSummary = _interopRequireDefault(require("./OneOfSummary"));

var _Result = _interopRequireDefault(require("./Result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FuzzySearchResponse model module.
 * @module model/FuzzySearchResponse
 * @version 0.9.7
 */
var FuzzySearchResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FuzzySearchResponse</code>.
   * @alias module:model/FuzzySearchResponse
   */
  function FuzzySearchResponse() {
    _classCallCheck(this, FuzzySearchResponse);

    FuzzySearchResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FuzzySearchResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FuzzySearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FuzzySearchResponse} obj Optional instance to populate.
     * @return {module:model/FuzzySearchResponse} The populated <code>FuzzySearchResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FuzzySearchResponse();

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], _OneOfSummary["default"]);
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Result["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FuzzySearchResponse;
}();
/**
 * @member {module:model/OneOfSummary} summary
 */


FuzzySearchResponse.prototype['summary'] = undefined;
/**
 * @member {Array.<module:model/Result>} results
 */

FuzzySearchResponse.prototype['results'] = undefined;
var _default = FuzzySearchResponse;
exports["default"] = _default;