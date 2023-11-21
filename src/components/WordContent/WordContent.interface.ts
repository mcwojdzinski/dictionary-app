
export type WordContentInterface = {
  word: string;
  phonetics?: Phonetic[];
  phonetic?: string;
  meanings: Meaning[];
  license: License2;
  sourceUrls: string[];
}

export type Phonetic ={
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}

export type License =  {
  name: string;
  url: string;
}

export type Meaning =  {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export type Definition =  {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

export interface License2 {
  name: string;
  url: string;
}
