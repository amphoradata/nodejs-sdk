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
import OneOfPosition from './OneOfPosition';

/**
 * The EntryPoint model module.
 * @module model/EntryPoint
 * @version 0.9.7
 */
class EntryPoint {
    /**
     * Constructs a new <code>EntryPoint</code>.
     * @alias module:model/EntryPoint
     */
    constructor() { 
        
        EntryPoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntryPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntryPoint} obj Optional instance to populate.
     * @return {module:model/EntryPoint} The populated <code>EntryPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntryPoint();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], OneOfPosition);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
EntryPoint.prototype['type'] = undefined;

/**
 * @member {module:model/OneOfPosition} position
 */
EntryPoint.prototype['position'] = undefined;






export default EntryPoint;

