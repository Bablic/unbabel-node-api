'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var oas_1 = __importDefault(require('oas'));
var core_1 = __importDefault(require('api/dist/core'));
var openapi_json_1 = __importDefault(require('./openapi.json'));
var SDK = /** @class */ (function () {
  function SDK() {
    this.spec = oas_1.default.init(openapi_json_1.default);
    this.core = new core_1.default(this.spec, 'unbabel/2 (api/5.0.1)');
  }
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  SDK.prototype.config = function (config) {
    this.core.setConfig(config);
  };
  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  SDK.prototype.auth = function () {
    var _a;
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }
    (_a = this.core).setAuth.apply(_a, values);
    return this;
  };
  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  SDK.prototype.server = function (url, variables) {
    if (variables === void 0) {
      variables = {};
    }
    this.core.setServer(url, variables);
  };
  /**
   * Get list of topics that may be applied to a translation. Specifying one of these when
   * POSTing a translation will help Unbabel choose which Editors to assign to the
   * translation based upon their experience.
   *
   * @summary /topic/
   */
  SDK.prototype.topic = function () {
    return this.core.fetch('/topic/', 'get');
  };
  /**
   * GET /translation/:uid/
   *
   */
  SDK.prototype.getTranslationByUid = function (metadata) {
    return this.core.fetch('/translation/{uid}/', 'get', metadata);
  };
  /**
   * Fetch all language pairs supported by Unbabel.
   *
   * @summary /language_pair/
   */
  SDK.prototype.language_pair = function () {
    return this.core.fetch('/language_pair/', 'get');
  };
  /**
   * Exactly the same as POST but there is a new top-level key in the request data called
   * "objects" which contains an array of translation requests.
   *
   * @summary /translation/
   */
  SDK.prototype.translation1 = function (body) {
    return this.core.fetch('/translation/', 'patch', body);
  };
  /**
   * Create translation jobs
   *
   * @summary /translation/
   */
  SDK.prototype.translation = function (body) {
    return this.core.fetch('/translation/', 'post', body);
  };
  /**
   * Get jobs with a specific status
   *
   * @summary /translation/
   */
  SDK.prototype.translationListUpdate = function (metadata) {
    return this.core.fetch('/translation/', 'get', metadata);
  };
  /**
   * Get all possible tones that a translation may have. Editors will take the tone into
   * account and possibly use it to change the formality of the translation.
   *
   * @summary /tone/
   */
  SDK.prototype.tone = function () {
    return this.core.fetch('/tone/', 'get');
  };
  /**
   * GET /translation/?status=:status
   *
   */
  SDK.prototype.getTranslationByStatus = function (metadata) {
    return this.core.fetch('/translation/?status={status}', 'get', metadata);
  };
  /**
   * Count words on a text
   *
   * @summary /wordcount/
   */
  SDK.prototype.postWordcount = function (body) {
    return this.core.fetch('/wordcount/', 'post', body);
  };
  /**
   * Get a job report
   *
   * @summary /report/:report_id/
   */
  SDK.prototype.getReportuid = function (metadata) {
    return this.core.fetch('/report/:report_id/', 'get', metadata);
  };
  /**
   * Accept job after being reported
   *
   * @summary /report/:report_id/accept
   */
  SDK.prototype.patchReportuidaccept = function (metadata) {
    return this.core.fetch('/report/{report_id}/accept', 'patch', metadata);
  };
  /**
   * Add a comment to a particular job report
   *
   * @summary /report/:report_id/
   */
  SDK.prototype.patchReportuid = function (body, metadata) {
    return this.core.fetch('/report/{report_id}/', 'patch', body, metadata);
  };
  /**
   * Allows you to report a job because of possible translation mistakes
   *
   * @summary /report/
   */
  SDK.prototype.report = function (body) {
    return this.core.fetch('/report/', 'post', body);
  };
  /**
   * Get a translation job by its uid
   *
   * @summary /translation/:uid/
   */
  SDK.prototype.translationDetail = function (metadata) {
    return this.core.fetch('/translation/:{uid}/', 'get', metadata);
  };
  /**
   * Create machine translation only jobs
   *
   * @summary /mt_translation/
   */
  SDK.prototype.mt_translation = function (body) {
    return this.core.fetch('/mt_translation/', 'post', body);
  };
  /**
   * Get machine translation jobs with a specific status
   *
   * @summary /mt_translation/
   */
  SDK.prototype.mt_translation1 = function (metadata) {
    return this.core.fetch('/mt_translation/', 'get', metadata);
  };
  /**
   * Get a machine translation job by its uid
   *
   * @summary /mt_translation/:uid/
   */
  SDK.prototype.mt_translationuid = function (metadata) {
    return this.core.fetch('/mt_translation/:uid/', 'get', metadata);
  };
  return SDK;
})();
var createSDK = (function () {
  return new SDK();
})();
module.exports = createSDK;
