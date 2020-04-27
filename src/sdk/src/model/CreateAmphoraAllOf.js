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
 * The CreateAmphoraAllOf model module.
 * @module model/CreateAmphoraAllOf
 * @version 0.9.7
 */
class CreateAmphoraAllOf {
    /**
     * Constructs a new <code>CreateAmphoraAllOf</code>.
     * @alias module:model/CreateAmphoraAllOf
     * @param description {String} 
     */
    constructor(description) { 
        
        CreateAmphoraAllOf.initialize(this, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description) { 
        obj['description'] = description;
    }

    /**
     * Constructs a <code>CreateAmphoraAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraAllOf} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraAllOf} The populated <code>CreateAmphoraAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAmphoraAllOf();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lon')) {
                obj['lon'] = ApiClient.convertToType(data['lon'], 'Number');
            }
            if (data.hasOwnProperty('termsAndConditionsId')) {
                obj['termsAndConditionsId'] = ApiClient.convertToType(data['termsAndConditionsId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
CreateAmphoraAllOf.prototype['description'] = undefined;

/**
 * @member {Number} lat
 */
CreateAmphoraAllOf.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
CreateAmphoraAllOf.prototype['lon'] = undefined;

/**
 * @member {String} termsAndConditionsId
 */
CreateAmphoraAllOf.prototype['termsAndConditionsId'] = undefined;






export default CreateAmphoraAllOf;
