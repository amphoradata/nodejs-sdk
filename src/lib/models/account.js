/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Account.
 */
class Account {
  /**
   * Create a Account.
   * @property {number} [balance]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Account
   *
   * @returns {object} metadata of Account
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Account',
      type: {
        name: 'Composite',
        className: 'Account',
        modelProperties: {
          balance: {
            required: false,
            serializedName: 'balance',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = Account;
