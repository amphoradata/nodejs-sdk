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
import BaseAmphoraUser from './BaseAmphoraUser';
import CreateAmphoraUserAllOf from './CreateAmphoraUserAllOf';

/**
 * The CreateAmphoraUser model module.
 * @module model/CreateAmphoraUser
 * @version 0.9.7
 */
class CreateAmphoraUser {
    /**
     * Constructs a new <code>CreateAmphoraUser</code>.
     * @alias module:model/CreateAmphoraUser
     * @implements module:model/BaseAmphoraUser
     * @implements module:model/CreateAmphoraUserAllOf
     * @param fullName {String} 
     * @param userName {String} 
     * @param password {String} 
     * @param email {String} 
     */
    constructor(fullName, userName, password, email) { 
        BaseAmphoraUser.initialize(this, fullName, userName);CreateAmphoraUserAllOf.initialize(this, password, email);
        CreateAmphoraUser.initialize(this, fullName, userName, password, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fullName, userName, password, email) { 
        obj['fullName'] = fullName;
        obj['userName'] = userName;
        obj['password'] = password;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>CreateAmphoraUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphoraUser} obj Optional instance to populate.
     * @return {module:model/CreateAmphoraUser} The populated <code>CreateAmphoraUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAmphoraUser();
            BaseAmphoraUser.constructFromObject(data, obj);
            CreateAmphoraUserAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'String');
            }
            if (data.hasOwnProperty('fullName')) {
                obj['fullName'] = ApiClient.convertToType(data['fullName'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
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
 * @member {String} phoneNumber
 */
CreateAmphoraUser.prototype['phoneNumber'] = undefined;

/**
 * @member {String} about
 */
CreateAmphoraUser.prototype['about'] = undefined;

/**
 * @member {String} fullName
 */
CreateAmphoraUser.prototype['fullName'] = undefined;

/**
 * @member {String} userName
 */
CreateAmphoraUser.prototype['userName'] = undefined;

/**
 * @member {String} password
 */
CreateAmphoraUser.prototype['password'] = undefined;

/**
 * @member {String} confirmPassword
 */
CreateAmphoraUser.prototype['confirmPassword'] = undefined;

/**
 * @member {String} email
 */
CreateAmphoraUser.prototype['email'] = undefined;


// Implement BaseAmphoraUser interface:
/**
 * @member {String} phoneNumber
 */
BaseAmphoraUser.prototype['phoneNumber'] = undefined;
/**
 * @member {String} about
 */
BaseAmphoraUser.prototype['about'] = undefined;
/**
 * @member {String} fullName
 */
BaseAmphoraUser.prototype['fullName'] = undefined;
/**
 * @member {String} userName
 */
BaseAmphoraUser.prototype['userName'] = undefined;
// Implement CreateAmphoraUserAllOf interface:
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




export default CreateAmphoraUser;
