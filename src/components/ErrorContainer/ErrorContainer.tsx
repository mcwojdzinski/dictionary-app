import { ErrorResponse } from '../../types';
import { StyledErrorContainer, StyledIcon, StyledErrorDescription, StyledErrorHeader } from './ErrorContainer.styles';

export const ErrorContainer = ({ errorResponse }: { errorResponse: ErrorResponse | null | undefined }) => {
  if (!errorResponse) {
    return null;
  }

  return (
    <StyledErrorContainer>
      <StyledIcon>🙁</StyledIcon>
      <StyledErrorHeader>{errorResponse.title}</StyledErrorHeader>
      <StyledErrorDescription>
        {errorResponse.message} {errorResponse.resolution}
      </StyledErrorDescription>
    </StyledErrorContainer>
  );
};
