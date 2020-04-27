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
import BasicAmphora from './BasicAmphora';
import CreateAmphoraAllOf from './CreateAmphoraAllOf';

/**
 * The CreateAmphora model module.
 * @module model/CreateAmphora
 * @version 0.9.7
 */
class CreateAmphora {
    /**
     * Constructs a new <code>CreateAmphora</code>.
     * @alias module:model/CreateAmphora
     * @implements module:model/BasicAmphora
     * @implements module:model/CreateAmphoraAllOf
     * @param name {String} 
     * @param price {Number} 
     * @param description {String} 
     */
    constructor(name, price, description) { 
        BasicAmphora.initialize(this, name, price);CreateAmphoraAllOf.initialize(this, description);
        CreateAmphora.initialize(this, name, price, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, price, description) { 
        obj['name'] = name;
        obj['price'] = price;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>CreateAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAmphora} obj Optional instance to populate.
     * @return {module:model/CreateAmphora} The populated <code>CreateAmphora</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAmphora();
            BasicAmphora.constructFromObject(data, obj);
            CreateAmphoraAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], 'String');
            }
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
 * @member {String} id
 */
CreateAmphora.prototype['id'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
CreateAmphora.prototype['isDeleted'] = undefined;

/**
 * @member {Date} createdDate
 */
CreateAmphora.prototype['createdDate'] = undefined;

/**
 * @member {String} name
 */
CreateAmphora.prototype['name'] = undefined;

/**
 * @member {Number} price
 */
CreateAmphora.prototype['price'] = undefined;

/**
 * @member {String} labels
 */
CreateAmphora.prototype['labels'] = undefined;

/**
 * @member {String} description
 */
CreateAmphora.prototype['description'] = undefined;

/**
 * @member {Number} lat
 */
CreateAmphora.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
CreateAmphora.prototype['lon'] = undefined;

/**
 * @member {String} termsAndConditionsId
 */
CreateAmphora.prototype['termsAndConditionsId'] = undefined;


// Implement BasicAmphora interface:
/**
 * @member {String} id
 */
BasicAmphora.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */
BasicAmphora.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */
BasicAmphora.prototype['createdDate'] = undefined;
/**
 * @member {String} name
 */
BasicAmphora.prototype['name'] = undefined;
/**
 * @member {Number} price
 */
BasicAmphora.prototype['price'] = undefined;
/**
 * @member {String} labels
 */
BasicAmphora.prototype['labels'] = undefined;
// Implement CreateAmphoraAllOf interface:
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




export default CreateAmphora;
