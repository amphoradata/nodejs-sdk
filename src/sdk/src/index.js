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


import ApiClient from './ApiClient';
import AccessRuleDtoBase from './model/AccessRuleDtoBase';
import Account from './model/Account';
import Address from './model/Address';
import AggregateSeries from './model/AggregateSeries';
import AggregateVariable from './model/AggregateVariable';
import AmphoraUser from './model/AmphoraUser';
import AmphoraUserAllOf from './model/AmphoraUserAllOf';
import AttributeStore from './model/AttributeStore';
import BaseAmphoraUser from './model/BaseAmphoraUser';
import BasicAmphora from './model/BasicAmphora';
import BasicAmphoraAllOf from './model/BasicAmphoraAllOf';
import CategorySet from './model/CategorySet';
import Classification from './model/Classification';
import CreateAmphora from './model/CreateAmphora';
import CreateAmphoraAllOf from './model/CreateAmphoraAllOf';
import CreateAmphoraUser from './model/CreateAmphoraUser';
import CreateAmphoraUserAllOf from './model/CreateAmphoraUserAllOf';
import DateTimeRange from './model/DateTimeRange';
import DetailedAmphora from './model/DetailedAmphora';
import DetailedAmphoraAllOf from './model/DetailedAmphoraAllOf';
import EditAmphora from './model/EditAmphora';
import EditAmphoraAllOf from './model/EditAmphoraAllOf';
import Entity from './model/Entity';
import EntryPoint from './model/EntryPoint';
import EventProperty from './model/EventProperty';
import FuzzySearchResponse from './model/FuzzySearchResponse';
import GetEvents from './model/GetEvents';
import GetSeries from './model/GetSeries';
import LoginRequest from './model/LoginRequest';
import Name from './model/Name';
import NumericVariable from './model/NumericVariable';
import Organisation from './model/Organisation';
import OrganisationAccessRule from './model/OrganisationAccessRule';
import OrganisationAccessRuleAllOf from './model/OrganisationAccessRuleAllOf';
import OrganisationAllOf from './model/OrganisationAllOf';
import PagedResponse from './model/PagedResponse';
import PlanInformation from './model/PlanInformation';
import PlanTypes from './model/PlanTypes';
import Poi from './model/Poi';
import Position from './model/Position';
import ProblemDetails from './model/ProblemDetails';
import PropertyValues from './model/PropertyValues';
import PropertyValuesAllOf from './model/PropertyValuesAllOf';
import QueryRequest from './model/QueryRequest';
import QueryResultPage from './model/QueryResultPage';
import QueryResultPageAllOf from './model/QueryResultPageAllOf';
import Result from './model/Result';
import SearchParameters from './model/SearchParameters';
import Signal from './model/Signal';
import Summary from './model/Summary';
import TermsAndConditions from './model/TermsAndConditions';
import Tsx from './model/Tsx';
import UpdateSignal from './model/UpdateSignal';
import UploadResponse from './model/UploadResponse';
import UserAccessRule from './model/UserAccessRule';
import UserAccessRuleAllOf from './model/UserAccessRuleAllOf';
import Variable from './model/Variable';
import Viewport from './model/Viewport';
import AmphoraeApi from './api/AmphoraeApi';
import AuthenticationApi from './api/AuthenticationApi';
import IdentityApi from './api/IdentityApi';
import MarketApi from './api/MarketApi';
import OrganisationsApi from './api/OrganisationsApi';
import SearchApi from './api/SearchApi';
import TimeSeriesApi from './api/TimeSeriesApi';
import UsersApi from './api/UsersApi';
import VersionApi from './api/VersionApi';


