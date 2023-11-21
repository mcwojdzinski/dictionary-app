import { ErrorResponse } from '../../types.ts';
import AudioButton from '../AudioButton/AudioButton.tsx';
import { ErrorContainer } from '../ErrorContainer/ErrorContainer.tsx';
import { WordContentInterface } from './WordContent.interface.ts';
import {
  StyledWordContentHead,
  StyledWordContentPron,
  StyledWordContentHeaderWrapper,
  StyledWordContentDivider,
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
          {response.meanings.map((meaning) => {
            if (meaning.partOfSpeech === 'noun') {
              return meaning.definitions.map((definition) => {
                console.log(definition.definition);
                return <h1>{definition.definition}</h1>;
              });
            }
          })}
          <StyledWordContentDivider>verb</StyledWordContentDivider>
        </>
      ) : null}
    </div>
  );
};

export default WordContent;
