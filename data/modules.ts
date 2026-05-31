// data/modules.ts
// DP-700 module catalog. All text fields are bilingual { en, tr }.

import type { Localized } from "@/lib/i18n";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type QuizQuestion = {
  id: string;
  question: Localized;
  options: Localized<string[]>;
  correctIndex: number;
  explanation: Localized;
};

export type Flashcard = {
  q: Localized;
  a: Localized;
};

export type ConsoleLineData = {
  text: string;
  tone?: "prompt" | "output" | "warn" | "info" | "success" | "muted" | "comment";
};

export type Visual =
  | {
      kind: "callout";
      tone: "info" | "warn" | "tip";
      text: Localized;
    }
  | {
      kind: "editor";
      files: string[];
      activeFile: string;
      code: string;
      caption?: Localized;
    }
  | {
      kind: "console";
      title?: string;
      lines: string[];
    };

export type Module = {
  slug: string;
  order: number;
  track: Localized;
  title: Localized;
  subtitle: Localized;
  difficulty: Difficulty;
  estimatedMinutes: number;
  badge: {
    id: string;
    name: Localized;
    emoji: string;
  };
  source: {
    url: string;
    label: string | Localized;
  };
  lesson: {
    quickMap: Localized<string[]>;
    story: Localized;
    mnemonic: Localized;
    pitfalls: Localized<string[]>;
    visuals: Visual[];
  };
  task: {
    scenario: Localized;
    portalSteps: Localized<string[]>;
    cli: string[];
    checklist: Localized<string[]>;
  };
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
};

