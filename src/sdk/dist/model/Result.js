"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntryPoint = _interopRequireDefault(require("./EntryPoint"));

var _OneOfAddress = _interopRequireDefault(require("./OneOfAddress"));

var _OneOfPoi = _interopRequireDefault(require("./OneOfPoi"));

var _OneOfPosition = _interopRequireDefault(require("./OneOfPosition"));

var _OneOfViewport = _interopRequireDefault(require("./OneOfViewport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Result model module.
 * @module model/Result
 * @version 0.9.7
 */
var Result = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Result</code>.
   * @alias module:model/Result
   */
  function Result() {
    _classCallCheck(this, Result);

    Result.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Result, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Result} obj Optional instance to populate.
     * @return {module:model/Result} The populated <code>Result</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Result();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], _OneOfAddress["default"]);
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], _OneOfPosition["default"]);
        }

        if (data.hasOwnProperty('viewport')) {
          obj['viewport'] = _ApiClient["default"].convertToType(data['viewport'], _OneOfViewport["default"]);
        }

        if (data.hasOwnProperty('entryPoints')) {
          obj['entryPoints'] = _ApiClient["default"].convertToType(data['entryPoints'], [_EntryPoint["default"]]);
        }

        if (data.hasOwnProperty('info')) {
          obj['info'] = _ApiClient["default"].convertToType(data['info'], 'String');
        }

        if (data.hasOwnProperty('poi')) {
          obj['poi'] = _ApiClient["default"].convertToType(data['poi'], _OneOfPoi["default"]);
        }
      }

      return obj;
    }
  }]);

  return Result;
}();
/**
 * @member {String} type
 */


Result.prototype['type'] = undefined;
/**
 * @member {String} id
 */

Result.prototype['id'] = undefined;
/**
 * @member {Number} score
 */

Result.prototype['score'] = undefined;
/**
 * @member {module:model/OneOfAddress} address
 */

Result.prototype['address'] = undefined;
/**
 * @member {module:model/OneOfPosition} position
 */

Result.prototype['position'] = undefined;
/**
 * @member {module:model/OneOfViewport} viewport
 */

Result.prototype['viewport'] = undefined;
/**
 * @member {Array.<module:model/EntryPoint>} entryPoints
 */

Result.prototype['entryPoints'] = undefined;
/**
 * @member {String} info
 */

Result.prototype['info'] = undefined;
/**
 * @member {module:model/OneOfPoi} poi
 */

Result.prototype['poi'] = undefined;
var _default = Result;
exports["default"] = _default;