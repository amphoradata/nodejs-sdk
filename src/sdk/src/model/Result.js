/**
 * Amphora Data Api
 * API for interacting with the Amphora Data platform.
 *
 * The version of the OpenAPI document: 0.9.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntryPoint from './EntryPoint';
import OneOfAddress from './OneOfAddress';
import OneOfPoi from './OneOfPoi';
import OneOfPosition from './OneOfPosition';
import OneOfViewport from './OneOfViewport';

/**
 * The Result model module.
 * @module model/Result
 * @version 0.9.7
 */
class Result {
    /**
     * Constructs a new <code>Result</code>.
     * @alias module:model/Result
     */
    constructor() { 
        
        Result.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Result} obj Optional instance to populate.
     * @return {module:model/Result} The populated <code>Result</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Result();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], OneOfAddress);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], OneOfPosition);
            }
            if (data.hasOwnProperty('viewport')) {
                obj['viewport'] = ApiClient.convertToType(data['viewport'], OneOfViewport);
            }
            if (data.hasOwnProperty('entryPoints')) {
                obj['entryPoints'] = ApiClient.convertToType(data['entryPoints'], [EntryPoint]);
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('poi')) {
                obj['poi'] = ApiClient.convertToType(data['poi'], OneOfPoi);
            }
        }
        return obj;
    }


}

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






export default Result;

