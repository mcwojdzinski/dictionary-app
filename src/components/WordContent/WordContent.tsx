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
} from './WordContent.styles.tsx';

const WordContent = ({
  response,
  responseError,
  responseErrorBody,
}: {
  response: WordContentInterface | undefined | null;
  responseError: boolean;
  responseErrorBody: ErrorResponse | undefined | null;
}) => {
  const findPhonetics = (phonetics: any[]): [string, string] | null => {
    for (const phonetic of phonetics) {
      if (phonetic.audio && phonetic.audio !== '' && phonetic.text && phonetic.text !== '') {
        return [phonetic.audio, phonetic.text];
      }
    }

    return null;
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
              <StyledWordContentPron>{findPhonetics(response.phonetics)[1]}</StyledWordContentPron>
            </div>
            <AudioButton audio={findPhonetics(response.phonetics)[0]} />
          </StyledWordContentHeaderWrapper>
          <StyledWordContentDivider>noun</StyledWordContentDivider>
          <h6>Meaning</h6>
          <ul>
            {response.meanings.map((meaning) => {
              if (meaning.partOfSpeech === 'noun') {
                return meaning.definitions.map((definition) => {
                  return <li>{definition.definition}</li>;
                });
              }
            })}
          </ul>

          <h3>
            Synonyms:
            {response.meanings.map((meaning) => {
              if (meaning.partOfSpeech === 'noun') {
                return meaning.synonyms.map((synonym) => {
                  return <span>{synonym}</span>;
                });
              }
            })}
          </h3>
          <StyledWordContentDivider>verb</StyledWordContentDivider>
          {response.meanings.map((meaning) => {
            if (meaning.partOfSpeech === 'verb') {
              return meaning.definitions.map((definition) => {
                return <h1>{definition.definition}</h1>;
              });
            }
          })}
          <StyledWordContentDivider>adverb</StyledWordContentDivider>
          <StyledWordContentDivider></StyledWordContentDivider>
          <StyledWordContentSource>
            Source: <SourceLink link={response.sourceUrls[0]} text={response.sourceUrls[0]}></SourceLink>
          </StyledWordContentSource>
        </>
      ) : null}
    </div>
  );
};

export default WordContent;
