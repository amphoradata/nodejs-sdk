"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PagedResponse = _interopRequireDefault(require("./PagedResponse"));

var _PropertyValues = _interopRequireDefault(require("./PropertyValues"));

var _QueryResultPageAllOf = _interopRequireDefault(require("./QueryResultPageAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The QueryResultPage model module.
 * @module model/QueryResultPage
 * @version 0.9.7
 */
var QueryResultPage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QueryResultPage</code>.
   * @alias module:model/QueryResultPage
   * @implements module:model/PagedResponse
   * @implements module:model/QueryResultPageAllOf
   */
  function QueryResultPage() {
    _classCallCheck(this, QueryResultPage);

    _PagedResponse["default"].initialize(this);

    _QueryResultPageAllOf["default"].initialize(this);

    QueryResultPage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(QueryResultPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>QueryResultPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QueryResultPage} obj Optional instance to populate.
     * @return {module:model/QueryResultPage} The populated <code>QueryResultPage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QueryResultPage();

        _PagedResponse["default"].constructFromObject(data, obj);

        _QueryResultPageAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('continuationToken')) {
          obj['continuationToken'] = _ApiClient["default"].convertToType(data['continuationToken'], 'String');
        }

        if (data.hasOwnProperty('timestamps')) {
          obj['timestamps'] = _ApiClient["default"].convertToType(data['timestamps'], ['Date']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_PropertyValues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return QueryResultPage;
}();
/**
 * @member {String} continuationToken
 */


QueryResultPage.prototype['continuationToken'] = undefined;
/**
 * @member {Array.<Date>} timestamps
 */

QueryResultPage.prototype['timestamps'] = undefined;
/**
 * @member {Array.<module:model/PropertyValues>} properties
 */

QueryResultPage.prototype['properties'] = undefined; // Implement PagedResponse interface:

/**
 * @member {String} continuationToken
 */

_PagedResponse["default"].prototype['continuationToken'] = undefined; // Implement QueryResultPageAllOf interface:

/**
 * @member {Array.<Date>} timestamps
 */

_QueryResultPageAllOf["default"].prototype['timestamps'] = undefined;
/**
 * @member {Array.<module:model/PropertyValues>} properties
 */

_QueryResultPageAllOf["default"].prototype['properties'] = undefined;
var _default = QueryResultPage;
exports["default"] = _default;