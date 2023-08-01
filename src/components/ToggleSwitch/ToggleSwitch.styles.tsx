import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: ${(props) => props.theme.switchBg};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:hover {
    background: ${(props) => props.theme.switchBg};
  }

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: ${(props) => props.theme.switchBg};

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
