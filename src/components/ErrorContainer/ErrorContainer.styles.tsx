import styled from 'styled-components';

export const StyledErrorContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  color: ${(props) => props.theme.textPrimary};
`;

export const StyledErrorHeader = styled.h1`
  text-align: center;
`;

export const StyledErrorDescription = styled.p`
  text-align: center;
`;

export const StyledIcon = styled.div`
  width: 64px;
  font-size: 64px;
  align-self: center;
`;
