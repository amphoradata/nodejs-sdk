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
 * The CreateAmphoraUserAllOf model module.
 * @module model/CreateAmphoraUserAllOf
 * @version 0.9.7
 */
class CreateAmphoraUserAllOf {
    /**
     * Constructs a new <code>CreateAmphoraUserAllOf</code>.
     * @alias module:model/CreateAmphoraUserAllOf
     * @param password {String} 
     * @param email {String} 
     */
    constructor(password, email) { 
        
        CreateAmphoraUserAllOf.initialize(this, password, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password, email) { 
        obj['password'] = password;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>CreateAmphoraUserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraUserAllOf} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraUserAllOf} The populated <code>CreateAmphoraUserAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAmphoraUserAllOf();

            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} password
 */
CreateAmphoraUserAllOf.prototype['password'] = undefined;

/**
 * @member {String} confirmPassword
 */
CreateAmphoraUserAllOf.prototype['confirmPassword'] = undefined;

/**
 * @member {String} email
 */
CreateAmphoraUserAllOf.prototype['email'] = undefined;






export default CreateAmphoraUserAllOf;

