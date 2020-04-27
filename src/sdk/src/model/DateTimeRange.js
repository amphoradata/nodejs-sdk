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
 * The DateTimeRange model module.
 * @module model/DateTimeRange
 * @version 0.9.7
 */
class DateTimeRange {
    /**
     * Constructs a new <code>DateTimeRange</code>.
     * @alias module:model/DateTimeRange
     */
    constructor() { 
        
        DateTimeRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DateTimeRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DateTimeRange} obj Optional instance to populate.
     * @return {module:model/DateTimeRange} The populated <code>DateTimeRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DateTimeRange();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} from
 */
DateTimeRange.prototype['from'] = undefined;

/**
 * @member {Date} to
 */
DateTimeRange.prototype['to'] = undefined;






export default DateTimeRange;