/**
* API_for_interacting_with_the_Amphora_Data_platform_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Amphoradata = require('index'); // See note below*.
* var xxxSvc = new Amphoradata.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Amphoradata.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Amphoradata.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Amphoradata.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.9.7
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessRuleDtoBase model constructor.
     * @property {module:model/AccessRuleDtoBase}
     */
    AccessRuleDtoBase,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The AggregateSeries model constructor.
     * @property {module:model/AggregateSeries}
     */
    AggregateSeries,

    /**
     * The AggregateVariable model constructor.
     * @property {module:model/AggregateVariable}
     */
    AggregateVariable,

    /**
     * The AmphoraUser model constructor.
     * @property {module:model/AmphoraUser}
     */
    AmphoraUser,

    /**
     * The AmphoraUserAllOf model constructor.
     * @property {module:model/AmphoraUserAllOf}
     */
    AmphoraUserAllOf,

    /**
     * The AttributeStore model constructor.
     * @property {module:model/AttributeStore}
     */
    AttributeStore,

    /**
     * The BaseAmphoraUser model constructor.
     * @property {module:model/BaseAmphoraUser}
     */
    BaseAmphoraUser,

    /**
     * The BasicAmphora model constructor.
     * @property {module:model/BasicAmphora}
     */
    BasicAmphora,

    /**
     * The BasicAmphoraAllOf model constructor.
     * @property {module:model/BasicAmphoraAllOf}
     */
    BasicAmphoraAllOf,

    /**
     * The CategorySet model constructor.
     * @property {module:model/CategorySet}
     */
    CategorySet,

    /**
     * The Classification model constructor.
     * @property {module:model/Classification}
     */
    Classification,

    /**
     * The CreateAmphora model constructor.
     * @property {module:model/CreateAmphora}
     */
    CreateAmphora,

    /**
     * The CreateAmphoraAllOf model constructor.
     * @property {module:model/CreateAmphoraAllOf}
     */
    CreateAmphoraAllOf,

    /**
     * The CreateAmphoraUser model constructor.
     * @property {module:model/CreateAmphoraUser}
     */
    CreateAmphoraUser,

    /**
     * The CreateAmphoraUserAllOf model constructor.
     * @property {module:model/CreateAmphoraUserAllOf}
     */
    CreateAmphoraUserAllOf,

    /**
     * The DateTimeRange model constructor.
     * @property {module:model/DateTimeRange}
     */
    DateTimeRange,

    /**
     * The DetailedAmphora model constructor.
     * @property {module:model/DetailedAmphora}
     */
    DetailedAmphora,

    /**
     * The DetailedAmphoraAllOf model constructor.
     * @property {module:model/DetailedAmphoraAllOf}
     */
    DetailedAmphoraAllOf,

    /**
     * The EditAmphora model constructor.
     * @property {module:model/EditAmphora}
     */
    EditAmphora,

    /**
     * The EditAmphoraAllOf model constructor.
     * @property {module:model/EditAmphoraAllOf}
     */
    EditAmphoraAllOf,

    /**
     * The Entity model constructor.
     * @property {module:model/Entity}
     */
    Entity,

    /**
     * The EntryPoint model constructor.
     * @property {module:model/EntryPoint}
     */
    EntryPoint,

    /**
     * The EventProperty model constructor.
     * @property {module:model/EventProperty}
     */
    EventProperty,

    /**
     * The FuzzySearchResponse model constructor.
     * @property {module:model/FuzzySearchResponse}
     */
    FuzzySearchResponse,

    /**
     * The GetEvents model constructor.
     * @property {module:model/GetEvents}
     */
    GetEvents,

    /**
     * The GetSeries model constructor.
     * @property {module:model/GetSeries}
     */
    GetSeries,

    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest,

    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name,

    /**
     * The NumericVariable model constructor.
     * @property {module:model/NumericVariable}
     */
    NumericVariable,

    /**
     * The Organisation model constructor.
     * @property {module:model/Organisation}
     */
    Organisation,

    /**
     * The OrganisationAccessRule model constructor.
     * @property {module:model/OrganisationAccessRule}
     */
    OrganisationAccessRule,

    /**
     * The OrganisationAccessRuleAllOf model constructor.
     * @property {module:model/OrganisationAccessRuleAllOf}
     */
    OrganisationAccessRuleAllOf,

    /**
     * The OrganisationAllOf model constructor.
     * @property {module:model/OrganisationAllOf}
     */
    OrganisationAllOf,

    /**
     * The PagedResponse model constructor.
     * @property {module:model/PagedResponse}
     */
    PagedResponse,

    /**
     * The PlanInformation model constructor.
     * @property {module:model/PlanInformation}
     */
    PlanInformation,

    /**
     * The PlanTypes model constructor.
     * @property {module:model/PlanTypes}
     */
    PlanTypes,

    /**
     * The Poi model constructor.
     * @property {module:model/Poi}
     */
    Poi,

    /**
     * The Position model constructor.
     * @property {module:model/Position}
     */
    Position,

    /**
     * The ProblemDetails model constructor.
     * @property {module:model/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The PropertyValues model constructor.
     * @property {module:model/PropertyValues}
     */
    PropertyValues,

    /**
     * The PropertyValuesAllOf model constructor.
     * @property {module:model/PropertyValuesAllOf}
     */
    PropertyValuesAllOf,

    /**
     * The QueryRequest model constructor.
     * @property {module:model/QueryRequest}
     */
    QueryRequest,

    /**
     * The QueryResultPage model constructor.
     * @property {module:model/QueryResultPage}
     */
    QueryResultPage,

    /**
     * The QueryResultPageAllOf model constructor.
     * @property {module:model/QueryResultPageAllOf}
     */
    QueryResultPageAllOf,

    /**
     * The Result model constructor.
     * @property {module:model/Result}
     */
    Result,

    /**
     * The SearchParameters model constructor.
     * @property {module:model/SearchParameters}
     */
    SearchParameters,

    /**
     * The Signal model constructor.
     * @property {module:model/Signal}
     */
    Signal,

    /**
     * The Summary model constructor.
     * @property {module:model/Summary}
     */
    Summary,

    /**
     * The TermsAndConditions model constructor.
     * @property {module:model/TermsAndConditions}
     */
    TermsAndConditions,

    /**
     * The Tsx model constructor.
     * @property {module:model/Tsx}
     */
    Tsx,

    /**
     * The UpdateSignal model constructor.
     * @property {module:model/UpdateSignal}
     */
    UpdateSignal,

    /**
     * The UploadResponse model constructor.
     * @property {module:model/UploadResponse}
     */
    UploadResponse,

    /**
     * The UserAccessRule model constructor.
     * @property {module:model/UserAccessRule}
     */
    UserAccessRule,

    /**
     * The UserAccessRuleAllOf model constructor.
     * @property {module:model/UserAccessRuleAllOf}
     */
    UserAccessRuleAllOf,

    /**
     * The Variable model constructor.
     * @property {module:model/Variable}
     */
    Variable,

    /**
     * The Viewport model constructor.
     * @property {module:model/Viewport}
     */
    Viewport,

    /**
    * The AmphoraeApi service constructor.
    * @property {module:api/AmphoraeApi}
    */
    AmphoraeApi,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The IdentityApi service constructor.
    * @property {module:api/IdentityApi}
    */
    IdentityApi,

    /**
    * The MarketApi service constructor.
    * @property {module:api/MarketApi}
    */
    MarketApi,

    /**
    * The OrganisationsApi service constructor.
    * @property {module:api/OrganisationsApi}
    */
    OrganisationsApi,

    /**
    * The SearchApi service constructor.
    * @property {module:api/SearchApi}
    */
    SearchApi,

    /**
    * The TimeSeriesApi service constructor.
    * @property {module:api/TimeSeriesApi}
    */
    TimeSeriesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The VersionApi service constructor.
    * @property {module:api/VersionApi}
    */
    VersionApi
};
