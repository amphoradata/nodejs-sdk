/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a NumericVariable.
 */
class NumericVariable {
  /**
   * Create a NumericVariable.
   * @property {object} [filter]
   * @property {object} [value]
   * @property {object} [aggregation]
   * @property {string} kind Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of NumericVariable
   *
   * @returns {object} metadata of NumericVariable
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NumericVariable',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'NumericVariable',
        className: 'NumericVariable',
        modelProperties: {
          filter: {
            required: false,
            serializedName: 'filter',
            type: {
              name: 'Object'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          aggregation: {
            required: false,
            serializedName: 'aggregation',
            type: {
              name: 'Object'
            }
          },
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NumericVariable;
