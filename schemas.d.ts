declare const GetReportuid: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly ':report_id': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'ID of the report that you want to get information about';
          };
        };
        readonly required: readonly [':report_id'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly changed: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-10T14:28:02.825000'];
        };
        readonly comments: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly commenter: {
                readonly type: 'object';
                readonly properties: {
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['Alice Wonder'];
                  };
                  readonly picture_url: {
                    readonly type: 'string';
                    readonly examples: readonly ['https://secure.gravatar.com/avatar/(...)'];
                  };
                  readonly username: {
                    readonly type: 'string';
                    readonly examples: readonly ['alice'];
                  };
                };
              };
              readonly created: {
                readonly type: 'string';
                readonly examples: readonly ['6 hours ago'];
              };
              readonly event: {
                readonly type: 'string';
                readonly examples: readonly ['job_reported'];
              };
              readonly text: {
                readonly type: 'string';
                readonly examples: readonly [
                  'This job has a few translation mistakes, I want to report it'
                ];
              };
            };
          };
        };
        readonly created: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-10T11:10:12.686000'];
        };
        readonly editor: {
          readonly type: 'string';
          readonly examples: readonly ['albuquerque.a.andre'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['3b0f609330'];
        };
        readonly report_id: {
          readonly type: 'string';
          readonly examples: readonly ['55a3a1e7421aa9e1c4fb880d'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['open'];
        };
        readonly types: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'string';
            readonly examples: readonly ['grammar'];
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const GetTranslationByStatus: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly status: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: "Check the table below for acceptable status'";
          };
        };
        readonly required: readonly ['status'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly objects: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly balance: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [68711];
              };
              readonly client: {
                readonly type: 'string';
                readonly examples: readonly ['sam'];
              };
              readonly price: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [6];
              };
              readonly source_language: {
                readonly type: 'string';
                readonly examples: readonly ['en'];
              };
              readonly status: {
                readonly type: 'string';
                readonly examples: readonly ['completed'];
              };
              readonly target_language: {
                readonly type: 'string';
                readonly examples: readonly ['pt'];
              };
              readonly text: {
                readonly type: 'string';
                readonly examples: readonly ['Translation 1'];
              };
              readonly text_format: {
                readonly type: 'string';
                readonly examples: readonly ['text'];
              };
              readonly translatedText: {
                readonly type: 'string';
                readonly examples: readonly ['Tradução 1'];
              };
              readonly uid: {
                readonly type: 'string';
                readonly examples: readonly ['f94ec485db'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const GetTranslationByUid: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly uid: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'uid returned from the original POST or PATCH request';
          };
        };
        readonly required: readonly ['uid'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly balance: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [68711];
        };
        readonly client: {
          readonly type: 'string';
          readonly examples: readonly ['sam'];
        };
        readonly price: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [6];
        };
        readonly source_language: {
          readonly type: 'string';
          readonly examples: readonly ['en'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['completed'];
        };
        readonly target_language: {
          readonly type: 'string';
          readonly examples: readonly ['pt'];
        };
        readonly text: {
          readonly type: 'string';
          readonly examples: readonly ['Translation 1'];
        };
        readonly text_format: {
          readonly type: 'string';
          readonly examples: readonly ['text'];
        };
        readonly translatedText: {
          readonly type: 'string';
          readonly examples: readonly ['Tradução 1'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['f94ec485db'];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const LanguagePair: {
  readonly response: {
    readonly '200': {
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MtTranslation: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['text', 'source_language', 'target_language'];
    readonly properties: {
      readonly text: {
        readonly type: 'string';
        readonly description: 'UTF-8 encoding is preferred.';
      };
      readonly source_language: {
        readonly type: 'string';
        readonly description: 'If not supplied will be auto-detected. Language detection is not 100% accurate so please supply this field if possible!';
      };
      readonly target_language: {
        readonly type: 'string';
        readonly description: 'Language shortname. See the language_pair endpoint for available languages and their shortnames.';
      };
      readonly text_format: {
        readonly type: 'string';
        readonly description: 'You can choose from "text", "html", "srt", "xliff", "base64/text", "base64/html" or "base64/xliff"';
        readonly default: 'text';
      };
      readonly uid: {
        readonly type: 'string';
        readonly description: 'You can specify an ID for a particular translation. Note that it has to be unique.';
      };
      readonly callback_url: {
        readonly type: 'string';
        readonly description: 'If supplied we will POST the translation back to this URL when it is complete.';
      };
      readonly brand: {
        readonly type: 'string';
        readonly description: 'Enter the external identifier of a Brand or omit to use the brand default';
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly response: {
    readonly '201': {
      readonly type: 'object';
      readonly properties: {
        readonly origin: {
          readonly type: 'string';
          readonly examples: readonly ['api'];
        };
        readonly source_language: {
          readonly type: 'string';
          readonly examples: readonly ['en'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['machine_translate_in_progress'];
        };
        readonly target_language: {
          readonly type: 'string';
          readonly examples: readonly ['pt'];
        };
        readonly text: {
          readonly type: 'string';
          readonly examples: readonly ['Hello, world'];
        };
        readonly text_format: {
          readonly type: 'string';
          readonly examples: readonly ['text'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['329165fca4'];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MtTranslation1: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly ':uid': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly ':status': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Acceptable status: "new", "translating", "completed", "failed", "canceled"';
          };
          readonly source_language: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly target_language: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const MtTranslationuid: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly ':uid': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Uid returned from the original POST request';
          };
        };
        readonly required: readonly [':uid'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly price: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [0];
        };
        readonly source_language: {
          readonly type: 'string';
          readonly examples: readonly ['en'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['new'];
        };
        readonly target_language: {
          readonly type: 'string';
          readonly examples: readonly ['pt'];
        };
        readonly text: {
          readonly type: 'string';
          readonly examples: readonly ['The quick brown fox'];
        };
        readonly text_format: {
          readonly type: 'string';
          readonly examples: readonly ['text'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['f2f7a62ca5'];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const PatchReportuid: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['comment'];
    readonly properties: {
      readonly comment: {
        readonly type: 'string';
        readonly description: 'Comment to add to the report';
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly report_id: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'The ID of the report that you want to add a comment as a customer';
          };
        };
        readonly required: readonly ['report_id'];
      }
    ];
  };
  readonly response: {
    readonly '202': {
      readonly type: 'object';
      readonly properties: {
        readonly changed: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-10T14:28:02.825000'];
        };
        readonly comments: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly commenter: {
                readonly type: 'object';
                readonly properties: {
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['Alice Wonder'];
                  };
                  readonly picture_url: {
                    readonly type: 'string';
                    readonly examples: readonly ['https://secure.gravatar.com/avatar/(...)'];
                  };
                  readonly username: {
                    readonly type: 'string';
                    readonly examples: readonly ['alice'];
                  };
                };
              };
              readonly created: {
                readonly type: 'string';
                readonly examples: readonly ['6 hours ago'];
              };
              readonly event: {
                readonly type: 'string';
                readonly examples: readonly ['job_reported'];
              };
              readonly text: {
                readonly type: 'string';
                readonly examples: readonly [
                  'This job has a few translation mistakes, I want to report it'
                ];
              };
            };
          };
        };
        readonly created: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-10T11:10:12.686000'];
        };
        readonly editor: {
          readonly type: 'string';
          readonly examples: readonly ['albuquerque.a.andre'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['3b0f609330'];
        };
        readonly report_id: {
          readonly type: 'string';
          readonly examples: readonly ['55a3a1e7421aa9e1c4fb880d'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['open'];
        };
        readonly types: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'string';
            readonly examples: readonly ['grammar'];
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const PatchReportuidaccept: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly report_id: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'The id of the report that you want to accept';
          };
        };
        readonly required: readonly ['report_id'];
      }
    ];
  };
  readonly response: {
    readonly '202': {
      readonly type: 'object';
      readonly properties: {
        readonly changed: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-13T11:33:22.313000'];
        };
        readonly comments: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly commenter: {
                readonly type: 'object';
                readonly properties: {
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['Alice Wonder'];
                  };
                  readonly picture_url: {
                    readonly type: 'string';
                    readonly examples: readonly ['https://secure.gravatar.com/avatar/(...)'];
                  };
                  readonly username: {
                    readonly type: 'string';
                    readonly examples: readonly ['alice'];
                  };
                };
              };
              readonly created: {
                readonly type: 'string';
                readonly examples: readonly ['26 seconds ago'];
              };
              readonly event: {
                readonly type: 'string';
                readonly examples: readonly ['job_reported'];
              };
              readonly text: {
                readonly type: 'string';
                readonly examples: readonly [
                  'This job has a few translation mistakes, I want to report it'
                ];
              };
            };
          };
        };
        readonly created: {
          readonly type: 'string';
          readonly examples: readonly ['2015-07-13T11:32:55.580000'];
        };
        readonly editor: {
          readonly type: 'string';
          readonly examples: readonly ['a.mattiace'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['3b0f609330'];
        };
        readonly report_id: {
          readonly type: 'string';
          readonly examples: readonly ['55a3a1e7421aa9e1c4fb880d'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['close'];
        };
        readonly types: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'string';
            readonly examples: readonly ['grammar'];
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const PostWordcount: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['text'];
    readonly properties: {
      readonly text: {
        readonly type: 'string';
        readonly description: 'From where we will be counting all the words';
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly response: {
    readonly '201': {
      readonly type: 'object';
      readonly properties: {
        readonly word_count: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [4];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const Report: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['uid', 'comment', 'type', 'callback_url'];
    readonly properties: {
      readonly uid: {
        readonly type: 'string';
        readonly description: 'UID of the job that you want report';
      };
      readonly comment: {
        readonly type: 'string';
        readonly description: 'Comment explaining why this job is being reported';
      };
      readonly type: {
        readonly type: 'array';
        readonly description: 'One or more (up to five) types of possible errors with this report. You can choose from the array in the example';
        readonly items: {
          readonly type: 'string';
        };
      };
      readonly callback_url: {
        readonly type: 'string';
        readonly description: 'URL to call to receive a notification when an Editor replies to the report';
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly response: {
    readonly '201': {
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const Tone: {
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly objects: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly tone: {
                readonly type: 'object';
                readonly properties: {
                  readonly description: {
                    readonly type: 'string';
                    readonly examples: readonly ['Informal style'];
                  };
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['Informal'];
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const Topic: {
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly objects: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly topic: {
                readonly type: 'object';
                readonly properties: {
                  readonly name: {
                    readonly type: 'string';
                    readonly examples: readonly ['politics'];
                  };
                };
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const Translation: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['text', 'source_language', 'target_language'];
    readonly properties: {
      readonly text: {
        readonly type: 'string';
        readonly description: 'UTF-8 encoding is preferred.';
      };
      readonly source_language: {
        readonly type: 'string';
        readonly description: 'If not supplied will be auto-detected. Language detection is not 100% accurate so please supply this field if possible!';
      };
      readonly target_language: {
        readonly type: 'string';
        readonly description: 'Language shortname. See the language_pair endpoint for available languages and their shortnames.';
      };
      readonly text_format: {
        readonly type: 'string';
        readonly description: 'You can choose from "text", "html", "srt", "xliff", "base64/text", "base64/html" or "base64/xliff"';
        readonly default: 'text';
      };
      readonly uid: {
        readonly type: 'string';
        readonly description: 'You can specify an ID for a particular translation. Note that it has to be unique.';
      };
      readonly callback_url: {
        readonly type: 'string';
        readonly description: 'If supplied we will POST the translation back to this URL when it is complete.';
      };
      readonly brand: {
        readonly type: 'string';
        readonly description: 'Enter the external identifier of a Brand or omit to use the brand default';
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly response: {
    readonly '201': {
      readonly type: 'object';
      readonly properties: {
        readonly order_number: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [1];
        };
        readonly price: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [0];
        };
        readonly source_language: {
          readonly type: 'string';
          readonly examples: readonly ['en'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['new'];
        };
        readonly target_language: {
          readonly type: 'string';
          readonly examples: readonly ['pt'];
        };
        readonly text: {
          readonly type: 'string';
          readonly examples: readonly ['Text to be translated'];
        };
        readonly text_format: {
          readonly type: 'string';
          readonly examples: readonly ['text'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['9a86cf619f'];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const Translation1: {
  readonly formData: {
    readonly type: 'object';
    readonly required: readonly ['objects'];
    readonly properties: {
      readonly objects: {
        readonly type: 'array';
        readonly description: 'An array of dictionaries with the same data as a POST Request to /translation/';
        readonly items: {
          readonly type: 'mixed type';
        };
      };
    };
    readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
  };
  readonly response: {
    readonly '202': {
      readonly type: 'object';
      readonly properties: {
        readonly objects: {
          readonly type: 'array';
          readonly items: {
            readonly type: 'object';
            readonly properties: {
              readonly order_number: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [27];
              };
              readonly price: {
                readonly type: 'integer';
                readonly default: 0;
                readonly examples: readonly [6];
              };
              readonly source_language: {
                readonly type: 'string';
                readonly examples: readonly ['en'];
              };
              readonly status: {
                readonly type: 'string';
                readonly examples: readonly ['new'];
              };
              readonly target_language: {
                readonly type: 'string';
                readonly examples: readonly ['de'];
              };
              readonly text: {
                readonly type: 'string';
                readonly examples: readonly ['Text to translate'];
              };
              readonly text_format: {
                readonly type: 'string';
                readonly examples: readonly ['text'];
              };
              readonly uid: {
                readonly type: 'string';
                readonly examples: readonly ['b65f94ebf9'];
              };
            };
          };
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const TranslationDetail: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly uid: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'UID returned from the original POST or PATCH request';
          };
        };
        readonly required: readonly ['uid'];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly type: 'object';
      readonly properties: {
        readonly balance: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [2682];
        };
        readonly client: {
          readonly type: 'string';
          readonly examples: readonly ['username'];
        };
        readonly price: {
          readonly type: 'integer';
          readonly default: 0;
          readonly examples: readonly [12];
        };
        readonly source_language: {
          readonly type: 'string';
          readonly examples: readonly ['en'];
        };
        readonly status: {
          readonly type: 'string';
          readonly examples: readonly ['new'];
        };
        readonly target_language: {
          readonly type: 'string';
          readonly examples: readonly ['pt'];
        };
        readonly text: {
          readonly type: 'string';
          readonly examples: readonly ['The quick brown fox'];
        };
        readonly text_format: {
          readonly type: 'string';
          readonly examples: readonly ['text'];
        };
        readonly uid: {
          readonly type: 'string';
          readonly examples: readonly ['f2f7a62ca5'];
        };
      };
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
declare const TranslationListUpdate: {
  readonly metadata: {
    readonly allOf: readonly [
      {
        readonly type: 'object';
        readonly properties: {
          readonly ':uid': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly ':status': {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
            readonly description: 'Acceptable status: "new", "translating", "completed", "failed", "canceled", "accepted", "rejected"';
          };
          readonly source_language: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
          readonly target_language: {
            readonly type: 'string';
            readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
          };
        };
        readonly required: readonly [];
      }
    ];
  };
  readonly response: {
    readonly '200': {
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
    readonly '400': {
      readonly type: 'object';
      readonly properties: {};
      readonly $schema: 'https://json-schema.org/draft/2020-12/schema#';
    };
  };
};
export {
  GetReportuid,
  GetTranslationByStatus,
  GetTranslationByUid,
  LanguagePair,
  MtTranslation,
  MtTranslation1,
  MtTranslationuid,
  PatchReportuid,
  PatchReportuidaccept,
  PostWordcount,
  Report,
  Tone,
  Topic,
  Translation,
  Translation1,
  TranslationDetail,
  TranslationListUpdate,
};
