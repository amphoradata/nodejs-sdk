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
import BasicAmphoraAllOf from './BasicAmphoraAllOf';
import Entity from './Entity';

/**
 * The BasicAmphora model module.
 * @module model/BasicAmphora
 * @version 0.9.7
 */
class BasicAmphora {
    /**
     * Constructs a new <code>BasicAmphora</code>.
     * @alias module:model/BasicAmphora
     * @implements module:model/Entity
     * @implements module:model/BasicAmphoraAllOf
     * @param name {String} 
     * @param price {Number} 
     */
    constructor(name, price) { 
        Entity.initialize(this);BasicAmphoraAllOf.initialize(this, name, price);
        BasicAmphora.initialize(this, name, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, price) { 
        obj['name'] = name;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>BasicAmphora</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicAmphora} obj Optional instance to populate.
     * @return {module:model/BasicAmphora} The populated <code>BasicAmphora</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicAmphora();
            Entity.constructFromObject(data, obj);
            BasicAmphoraAllOf.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

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


// Implement Entity interface:
/**
 * @member {String} id
 */
Entity.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeleted
 */
Entity.prototype['isDeleted'] = undefined;
/**
 * @member {Date} createdDate
 */
Entity.prototype['createdDate'] = undefined;
// Implement BasicAmphoraAllOf interface:
/**
 * @member {String} name
 */
BasicAmphoraAllOf.prototype['name'] = undefined;
/**
 * @member {Number} price
 */
BasicAmphoraAllOf.prototype['price'] = undefined;
/**
 * @member {String} labels
 */
BasicAmphoraAllOf.prototype['labels'] = undefined;




export default BasicAmphora;

