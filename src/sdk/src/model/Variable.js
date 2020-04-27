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
import OneOfTsx from './OneOfTsx';

/**
 * The Variable model module.
 * @module model/Variable
 * @version 0.9.7
 */
class Variable {
    /**
     * Constructs a new <code>Variable</code>.
     * @alias module:model/Variable
     * @param kind {String} 
     */
    constructor(kind) { 
        
        Variable.initialize(this, kind);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind) { 
        obj['kind'] = kind;
    }

    /**
     * Constructs a <code>Variable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Variable} obj Optional instance to populate.
     * @return {module:model/Variable} The populated <code>Variable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Variable();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], OneOfTsx);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OneOfTsx} filter
 */
Variable.prototype['filter'] = undefined;

/**
 * @member {String} kind
 */
Variable.prototype['kind'] = undefined;






export default Variable;
