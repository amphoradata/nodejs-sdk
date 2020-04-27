"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchParameters = _interopRequireDefault(require("./SearchParameters2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchParameters model module.
 * @module model/SearchParameters
 * @version 0.9.7
 */
var SearchParameters = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchParameters</code>.
   * @alias module:model/SearchParameters
   * @extends 
   * @implements module:model/SearchParameters2
   */
  function SearchParameters() {
    _classCallCheck(this, SearchParameters);

    SearchParameters.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchParameters, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchParameters} obj Optional instance to populate.
     * @return {module:model/SearchParameters} The populated <code>SearchParameters</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchParameters();

        _ApiClient["default"].constructFromObject(data, obj, '');

        _SearchParameters["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return SearchParameters;
}();

var _default = SearchParameters;
exports["default"] = _default;