export const modules: Module[] =[
    {
        "slug":  "dataflows-gen2",
        "order":  1,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Dataflows Gen2",
                      "tr":  "Dataflows Gen2"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Dataflows Gen2",
                         "tr":  "Dataflows Gen2 icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-dataflows-gen2",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Dataflows Gen2 introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Dataflows Gen2, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Dataflows Gen2 and verify results.",
                                      "tr":  "Dataflows Gen2 icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-1-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "explore-dataflows-gen2",
        "order":  2,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Explore Dataflows Gen2",
                      "tr":  "Explore Dataflows Gen2"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Explore Dataflows Gen2",
                         "tr":  "Explore Dataflows Gen2 icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-explore-dataflows-gen2",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Explore Dataflows Gen2 introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Explore Dataflows Gen2, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Explore Dataflows Gen2 and verify results.",
                                      "tr":  "Explore Dataflows Gen2 icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-2-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "integrate-dataflows-pipelines",
        "order":  3,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Integrate Dataflows Pipelines",
                      "tr":  "Integrate Dataflows Pipelines"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Integrate Dataflows Pipelines",
                         "tr":  "Integrate Dataflows Pipelines icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-integrate-dataflows-pipelines",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Integrate Dataflows Pipelines introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Integrate Dataflows Pipelines, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Integrate Dataflows Pipelines and verify results.",
                                      "tr":  "Integrate Dataflows Pipelines icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-3-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-dataflows-gen2",
        "order":  4,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Dataflows Gen2",
                      "tr":  "Lab Dataflows Gen2"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Dataflows Gen2",
                         "tr":  "Lab Dataflows Gen2 icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-dataflows-gen2",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Dataflows Gen2 introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Dataflows Gen2, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Dataflows Gen2 and verify results.",
                                      "tr":  "Lab Dataflows Gen2 icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-4-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "understand-pipelines",
        "order":  5,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Understand Pipelines",
                      "tr":  "Understand Pipelines"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Understand Pipelines",
                         "tr":  "Understand Pipelines icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-understand-pipelines",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Understand Pipelines introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Understand Pipelines, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Understand Pipelines and verify results.",
                                      "tr":  "Understand Pipelines icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-5-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "copy-data-activity",
        "order":  6,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Copy Data Activity",
                      "tr":  "Copy Data Activity"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Copy Data Activity",
                         "tr":  "Copy Data Activity icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-copy-data-activity",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Copy Data Activity introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Copy Data Activity, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Copy Data Activity and verify results.",
                                      "tr":  "Copy Data Activity icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-6-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "pipeline-templates",
        "order":  7,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Pipeline Templates",
                      "tr":  "Pipeline Templates"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Pipeline Templates",
                         "tr":  "Pipeline Templates icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-pipeline-templates",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Pipeline Templates introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Pipeline Templates, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Pipeline Templates and verify results.",
                                      "tr":  "Pipeline Templates icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-7-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-ingest-pipeline",
        "order":  8,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Ingest Pipeline",
                      "tr":  "Lab Ingest Pipeline"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Ingest Pipeline",
                         "tr":  "Lab Ingest Pipeline icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-ingest-pipeline",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Ingest Pipeline introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Ingest Pipeline, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Ingest Pipeline and verify results.",
                                      "tr":  "Lab Ingest Pipeline icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-8-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "prepare-to-use-apache-spark",
        "order":  9,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Prepare To Use Apache Spark",
                      "tr":  "Prepare To Use Apache Spark"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Prepare To Use Apache Spark",
                         "tr":  "Prepare To Use Apache Spark icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-prepare-to-use-apache-spark",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Prepare To Use Apache Spark introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Prepare To Use Apache Spark, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Prepare To Use Apache Spark and verify results.",
                                      "tr":  "Prepare To Use Apache Spark icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-9-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "run-spark-code",
        "order":  10,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Run Spark Code",
                      "tr":  "Run Spark Code"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Run Spark Code",
                         "tr":  "Run Spark Code icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-run-spark-code",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Run Spark Code introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Run Spark Code, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Run Spark Code and verify results.",
                                      "tr":  "Run Spark Code icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-10-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "spark-dataframes",
        "order":  11,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Spark Dataframes",
                      "tr":  "Spark Dataframes"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Spark Dataframes",
                         "tr":  "Spark Dataframes icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-spark-dataframes",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Spark Dataframes introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Spark Dataframes, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Spark Dataframes and verify results.",
                                      "tr":  "Spark Dataframes icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-11-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "spark-sql",
        "order":  12,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Spark SQL",
                      "tr":  "Spark SQL"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Spark SQL",
                         "tr":  "Spark SQL icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-spark-sql",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Spark SQL introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Spark SQL, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Spark SQL and verify results.",
                                      "tr":  "Spark SQL icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-12-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "visualize-spark-notebook",
        "order":  13,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Visualize Spark Notebook",
                      "tr":  "Visualize Spark Notebook"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Visualize Spark Notebook",
                         "tr":  "Visualize Spark Notebook icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-visualize-spark-notebook",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Visualize Spark Notebook introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Visualize Spark Notebook, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Visualize Spark Notebook and verify results.",
                                      "tr":  "Visualize Spark Notebook icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-13-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-analyze-spark",
        "order":  14,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Analyze Spark",
                      "tr":  "Lab Analyze Spark"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Analyze Spark",
                         "tr":  "Lab Analyze Spark icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-analyze-spark",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Analyze Spark introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Analyze Spark, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Analyze Spark and verify results.",
                                      "tr":  "Lab Analyze Spark icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-14-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "eventhouse-realtime-intro",
        "order":  15,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Eventhouse Realtime Intro",
                      "tr":  "Eventhouse Realtime Intro"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Eventhouse Realtime Intro",
                         "tr":  "Eventhouse Realtime Intro icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-eventhouse-realtime-intro",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Eventhouse Realtime Intro introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Eventhouse Realtime Intro, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Eventhouse Realtime Intro and verify results.",
                                      "tr":  "Eventhouse Realtime Intro icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-15-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "eventhouse-get-started",
        "order":  16,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Eventhouse Get Started",
                      "tr":  "Eventhouse Get Started"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Eventhouse Get Started",
                         "tr":  "Eventhouse Get Started icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-eventhouse-get-started",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Eventhouse Get Started introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Eventhouse Get Started, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Eventhouse Get Started and verify results.",
                                      "tr":  "Eventhouse Get Started icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-16-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-kql-effectively",
        "order":  17,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Use KQL Effectively",
                      "tr":  "Use KQL Effectively"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use KQL Effectively",
                         "tr":  "Use KQL Effectively icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-kql-effectively",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use KQL Effectively introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use KQL Effectively, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use KQL Effectively and verify results.",
                                      "tr":  "Use KQL Effectively icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-17-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "materialized-views-stored-functions",
        "order":  18,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Materialized Views Stored Functions",
                      "tr":  "Materialized Views Stored Functions"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Materialized Views Stored Functions",
                         "tr":  "Materialized Views Stored Functions icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-materialized-views-stored-functions",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Materialized Views Stored Functions introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Materialized Views Stored Functions, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Materialized Views Stored Functions and verify results.",
                                      "tr":  "Materialized Views Stored Functions icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-18-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-eventhouse-kql-tsql",
        "order":  19,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Lab Eventhouse KQL T-SQL",
                      "tr":  "Lab Eventhouse KQL T-SQL"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Eventhouse KQL T-SQL",
                         "tr":  "Lab Eventhouse KQL T-SQL icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-eventhouse-kql-tsql",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Eventhouse KQL T-SQL introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Eventhouse KQL T-SQL, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Eventhouse KQL T-SQL and verify results.",
                                      "tr":  "Lab Eventhouse KQL T-SQL icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-19-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lakehouse-features-capabilities",
        "order":  20,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lakehouse Features Capabilities",
                      "tr":  "Lakehouse Features Capabilities"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Lakehouse Features Capabilities",
                         "tr":  "Lakehouse Features Capabilities icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-lakehouse-features-capabilities",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lakehouse Features Capabilities introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lakehouse Features Capabilities, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lakehouse Features Capabilities and verify results.",
                                      "tr":  "Lakehouse Features Capabilities icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-20-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "fabric-vs-azure-sql-refresher",
        "order":  21,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Fabric Vs Azure SQL Refresher",
                      "tr":  "Fabric Vs Azure SQL Refresher"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Fabric Vs Azure SQL Refresher",
                         "tr":  "Fabric Vs Azure SQL Refresher icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-fabric-vs-azure-sql-refresher",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Fabric Vs Azure SQL Refresher introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Fabric Vs Azure SQL Refresher, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Fabric Vs Azure SQL Refresher and verify results.",
                                      "tr":  "Fabric Vs Azure SQL Refresher icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-21-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "ingest-transform-lakehouse",
        "order":  22,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Ingest Transform Lakehouse",
                      "tr":  "Ingest Transform Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Ingest Transform Lakehouse",
                         "tr":  "Ingest Transform Lakehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-ingest-transform-lakehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Ingest Transform Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Ingest Transform Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Ingest Transform Lakehouse and verify results.",
                                      "tr":  "Ingest Transform Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-22-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "query-analyze-lakehouse",
        "order":  23,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Query Analyze Lakehouse",
                      "tr":  "Query Analyze Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Query Analyze Lakehouse",
                         "tr":  "Query Analyze Lakehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-query-analyze-lakehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Query Analyze Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Query Analyze Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Query Analyze Lakehouse and verify results.",
                                      "tr":  "Query Analyze Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-23-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-create-lakehouse",
        "order":  24,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Create Lakehouse",
                      "tr":  "Lab Create Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Create Lakehouse",
                         "tr":  "Lab Create Lakehouse icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-create-lakehouse",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Create Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Create Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Create Lakehouse and verify results.",
                                      "tr":  "Lab Create Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-24-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "work-delta-lake-tables",
        "order":  25,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Work Delta Lake Tables",
                      "tr":  "Work Delta Lake Tables"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Work Delta Lake Tables",
                         "tr":  "Work Delta Lake Tables icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-work-delta-lake-tables",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Work Delta Lake Tables introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Work Delta Lake Tables, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Work Delta Lake Tables and verify results.",
                                      "tr":  "Work Delta Lake Tables icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-25-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "optimize-delta-tables",
        "order":  26,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Optimize Delta Tables",
                      "tr":  "Optimize Delta Tables"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Optimize Delta Tables",
                         "tr":  "Optimize Delta Tables icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-optimize-delta-tables",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Optimize Delta Tables introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Optimize Delta Tables, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Optimize Delta Tables and verify results.",
                                      "tr":  "Optimize Delta Tables icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-26-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "delta-tables-streaming",
        "order":  27,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Delta Tables Streaming",
                      "tr":  "Delta Tables Streaming"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Delta Tables Streaming",
                         "tr":  "Delta Tables Streaming icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-delta-tables-streaming",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Delta Tables Streaming introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Delta Tables Streaming, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Delta Tables Streaming and verify results.",
                                      "tr":  "Delta Tables Streaming icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-27-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-delta-tables-apache-spark",
        "order":  28,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Delta Tables Apache Spark",
                      "tr":  "Lab Delta Tables Apache Spark"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Delta Tables Apache Spark",
                         "tr":  "Lab Delta Tables Apache Spark icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-delta-tables-apache-spark",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Delta Tables Apache Spark introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Delta Tables Apache Spark, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Delta Tables Apache Spark and verify results.",
                                      "tr":  "Lab Delta Tables Apache Spark icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-28-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "medallion-architecture-design",
        "order":  29,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Medallion Architecture Design",
                      "tr":  "Medallion Architecture Design"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Medallion Architecture Design",
                         "tr":  "Medallion Architecture Design icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-medallion-architecture-design",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Medallion Architecture Design introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Medallion Architecture Design, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Medallion Architecture Design and verify results.",
                                      "tr":  "Medallion Architecture Design icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-29-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "query-report-fabric-lakehouse",
        "order":  30,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Query Report Fabric Lakehouse",
                      "tr":  "Query Report Fabric Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Query Report Fabric Lakehouse",
                         "tr":  "Query Report Fabric Lakehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-query-report-fabric-lakehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Query Report Fabric Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Query Report Fabric Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Query Report Fabric Lakehouse and verify results.",
                                      "tr":  "Query Report Fabric Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-30-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "cicd-considerations-lakehouse",
        "order":  31,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "CI/CD Considerations Lakehouse",
                      "tr":  "CI/CD Considerations Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for CI/CD Considerations Lakehouse",
                         "tr":  "CI/CD Considerations Lakehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-cicd-considerations-lakehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "CI/CD Considerations Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "CI/CD Considerations Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for CI/CD Considerations Lakehouse and verify results.",
                                      "tr":  "CI/CD Considerations Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-31-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-medallion-fabric-lakehouse",
        "order":  32,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Medallion Fabric Lakehouse",
                      "tr":  "Lab Medallion Fabric Lakehouse"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Medallion Fabric Lakehouse",
                         "tr":  "Lab Medallion Fabric Lakehouse icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-medallion-fabric-lakehouse",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Medallion Fabric Lakehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Medallion Fabric Lakehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Medallion Fabric Lakehouse and verify results.",
                                      "tr":  "Lab Medallion Fabric Lakehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-32-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "realtime-intelligence-intro",
        "order":  33,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Realtime Intelligence Intro",
                      "tr":  "Realtime Intelligence Intro"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Realtime Intelligence Intro",
                         "tr":  "Realtime Intelligence Intro icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-realtime-intelligence-intro",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Realtime Intelligence Intro introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Realtime Intelligence Intro, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Realtime Intelligence Intro and verify results.",
                                      "tr":  "Realtime Intelligence Intro icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-33-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "realtime-intelligence-components",
        "order":  34,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Realtime Intelligence Components",
                      "tr":  "Realtime Intelligence Components"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Realtime Intelligence Components",
                         "tr":  "Realtime Intelligence Components icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-realtime-intelligence-components",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Realtime Intelligence Components introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Realtime Intelligence Components, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Realtime Intelligence Components and verify results.",
                                      "tr":  "Realtime Intelligence Components icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-34-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "ingest-transform-realtime-data",
        "order":  35,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Ingest Transform Realtime Data",
                      "tr":  "Ingest Transform Realtime Data"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Ingest Transform Realtime Data",
                         "tr":  "Ingest Transform Realtime Data icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-ingest-transform-realtime-data",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Ingest Transform Realtime Data introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Ingest Transform Realtime Data, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Ingest Transform Realtime Data and verify results.",
                                      "tr":  "Ingest Transform Realtime Data icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-35-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "store-query-realtime-data",
        "order":  36,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Store Query Realtime Data",
                      "tr":  "Store Query Realtime Data"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Store Query Realtime Data",
                         "tr":  "Store Query Realtime Data icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-store-query-realtime-data",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Store Query Realtime Data introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Store Query Realtime Data, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Store Query Realtime Data and verify results.",
                                      "tr":  "Store Query Realtime Data icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-36-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "visualize-realtime-data",
        "order":  37,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Visualize Realtime Data",
                      "tr":  "Visualize Realtime Data"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Visualize Realtime Data",
                         "tr":  "Visualize Realtime Data icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-visualize-realtime-data",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Visualize Realtime Data introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Visualize Realtime Data, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Visualize Realtime Data and verify results.",
                                      "tr":  "Visualize Realtime Data icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-37-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "automate-actions-activator",
        "order":  38,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Automate Actions Activator",
                      "tr":  "Automate Actions Activator"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Automate Actions Activator",
                         "tr":  "Automate Actions Activator icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-automate-actions-activator",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Automate Actions Activator introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Automate Actions Activator, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Automate Actions Activator and verify results.",
                                      "tr":  "Automate Actions Activator icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-38-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "eventstream-sources-destinations",
        "order":  39,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Eventstream Sources Destinations",
                      "tr":  "Eventstream Sources Destinations"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Eventstream Sources Destinations",
                         "tr":  "Eventstream Sources Destinations icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-eventstream-sources-destinations",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Eventstream Sources Destinations introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Eventstream Sources Destinations, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Eventstream Sources Destinations and verify results.",
                                      "tr":  "Eventstream Sources Destinations icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-39-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-eventstream-fabric-rti",
        "order":  40,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Lab Eventstream Fabric Rti",
                      "tr":  "Lab Eventstream Fabric Rti"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Eventstream Fabric Rti",
                         "tr":  "Lab Eventstream Fabric Rti icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-eventstream-fabric-rti",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Eventstream Fabric Rti introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Eventstream Fabric Rti, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Eventstream Fabric Rti and verify results.",
                                      "tr":  "Lab Eventstream Fabric Rti icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-40-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "create-realtime-dashboards-fabric",
        "order":  41,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Create Realtime Dashboards Fabric",
                      "tr":  "Create Realtime Dashboards Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Create Realtime Dashboards Fabric",
                         "tr":  "Create Realtime Dashboards Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-create-realtime-dashboards-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Create Realtime Dashboards Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Create Realtime Dashboards Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Create Realtime Dashboards Fabric and verify results.",
                                      "tr":  "Create Realtime Dashboards Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-41-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "organize-filter-dashboard-data",
        "order":  42,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Organize Filter Dashboard Data",
                      "tr":  "Organize Filter Dashboard Data"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Organize Filter Dashboard Data",
                         "tr":  "Organize Filter Dashboard Data icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-organize-filter-dashboard-data",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Organize Filter Dashboard Data introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Organize Filter Dashboard Data, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Organize Filter Dashboard Data and verify results.",
                                      "tr":  "Organize Filter Dashboard Data icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-42-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "dashboard-management-optimization",
        "order":  43,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Dashboard Management Optimization",
                      "tr":  "Dashboard Management Optimization"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Dashboard Management Optimization",
                         "tr":  "Dashboard Management Optimization icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-dashboard-management-optimization",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Dashboard Management Optimization introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Dashboard Management Optimization, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Dashboard Management Optimization and verify results.",
                                      "tr":  "Dashboard Management Optimization icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-43-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-real-time-dashboards-fabric",
        "order":  44,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Lab Real Time Dashboards Fabric",
                      "tr":  "Lab Real Time Dashboards Fabric"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Real Time Dashboards Fabric",
                         "tr":  "Lab Real Time Dashboards Fabric icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-real-time-dashboards-fabric",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Real Time Dashboards Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Real Time Dashboards Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Real Time Dashboards Fabric and verify results.",
                                      "tr":  "Lab Real Time Dashboards Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-44-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-activator-fabric",
        "order":  45,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Use Activator Fabric",
                      "tr":  "Use Activator Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use Activator Fabric",
                         "tr":  "Use Activator Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-activator-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use Activator Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use Activator Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use Activator Fabric and verify results.",
                                      "tr":  "Use Activator Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-45-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "create-rules-activator",
        "order":  46,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Create Rules Activator",
                      "tr":  "Create Rules Activator"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Create Rules Activator",
                         "tr":  "Create Rules Activator icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-create-rules-activator",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Create Rules Activator introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Create Rules Activator, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Create Rules Activator and verify results.",
                                      "tr":  "Create Rules Activator icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-46-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "configure-actions-activator",
        "order":  47,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Configure Actions Activator",
                      "tr":  "Configure Actions Activator"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Configure Actions Activator",
                         "tr":  "Configure Actions Activator icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-configure-actions-activator",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Configure Actions Activator introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Configure Actions Activator, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Configure Actions Activator and verify results.",
                                      "tr":  "Configure Actions Activator icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-47-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-use-activator-fabric-alerts",
        "order":  48,
        "track":  {
                      "en":  "Implement real-time intelligence with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile gercek zamanli zekayi uygula"
                  },
        "title":  {
                      "en":  "Lab Use Activator Fabric Alerts",
                      "tr":  "Lab Use Activator Fabric Alerts"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Use Activator Fabric Alerts",
                         "tr":  "Lab Use Activator Fabric Alerts icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-use-activator-fabric-alerts",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Use Activator Fabric Alerts introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Use Activator Fabric Alerts, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Use Activator Fabric Alerts and verify results.",
                                      "tr":  "Lab Use Activator Fabric Alerts icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-48-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "get-started-data-warehouse-fabric",
        "order":  49,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Get Started Data Warehouse Fabric",
                      "tr":  "Get Started Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Get Started Data Warehouse Fabric",
                         "tr":  "Get Started Data Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-get-started-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Get Started Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Get Started Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Get Started Data Warehouse Fabric and verify results.",
                                      "tr":  "Get Started Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-49-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "understand-data-warehouses-fabric",
        "order":  50,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Understand Data Warehouses Fabric",
                      "tr":  "Understand Data Warehouses Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Understand Data Warehouses Fabric",
                         "tr":  "Understand Data Warehouses Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-understand-data-warehouses-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Understand Data Warehouses Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Understand Data Warehouses Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Understand Data Warehouses Fabric and verify results.",
                                      "tr":  "Understand Data Warehouses Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-50-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "query-transform-data-fabric-warehouse",
        "order":  51,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Query Transform Data Fabric Warehouse",
                      "tr":  "Query Transform Data Fabric Warehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Query Transform Data Fabric Warehouse",
                         "tr":  "Query Transform Data Fabric Warehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-query-transform-data-fabric-warehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Query Transform Data Fabric Warehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Query Transform Data Fabric Warehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Query Transform Data Fabric Warehouse and verify results.",
                                      "tr":  "Query Transform Data Fabric Warehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-51-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "model-data-warehouse-fabric",
        "order":  52,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Model Data Warehouse Fabric",
                      "tr":  "Model Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Model Data Warehouse Fabric",
                         "tr":  "Model Data Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-model-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Model Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Model Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Model Data Warehouse Fabric and verify results.",
                                      "tr":  "Model Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-52-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "secure-monitor-warehouse-fabric",
        "order":  53,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Secure Monitor Warehouse Fabric",
                      "tr":  "Secure Monitor Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Secure Monitor Warehouse Fabric",
                         "tr":  "Secure Monitor Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-secure-monitor-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Secure Monitor Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Secure Monitor Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Secure Monitor Warehouse Fabric and verify results.",
                                      "tr":  "Secure Monitor Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-53-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-analyze-data-warehouse-fabric",
        "order":  54,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Lab Analyze Data Warehouse Fabric",
                      "tr":  "Lab Analyze Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Analyze Data Warehouse Fabric",
                         "tr":  "Lab Analyze Data Warehouse Fabric icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-analyze-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Analyze Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Analyze Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Analyze Data Warehouse Fabric and verify results.",
                                      "tr":  "Lab Analyze Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-54-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "load-data-fabric-warehouse-intro",
        "order":  55,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Load Data Fabric Warehouse Intro",
                      "tr":  "Load Data Fabric Warehouse Intro"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Load Data Fabric Warehouse Intro",
                         "tr":  "Load Data Fabric Warehouse Intro icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-load-data-fabric-warehouse-intro",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Load Data Fabric Warehouse Intro introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Load Data Fabric Warehouse Intro, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Load Data Fabric Warehouse Intro and verify results.",
                                      "tr":  "Load Data Fabric Warehouse Intro icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-55-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "explore-data-load-strategies-fabric",
        "order":  56,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Explore Data Load Strategies Fabric",
                      "tr":  "Explore Data Load Strategies Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Explore Data Load Strategies Fabric",
                         "tr":  "Explore Data Load Strategies Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-explore-data-load-strategies-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Explore Data Load Strategies Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Explore Data Load Strategies Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Explore Data Load Strategies Fabric and verify results.",
                                      "tr":  "Explore Data Load Strategies Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-56-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "load-warehouse-using-data-pipelines",
        "order":  57,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Load Warehouse Using Data Pipelines",
                      "tr":  "Load Warehouse Using Data Pipelines"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Load Warehouse Using Data Pipelines",
                         "tr":  "Load Warehouse Using Data Pipelines icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-load-warehouse-using-data-pipelines",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Load Warehouse Using Data Pipelines introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Load Warehouse Using Data Pipelines, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Load Warehouse Using Data Pipelines and verify results.",
                                      "tr":  "Load Warehouse Using Data Pipelines icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-57-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "load-data-using-tsql-fabric-warehouse",
        "order":  58,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Load Data Using T-SQL Fabric Warehouse",
                      "tr":  "Load Data Using T-SQL Fabric Warehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Load Data Using T-SQL Fabric Warehouse",
                         "tr":  "Load Data Using T-SQL Fabric Warehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-load-data-using-tsql-fabric-warehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Load Data Using T-SQL Fabric Warehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Load Data Using T-SQL Fabric Warehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Load Data Using T-SQL Fabric Warehouse and verify results.",
                                      "tr":  "Load Data Using T-SQL Fabric Warehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-58-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "load-transform-dataflow-gen2",
        "order":  59,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Load Transform Dataflow Gen2",
                      "tr":  "Load Transform Dataflow Gen2"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Load Transform Dataflow Gen2",
                         "tr":  "Load Transform Dataflow Gen2 icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-load-transform-dataflow-gen2",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Load Transform Dataflow Gen2 introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Load Transform Dataflow Gen2, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Load Transform Dataflow Gen2 and verify results.",
                                      "tr":  "Load Transform Dataflow Gen2 icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-59-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-load-warehouse-using-tsql",
        "order":  60,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Lab Load Warehouse Using T-SQL",
                      "tr":  "Lab Load Warehouse Using T-SQL"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Load Warehouse Using T-SQL",
                         "tr":  "Lab Load Warehouse Using T-SQL icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-load-warehouse-using-tsql",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Load Warehouse Using T-SQL introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Load Warehouse Using T-SQL, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Load Warehouse Using T-SQL and verify results.",
                                      "tr":  "Lab Load Warehouse Using T-SQL icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-60-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "intro-query-warehouse-fabric",
        "order":  61,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Intro Query Warehouse Fabric",
                      "tr":  "Intro Query Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Intro Query Warehouse Fabric",
                         "tr":  "Intro Query Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-intro-query-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Intro Query Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Intro Query Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Intro Query Warehouse Fabric and verify results.",
                                      "tr":  "Intro Query Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-61-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "query-data-warehouse-fabric",
        "order":  62,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Query Data Warehouse Fabric",
                      "tr":  "Query Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Query Data Warehouse Fabric",
                         "tr":  "Query Data Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-query-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Query Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Query Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Query Data Warehouse Fabric and verify results.",
                                      "tr":  "Query Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-62-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-sql-query-editor-fabric",
        "order":  63,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Use SQL Query Editor Fabric",
                      "tr":  "Use SQL Query Editor Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use SQL Query Editor Fabric",
                         "tr":  "Use SQL Query Editor Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-sql-query-editor-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use SQL Query Editor Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use SQL Query Editor Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use SQL Query Editor Fabric and verify results.",
                                      "tr":  "Use SQL Query Editor Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-63-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "explore-visual-query-editor-fabric",
        "order":  64,
        "track":  {
                      "en":  "DP-700 Microsoft Fabric learning path",
                      "tr":  "DP-700 Microsoft Fabric ogrenme yolu"
                  },
        "title":  {
                      "en":  "Explore Visual Query Editor Fabric",
                      "tr":  "Explore Visual Query Editor Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Explore Visual Query Editor Fabric",
                         "tr":  "Explore Visual Query Editor Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-explore-visual-query-editor-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Explore Visual Query Editor Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Explore Visual Query Editor Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Explore Visual Query Editor Fabric and verify results.",
                                      "tr":  "Explore Visual Query Editor Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-64-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-client-tools-query-warehouse-fabric",
        "order":  65,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Use Client Tools Query Warehouse Fabric",
                      "tr":  "Use Client Tools Query Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use Client Tools Query Warehouse Fabric",
                         "tr":  "Use Client Tools Query Warehouse Fabric icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-client-tools-query-warehouse-fabric",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use Client Tools Query Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use Client Tools Query Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use Client Tools Query Warehouse Fabric and verify results.",
                                      "tr":  "Use Client Tools Query Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-65-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-query-data-warehouse-fabric",
        "order":  66,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Lab Query Data Warehouse Fabric",
                      "tr":  "Lab Query Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Query Data Warehouse Fabric",
                         "tr":  "Lab Query Data Warehouse Fabric icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-query-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Query Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Query Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Query Data Warehouse Fabric and verify results.",
                                      "tr":  "Lab Query Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-66-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-copilot-code-completion-fabric-dw",
        "order":  67,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Use Copilot Code Completion Fabric DW",
                      "tr":  "Use Copilot Code Completion Fabric DW"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use Copilot Code Completion Fabric DW",
                         "tr":  "Use Copilot Code Completion Fabric DW icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-copilot-code-completion-fabric-dw",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use Copilot Code Completion Fabric DW introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use Copilot Code Completion Fabric DW, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use Copilot Code Completion Fabric DW and verify results.",
                                      "tr":  "Use Copilot Code Completion Fabric DW icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-67-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "use-copilot-quick-actions-fabric-dw",
        "order":  68,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Use Copilot Quick Actions Fabric DW",
                      "tr":  "Use Copilot Quick Actions Fabric DW"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Use Copilot Quick Actions Fabric DW",
                         "tr":  "Use Copilot Quick Actions Fabric DW icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-use-copilot-quick-actions-fabric-dw",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Use Copilot Quick Actions Fabric DW introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Use Copilot Quick Actions Fabric DW, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Use Copilot Quick Actions Fabric DW and verify results.",
                                      "tr":  "Use Copilot Quick Actions Fabric DW icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-68-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "monitor-fabric-data-warehouse",
        "order":  69,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Monitor Fabric Data Warehouse",
                      "tr":  "Monitor Fabric Data Warehouse"
                  },
        "subtitle":  {
                         "en":  "Key concepts and practice for Monitor Fabric Data Warehouse",
                         "tr":  "Monitor Fabric Data Warehouse icin temel kavramlar ve pratik"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  6,
        "badge":  {
                      "id":  "badge-monitor-fabric-data-warehouse",
                      "name":  {
                                   "en":  "Module Explorer",
                                   "tr":  "Modul Kesfedicisi"
                               },
                      "emoji":  "uD83DuDCD8"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Monitor Fabric Data Warehouse introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Monitor Fabric Data Warehouse, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Monitor Fabric Data Warehouse and verify results.",
                                      "tr":  "Monitor Fabric Data Warehouse icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-69-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-monitor-data-warehouse-fabric",
        "order":  70,
        "track":  {
                      "en":  "Implement a data warehouse with Microsoft Fabric",
                      "tr":  "Microsoft Fabric ile veri ambari uygula"
                  },
        "title":  {
                      "en":  "Lab Monitor Data Warehouse Fabric",
                      "tr":  "Lab Monitor Data Warehouse Fabric"
                  },
        "subtitle":  {
                         "en":  "Hands-on practice for Lab Monitor Data Warehouse Fabric",
                         "tr":  "Lab Monitor Data Warehouse Fabric icin uygulamali calisma"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  30,
        "badge":  {
                      "id":  "badge-lab-monitor-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Lab Finisher",
                                   "tr":  "Lab Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://microsoftlearning.github.io/mslearn-fabric/Instructions/Labs/06c-monitor-data-warehouse.html",
                       "label":  "mslearn-fabric Lab 06c"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Lab Monitor Data Warehouse Fabric introduces the core workflow and terminology.",
                                                   "Use guided steps and examples to build confidence.",
                                                   "Validate output and avoid common mistakes while practicing."
                                               ],
                                        "tr":  [
                                                   "Lab Monitor Data Warehouse Fabric, temel akis ve kavramlari tanitir.",
                                                   "Rehber adimlar ve orneklerle guvenli sekilde ilerle.",
                                                   "Pratik yaparken ciktiyi dogrula ve yaygin hatalardan kacIn."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This module helps you move from concept to execution with a practical DP-700 style flow.",
                                     "tr":  "Bu modul, DP-700 tarzinda pratik bir akisla kavramdan uygulamaya gecmeni saglar."
                                 },
                       "mnemonic":  {
                                        "en":  "Learn, Try, Verify",
                                        "tr":  "Ogren, Dene, Dogrula"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Skipping validation",
                                                   "Rushing without checking assumptions",
                                                   "Ignoring naming consistency"
                                               ],
                                        "tr":  [
                                                   "Dogrulamayi atlamak",
                                                   "Varsayimlari kontrol etmeden hizli gitmek",
                                                   "Isimlendirme tutarliligini yok saymak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Focus on repeatable workflow: understand, apply, validate.",
                                                        "tr":  "Tekrarlanabilir akisa odaklan: anla, uygula, dogrula."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Complete a guided practice for Lab Monitor Data Warehouse Fabric and verify results.",
                                      "tr":  "Lab Monitor Data Warehouse Fabric icin yonlendirmeli calismayi tamamla ve sonuclari dogrula."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open related Fabric item",
                                                    "Apply module steps",
                                                    "Validate output",
                                                    "Document findings"
                                                ],
                                         "tr":  [
                                                    "Ilgili Fabric ogesini ac",
                                                    "Modul adimlarini uygula",
                                                    "Ciktiyi dogrula",
                                                    "Bulgulari not et"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Steps completed",
                                                  "Output validated",
                                                  "No blocking errors"
                                              ],
                                       "tr":  [
                                                  "Adimlar tamamlandi",
                                                  "Cikti dogrulandi",
                                                  "Engelleyici hata yok"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-70-1",
                         "question":  {
                                          "en":  "What is the main goal of this module?",
                                          "tr":  "Bu modulun ana hedefi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Build practical understanding and validated output",
                                                    "Skip validation",
                                                    "Only memorize terms",
                                                    "Avoid exercises"
                                                ],
                                         "tr":  [
                                                    "Pratik anlayis gelistirip dogrulanmis cikti uretmek",
                                                    "Dogrulamayi atlamak",
                                                    "Sadece kavram ezberlemek",
                                                    "Alistirmalardan kacmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The module is designed for practical and verifiable learning.",
                                             "tr":  "Modul, pratik ve dogrulanabilir ogrenme icin tasarlanmistir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Best learning sequence?",
                                         "tr":  "En iyi ogrenme sirasi?"
                                     },
                               "a":  {
                                         "en":  "Understand -\u003e Apply -\u003e Validate",
                                         "tr":  "Anla -\u003e Uygula -\u003e Dogrula"
                                     }
                           }
                       ]
    },
    {
        "slug":  "secure-microsoft-fabric-data-warehouse",
        "order":  71,
        "track":  {
                      "en":  "Secure a Microsoft Fabric data warehouse",
                      "tr":  "Microsoft Fabric veri ambarini guvene al"
                  },
        "title":  {
                      "en":  "Secure a Microsoft Fabric Data Warehouse",
                      "tr":  "Microsoft Fabric Veri Ambarini Guvene Al"
                  },
        "subtitle":  {
                         "en":  "Workspace roles, item permissions, and data protection basics",
                         "tr":  "Calisma alani rolleri, oge izinleri ve veri koruma temelleri"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  12,
        "badge":  {
                      "id":  "badge-secure-fabric-dw",
                      "name":  {
                                   "en":  "Security Starter",
                                   "tr":  "Guvenlik Baslangici"
                               },
                      "emoji":  "LOCK"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/secure-data-warehouse-in-microsoft-fabric/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Start with workspace roles to control broad access.",
                                                   "Use item permissions to share one warehouse safely.",
                                                   "Apply SQL-level controls to protect sensitive rows and columns."
                                               ],
                                        "tr":  [
                                                   "Genis erisimi kontrol etmek icin once calisma alani rollerini kur.",
                                                   "Tek bir ambari guvenli paylasmak icin oge izinlerini kullan.",
                                                   "Hassas satir ve sutunlari korumak icin SQL seviyesinde kontroller uygula."
                                               ]
                                    },
                       "story":  {
                                     "en":  "Think of the warehouse like an airport: terminal access, gate access, and seat access are different layers. Fabric security works with the same layered mindset.",
                                     "tr":  "Veri ambarini havaalani gibi dusun: terminal erisimi, kapi erisimi ve koltuk erisimi farkli katmanlardir. Fabric guvenligi de ayni katmanli mantikla calisir."
                                 },
                       "mnemonic":  {
                                        "en":  "Role, Share, Shield",
                                        "tr":  "Rol, Paylas, Koru"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Giving Admin too widely",
                                                   "Sharing items without least privilege",
                                                   "Relying on one control only"
                                               ],
                                        "tr":  [
                                                   "Admin rolunu cok genis vermek",
                                                   "En az yetki prensibi olmadan oge paylasmak",
                                                   "Sadece tek bir kontrole guvenmek"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "tip",
                                           "text":  {
                                                        "en":  "Use layered security: workspace role + item permission + SQL protection.",
                                                        "tr":  "Katmanli guvenlik kullan: calisma alani rolu + oge izni + SQL korumasi."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "You are onboarding a new analytics squad. Set up safe access so they can query sales data but not expose private customer fields.",
                                      "tr":  "Yeni bir analiz ekibi sisteme dahil oluyor. Satis verisini sorgulayabilsinler ama ozel musteri alanlari aciga cikmasin."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Assign workspace roles for admin and analyst personas",
                                                    "Grant item permission to the target warehouse",
                                                    "Review SQL protections for sensitive data"
                                                ],
                                         "tr":  [
                                                    "Yonetici ve analist profilleri icin calisma alani rolleri ata",
                                                    "Hedef veri ambarina oge izni ver",
                                                    "Hassas veriler icin SQL korumalarini gozden gecir"
                                                ]
                                     },
                     "cli":  [

                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Role model defined",
                                                  "Sharing scope validated",
                                                  "Protection controls mapped"
                                              ],
                                       "tr":  [
                                                  "Rol modeli tanimlandi",
                                                  "Paylasim kapsami dogrulandi",
                                                  "Koruma kontrolleri eslendi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-71-1",
                         "question":  {
                                          "en":  "Which order gives strongest practical protection?",
                                          "tr":  "Hangi sira en guclu pratik korumayi verir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Workspace role, then item sharing, then SQL-level protection",
                                                    "Only workspace role",
                                                    "Only column masking",
                                                    "Only deny statements"
                                                ],
                                         "tr":  [
                                                    "Calisma alani rolu, sonra oge paylasimi, sonra SQL seviyesinde koruma",
                                                    "Sadece calisma alani rolu",
                                                    "Sadece sutun maskeleme",
                                                    "Sadece deny komutlari"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Layered controls reduce risk better than any single control.",
                                             "tr":  "Katmanli kontroller, tek bir kontrole gore riski daha iyi azaltir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "What is the core security mindset here?",
                                         "tr":  "Buradaki temel guvenlik yaklasimi nedir?"
                                     },
                               "a":  {
                                         "en":  "Layered access control with least privilege",
                                         "tr":  "En az yetki ile katmanli erisim kontrolu"
                                     }
                           }
                       ]
    },
    {
        "slug":  "explore-dynamic-data-masking-fabric-dw",
        "order":  72,
        "track":  {
                      "en":  "Secure a Microsoft Fabric data warehouse",
                      "tr":  "Microsoft Fabric veri ambarini guvene al"
                  },
        "title":  {
                      "en":  "Explore Dynamic Data Masking",
                      "tr":  "Dynamic Data Masking Konusunu Kesfet"
                  },
        "subtitle":  {
                         "en":  "Hide sensitive values for nonprivileged users in query results",
                         "tr":  "Yetkisiz kullanicilar icin sorgu sonucunda hassas degerleri gizle"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  15,
        "badge":  {
                      "id":  "badge-ddm-fabric-dw",
                      "name":  {
                                   "en":  "Masking Operator",
                                   "tr":  "Maskeleme Operatoru"
                               },
                      "emoji":  "MASK"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/secure-data-warehouse-in-microsoft-fabric/2-explore-dynamic-data-masking/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "DDM masks output at query time, not stored values.",
                                                   "Choose mask functions by data type and privacy need.",
                                                   "Combine DDM with permissions for stronger protection."
                                               ],
                                        "tr":  [
                                                   "DDM, saklanan degeri degil sorgu cikisini calisma aninda maskeler.",
                                                   "Maske fonksiyonunu veri tipine ve gizlilik ihtiyacina gore sec.",
                                                   "Daha guclu koruma icin DDM'i izinlerle birlikte kullan."
                                               ]
                                    },
                       "story":  {
                                     "en":  "A support dashboard shows contact details. Analysts should recognize records, but phone and account fields should stay hidden unless required.",
                                     "tr":  "Bir destek panosu iletisim detaylarini gosteriyor. Analistler kaydi taniyabilsin ama telefon ve hesap alanlari gerekmiyorsa gizli kalsin."
                                 },
                       "mnemonic":  {
                                        "en":  "Show Shape, Hide Secret",
                                        "tr":  "Sekli Goster, Sirri Gizle"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Treating DDM as encryption",
                                                   "Ignoring high-privilege bypass users",
                                                   "Forgetting inference risks in broad queries"
                                               ],
                                        "tr":  [
                                                   "DDM'i sifreleme zannetmek",
                                                   "Yuksek yetkili kullanici atlamalarini goz ardi etmek",
                                                   "Genis sorgularda cikarim riskini unutmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "warn",
                                           "text":  {
                                                        "en":  "DDM reduces exposure, but does not physically obfuscate the stored value.",
                                                        "tr":  "DDM gorunurlugu azaltir ama saklanan degeri fiziksel olarak gizlemez."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Mask email, mobile number, and national ID fields in a Membership table so basic analysts can work safely.",
                                      "tr":  "Temel analistlerin guvenli calisabilmesi icin Membership tablosunda e-posta, cep telefonu ve kimlik alanlarini maskele."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Identify sensitive columns and user personas",
                                                    "Apply email or partial masks by column type",
                                                    "Test result differences with privileged and nonprivileged users"
                                                ],
                                         "tr":  [
                                                    "Hassas sutunlari ve kullanici profillerini belirle",
                                                    "Sutun tipine gore email veya partial maske uygula",
                                                    "Yetkili ve yetkisiz kullanicilarla sonuc farklarini test et"
                                                ]
                                     },
                     "cli":  [
                             "-- Email sample",
                             "ALTER TABLE Membership",
                             "ALTER COLUMN ContactEmail ADD MASKED WITH (FUNCTION = 'email()');",
                             "",
                             "-- Mobile sample",
                             "ALTER TABLE Membership",
                             "ALTER COLUMN MobilePhone ADD MASKED WITH (FUNCTION = 'partial(0,\"XXX-XXX-\",4)');"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Mask policy documented",
                                                  "Role-based test completed",
                                                  "Data not altered at rest"
                                              ],
                                       "tr":  [
                                                  "Maske politikasi dokumante edildi",
                                                  "Rol bazli test tamamlandi",
                                                  "Bekleyen veri degistirilmedi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-72-1",
                         "question":  {
                                          "en":  "What does DDM change directly?",
                                          "tr":  "DDM dogrudan neyi degistirir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Query result visibility",
                                                    "Stored bytes in table files",
                                                    "Workspace role memberships",
                                                    "Network firewall rules"
                                                ],
                                         "tr":  [
                                                    "Sorgu sonucundaki gorunurluk",
                                                    "Tablo dosyalarindaki saklanan baytlar",
                                                    "Calisma alani rol uyelikleri",
                                                    "Ag guvenlik duvari kurallari"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "DDM applies masking at runtime to query output.",
                                             "tr":  "DDM, calisma aninda sorgu cikisina maske uygular."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "DDM first principle?",
                                         "tr":  "DDM ilk prensibi?"
                                     },
                               "a":  {
                                         "en":  "Mask what users see, not what is stored",
                                         "tr":  "Saklanani degil, kullanicinin gordugunu maskele"
                                     }
                           }
                       ]
    },
    {
        "slug":  "implement-column-level-security-fabric-dw",
        "order":  73,
        "track":  {
                      "en":  "Secure a Microsoft Fabric data warehouse",
                      "tr":  "Microsoft Fabric veri ambarini guvene al"
                  },
        "title":  {
                      "en":  "Implement Column-Level Security",
                      "tr":  "Column-Level Security Uygula"
                  },
        "subtitle":  {
                         "en":  "Restrict sensitive columns by role with precise SQL permissions",
                         "tr":  "Hassas sutunlari rol bazinda hassas SQL izinleriyle kisitla"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  18,
        "badge":  {
                      "id":  "badge-cls-fabric-dw",
                      "name":  {
                                   "en":  "Column Guard",
                                   "tr":  "Sutun Koruyucu"
                               },
                      "emoji":  "COL"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/secure-data-warehouse-in-microsoft-fabric/4-implement-column-level-security/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "CLS blocks specific columns while allowing table access.",
                                                   "Use role design first, then apply GRANT and DENY clearly.",
                                                   "Compare CLS with views for maintainability and transparency."
                                               ],
                                        "tr":  [
                                                   "CLS, tablo erisimine izin verirken belirli sutunlari engeller.",
                                                   "Once rol tasarimini yap, sonra GRANT ve DENY'i net uygula.",
                                                   "Bakim ve seffaflik icin CLS ile view yaklasimini karsilastir."
                                               ]
                                    },
                       "story":  {
                                     "en":  "In an online education warehouse, mentors need student progress, but private notes should be visible only to compliance officers.",
                                     "tr":  "Cevrim ici egitim veri ambarinda mentorler ogrenci ilerlemesini gormeli; ozel notlar sadece uyum ekibine acik olmali."
                                 },
                       "mnemonic":  {
                                        "en":  "Open Table, Close Column",
                                        "tr":  "Tabloyu Ac, Sutunu Kapat"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Using user-level grants instead of role design",
                                                   "Denying wrong column names",
                                                   "Not testing with real role members"
                                               ],
                                        "tr":  [
                                                   "Rol tasarimi yerine dogrudan kullaniciya izin vermek",
                                                   "Yanlis sutun adina deny uygulamak",
                                                   "Gercek rol uyeleriyle test etmemek"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "CLS is transparent to users; query shape stays familiar while data visibility changes.",
                                                        "tr":  "CLS kullaniciya seffaftir; sorgu yapisi benzer kalir ama veri gorunurlugu degisir."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Design roles for SupportLead and OpsViewer, then hide RefundReason column from OpsViewer while preserving table access.",
                                      "tr":  "SupportLead ve OpsViewer rolleri tasarla; sonra OpsViewer icin RefundReason sutununu gizle ama tablo erisimini koru."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Create or review business roles",
                                                    "Grant SELECT on table to both roles",
                                                    "Deny SELECT on sensitive column to limited role"
                                                ],
                                         "tr":  [
                                                    "Is rollerini olustur veya gozden gecir",
                                                    "Iki role de tabloda SELECT izni ver",
                                                    "Sinirli rol icin hassas sutunda SELECT iznini deny et"
                                                ]
                                     },
                     "cli":  [
                             "CREATE ROLE SupportLead AUTHORIZATION dbo;",
                             "CREATE ROLE OpsViewer AUTHORIZATION dbo;",
                             "GRANT SELECT ON dbo.Orders TO SupportLead;",
                             "GRANT SELECT ON dbo.Orders TO OpsViewer;",
                             "DENY SELECT ON dbo.Orders (RefundReason) TO OpsViewer;"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Sensitive column list confirmed",
                                                  "Role matrix implemented",
                                                  "Positive and negative tests passed"
                                              ],
                                       "tr":  [
                                                  "Hassas sutun listesi onaylandi",
                                                  "Rol matrisi uygulandi",
                                                  "Pozitif ve negatif testler gecti"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-73-1",
                         "question":  {
                                          "en":  "Why prefer role-based CLS over one-off user grants?",
                                          "tr":  "Neden tek tek kullanici izni yerine rol bazli CLS tercih edilir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "It scales and is easier to maintain",
                                                    "It encrypts all columns automatically",
                                                    "It removes need for testing",
                                                    "It replaces all workspace permissions"
                                                ],
                                         "tr":  [
                                                    "Olceklenir ve bakimi daha kolaydir",
                                                    "Tum sutunlari otomatik sifreler",
                                                    "Test ihtiyacini kaldirir",
                                                    "Tum calisma alani izinlerinin yerine gecer"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Role-driven permissions reduce admin overhead and drift.",
                                             "tr":  "Rol bazli izinler yonetim maliyetini ve yetki kaymasini azaltir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "CLS in one line?",
                                         "tr":  "CLS tek cumlede?"
                                     },
                               "a":  {
                                         "en":  "Same table, different visible columns by role",
                                         "tr":  "Ayni tabloda, role gore farkli gorunen sutunlar"
                                     }
                           }
                       ]
    },
    {
        "slug":  "configure-sql-granular-permissions-fabric-dw",
        "order":  74,
        "track":  {
                      "en":  "Secure a Microsoft Fabric data warehouse",
                      "tr":  "Microsoft Fabric veri ambarini guvene al"
                  },
        "title":  {
                      "en":  "Configure SQL Granular Permissions",
                      "tr":  "SQL Granular Izinlerini Yapilandir"
                  },
        "subtitle":  {
                         "en":  "Apply GRANT, DENY, and least privilege patterns with safe dynamic SQL",
                         "tr":  "GRANT, DENY ve en az yetki desenlerini guvenli dynamic SQL ile uygula"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  14,
        "badge":  {
                      "id":  "badge-sql-granular-fabric-dw",
                      "name":  {
                                   "en":  "Permission Architect",
                                   "tr":  "Izin Mimari"
                               },
                      "emoji":  "SQL"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/secure-data-warehouse-in-microsoft-fabric/5-configure-sql-granular-permissions/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Core DML permissions are SELECT, INSERT, UPDATE, and DELETE.",
                                                   "DENY overrides GRANT when both exist.",
                                                   "Use dynamic SQL carefully with QUOTENAME and parameterization."
                                               ],
                                        "tr":  [
                                                   "Temel DML izinleri SELECT, INSERT, UPDATE ve DELETE'tir.",
                                                   "Ayni anda varsa DENY, GRANT'in onune gecer.",
                                                   "Dynamic SQL kullanirken QUOTENAME ve parametreleme ile dikkatli ol."
                                               ]
                                    },
                       "story":  {
                                     "en":  "A reporting app should execute approved procedures only. Direct table writes must remain blocked for safety.",
                                     "tr":  "Bir raporlama uygulamasi sadece onayli prosedurleri calistirmali. Guvenlik icin tablolara dogrudan yazma kapali kalmali."
                                 },
                       "mnemonic":  {
                                        "en":  "Grant Small, Deny Smart",
                                        "tr":  "Az Ver, Akilli Reddet"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Granting broad table rights to app identities",
                                                   "Ignoring DENY precedence",
                                                   "Building dynamic SQL by raw string concatenation"
                                               ],
                                        "tr":  [
                                                   "Uygulama kimliklerine genis tablo haklari vermek",
                                                   "DENY onceligini dikkate almamak",
                                                   "Dynamic SQL'i ham metin birlestirme ile kurmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "warn",
                                           "text":  {
                                                        "en":  "Least privilege first: app accounts should execute what they need, not own what they touch.",
                                                        "tr":  "Once en az yetki: uygulama hesaplari dokundugu seyin sahibi degil, ihtiyac duydugu islemi calistiran olmali."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Harden a finance reporting workload by granting execute rights to procedures and denying direct table modifications.",
                                      "tr":  "Prosedur calistirma hakki verip tablolara dogrudan degisikligi deny ederek finans raporlama yukunu sertlestir."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "List required operations per identity",
                                                    "Apply GRANT for minimal needed actions",
                                                    "Apply DENY where direct data change is not required",
                                                    "Test with realistic runbook scenarios"
                                                ],
                                         "tr":  [
                                                    "Her kimlik icin gerekli islemleri listele",
                                                    "En az gereken eylem icin GRANT uygula",
                                                    "Dogrudan veri degisikligi gerekmeyen yerde DENY uygula",
                                                    "Gercekci senaryolarla test et"
                                                ]
                                     },
                     "cli":  [
                             "GRANT EXECUTE ON OBJECT::dbo.usp_GetMonthlyRevenue TO ReportingAppRole;",
                             "DENY INSERT, UPDATE, DELETE ON dbo.RevenueFact TO ReportingAppRole;",
                             "",
                             "CREATE PROCEDURE dbo.usp_TopRowsSafe @TableName NVARCHAR(128)",
                             "AS",
                             "BEGIN",
                             "  DECLARE @sql NVARCHAR(MAX) = N'SELECT TOP 10 * FROM ' + QUOTENAME(@TableName);",
                             "  EXEC sp_executesql @sql;",
                             "END;"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Least-privilege map approved",
                                                  "DENY precedence tested",
                                                  "Dynamic SQL safety checks passed"
                                              ],
                                       "tr":  [
                                                  "En az yetki haritasi onaylandi",
                                                  "DENY onceligi test edildi",
                                                  "Dynamic SQL guvenlik kontrolleri gecti"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-74-1",
                         "question":  {
                                          "en":  "If a role has both GRANT SELECT and DENY SELECT on the same object, what happens?",
                                          "tr":  "Ayni nesnede bir rolde hem GRANT SELECT hem DENY SELECT varsa ne olur?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "DENY wins",
                                                    "GRANT wins",
                                                    "They cancel each other",
                                                    "Behavior is random"
                                                ],
                                         "tr":  [
                                                    "DENY kazanir",
                                                    "GRANT kazanir",
                                                    "Birbirini sifirlar",
                                                    "Davranis rastgeledir"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "In SQL permission evaluation, explicit DENY takes precedence.",
                                             "tr":  "SQL izin degerlendirmesinde acik DENY onceliklidir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Least privilege in practice?",
                                         "tr":  "Pratikte en az yetki nedir?"
                                     },
                               "a":  {
                                         "en":  "Give only the exact action needed for the exact object",
                                         "tr":  "Sadece gerekli nesne icin sadece gerekli eylemi ver"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-secure-data-data-warehouse-fabric",
        "order":  75,
        "track":  {
                      "en":  "Secure a Microsoft Fabric data warehouse",
                      "tr":  "Microsoft Fabric veri ambarini guvene al"
                  },
        "title":  {
                      "en":  "Lab Secure Data in a Data Warehouse",
                      "tr":  "Lab Veri Ambarinda Veriyi Guvenceye Al"
                  },
        "subtitle":  {
                         "en":  "Hands-on lab for masking, row filters, column restrictions, and granular SQL permissions",
                         "tr":  "Maskeleme, satir filtreleri, kolon kisitlari ve ince ayar SQL izinleri icin uygulamali lab"
                     },
        "difficulty":  "Hard",
        "estimatedMinutes":  45,
        "badge":  {
                      "id":  "badge-lab-secure-data-data-warehouse-fabric",
                      "name":  {
                                   "en":  "Security Lab Finisher",
                                   "tr":  "Guvenlik Labi Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://microsoftlearning.github.io/mslearn-fabric/Instructions/Labs/06d-secure-data-warehouse.html",
                       "label":  "mslearn-fabric security lab"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Create a Fabric workspace and warehouse for a security sandbox.",
                                                   "Protect data with dynamic masking, row-level security, and column-level security.",
                                                   "Finish by granting and denying precise SQL permissions, then clean up the workspace."
                                               ],
                                        "tr":  [
                                                   "Guvenlik denemesi icin bir Fabric calisma alani ve veri ambari olustur.",
                                                   "Veriyi dinamik maskeleme, satir seviyesi guvenlik ve kolon seviyesi guvenlikle koru.",
                                                   "Son olarak hassas SQL izinleri verip reddet, sonra calisma alanini temizle."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This lab simulates a real warehouse hardening session: you prepare the environment, expose only what each persona needs, and verify what a limited viewer can actually reach.",
                                     "tr":  "Bu lab gercek bir veri ambarini sertlestirme oturumunu taklit eder: ortami hazirlarsin, her personaya sadece gerektigini acarsin ve sinirli goruntuleyicinin gercekte neye ulasabildigini dogrularsin."
                                 },
                       "mnemonic":  {
                                        "en":  "Mask, Filter, Limit, Grant",
                                        "tr":  "Maskele, Filtrele, Sinirla, Ver"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Testing every feature only as workspace admin",
                                                   "Forgetting to replace sample user names before creating row filters and denies",
                                                   "Leaving the trial workspace behind after finishing the lab"
                                               ],
                                        "tr":  [
                                                   "Tum ozellikleri sadece calisma alani yoneticisi olarak test etmek",
                                                   "Satir filtreleri ve deny komutlarindan once ornek kullanici adlarini degistirmeyi unutmak",
                                                   "Lab bittikten sonra deneme calisma alanini silmeden birakmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "warn",
                                           "text":  {
                                                        "en":  "Optional validation steps are strongest with a second user in the Viewer role; otherwise compare with screenshots and expected behavior.",
                                                        "tr":  "Istege bagli dogrulama adimlari, Viewer rolunde ikinci bir kullaniciyla daha gucludur; yoksa ekran goruntuleri ve beklenen davranisla karsilastir."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Build a secure warehouse demo from scratch: create a workspace, add a warehouse, implement four layers of SQL security, validate restricted behavior, then remove the workspace.",
                                      "tr":  "Sifirdan guvenli bir veri ambari demosu kur: calisma alani olustur, ambar ekle, dort SQL guvenlik katmani uygula, kisitli davranisi dogrula, sonra calisma alanini sil."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Create a Fabric workspace on paid or trial capacity",
                                                    "Create a warehouse inside the workspace",
                                                    "Run masking, RLS, CLS, and granular-permission scripts in separate SQL queries",
                                                    "Validate results with a Viewer account or by comparing expected screenshots",
                                                    "Remove the workspace when the exercise is complete"
                                                ],
                                         "tr":  [
                                                    "Ucretli veya deneme kapasitesinde bir Fabric calisma alani olustur",
                                                    "Calisma alani icinde bir veri ambari olustur",
                                                    "Maskeleme, RLS, CLS ve ince ayar izin scriptlerini ayri SQL sorgularinda calistir",
                                                    "Sonuclari bir Viewer hesabi ile veya beklenen ekran goruntuleriyle karsilastirarak dogrula",
                                                    "Alistirma tamamlaninca calisma alanini kaldir"
                                                ]
                                     },
                     "cli":  [
                             "CREATE TABLE dbo.Customers (CustomerID INT NOT NULL, FirstName varchar(50) MASKED WITH (FUNCTION = 'partial(1,\"XXXXXXX\",0)') NULL, LastName varchar(50) NOT NULL, Phone varchar(20) MASKED WITH (FUNCTION = 'default()') NULL, Email varchar(50) MASKED WITH (FUNCTION = 'email()') NULL);",
                             "INSERT dbo.Customers (CustomerID, FirstName, LastName, Phone, Email) VALUES (70101,'Aylin','Demir','555-200-1000','aylin@northwind-example.com'), (70102,'Mert','Kaya','555-200-2000','mert@northwind-example.com'), (70103,'Selin','Aras','555-200-3000','selin@northwind-example.com');",
                             "CREATE TABLE dbo.Sales (OrderID INT, SalesRep VARCHAR(60), Product VARCHAR(10), Quantity INT);",
                             "CREATE SCHEMA rls; CREATE FUNCTION rls.fn_securitypredicate(@SalesRep AS VARCHAR(60)) RETURNS TABLE WITH SCHEMABINDING AS RETURN SELECT 1 AS fn_securitypredicate_result WHERE @SalesRep = USER_NAME(); CREATE SECURITY POLICY SalesFilter ADD FILTER PREDICATE rls.fn_securitypredicate(SalesRep) ON dbo.Sales WITH (STATE = ON);",
                             "CREATE TABLE dbo.Orders (OrderID INT, CustomerID INT, CreditCard VARCHAR(20)); DENY SELECT ON dbo.Orders (CreditCard) TO [viewer@contoso.com];",
                             "CREATE PROCEDURE dbo.sp_PrintMessage AS PRINT 'Secure warehouse ready.'; CREATE TABLE dbo.Parts (PartID INT, PartName VARCHAR(25)); DENY SELECT ON dbo.Parts TO [viewer@contoso.com]; GRANT EXECUTE ON dbo.sp_PrintMessage TO [viewer@contoso.com];"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Workspace and warehouse created",
                                                  "Dynamic masking validated",
                                                  "Row-level filter enforced",
                                                  "Column-level deny tested",
                                                  "GRANT and DENY behavior confirmed",
                                                  "Workspace removed after practice"
                                              ],
                                       "tr":  [
                                                  "Calisma alani ve veri ambari olusturuldu",
                                                  "Dinamik maskeleme dogrulandi",
                                                  "Satir seviyesi filtre uygulandi",
                                                  "Kolon seviyesi deny test edildi",
                                                  "GRANT ve DENY davranisi onaylandi",
                                                  "Pratikten sonra calisma alani kaldirildi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-75-1",
                         "question":  {
                                          "en":  "What makes this lab different from the earlier security theory modules?",
                                          "tr":  "Bu labi onceki guvenlik teori modullerinden farkli yapan nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "It combines all four security techniques in one end-to-end practice",
                                                    "It covers only workspace role assignment",
                                                    "It focuses only on cleanup steps",
                                                    "It removes the need for SQL testing"
                                                ],
                                         "tr":  [
                                                    "Dort guvenlik teknigini tek bir uctan uca uygulamada birlestirmesi",
                                                    "Sadece calisma alani rol atamasini islemesi",
                                                    "Yalnizca temizlik adimlarina odaklanmasi",
                                                    "SQL test ihtiyacini ortadan kaldirmasi"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The value of the lab is the combined hands-on flow: masking, row filtering, column restriction, and permission design together.",
                                             "tr":  "Labin degeri, birlesik uygulama akisindadir: maskeleme, satir filtreleme, kolon kisitlama ve izin tasarimi birlikte ilerler."
                                         }
                     },
                     {
                         "id":  "q-75-2",
                         "question":  {
                                          "en":  "Why is a second Viewer user helpful in this lab?",
                                          "tr":  "Bu labda neden ikinci bir Viewer kullanicisi faydalidir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "To verify how restricted results differ from admin results",
                                                    "To create the warehouse faster",
                                                    "To enable Fabric capacity automatically",
                                                    "To replace the need for all screenshots"
                                                ],
                                         "tr":  [
                                                    "Kisitli sonuclarin yonetici sonucundan nasil farkli oldugunu dogrulamak icin",
                                                    "Veri ambarini daha hizli olusturmak icin",
                                                    "Fabric kapasitesini otomatik acmak icin",
                                                    "Tum ekran goruntulerinin yerine gecmek icin"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Many validation steps are about what a restricted person can and cannot see, so a Viewer account makes the result concrete.",
                                             "tr":  "Bir cok dogrulama adimi, kisitli kullanicinin neyi gorup neyi goremeyecegine dayandigi icin Viewer hesabi sonucu somutlastirir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Four security layers practiced in the lab?",
                                         "tr":  "Labda uygulanan dort guvenlik katmani?"
                                     },
                               "a":  {
                                         "en":  "Dynamic masking, row-level security, column-level security, and granular SQL permissions",
                                         "tr":  "Dinamik maskeleme, satir seviyesi guvenlik, kolon seviyesi guvenlik ve ince ayar SQL izinleri"
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Final cleanup step?",
                                         "tr":  "Son temizlik adimi?"
                                     },
                               "a":  {
                                         "en":  "Remove the workspace after the lab to avoid leaving unused trial resources behind",
                                         "tr":  "Kullanilmayan deneme kaynaklari kalmasin diye lab sonunda calisma alanini sil"
                                     }
                           }
                       ]
    },
    {
        "slug":  "implement-version-control-git-integration-fabric",
        "order":  76,
        "track":  {
                      "en":  "Manage a Microsoft Fabric environment",
                      "tr":  "Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Implement Version Control and Git Integration",
                      "tr":  "Versiyon Kontrolu ve Git Entegrasyonu Uygula"
                  },
        "subtitle":  {
                         "en":  "Use branches, isolated workspaces, and sync flows to support CI in Fabric",
                         "tr":  "Fabric icinde CI destegi icin branch, izole calisma alani ve senkron akislari kullan"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  12,
        "badge":  {
                      "id":  "badge-implement-version-control-git-integration-fabric",
                      "name":  {
                                   "en":  "Git Flow Builder",
                                   "tr":  "Git Akis Kurucu"
                               },
                      "emoji":  "uD83CuDF3F"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/3-implement-version-control-and-git-integration",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Connect a Fabric workspace to GitHub or Azure DevOps at workspace level.",
                                                   "Use dedicated branches and isolated workspaces so feature work does not disturb shared development.",
                                                   "Sync workspace changes to Git with Changes and bring repository commits back with Updates."
                                               ],
                                        "tr":  [
                                                   "Fabric calisma alanini GitHub veya Azure DevOps'a calisma alani seviyesinde bagla.",
                                                   "Ozellik gelistirmesinin paylasilan ortami bozmamasi icin ayrik branch ve izole calisma alanlari kullan.",
                                                   "Calisma alani degisikliklerini Changes ile Git'e gonder, repo commitlerini Updates ile geri al."
                                               ]
                                    },
                       "story":  {
                                     "en":  "A shared Fabric workspace is like a live stage. Git integration gives developers a rehearsal room where they can branch, test, commit, and merge before the audience sees the final version.",
                                     "tr":  "Paylasilan bir Fabric calisma alani canli sahne gibidir. Git entegrasyonu, gelistiricilere dallanip test edip commit atip birlestirecekleri bir prova odasi verir; boylece son surumu izleyici gormeden once hazirlarlar."
                                 },
                       "mnemonic":  {
                                        "en":  "Branch, Build, Merge, Sync",
                                        "tr":  "Dallan, Gelistir, Birlestir, Senkronla"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Developing directly in a live shared workspace",
                                                   "Committing feature work straight to the main branch",
                                                   "Forgetting to pull Updates after a pull request is merged"
                                               ],
                                        "tr":  [
                                                   "Canli paylasilan calisma alaninda dogrudan gelistirme yapmak",
                                                   "Ozellik gelistirmesini dogrudan ana branche commit etmek",
                                                   "Pull request merge edildikten sonra Updates cekmeyi unutmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Workspace Git integration tracks item differences so you can decide whether to commit, update, or branch out.",
                                                        "tr":  "Calisma alani Git entegrasyonu oge farklarini izler; boylece commit mi update mi yeni branch mi gerektigine karar verebilirsin."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Your team maintains a shared Fabric workspace. Set up a safe feature-development flow where one developer works in an isolated branch and workspace, then merges changes back through a pull request.",
                                      "tr":  "Ekibin paylasilan bir Fabric calisma alani yonetiyor. Bir gelistiricinin izole branch ve calisma alaninda calisip degisiklikleri pull request ile geri birlestirdigi guvenli bir ozellik gelistirme akisi kur."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Create or choose a GitHub or Azure DevOps repository",
                                                    "Connect the development Fabric workspace to the main branch from Git integration settings",
                                                    "Create a dedicated feature branch and, if needed, branch out to a new isolated workspace",
                                                    "Commit workspace changes from Source control and open a pull request in Git",
                                                    "After merge, use Updates to sync the shared workspace with the repository"
                                                ],
                                         "tr":  [
                                                    "Bir GitHub veya Azure DevOps deposu olustur ya da sec",
                                                    "Gelisim Fabric calisma alanini Git integration ayarlarindan ana branche bagla",
                                                    "Ayrik bir ozellik branch'i olustur ve gerekirse yeni izole calisma alanina branch out yap",
                                                    "Source control ekranindan calisma alani degisikliklerini commit et ve Git tarafinda pull request ac",
                                                    "Merge sonrasi paylasilan calisma alanini repo ile esitlemek icin Updates kullan"
                                                ]
                                     },
                     "cli":  [
                             "Repository provider: GitHub or Azure DevOps",
                             "Workspace setting: Git integration -> connect workspace to branch",
                             "Source control actions: Changes, Updates, Branch out to new workspace",
                             "Git action: create pull request from feature branch to main"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Workspace connected to repository",
                                                  "Feature branch isolated from main",
                                                  "Changes committed from Fabric or client tools",
                                                  "Pull request merged",
                                                  "Shared workspace synchronized after merge"
                                              ],
                                       "tr":  [
                                                  "Calisma alani depoya baglandi",
                                                  "Ozellik branch'i main'den izole edildi",
                                                  "Degisiklikler Fabric veya istemci araclariyla commit edildi",
                                                  "Pull request merge edildi",
                                                  "Paylasilan calisma alani merge sonrasi senkronlandi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-76-1",
                         "question":  {
                                          "en":  "Why is an isolated workspace recommended for Fabric development?",
                                          "tr":  "Fabric gelistirmesinde neden izole calisma alani onerilir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Because direct edits in a shared workspace affect other users immediately",
                                                    "Because shared workspaces cannot connect to Git",
                                                    "Because pull requests only work for isolated workspaces",
                                                    "Because Azure DevOps requires separate tenants"
                                                ],
                                         "tr":  [
                                                    "Cunku paylasilan calisma alanindaki dogrudan duzenlemeler diger kullanicilari hemen etkiler",
                                                    "Cunku paylasilan calisma alanlari Git'e baglanamaz",
                                                    "Cunku pull request sadece izole calisma alanlarinda calisir",
                                                    "Cunku Azure DevOps ayri tenant ister"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Isolation prevents unfinished work from affecting the live team environment.",
                                             "tr":  "Izolasyon, tamamlanmamis isin canli ekip ortamini etkilemesini engeller."
                                         }
                     },
                     {
                         "id":  "q-76-2",
                         "question":  {
                                          "en":  "Which Fabric source control action is used when new commits were added to the branch and you want them in the workspace?",
                                          "tr":  "Branch'e yeni commitler eklendiginde bunlari calisma alanina almak icin hangi Fabric source control eylemi kullanilir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Updates",
                                                    "Changes",
                                                    "Delete workspace",
                                                    "Manage access"
                                                ],
                                         "tr":  [
                                                    "Updates",
                                                    "Changes",
                                                    "Delete workspace",
                                                    "Manage access"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Updates pulls repository-side changes into the Fabric workspace.",
                                             "tr":  "Updates, depo tarafindaki degisiklikleri Fabric calisma alanina ceker."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Two supported Fabric version control providers?",
                                         "tr":  "Fabric'in destekledigi iki versiyon kontrol saglayicisi?"
                                     },
                               "a":  {
                                         "en":  "GitHub and Azure DevOps",
                                         "tr":  "GitHub ve Azure DevOps"
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Changes vs Updates?",
                                         "tr":  "Changes ile Updates farki?"
                                     },
                               "a":  {
                                         "en":  "Changes sends workspace edits to Git; Updates brings Git commits into the workspace",
                                         "tr":  "Changes calisma alani duzenlemelerini Git'e yollar; Updates Git commitlerini calisma alanina getirir"
                                     }
                           }
                       ]
    },
    {
        "slug":  "implement-deployment-pipelines-fabric",
        "order":  77,
        "track":  {
                      "en":  "Manage a Microsoft Fabric environment",
                      "tr":  "Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Implement Deployment Pipelines",
                      "tr":  "Deployment Pipeline'lari Uygula"
                  },
        "subtitle":  {
                         "en":  "Promote Fabric content across development, test, and production with structured releases",
                         "tr":  "Fabric icerigini gelistirme, test ve uretim ortamlari arasinda duzenli surumlerle tası"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  12,
        "badge":  {
                      "id":  "badge-implement-deployment-pipelines-fabric",
                      "name":  {
                                   "en":  "Pipeline Operator",
                                   "tr":  "Pipeline Operatoru"
                               },
                      "emoji":  "uD83DuDE9A"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/implement-cicd-in-fabric/4-implement-deployment-pipelines/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Deployment pipelines move Fabric content through development, test, and production stages.",
                                                   "A pipeline can be created from the Deployment pipelines area or directly from a workspace.",
                                                   "A common Git pattern is to connect only the Development workspace to Git and use pipelines for promotion to later stages."
                                               ],
                                        "tr":  [
                                                   "Deployment pipeline'lar Fabric icerigini gelistirme, test ve uretim asamalarindan gecirir.",
                                                   "Pipeline, Deployment pipelines alanindan veya dogrudan bir calisma alanindan olusturulabilir.",
                                                   "Yaygin Git deseninde sadece Gelistirme calisma alani Git'e baglanir ve sonraki asamalara gecis pipeline ile yapilir."
                                               ]
                                    },
                       "story":  {
                                     "en":  "Think of deployment pipelines as a conveyor belt for trusted releases: content is built in development, checked in test, then delivered to production when it is ready.",
                                     "tr":  "Deployment pipeline'lari guvenilir surumler icin bir tasima bandi gibi dusun: icerik gelistirmede olusturulur, testte kontrol edilir, sonra hazir oldugunda uretime gecer."
                                 },
                       "mnemonic":  {
                                        "en":  "Build, Validate, Promote",
                                        "tr":  "Olustur, Dogrula, Yukselt"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Deploying from development to production without a test stage",
                                                   "Connecting every stage workspace to Git and creating avoidable sync conflicts",
                                                   "Forgetting to assign the correct workspace to each stage before deployment"
                                               ],
                                        "tr":  [
                                                   "Test asamasi olmadan gelistirmeden uretime gecmek",
                                                   "Her asama calisma alanini Git'e baglayip gereksiz senkron cakismlari olusturmak",
                                                   "Deploy oncesi her asamaya dogru calisma alanini atamayi unutmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "tip",
                                           "text":  {
                                                        "en":  "A green check in each stage means the item exists across environments and the pipeline is synchronized.",
                                                        "tr":  "Her asamadaki yesil isaret, ogenin ortamlar boyunca bulundugunu ve pipeline'in senkron oldugunu gosterir."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Set up a Fabric release flow for a data engineering team: create a pipeline, assign Development, Test, and Production workspaces, deploy content stage by stage, and combine it with Git in Development only.",
                                      "tr":  "Bir veri muhendisligi ekibi icin Fabric surum akisi kur: pipeline olustur, Gelistirme, Test ve Uretim calisma alanlarini ata, icerigi asama asama deploy et ve Git'i yalnizca Gelistirme tarafinda birlestir."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open Deployment pipelines from the Workspaces area or create one from a workspace",
                                                    "Create a new pipeline, name it, and define the stages",
                                                    "Assign a workspace to each stage and confirm assignment",
                                                    "Choose a target stage, pick the source stage in Deploy from, and run Deploy",
                                                    "If using Git, connect only the Development workspace to a repository and commit there before promoting with the pipeline"
                                                ],
                                         "tr":  [
                                                    "Deployment pipelines alanini Workspaces bolumunden ac veya bir calisma alanindan yeni pipeline olustur",
                                                    "Yeni pipeline olustur, ad ver ve asamalari tanimla",
                                                    "Her asamaya bir calisma alani ata ve atamayi onayla",
                                                    "Hedef asamayi sec, Deploy from alanindan kaynak asamayi belirle ve Deploy calistir",
                                                    "Git kullaniyorsan sadece Gelistirme calisma alanini bir depoya bagla ve pipeline ile yukseltmeden once commitlerini orada yap"
                                                ]
                                     },
                     "cli":  [
                             "Fabric UI entry points: Workspaces -> Deployment pipelines, or workspace header -> Create deployment pipeline",
                             "Pipeline stages: Development -> Test -> Production",
                             "Deploy action: choose target stage, choose source from Deploy from, then Deploy",
                             "Recommended Git pattern: connect only Development workspace to Git"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Pipeline created and stages named",
                                                  "Workspaces assigned to stages",
                                                  "Content deployed from Development to Test",
                                                  "Content promoted from Test to Production when ready",
                                                  "Git workflow kept isolated to Development"
                                              ],
                                       "tr":  [
                                                  "Pipeline olusturuldu ve asamalar adlandirildi",
                                                  "Calisma alanlari asamalara atandi",
                                                  "Icerik Gelistirme'den Test'e deploy edildi",
                                                  "Hazir oldugunda icerik Test'ten Uretim'e yukseltildi",
                                                  "Git akisi yalnizca Gelistirme tarafinda tutuldu"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-77-1",
                         "question":  {
                                          "en":  "What is the main purpose of a Fabric deployment pipeline?",
                                          "tr":  "Fabric deployment pipeline'in ana amaci nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "To move and validate content across environments in an ordered release flow",
                                                    "To replace Git entirely",
                                                    "To assign workspace roles automatically",
                                                    "To create semantic models only"
                                                ],
                                         "tr":  [
                                                    "Icerigi sirali bir surum akisinda ortamlar arasinda tasimak ve dogrulamak",
                                                    "Git'in tamamen yerini almak",
                                                    "Calisma alani rollerini otomatik atamak",
                                                    "Sadece semantic model olusturmak"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Pipelines structure promotion from development to test and production.",
                                             "tr":  "Pipeline'lar gelistirmeden test ve uretime gecisi duzenler."
                                         }
                     },
                     {
                         "id":  "q-77-2",
                         "question":  {
                                          "en":  "Which Git and deployment pipeline combination is commonly recommended in Fabric?",
                                          "tr":  "Fabric'te sik onerilen Git ve deployment pipeline kombinasyonu hangisidir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Connect only the Development workspace to Git and use pipelines to promote to Test and Production",
                                                    "Connect every stage workspace to the same Git branch",
                                                    "Use deployment pipelines without any workspace assignments",
                                                    "Skip Development and deploy straight to Production"
                                                ],
                                         "tr":  [
                                                    "Yalnizca Gelistirme calisma alanini Git'e bagla ve Test ile Uretim'e gecis icin pipeline kullan",
                                                    "Her asama calisma alanini ayni Git branch'ine bagla",
                                                    "Calisma alani atamasi olmadan deployment pipeline kullan",
                                                    "Gelistirme asamasini atla ve dogrudan Uretim'e gec"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "This pattern preserves version control in development and reduces synchronization conflicts later in the release path.",
                                             "tr":  "Bu desen gelistirmede versiyon kontrolunu korur ve sonraki surum yolunda senkron cakismlarini azaltir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Typical pipeline stages?",
                                         "tr":  "Tipik pipeline asamalari?"
                                     },
                               "a":  {
                                         "en":  "Development, Test, Production",
                                         "tr":  "Gelistirme, Test, Uretim"
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Recommended Git connection point?",
                                         "tr":  "Onerilen Git baglanti noktasi?"
                                     },
                               "a":  {
                                         "en":  "Development workspace only",
                                         "tr":  "Sadece Gelistirme calisma alani"
                                     }
                           }
                       ]
    },
    {
        "slug":  "lab-implement-deployment-pipelines-fabric",
        "order":  78,
        "track":  {
                      "en":  "Manage a Microsoft Fabric environment",
                      "tr":  "Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Lab Implement Deployment Pipelines in Microsoft Fabric",
                      "tr":  "Lab Microsoft Fabric'te Deployment Pipeline Uygula"
                  },
        "subtitle":  {
                         "en":  "Hands-on lab to create three workspaces, build a pipeline, create a lakehouse, and promote content across stages",
                         "tr":  "Uc calisma alani olusturup pipeline kurmak, lakehouse yaratmak ve icerigi asamalar arasinda tasimak icin uygulamali lab"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  20,
        "badge":  {
                      "id":  "badge-lab-implement-deployment-pipelines-fabric",
                      "name":  {
                                   "en":  "Pipeline Lab Finisher",
                                   "tr":  "Pipeline Labi Tamamlayici"
                               },
                      "emoji":  "uD83EuDDEA"
                  },
        "source":  {
                       "url":  "https://microsoftlearning.github.io/mslearn-fabric/Instructions/Labs/21-implement-cicd.html",
                       "label":  "mslearn-fabric Lab 21"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Create Development, Test, and Production workspaces on Fabric capacity.",
                                                   "Build a deployment pipeline and assign each workspace to the matching stage.",
                                                   "Create a lakehouse in Development, then deploy it through Test and Production and verify synchronization."
                                               ],
                                        "tr":  [
                                                   "Fabric kapasitesinde Gelistirme, Test ve Uretim calisma alanlarini olustur.",
                                                   "Bir deployment pipeline kur ve her calisma alanini eslesen asamaya ata.",
                                                   "Gelistirme ortaminda bir lakehouse olustur, sonra bunu Test ve Uretim'e deploy edip senkronu dogrula."
                                               ]
                                    },
                       "story":  {
                                     "en":  "This lab feels like a release rehearsal. You prepare three environments, create a real item in Development, and watch it move step by step until every stage shows the same result.",
                                     "tr":  "Bu lab bir surum provasi gibidir. Uc ortami hazirlarsin, Gelistirme'de gercek bir oge olusturursun ve her asama ayni sonucu gosterene kadar onun adim adim tasindigini izlersin."
                                 },
                       "mnemonic":  {
                                        "en":  "Create, Assign, Build, Deploy",
                                        "tr":  "Olustur, Ata, Kur, Dagit"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Using workspaces without Fabric capacity",
                                                   "Assigning the wrong workspace to a pipeline stage",
                                                   "Expecting Test and Production to contain content before the Deploy action runs"
                                               ],
                                        "tr":  [
                                                   "Fabric kapasitesi olmayan calisma alanlarini kullanmak",
                                                   "Bir pipeline asamasina yanlis calisma alanini atamak",
                                                   "Deploy calismadan once Test ve Uretim'de icerik beklemek"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "tip",
                                           "text":  {
                                                        "en":  "An X between stages means they are not yet synchronized; green checks mean the same content exists across the pipeline.",
                                                        "tr":  "Asamalar arasindaki X isareti henuz senkron olmadiklarini, yesil isaretler ise ayni icerigin pipeline boyunca bulundugunu gosterir."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Set up a complete Fabric deployment pipeline demo: create three named workspaces, assign them to pipeline stages, create a sample lakehouse in Development, deploy it to Test and Production, confirm the copied content, and clean everything up.",
                                      "tr":  "Tam bir Fabric deployment pipeline demosu kur: uc adli calisma alani olustur, bunlari pipeline asamalarina ata, Gelistirme'de ornek bir lakehouse olustur, bunu Test ve Uretim'e deploy et, kopyalanan icerigi dogrula ve sonunda her seyi temizle."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Create three workspaces named Development, Test, and Production on trial or paid Fabric capacity",
                                                    "Create a new deployment pipeline and continue with default stages",
                                                    "Assign each workspace to the matching pipeline stage and confirm the assignment",
                                                    "In the Development workspace, create a lakehouse named LabLakehouse and load sample data",
                                                    "Deploy the lakehouse first to Test and then to Production, then verify the lakehouse appears in both workspaces",
                                                    "Delete the pipeline and remove the workspaces when finished"
                                                ],
                                         "tr":  [
                                                    "Deneme veya ucretli Fabric kapasitesinde Development, Test ve Production adli uc calisma alani olustur",
                                                    "Yeni bir deployment pipeline olustur ve varsayilan asamalarla devam et",
                                                    "Her calisma alanini eslesen pipeline asamasina ata ve atamayi onayla",
                                                    "Development calisma alaninda LabLakehouse adli bir lakehouse olustur ve ornek veriyi yukle",
                                                    "Lakehouse'u once Test'e sonra Uretim'e deploy et, sonra iki calisma alaninda da gorundugunu dogrula",
                                                    "Bitince pipeline'i sil ve calisma alanlarini kaldir"
                                                ]
                                     },
                     "cli":  [
                             "Workspace names: Development, Test, Production",
                             "Pipeline action: Deployment pipelines -> New pipeline -> Create and continue",
                             "Sample content: create Lakehouse named LabLakehouse in Development and load sample data",
                             "Promotion path: Development -> Test -> Production",
                             "Cleanup: delete pipeline, then remove all three workspaces"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Three workspaces created",
                                                  "Pipeline created and stages assigned",
                                                  "LabLakehouse created in Development",
                                                  "Lakehouse deployed to Test",
                                                  "Lakehouse deployed to Production",
                                                  "Pipeline and workspaces removed after practice"
                                              ],
                                       "tr":  [
                                                  "Uc calisma alani olusturuldu",
                                                  "Pipeline olusturuldu ve asamalar atandi",
                                                  "LabLakehouse Development ortaminda olusturuldu",
                                                  "Lakehouse Test'e deploy edildi",
                                                  "Lakehouse Uretim'e deploy edildi",
                                                  "Pratikten sonra pipeline ve calisma alanlari kaldirildi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-78-1",
                         "question":  {
                                          "en":  "What item is created in the Development workspace in this lab before deployment?",
                                          "tr":  "Bu labda deploy oncesi Development calisma alaninda hangi oge olusturulur?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "A lakehouse named LabLakehouse",
                                                    "A warehouse named ProdWarehouse",
                                                    "A notebook named PipelineNotebook",
                                                    "A report named DeploymentStatus"
                                                ],
                                         "tr":  [
                                                    "LabLakehouse adli bir lakehouse",
                                                    "ProdWarehouse adli bir warehouse",
                                                    "PipelineNotebook adli bir notebook",
                                                    "DeploymentStatus adli bir rapor"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The lab uses a sample lakehouse in the Development workspace as the content to promote through the stages.",
                                             "tr":  "Lab, asamalar boyunca yukseltilecek icerik olarak Development ortamindaki ornek bir lakehouse kullanir."
                                         }
                     },
                     {
                         "id":  "q-78-2",
                         "question":  {
                                          "en":  "What indicates that all pipeline stages are synchronized after deployment?",
                                          "tr":  "Deploy sonrasi tum pipeline asamalarinin senkron oldugunu ne gosterir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Green check marks between the stages",
                                                    "A red warning banner",
                                                    "The Development workspace becoming read-only",
                                                    "The lakehouse disappearing from Test"
                                                ],
                                         "tr":  [
                                                    "Asamalar arasindaki yesil isaretler",
                                                    "Kirmizi uyari seridi",
                                                    "Development calisma alaninin salt okunur olmasi",
                                                    "Lakehouse'un Test'ten kaybolmasi"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The lab describes green checks as the sign that the same content is in sync across all stages.",
                                             "tr":  "Lab, ayni icerigin tum asamalarda senkron oldugunu gosteren isaret olarak yesil tikleri anlatir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Which three workspace names are used in the lab?",
                                         "tr":  "Labda hangi uc calisma alani adi kullanilir?"
                                     },
                               "a":  {
                                         "en":  "Development, Test, Production",
                                         "tr":  "Development, Test, Production"
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Final cleanup sequence?",
                                         "tr":  "Son temizlik sirasi?"
                                     },
                               "a":  {
                                         "en":  "Delete the deployment pipeline first, then remove the workspaces",
                                         "tr":  "Once deployment pipeline'i sil, sonra calisma alanlarini kaldir"
                                     }
                           }
                       ]
    },
    {
        "slug":  "understand-fabric-admin-model",
        "order":  79,
        "track":  {
                      "en":  "Administer a Microsoft Fabric environment",
                      "tr":  "Bir Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Understand the Fabric Admin Model",
                      "tr":  "Fabric Yonetim Modelini Anla"
                  },
        "subtitle":  {
                         "en":  "Learn the Fabric hierarchy, admin delegation tiers, and core administration tools",
                         "tr":  "Fabric hiyerarsisini, yonetici yetki katmanlarini ve temel yonetim araclarini ogren"
                     },
        "difficulty":  "Easy",
        "estimatedMinutes":  10,
        "badge":  {
                      "id":  "badge-understand-fabric-admin-model",
                      "name":  {
                                   "en":  "Admin Navigator",
                                   "tr":  "Yonetim Rehberi"
                               },
                      "emoji":  "uD83EuDDED"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/administer-fabric/2-fabric-admin-model",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Fabric scope flows from tenant to capacity, domain, workspace, and item.",
                                                   "Admin delegation follows four tiers: Fabric admin, capacity admin, domain admin, and workspace admin.",
                                                   "The admin portal, Microsoft 365 admin center, Entra ID, PowerShell, and REST APIs support different admin tasks."
                                               ],
                                        "tr":  [
                                                   "Fabric kapsami tenant'tan capacity, domain, workspace ve item seviyesine iner.",
                                                   "Yonetim yetkisi dort katmandir: Fabric admin, capacity admin, domain admin ve workspace admin.",
                                                   "Admin portal, Microsoft 365 admin center, Entra ID, PowerShell ve REST API'ler farkli yonetim gorevlerini destekler."
                                               ]
                                    },
                       "story":  {
                                     "en":  "Think of Fabric administration like managing a campus. One leader sets campus-wide rules, building leads manage their zones, and room owners manage the content inside each room.",
                                     "tr":  "Fabric yonetimini bir kampus yonetimi gibi dusun. Bir lider kampus geneli kurallari koyar, bina sorumlulari kendi alanlarini yonetir, oda sahipleri ise her odanin icindeki icerigi kontrol eder."
                                 },
                       "mnemonic":  {
                                        "en":  "Tenant, Capacity, Domain, Workspace, Item",
                                        "tr":  "Tenant, Capacity, Domain, Workspace, Item"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Assuming tenant admins should manage every workspace directly",
                                                   "Confusing governance boundaries with access control",
                                                   "Forgetting that the Fabric admin role appears as Power BI Administrator in Entra ID"
                                               ],
                                        "tr":  [
                                                   "Tenant adminlerin her workspace'i dogrudan yonetmesi gerektigini sanmak",
                                                   "Yonetisim sinirlari ile erisim kontrolunu karistirmak",
                                                   "Fabric admin rolunun Entra ID'de Power BI Administrator olarak gectigini unutmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "info",
                                           "text":  {
                                                        "en":  "Tenant admins set the platform frame; workspace admins handle day-to-day content and access decisions.",
                                                        "tr":  "Tenant adminler platform cercevesini kurar; workspace adminler ise gunluk icerik ve erisim kararlarini yonetir."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Map a new Fabric rollout for a company with multiple departments. Decide which responsibilities belong to the Fabric admin, capacity admin, domain admin, and workspace admin.",
                                      "tr":  "Birden fazla departmani olan sirket icin yeni bir Fabric kurulumu haritala. Hangi sorumluluklarin Fabric admin, capacity admin, domain admin ve workspace admine ait olduguna karar ver."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "List the five Fabric hierarchy levels in order",
                                                    "Assign a realistic owner to each admin role tier",
                                                    "Match each admin task to the correct tool such as admin portal, Entra ID, or PowerShell",
                                                    "Document which tasks stay centralized and which are delegated"
                                                ],
                                         "tr":  [
                                                    "Bes Fabric hiyerarsi seviyesini sirayla listele",
                                                    "Her admin rol katmani icin gercekci bir sorumlu ata",
                                                    "Her admin gorevini admin portal, Entra ID veya PowerShell gibi dogru araca esle",
                                                    "Hangi gorevlerin merkezi kaldigini ve hangilerinin devredildigini belgeye yaz"
                                                ]
                                     },
                     "cli":  [
                             "Hierarchy: Tenant -> Capacity -> Domain -> Workspace -> Item",
                             "Admin tiers: Fabric admin -> Capacity admin -> Domain admin -> Workspace admin",
                             "Key tools: Admin portal, Microsoft 365 admin center, Entra ID, PowerShell, REST APIs"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Hierarchy understood",
                                                  "Delegation tiers mapped",
                                                  "Admin tools matched to tasks"
                                              ],
                                       "tr":  [
                                                  "Hiyerarsi anlasildi",
                                                  "Yonetim katmanlari eslendi",
                                                  "Admin araclari gorevlere baglandi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-79-1",
                         "question":  {
                                          "en":  "Which level sits directly below the tenant in the Fabric hierarchy?",
                                          "tr":  "Fabric hiyerarsisinde tenant'in hemen altinda hangi seviye yer alir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Capacity",
                                                    "Workspace",
                                                    "Item",
                                                    "Semantic model"
                                                ],
                                         "tr":  [
                                                    "Capacity",
                                                    "Workspace",
                                                    "Item",
                                                    "Semantic model"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Capacity is the next control layer under the tenant.",
                                             "tr":  "Capacity, tenant altindaki bir sonraki kontrol katmanidir."
                                         }
                     },
                     {
                         "id":  "q-79-2",
                         "question":  {
                                          "en":  "Who handles item access and content inside a workspace day to day?",
                                          "tr":  "Bir workspace icindeki item erisimi ve icerigi gunluk olarak kim yonetir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Workspace admin",
                                                    "Capacity admin",
                                                    "Domain admin",
                                                    "Fabric admin only"
                                                ],
                                         "tr":  [
                                                    "Workspace admin",
                                                    "Capacity admin",
                                                    "Domain admin",
                                                    "Sadece Fabric admin"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Workspace admins are closest to the content and manage day-to-day access decisions.",
                                             "tr":  "Workspace adminler icerige en yakin roldur ve gunluk erisim kararlarini yonetir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Four admin tiers?",
                                         "tr":  "Dort admin katmani?"
                                     },
                               "a":  {
                                         "en":  "Fabric admin, capacity admin, domain admin, workspace admin",
                                         "tr":  "Fabric admin, capacity admin, domain admin, workspace admin"
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Fabric admin role name in Entra ID?",
                                         "tr":  "Entra ID'de Fabric admin rol adi?"
                                     },
                               "a":  {
                                         "en":  "Power BI Administrator",
                                         "tr":  "Power BI Administrator"
                                     }
                           }
                       ]
    },
    {
        "slug":  "configure-tenant-settings-delegate-admin-rights-fabric",
        "order":  80,
        "track":  {
                      "en":  "Administer a Microsoft Fabric environment",
                      "tr":  "Bir Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Configure Tenant Settings and Delegate Admin Rights",
                      "tr":  "Tenant Ayarlarini Yapilandir ve Admin Yetkileri Devret"
                  },
        "subtitle":  {
                         "en":  "Control feature rollout, organize domains, delegate settings, and assign workspaces to capacity",
                         "tr":  "Ozellik dagitimini kontrol et, domain'leri duzenle, ayarlari devret ve workspace'leri capacity'ye ata"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  12,
        "badge":  {
                      "id":  "badge-configure-tenant-settings-delegate-admin-rights-fabric",
                      "name":  {
                                   "en":  "Governance Planner",
                                   "tr":  "Yonetisim Planlayici"
                               },
                      "emoji":  "u2699uFE0F"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/administer-fabric/3-configure-tenant-settings/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Tenant settings let you enable features for everyone, selected security groups, or everyone except specific groups.",
                                                   "Domains organize governance boundaries but do not control data access by themselves.",
                                                   "Delegated settings allow domain admins to override selected tenant policies within their own domain."
                                               ],
                                        "tr":  [
                                                   "Tenant ayarlari, ozellikleri herkese, secili guvenlik gruplarina veya belirli gruplar haric herkese acmana izin verir.",
                                                   "Domain'ler yonetisim sinirlari kurar ama tek basina veri erisimini kontrol etmez.",
                                                   "Devredilen ayarlar, domain adminlerin kendi domain'lerinde secili tenant politikalarini gecersiz kilmasina izin verir."
                                               ]
                                    },
                       "story":  {
                                     "en":  "Platform governance is like city planning. The central office sets the city rules, while district leaders fine-tune local details without rewriting the entire policy book.",
                                     "tr":  "Platform yonetisimi sehir planlamasi gibidir. Merkez ofis sehir kurallarini koyar, bolge liderleri ise tum kural kitabini degistirmeden yerel detaylari ayarlar."
                                 },
                       "mnemonic":  {
                                        "en":  "Enable, Group, Delegate, Assign",
                                        "tr":  "Etkinlestir, Grupla, Devret, Ata"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Treating tenant settings as true data security controls",
                                                   "Assuming domains automatically restrict workspace access",
                                                   "Leaving development workspaces on the same production capacity without considering workload spikes"
                                               ],
                                        "tr":  [
                                                   "Tenant ayarlarini gercek veri guvenlik kontrolu sanmak",
                                                   "Domain'lerin workspace erisimini otomatik kisitladigini varsaymak",
                                                   "Gelisim workspace'lerini is yukune bakmadan ayni uretim capacity'sinde birakmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "warn",
                                           "text":  {
                                                        "en":  "Tenant settings shape the UI experience and governance rollout; item permissions and labels provide real protection.",
                                                        "tr":  "Tenant ayarlari arayuz deneyimini ve yonetisim dagitimini sekillendirir; gercek korumayi item izinleri ve etiketler saglar."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Prepare Fabric governance for Finance and Risk departments by configuring tenant settings, defining domains, delegating selected controls, and assigning production workspaces to a shared F capacity.",
                                      "tr":  "Fabric yonetisimini Finance ve Risk departmanlari icin hazirla: tenant ayarlarini yapilandir, domain'leri tanimla, secili kontrolleri devret ve uretim workspace'lerini ortak F capacity'ye ata."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Enable the core Fabric item creation setting and scope other settings by security group where needed",
                                                    "Create domains such as Finance and Risk from the admin portal",
                                                    "Assign domain admins and configure delegatable settings like Certification or default sensitivity label",
                                                    "Choose a repeatable domain assignment method such as workspace admin-based assignment",
                                                    "Assign production workspaces to a capacity and decide whether development workspaces should stay on a separate test capacity"
                                                ],
                                         "tr":  [
                                                    "Temel Fabric item olusturma ayarini ac ve diger ayarlari gerekirse guvenlik gruplarina gore kapsamlendir",
                                                    "Admin portalden Finance ve Risk gibi domain'ler olustur",
                                                    "Domain adminleri ata ve Certification ya da varsayilan sensitivity label gibi devredilebilir ayarlari yapilandir",
                                                    "Workspace admin temelli atama gibi tekrar kullanilabilir bir domain atama yontemi sec",
                                                    "Uretim workspace'lerini bir capacity'ye ata ve gelisim workspace'lerinin ayri test capacity'sinde kalip kalmayacagina karar ver"
                                                ]
                                     },
                     "cli":  [
                             "Tenant settings states: Disabled, Enabled for all, Enabled for specific groups, Enabled except specific groups",
                             "Domain purpose: governance boundary, not direct access control",
                             "Capacity planning: production on shared F capacity, development optionally on separate test capacity"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Tenant settings scoped appropriately",
                                                  "Domains created and delegated",
                                                  "Domain admins assigned",
                                                  "Workspaces mapped to capacity intentionally"
                                              ],
                                       "tr":  [
                                                  "Tenant ayarlari uygun sekilde kapsamlendirildi",
                                                  "Domain'ler olusturuldu ve devredildi",
                                                  "Domain adminleri atandi",
                                                  "Workspace'ler capacity'ye bilincli sekilde eslendi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-80-1",
                         "question":  {
                                          "en":  "What do domains organize in Fabric?",
                                          "tr":  "Fabric'te domain'ler neyi duzenler?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Governance boundaries for groups of workspaces",
                                                    "Direct item-level encryption",
                                                    "Automatic report sharing",
                                                    "Per-user Power BI licensing"
                                                ],
                                         "tr":  [
                                                    "Workspace gruplari icin yonetisim sinirlari",
                                                    "Dogrudan item seviyesinde sifreleme",
                                                    "Otomatik rapor paylasimi",
                                                    "Kullanici basi Power BI lisanslama"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Domains group workspaces for governance, but access remains controlled by workspace roles and item permissions.",
                                             "tr":  "Domain'ler yonetisim icin workspace'leri gruplar ama erisim hala workspace rolleri ve item izinleriyle kontrol edilir."
                                         }
                     },
                     {
                         "id":  "q-80-2",
                         "question":  {
                                          "en":  "Why might development workspaces stay on a separate capacity?",
                                          "tr":  "Gelisim workspace'leri neden ayri bir capacity'de tutulabilir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "To prevent experimental workloads from affecting production performance",
                                                    "Because domains cannot exist on production capacity",
                                                    "Because Fabric only allows one workspace per capacity",
                                                    "To remove the need for admin roles"
                                                ],
                                         "tr":  [
                                                    "Deneysel is yuklerinin uretim performansini etkilemesini onlemek icin",
                                                    "Cunku domain'ler uretim capacity'sinde var olamaz",
                                                    "Cunku Fabric bir capacity icin sadece bir workspace'e izin verir",
                                                    "Admin rollerine ihtiyaci kaldirmak icin"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Separating dev workloads helps protect production users from compute spikes and testing activity.",
                                             "tr":  "Gelisim islerini ayirmak, uretim kullanicilarini islem gucu sicrama ve test aktivitelerinden korur."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Do domains control access?",
                                         "tr":  "Domain'ler erisimi kontrol eder mi?"
                                     },
                               "a":  {
                                         "en":  "No. They organize governance; access stays at workspace and item level.",
                                         "tr":  "Hayir. Yonetisimi duzenler; erisim workspace ve item seviyesinde kalir."
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "One common delegated setting example?",
                                         "tr":  "Yaygin devredilen ayar ornegi?"
                                     },
                               "a":  {
                                         "en":  "Certification or default sensitivity label",
                                         "tr":  "Certification veya varsayilan sensitivity label"
                                     }
                           }
                       ]
    },
    {
        "slug":  "manage-user-access-licensing-fabric",
        "order":  81,
        "track":  {
                      "en":  "Administer a Microsoft Fabric environment",
                      "tr":  "Bir Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Manage User Access and Licensing",
                      "tr":  "Kullanici Erisimi ve Lisanslamayi Yonet"
                  },
        "subtitle":  {
                         "en":  "Choose the right license for creators and viewers, and plan sharing based on capacity size",
                         "tr":  "Uretenler ve goruntuleyiciler icin dogru lisansi sec ve paylasimi capacity boyutuna gore planla"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  10,
        "badge":  {
                      "id":  "badge-manage-user-access-licensing-fabric",
                      "name":  {
                                   "en":  "License Planner",
                                   "tr":  "Lisans Planlayici"
                               },
                      "emoji":  "uD83DuDCB3"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/administer-fabric/4-manage-user-access-licensing/",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "Fabric uses both capacity licenses and per-user licenses together.",
                                                   "Free users can create non-Power BI Fabric items on F capacity-backed workspaces.",
                                                   "The F64 threshold changes Power BI viewing economics because free users can view shared Power BI content on F64 or larger capacities."
                                               ],
                                        "tr":  [
                                                   "Fabric, capacity lisanslari ile kullanici bazli lisanslari birlikte kullanir.",
                                                   "Free kullanicilar, F capacity destekli workspace'lerde Power BI disi Fabric item'lari olusturabilir.",
                                                   "F64 esigi Power BI goruntuleme maliyetini degistirir cunku free kullanicilar F64 ve uzeri capacity'lerde paylasilan Power BI icerigini gorebilir."
                                               ]
                                    },
                       "story":  {
                                     "en":  "License planning is less about buying the most and more about matching the right pass to the right job. Builders, publishers, and viewers do not all need the same license.",
                                     "tr":  "Lisans planlama en cok lisansi almakla degil, dogru goreve dogru gecis kartini vermekle ilgilidir. Uretenler, yayimlayanlar ve izleyiciler ayni lisansa ihtiyac duymaz."
                                 },
                       "mnemonic":  {
                                        "en":  "Capacity First, User Fit Second",
                                        "tr":  "Once Capacity, Sonra Kullanici Uyum"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Buying Pro for all report viewers without checking capacity size",
                                                   "Assuming PPU creates Fabric capacity by itself",
                                                   "Forgetting that free users still need the right workspace role to view shared content"
                                               ],
                                        "tr":  [
                                                   "Capacity boyutunu kontrol etmeden tum rapor izleyicilerine Pro almak",
                                                   "PPU'nun tek basina Fabric capacity sagladigini sanmak",
                                                   "Free kullanicilarin paylasilan icerigi gormek icin dogru workspace rolune hala ihtiyac duydugunu unutmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "tip",
                                           "text":  {
                                                        "en":  "On F64 and larger capacities, many viewer scenarios no longer require Pro licenses.",
                                                        "tr":  "F64 ve daha buyuk capacity'lerde bircok izleyici senaryosu artik Pro lisans gerektirmez."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Plan licensing for a company with data engineers, report creators, and executive viewers. Use an F64 capacity and minimize unnecessary Pro licenses while keeping creation and viewing scenarios supported.",
                                      "tr":  "Veri muhendisleri, rapor uretenler ve yonetici izleyicilerden olusan bir sirket icin lisans plani yap. F64 capacity kullan ve olusturma ile goruntuleme senaryolari desteklenirken gereksiz Pro lisanslarini azalt."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "List which users create Fabric items, which create Power BI content, and which only consume content",
                                                    "Separate tenant capacity planning from per-user licensing decisions",
                                                    "Assign Pro only where report creation or required sharing scenarios justify it",
                                                    "Use security groups or role-based processes to streamline assignment and sharing"
                                                ],
                                         "tr":  [
                                                    "Hangi kullanicilarin Fabric item olusturdugunu, hangilerinin Power BI icerigi urettigini ve hangilerinin sadece tukettigini listele",
                                                    "Tenant capacity planlamasini kullanici basi lisans kararlarindan ayir",
                                                    "Pro lisansi yalnizca rapor uretimi veya gerekli paylasim senaryolari varsa ver",
                                                    "Atama ve paylasimi kolaylastirmak icin guvenlik gruplari veya rol tabanli surecler kullan"
                                                ]
                                     },
                     "cli":  [
                             "License types: Fabric Free, Power BI Pro, Premium Per User (PPU)",
                             "Capacity context: F64 or larger enables free-user viewing of shared Power BI content with viewer role",
                             "Creation rule: Power BI content creation still needs Pro or PPU"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Creators and viewers separated by need",
                                                  "F64 viewing advantage considered",
                                                  "Unnecessary Pro licenses avoided"
                                              ],
                                       "tr":  [
                                                  "Uretenler ve izleyiciler ihtiyaca gore ayrildi",
                                                  "F64 goruntuleme avantaji dikkate alindi",
                                                  "Gereksiz Pro lisanslardan kacınıldi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-81-1",
                         "question":  {
                                          "en":  "What is the most important capacity threshold for free-user Power BI viewing in Fabric?",
                                          "tr":  "Fabric'te free kullanicilarin Power BI goruntulemesinde en onemli capacity esigi nedir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "F64",
                                                    "F2",
                                                    "F8",
                                                    "PPU"
                                                ],
                                         "tr":  [
                                                    "F64",
                                                    "F2",
                                                    "F8",
                                                    "PPU"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "F64 or larger capacities allow free users with viewer access to consume shared Power BI content.",
                                             "tr":  "F64 ve daha buyuk capacity'ler, viewer erisimi olan free kullanicilarin paylasilan Power BI icerigini tuketmesine imkan verir."
                                         }
                     },
                     {
                         "id":  "q-81-2",
                         "question":  {
                                          "en":  "Which license is required to create and share Power BI reports in workspaces?",
                                          "tr":  "Workspace'lerde Power BI raporu olusturup paylasmak icin hangi lisans gerekir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Pro or PPU",
                                                    "Free only",
                                                    "Capacity license only",
                                                    "No license at all"
                                                ],
                                         "tr":  [
                                                    "Pro veya PPU",
                                                    "Sadece Free",
                                                    "Sadece capacity lisansi",
                                                    "Hic lisans gerekmez"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Report creation and sharing in workspaces requires a Power BI creation-capable license such as Pro or PPU.",
                                             "tr":  "Workspace'lerde rapor olusturma ve paylasim, Pro veya PPU gibi Power BI icerik uretim lisansi gerektirir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Can PPU alone provision Fabric capacity?",
                                         "tr":  "PPU tek basina Fabric capacity saglar mi?"
                                     },
                               "a":  {
                                         "en":  "No. PPU adds user features but does not provision Fabric capacity.",
                                         "tr":  "Hayir. PPU kullanici ozellikleri ekler ama Fabric capacity saglamaz."
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "Free user plus F capacity is enough for what type of creation?",
                                         "tr":  "Free kullanici ve F capacity birlikte hangi tur olusturma icin yeterlidir?"
                                     },
                               "a":  {
                                         "en":  "Non-Power BI Fabric items such as lakehouses, notebooks, warehouses, and pipelines",
                                         "tr":  "Lakehouse, notebook, warehouse ve pipeline gibi Power BI disi Fabric item'lari"
                                     }
                           }
                       ]
    },
    {
        "slug":  "monitor-govern-fabric-environment",
        "order":  82,
        "track":  {
                      "en":  "Administer a Microsoft Fabric environment",
                      "tr":  "Bir Microsoft Fabric ortamını yonet"
                  },
        "title":  {
                      "en":  "Monitor and Govern Your Fabric Environment",
                      "tr":  "Fabric Ortamini Izle ve Yonet"
                  },
        "subtitle":  {
                         "en":  "Use monitoring hub, adoption reports, capacity metrics, audit logs, and governance tools to keep Fabric healthy",
                         "tr":  "Fabric'i saglikli tutmak icin monitoring hub, benimsenme raporlari, capacity metrikleri, audit loglari ve yonetisim araclarini kullan"
                     },
        "difficulty":  "Medium",
        "estimatedMinutes":  12,
        "badge":  {
                      "id":  "badge-monitor-govern-fabric-environment",
                      "name":  {
                                   "en":  "Platform Steward",
                                   "tr":  "Platform Sorumlusu"
                               },
                      "emoji":  "uD83DuDCCA"
                  },
        "source":  {
                       "url":  "https://learn.microsoft.com/en-us/training/modules/administer-fabric/5-monitor-govern",
                       "label":  "Microsoft Learn"
                   },
        "lesson":  {
                       "quickMap":  {
                                        "en":  [
                                                   "The monitoring hub shows operational job status and failures across the tenant, filtered by item, user, location, and time.",
                                                   "The admin monitoring workspace and Capacity Metrics app reveal broader usage and compute consumption trends.",
                                                   "Audit logs, endorsement, and the OneLake catalog Govern tab support compliance and trusted-content governance."
                                               ],
                                        "tr":  [
                                                   "Monitoring hub, tenant genelinde item, kullanici, konum ve zamana gore filtrelenebilen operasyonel is durumu ve hata bilgisi gosterir.",
                                                   "Admin monitoring workspace ve Capacity Metrics app, daha genis kullanim ve islem gucu tuketim trendlerini gosterir.",
                                                   "Audit loglari, endorsement ve OneLake catalog Govern sekmesi uyum ile guvenilir icerik yonetisimini destekler."
                                               ]
                                    },
                       "story":  {
                                     "en":  "After go-live, admin work becomes less about setup and more about seeing what changed, what failed, what costs more, and what users can trust. This module is the admin control tower.",
                                     "tr":  "Canliya cikistan sonra admin isi kurulumdan cok neyin degistigini, neyin hata verdigini, neyin daha pahali oldugunu ve kullanicilarin neye guvenebilecegini gormekle ilgilidir. Bu modul admin kontrol kulesidir."
                                 },
                       "mnemonic":  {
                                        "en":  "Watch, Measure, Audit, Certify",
                                        "tr":  "Izle, Olc, Denetle, Sertifikala"
                                    },
                       "pitfalls":  {
                                        "en":  [
                                                   "Using only the monitoring hub and ignoring strategic adoption trends",
                                                   "Letting non-production capacities run continuously when they could be paused",
                                                   "Assuming promoted or certified items happen automatically without governance ownership"
                                               ],
                                        "tr":  [
                                                   "Sadece monitoring hub kullanip stratejik benimsenme trendlerini gormezden gelmek",
                                                   "Duraklatilabilecek uretim disi capacity'leri surekli calisir halde birakmak",
                                                   "Promoted veya certified item'larin yonetisim sahipligi olmadan otomatik olustugunu sanmak"
                                               ]
                                    },
                       "visuals":  [
                                       {
                                           "kind":  "callout",
                                           "tone":  "tip",
                                           "text":  {
                                                        "en":  "Use the monitoring hub for operational troubleshooting and the admin monitoring workspace for long-term adoption insight; they answer different questions.",
                                                        "tr":  "Monitoring hub'u operasyonel sorun giderme icin, admin monitoring workspace'i ise uzun vadeli benimsenme icin kullan; farkli sorulari yanitlarlar."
                                                    }
                                       }
                                   ]
                   },
        "task":  {
                     "scenario":  {
                                      "en":  "Run Fabric after go-live for a multi-department organization. Diagnose job failures, measure adoption, watch capacity pressure, confirm audit evidence, and improve trust signals for shared data assets.",
                                      "tr":  "Birden fazla departmani olan kurulus icin canliya cikis sonrasi Fabric'i islet. Is hatalarini tespit et, benimsenmeyi olc, capacity baskisini izle, audit kanitini dogrula ve paylasilan veri varliklarinin guven sinyallerini iyilestir."
                                  },
                     "portalSteps":  {
                                         "en":  [
                                                    "Open the monitoring hub and filter failed jobs by workspace, user, or item type when troubleshooting",
                                                    "Review the admin monitoring workspace Feature Usage and Adoption report for tenant-wide behavior trends",
                                                    "Use the Capacity Metrics app to watch CU usage and decide whether to scale up, scale out, or pause non-production capacity",
                                                    "Search audit logs for sensitive operations such as exports, sharing, or deletes",
                                                    "Use certification, promotion, and the OneLake catalog Govern tab to improve trust and label coverage"
                                                ],
                                         "tr":  [
                                                    "Sorun giderirken monitoring hub'u ac ve hata veren isleri workspace, kullanici veya item turune gore filtrele",
                                                    "Tenant genelindeki davranis trendleri icin admin monitoring workspace icindeki Feature Usage and Adoption raporunu incele",
                                                    "CU kullanimini izlemek ve scale up, scale out ya da uretim disi capacity duraklatma karari vermek icin Capacity Metrics app kullan",
                                                    "Export, paylasim veya silme gibi hassas islemler icin audit loglarini ara",
                                                    "Guveni ve etiket kapsamini artirmak icin certification, promotion ve OneLake catalog Govern sekmesini kullan"
                                                ]
                                     },
                     "cli":  [
                             "Operational view: Monitoring hub",
                             "Adoption view: Admin monitoring workspace -> Feature Usage and Adoption",
                             "Capacity view: Microsoft Fabric Capacity Metrics app (CU usage)",
                             "Compliance view: Audit logs",
                             "Governance view: Endorsement + OneLake catalog Govern tab"
                             ],
                     "checklist":  {
                                       "en":  [
                                                  "Failures triaged",
                                                  "Adoption trends reviewed",
                                                  "Capacity usage assessed",
                                                  "Audit evidence confirmed",
                                                  "Governance actions identified"
                                              ],
                                       "tr":  [
                                                  "Hatalar incelendi",
                                                  "Benimsenme trendleri gozden gecirildi",
                                                  "Capacity kullanimi degerlendirildi",
                                                  "Audit kaniti onaylandi",
                                                  "Yonetisim aksiyonlari belirlendi"
                                              ]
                                   }
                 },
        "quiz":  [
                     {
                         "id":  "q-82-1",
                         "question":  {
                                          "en":  "Which tool is best for finding failed Fabric jobs in a specific workspace today?",
                                          "tr":  "Bugun belirli bir workspace'teki hata veren Fabric islerini bulmak icin en uygun arac hangisidir?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Monitoring hub",
                                                    "Microsoft 365 admin center",
                                                    "Git integration settings",
                                                    "Lakehouse explorer"
                                                ],
                                         "tr":  [
                                                    "Monitoring hub",
                                                    "Microsoft 365 admin center",
                                                    "Git integration settings",
                                                    "Lakehouse explorer"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "The monitoring hub is the operational troubleshooting surface for job status and failures.",
                                             "tr":  "Monitoring hub, is durumu ve hatalari icin operasyonel sorun giderme yuzeyidir."
                                         }
                     },
                     {
                         "id":  "q-82-2",
                         "question":  {
                                          "en":  "Which artifact helps identify trusted content for users across the tenant?",
                                          "tr":  "Tenant genelinde kullanicilar icin guvenilir icerigi belirlemeye hangi ogeler yardim eder?"
                                      },
                         "options":  {
                                         "en":  [
                                                    "Promoted and Certified endorsements",
                                                    "Only deleted-item history",
                                                    "Only workspace names",
                                                    "Only capacity SKU size"
                                                ],
                                         "tr":  [
                                                    "Promoted ve Certified endorsement'lari",
                                                    "Sadece silinen oge gecmisi",
                                                    "Sadece workspace adlari",
                                                    "Sadece capacity SKU boyutu"
                                                ]
                                     },
                         "correctIndex":  0,
                         "explanation":  {
                                             "en":  "Endorsement is the trust signal that helps users discover quality, approved assets.",
                                             "tr":  "Endorsement, kullanicilarin kaliteli ve onayli varliklari bulmasina yardim eden guven sinyalidir."
                                         }
                     }
                 ],
        "flashcards":  [
                           {
                               "q":  {
                                         "en":  "Monitoring hub vs admin monitoring workspace?",
                                         "tr":  "Monitoring hub ile admin monitoring workspace farki?"
                                     },
                               "a":  {
                                         "en":  "Monitoring hub is operational and reactive; admin monitoring workspace is strategic and trend-focused.",
                                         "tr":  "Monitoring hub operasyonel ve reaktiftir; admin monitoring workspace ise stratejik ve trend odaklidir."
                                     }
                           },
                           {
                               "q":  {
                                         "en":  "What happens when capacity is exceeded?",
                                         "tr":  "Capacity asilirsa ne olur?"
                                     },
                               "a":  {
                                         "en":  "Fabric throttles background jobs to protect the platform.",
                                         "tr":  "Fabric platformu korumak icin arka plan islerini yavaslatir."
                                     }
                           }
                       ]
    }
];

export function getModuleBySlug(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function totalModules() {
  return modules.length;
}