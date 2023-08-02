import styled from 'styled-components';

export const SearchWrapper = styled.div`
  margin: 25px 0;
  width: 768px;
  height: 64px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgSecondary};
  position: relative;
  border-radius: 16px;
`;

export const Input = styled.input<{ isInputEmpty: boolean }>`
  box-sizing: border-box;
  height: 100%;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 20px;
  position: relative;
  font-size: 20px;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 700;
  ::placeholder {
    color: ${(props) => props.theme.textPrimary};
    opacity: 0.25;
  }

  &:active,
  &:focus {
    border-radius: 16px;
    border: 1px solid ${(props) => props.theme.accentColorSecondary};
    outline: none;
  }

  ${({ isInputEmpty }) =>
    isInputEmpty &&
    `
    border-radius: 16px;
    border: 1px solid red;
    
    &:active,
  &:focus {
    border-radius: 16px;
    border: 1px solid #ff5252;
    outline: none;
  }
  `}
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.warning};
  padding: 5px 0;
`;
