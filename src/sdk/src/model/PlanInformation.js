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
import PlanTypes from './PlanTypes';

/**
 * The PlanInformation model module.
 * @module model/PlanInformation
 * @version 0.9.7
 */
class PlanInformation {
    /**
     * Constructs a new <code>PlanInformation</code>.
     * @alias module:model/PlanInformation
     */
    constructor() { 
        
        PlanInformation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlanInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlanInformation} obj Optional instance to populate.
     * @return {module:model/PlanInformation} The populated <code>PlanInformation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlanInformation();

            if (data.hasOwnProperty('planType')) {
                obj['planType'] = PlanTypes.constructFromObject(data['planType']);
            }
            if (data.hasOwnProperty('friendlyName')) {
                obj['friendlyName'] = ApiClient.convertToType(data['friendlyName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PlanTypes} planType
 */
PlanInformation.prototype['planType'] = undefined;

/**
 * @member {String} friendlyName
 */
PlanInformation.prototype['friendlyName'] = undefined;






export default PlanInformation;

