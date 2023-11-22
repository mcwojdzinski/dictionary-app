import { ErrorResponse } from '../../types.ts';
import AudioButton from '../AudioButton/AudioButton.tsx';
import { ErrorContainer } from '../ErrorContainer/ErrorContainer.tsx';
import { SourceLink } from '../SourceLink/SourceLink.tsx';
import { WordContentInterface } from './WordContent.interface.ts';
import {
  StyledWordContentHead,
  StyledWordContentPron,
  StyledWordContentHeaderWrapper,
  StyledWordContentDivider,
  StyledWordContentSource,
  StyledWordContentSubHead,
  StyledListElement,
  StyledList,
  StyledSynonyms,
} from './WordContent.styles.tsx';

interface Phonetic {
  audio: string;
  text: string;
}

const WordContent = ({
  response,
  responseError,
  responseErrorBody,
}: {
  response: WordContentInterface | undefined | null;
  responseError: boolean;
  responseErrorBody: ErrorResponse | undefined | null;
}) => {
  const findPhonetics = (phonetics: Phonetic[] | undefined): [string, string] | null => {
    if (!phonetics || phonetics.length === 0) return null;
    for (const phonetic of phonetics) {
      if (phonetic.audio && phonetic.audio !== '' && phonetic.text && phonetic.text !== '') {
        return [phonetic.audio, phonetic.text];
      }
    }
    return null;
  };

  const checkForPartOfSpeech = (partOfSpeech: string): boolean | undefined => {
    return response?.meanings.map((meaning) => meaning.partOfSpeech === partOfSpeech).includes(true);
  };

  return (
    <div>
      {responseError ? (
        <ErrorContainer errorResponse={responseErrorBody} />
      ) : response ? (
        <>
          <StyledWordContentHeaderWrapper>
            <div>
              <StyledWordContentHead>{response?.word}</StyledWordContentHead>
              <StyledWordContentPron>
                {findPhonetics(response.phonetics) ? findPhonetics(response.phonetics)![1] : 'No data'}
              </StyledWordContentPron>
            </div>
            <AudioButton
              audio={findPhonetics(response.phonetics) ? findPhonetics(response!.phonetics)![0] : 'No data'}
            />
          </StyledWordContentHeaderWrapper>
          {checkForPartOfSpeech('noun') && (
            <>
              <StyledWordContentDivider>noun</StyledWordContentDivider>
              <StyledWordContentSubHead>Meaning</StyledWordContentSubHead>
              <StyledList>
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'noun') {
                    return meaning.definitions.map((definition) => {
                      return <StyledListElement>{definition.definition}</StyledListElement>;
                    });
                  }
                })}
              </StyledList>
              <StyledSynonyms>
                Synonyms:
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'noun') {
                    if (meaning.synonyms.length === 0) return <span>No data</span>;
                    return meaning.synonyms.map((synonym) => {
                      return <span>{synonym}, </span>;
                    });
                  }
                })}
              </StyledSynonyms>
            </>
          )}
          {checkForPartOfSpeech('interjection') && (
            <>
              <StyledWordContentDivider>Interjection</StyledWordContentDivider>
              <StyledWordContentSubHead>Meaning</StyledWordContentSubHead>
              <StyledList>
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'interjection') {
                    return meaning.definitions.map((definition) => {
                      return <StyledListElement>{definition.definition}</StyledListElement>;
                    });
                  }
                })}
              </StyledList>
              <StyledSynonyms>
                Synonyms:
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'interjection') {
                    if (meaning.synonyms.length === 0) return <span>No data</span>;
                    return meaning.synonyms.map((synonym) => {
                      return <span>{synonym}, </span>;
                    });
                  }
                })}
              </StyledSynonyms>
            </>
          )}
          {checkForPartOfSpeech('verb') && (
            <>
              <StyledWordContentDivider>verb</StyledWordContentDivider>
              <StyledWordContentSubHead>Meaning</StyledWordContentSubHead>
              <StyledList>
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'verb') {
                    return meaning.definitions.map((definition) => {
                      return <StyledListElement>{definition.definition}</StyledListElement>;
                    });
                  }
                })}
              </StyledList>
              <StyledSynonyms>
                Synonyms:
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'verb') {
                    if (meaning.synonyms.length === 0) return <span>No data</span>;
                    return meaning.synonyms.map((synonym) => {
                      return <span>{synonym}, </span>;
                    });
                  }
                })}
              </StyledSynonyms>
            </>
          )}
          {checkForPartOfSpeech('adjective') && (
            <>
              <StyledWordContentDivider>Adjective</StyledWordContentDivider>
              <StyledWordContentSubHead>Meaning</StyledWordContentSubHead>
              <StyledList>
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'adjective') {
                    return meaning.definitions.map((definition) => {
                      return <StyledListElement>{definition.definition}</StyledListElement>;
                    });
                  }
                })}
              </StyledList>
              <StyledSynonyms>
                Synonyms:
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'adjective') {
                    if (meaning.synonyms.length === 0) return <span>No data</span>;
                    return meaning.synonyms.map((synonym) => {
                      return <span>{synonym}, </span>;
                    });
                  }
                })}
              </StyledSynonyms>
            </>
          )}
          {checkForPartOfSpeech('adverb') && (
            <>
              <StyledWordContentDivider>Adverb</StyledWordContentDivider>
              <StyledWordContentSubHead>Meaning</StyledWordContentSubHead>
              <StyledList style={{ listStyle: 'none' }}>
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'adverb') {
                    return meaning.definitions.map((definition) => {
                      return <StyledListElement>{definition.definition}</StyledListElement>;
                    });
                  }
                })}
              </StyledList>
              <StyledSynonyms>
                Synonyms:
                {response.meanings.map((meaning) => {
                  if (meaning.partOfSpeech === 'adverb') {
                    if (meaning.synonyms.length === 0) return <span>No data</span>;
                    return meaning.synonyms.map((synonym) => {
                      return <span>{synonym}, </span>;
                    });
                  }
                })}
              </StyledSynonyms>
            </>
          )}
          <StyledWordContentDivider></StyledWordContentDivider>
          <StyledWordContentSource>
            Source: <SourceLink link={response.sourceUrls[0]} text={response.sourceUrls[0]} />
          </StyledWordContentSource>
        </>
      ) : null}
    </div>
  );
};

export default WordContent;
