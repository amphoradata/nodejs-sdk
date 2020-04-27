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

/**
 * The TermsAndConditions model module.
 * @module model/TermsAndConditions
 * @version 0.9.7
 */
class TermsAndConditions {
    /**
     * Constructs a new <code>TermsAndConditions</code>.
     * @alias module:model/TermsAndConditions
     * @param id {String} 
     * @param name {String} 
     * @param contents {String} 
     */
    constructor(id, name, contents) { 
        
        TermsAndConditions.initialize(this, id, name, contents);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, contents) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TermsAndConditions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], 'String');
            }
        }
        return obj;
    }


}

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






export default TermsAndConditions;
