/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Componentsschemasdetailedamphoraallof1.
 */
class Componentsschemasdetailedamphoraallof1 {
  /**
   * Create a Componentsschemasdetailedamphoraallof1.
   * @property {string} [organisationId]
   * @property {number} [purchaseCount] Purchase Count.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Componentsschemasdetailedamphoraallof1
   *
   * @returns {object} metadata of Componentsschemasdetailedamphoraallof1
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'components·schemas·detailedamphora·allof·1',
      type: {
        name: 'Composite',
        className: 'Componentsschemasdetailedamphoraallof1',
        modelProperties: {
          organisationId: {
            required: false,
            serializedName: 'organisationId',
            type: {
              name: 'String'
            }
          },
          purchaseCount: {
            required: false,
            nullable: true,
            serializedName: 'purchaseCount',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Componentsschemasdetailedamphoraallof1;
