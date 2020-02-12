/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Componentsschemasqueryresultpageallof1.
 */
class Componentsschemasqueryresultpageallof1 {
  /**
   * Create a Componentsschemasqueryresultpageallof1.
   * @property {array} [timestamps]
   * @property {array} [properties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Componentsschemasqueryresultpageallof1
   *
   * @returns {object} metadata of Componentsschemasqueryresultpageallof1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'components·schemas·queryresultpage·allof·1',
      type: {
        name: 'Composite',
        className: 'Componentsschemasqueryresultpageallof1',
        modelProperties: {
          timestamps: {
            required: false,
            serializedName: 'timestamps',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DateElementType',
                  type: {
                    name: 'DateTime'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyValuesElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyValues'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Componentsschemasqueryresultpageallof1;
