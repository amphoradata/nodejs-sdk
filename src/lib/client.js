/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

const msRest = require('ms-rest');
const ServiceClient = msRest.ServiceClient;

const models = require('./models');
const operations = require('./operations');


/** Class representing a Client. */
class Client extends ServiceClient {
  /**
   * Create a Client.
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   * @param {string} [baseUri] - The base URI of the service.
   * @param {object} [options] - The parameter options
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   */
  constructor(credentials, baseUri, options) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) options = {};

    super(credentials, options);

    this.baseUri = baseUri;
    if (!this.baseUri) {
      this.baseUri = 'https://app.amphoradata.com';
    }
    this.credentials = credentials;

    let packageInfo = this.getPackageJsonInfo(__dirname);
    this.addUserAgentInfo(`${packageInfo.name}/${packageInfo.version}`);
    this.authentication = new operations.Authentication(this);
    this.market = new operations.Market(this);
    this.organisationRestriction = new operations.OrganisationRestriction(this);
    this.organisations = new operations.Organisations(this);
    this.search = new operations.Search(this);
    this.users = new operations.Users(this);
    this.version = new operations.Version(this);
    this.accountOperations = new operations.AccountOperations(this);
    this.termsAndConditionsOperations = new operations.TermsAndConditionsOperations(this);
    this.amphorae = new operations.Amphorae(this);
    this.amphoraeFiles = new operations.AmphoraeFiles(this);
    this.amphoraeSignals = new operations.AmphoraeSignals(this);
    this.purchases = new operations.Purchases(this);
    this.timeSeries = new operations.TimeSeries(this);
    this.models = models;
    msRest.addSerializationMixin(this);
  }

}

module.exports = Client;
module.exports['default'] = Client;
module.exports.Client = Client;
module.exports.Models = models;
