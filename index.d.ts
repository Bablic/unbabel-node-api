import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
  spec: Oas;
  core: APICore;
  constructor();
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions): void;
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
  auth(...values: string[] | number[]): this;
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
  server(url: string, variables?: {}): void;
  /**
   * Get list of topics that may be applied to a translation. Specifying one of these when
   * POSTing a translation will help Unbabel choose which Editors to assign to the
   * translation based upon their experience.
   *
   * @summary /topic/
   */
  topic(): Promise<
    FetchResponse<200, types.TopicResponse200> | FetchResponse<400, types.TopicResponse400>
  >;
  /**
   * GET /translation/:uid/
   *
   */
  getTranslationByUid(
    metadata: types.GetTranslationByUidMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetTranslationByUidResponse200>
    | FetchResponse<400, types.GetTranslationByUidResponse400>
  >;
  /**
   * Fetch all language pairs supported by Unbabel.
   *
   * @summary /language_pair/
   */
  language_pair(): Promise<
    | FetchResponse<200, types.LanguagePairResponse200>
    | FetchResponse<400, types.LanguagePairResponse400>
  >;
  /**
   * Exactly the same as POST but there is a new top-level key in the request data called
   * "objects" which contains an array of translation requests.
   *
   * @summary /translation/
   */
  translation1(
    body: types.Translation1FormDataParam
  ): Promise<
    | FetchResponse<202, types.Translation1Response202>
    | FetchResponse<400, types.Translation1Response400>
  >;
  /**
   * Create translation jobs
   *
   * @summary /translation/
   */
  translation(
    body: types.TranslationFormDataParam
  ): Promise<
    | FetchResponse<201, types.TranslationResponse201>
    | FetchResponse<400, types.TranslationResponse400>
  >;
  /**
   * Get jobs with a specific status
   *
   * @summary /translation/
   */
  translationListUpdate(
    metadata?: types.TranslationListUpdateMetadataParam
  ): Promise<
    | FetchResponse<200, types.TranslationListUpdateResponse200>
    | FetchResponse<400, types.TranslationListUpdateResponse400>
  >;
  /**
   * Get all possible tones that a translation may have. Editors will take the tone into
   * account and possibly use it to change the formality of the translation.
   *
   * @summary /tone/
   */
  tone(): Promise<
    FetchResponse<200, types.ToneResponse200> | FetchResponse<400, types.ToneResponse400>
  >;
  /**
   * GET /translation/?status=:status
   *
   */
  getTranslationByStatus(
    metadata: types.GetTranslationByStatusMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetTranslationByStatusResponse200>
    | FetchResponse<400, types.GetTranslationByStatusResponse400>
  >;
  /**
   * Count words on a text
   *
   * @summary /wordcount/
   */
  postWordcount(
    body: types.PostWordcountFormDataParam
  ): Promise<
    | FetchResponse<201, types.PostWordcountResponse201>
    | FetchResponse<400, types.PostWordcountResponse400>
  >;
  /**
   * Get a job report
   *
   * @summary /report/:report_id/
   */
  getReportuid(
    metadata: types.GetReportuidMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetReportuidResponse200>
    | FetchResponse<400, types.GetReportuidResponse400>
  >;
  /**
   * Accept job after being reported
   *
   * @summary /report/:report_id/accept
   */
  patchReportuidaccept(
    metadata: types.PatchReportuidacceptMetadataParam
  ): Promise<
    | FetchResponse<202, types.PatchReportuidacceptResponse202>
    | FetchResponse<400, types.PatchReportuidacceptResponse400>
  >;
  /**
   * Add a comment to a particular job report
   *
   * @summary /report/:report_id/
   */
  patchReportuid(
    body: types.PatchReportuidFormDataParam,
    metadata: types.PatchReportuidMetadataParam
  ): Promise<
    | FetchResponse<202, types.PatchReportuidResponse202>
    | FetchResponse<400, types.PatchReportuidResponse400>
  >;
  /**
   * Allows you to report a job because of possible translation mistakes
   *
   * @summary /report/
   */
  report(
    body: types.ReportFormDataParam
  ): Promise<
    FetchResponse<201, types.ReportResponse201> | FetchResponse<400, types.ReportResponse400>
  >;
  /**
   * Get a translation job by its uid
   *
   * @summary /translation/:uid/
   */
  translationDetail(
    metadata: types.TranslationDetailMetadataParam
  ): Promise<
    | FetchResponse<200, types.TranslationDetailResponse200>
    | FetchResponse<400, types.TranslationDetailResponse400>
  >;
  /**
   * Create machine translation only jobs
   *
   * @summary /mt_translation/
   */
  mt_translation(
    body: types.MtTranslationFormDataParam
  ): Promise<
    | FetchResponse<201, types.MtTranslationResponse201>
    | FetchResponse<400, types.MtTranslationResponse400>
  >;
  /**
   * Get machine translation jobs with a specific status
   *
   * @summary /mt_translation/
   */
  mt_translation1(
    metadata?: types.MtTranslation1MetadataParam
  ): Promise<
    | FetchResponse<200, types.MtTranslation1Response200>
    | FetchResponse<400, types.MtTranslation1Response400>
  >;
  /**
   * Get a machine translation job by its uid
   *
   * @summary /mt_translation/:uid/
   */
  mt_translationuid(
    metadata: types.MtTranslationuidMetadataParam
  ): Promise<
    | FetchResponse<200, types.MtTranslationuidResponse200>
    | FetchResponse<400, types.MtTranslationuidResponse400>
  >;
}
declare const createSDK: SDK;
export default createSDK;
export type {
  GetReportuidMetadataParam,
  GetReportuidResponse200,
  GetReportuidResponse400,
  GetTranslationByStatusMetadataParam,
  GetTranslationByStatusResponse200,
  GetTranslationByStatusResponse400,
  GetTranslationByUidMetadataParam,
  GetTranslationByUidResponse200,
  GetTranslationByUidResponse400,
  LanguagePairResponse200,
  LanguagePairResponse400,
  MtTranslation1MetadataParam,
  MtTranslation1Response200,
  MtTranslation1Response400,
  MtTranslationFormDataParam,
  MtTranslationResponse201,
  MtTranslationResponse400,
  MtTranslationuidMetadataParam,
  MtTranslationuidResponse200,
  MtTranslationuidResponse400,
  PatchReportuidFormDataParam,
  PatchReportuidMetadataParam,
  PatchReportuidResponse202,
  PatchReportuidResponse400,
  PatchReportuidacceptMetadataParam,
  PatchReportuidacceptResponse202,
  PatchReportuidacceptResponse400,
  PostWordcountFormDataParam,
  PostWordcountResponse201,
  PostWordcountResponse400,
  ReportFormDataParam,
  ReportResponse201,
  ReportResponse400,
  ToneResponse200,
  ToneResponse400,
  TopicResponse200,
  TopicResponse400,
  Translation1FormDataParam,
  Translation1Response202,
  Translation1Response400,
  TranslationDetailMetadataParam,
  TranslationDetailResponse200,
  TranslationDetailResponse400,
  TranslationFormDataParam,
  TranslationListUpdateMetadataParam,
  TranslationListUpdateResponse200,
  TranslationListUpdateResponse400,
  TranslationResponse201,
  TranslationResponse400,
} from './types';
