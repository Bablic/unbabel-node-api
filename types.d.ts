import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export declare type GetReportuidMetadataParam = FromSchema<typeof schemas.GetReportuid.metadata>;
export declare type GetReportuidResponse200 = FromSchema<
  typeof schemas.GetReportuid.response['200']
>;
export declare type GetReportuidResponse400 = FromSchema<
  typeof schemas.GetReportuid.response['400']
>;
export declare type GetTranslationByStatusMetadataParam = FromSchema<
  typeof schemas.GetTranslationByStatus.metadata
>;
export declare type GetTranslationByStatusResponse200 = FromSchema<
  typeof schemas.GetTranslationByStatus.response['200']
>;
export declare type GetTranslationByStatusResponse400 = FromSchema<
  typeof schemas.GetTranslationByStatus.response['400']
>;
export declare type GetTranslationByUidMetadataParam = FromSchema<
  typeof schemas.GetTranslationByUid.metadata
>;
export declare type GetTranslationByUidResponse200 = FromSchema<
  typeof schemas.GetTranslationByUid.response['200']
>;
export declare type GetTranslationByUidResponse400 = FromSchema<
  typeof schemas.GetTranslationByUid.response['400']
>;
export declare type LanguagePairResponse200 = FromSchema<
  typeof schemas.LanguagePair.response['200']
>;
export declare type LanguagePairResponse400 = FromSchema<
  typeof schemas.LanguagePair.response['400']
>;
export declare type MtTranslation1MetadataParam = FromSchema<
  typeof schemas.MtTranslation1.metadata
>;
export declare type MtTranslation1Response200 = FromSchema<
  typeof schemas.MtTranslation1.response['200']
>;
export declare type MtTranslation1Response400 = FromSchema<
  typeof schemas.MtTranslation1.response['400']
>;
export declare type MtTranslationFormDataParam = FromSchema<typeof schemas.MtTranslation.formData>;
export declare type MtTranslationResponse201 = FromSchema<
  typeof schemas.MtTranslation.response['201']
>;
export declare type MtTranslationResponse400 = FromSchema<
  typeof schemas.MtTranslation.response['400']
>;
export declare type MtTranslationuidMetadataParam = FromSchema<
  typeof schemas.MtTranslationuid.metadata
>;
export declare type MtTranslationuidResponse200 = FromSchema<
  typeof schemas.MtTranslationuid.response['200']
>;
export declare type MtTranslationuidResponse400 = FromSchema<
  typeof schemas.MtTranslationuid.response['400']
>;
export declare type PatchReportuidFormDataParam = FromSchema<
  typeof schemas.PatchReportuid.formData
>;
export declare type PatchReportuidMetadataParam = FromSchema<
  typeof schemas.PatchReportuid.metadata
>;
export declare type PatchReportuidResponse202 = FromSchema<
  typeof schemas.PatchReportuid.response['202']
>;
export declare type PatchReportuidResponse400 = FromSchema<
  typeof schemas.PatchReportuid.response['400']
>;
export declare type PatchReportuidacceptMetadataParam = FromSchema<
  typeof schemas.PatchReportuidaccept.metadata
>;
export declare type PatchReportuidacceptResponse202 = FromSchema<
  typeof schemas.PatchReportuidaccept.response['202']
>;
export declare type PatchReportuidacceptResponse400 = FromSchema<
  typeof schemas.PatchReportuidaccept.response['400']
>;
export declare type PostWordcountFormDataParam = FromSchema<typeof schemas.PostWordcount.formData>;
export declare type PostWordcountResponse201 = FromSchema<
  typeof schemas.PostWordcount.response['201']
>;
export declare type PostWordcountResponse400 = FromSchema<
  typeof schemas.PostWordcount.response['400']
>;
export declare type ReportFormDataParam = FromSchema<typeof schemas.Report.formData>;
export declare type ReportResponse201 = FromSchema<typeof schemas.Report.response['201']>;
export declare type ReportResponse400 = FromSchema<typeof schemas.Report.response['400']>;
export declare type ToneResponse200 = FromSchema<typeof schemas.Tone.response['200']>;
export declare type ToneResponse400 = FromSchema<typeof schemas.Tone.response['400']>;
export declare type TopicResponse200 = FromSchema<typeof schemas.Topic.response['200']>;
export declare type TopicResponse400 = FromSchema<typeof schemas.Topic.response['400']>;
export declare type Translation1FormDataParam = FromSchema<typeof schemas.Translation1.formData>;
export declare type Translation1Response202 = FromSchema<
  typeof schemas.Translation1.response['202']
>;
export declare type Translation1Response400 = FromSchema<
  typeof schemas.Translation1.response['400']
>;
export declare type TranslationDetailMetadataParam = FromSchema<
  typeof schemas.TranslationDetail.metadata
>;
export declare type TranslationDetailResponse200 = FromSchema<
  typeof schemas.TranslationDetail.response['200']
>;
export declare type TranslationDetailResponse400 = FromSchema<
  typeof schemas.TranslationDetail.response['400']
>;
export declare type TranslationFormDataParam = FromSchema<typeof schemas.Translation.formData>;
export declare type TranslationListUpdateMetadataParam = FromSchema<
  typeof schemas.TranslationListUpdate.metadata
>;
export declare type TranslationListUpdateResponse200 = FromSchema<
  typeof schemas.TranslationListUpdate.response['200']
>;
export declare type TranslationListUpdateResponse400 = FromSchema<
  typeof schemas.TranslationListUpdate.response['400']
>;
export declare type TranslationResponse201 = FromSchema<typeof schemas.Translation.response['201']>;
export declare type TranslationResponse400 = FromSchema<typeof schemas.Translation.response['400']>;
