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
import CategorySet from './CategorySet';
import Classification from './Classification';

/**
 * The Poi model module.
 * @module model/Poi
 * @version 0.9.7
 */
class Poi {
    /**
     * Constructs a new <code>Poi</code>.
     * @alias module:model/Poi
     */
    constructor() { 
        
        Poi.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Poi</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Poi} obj Optional instance to populate.
     * @return {module:model/Poi} The populated <code>Poi</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Poi();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('categorySet')) {
                obj['categorySet'] = ApiClient.convertToType(data['categorySet'], [CategorySet]);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('classifications')) {
                obj['classifications'] = ApiClient.convertToType(data['classifications'], [Classification]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Poi.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
Poi.prototype['phone'] = undefined;

/**
 * @member {Array.<module:model/CategorySet>} categorySet
 */
Poi.prototype['categorySet'] = undefined;

/**
 * @member {Array.<String>} categories
 */
Poi.prototype['categories'] = undefined;

/**
 * @member {Array.<module:model/Classification>} classifications
 */
Poi.prototype['classifications'] = undefined;






export default Poi;

