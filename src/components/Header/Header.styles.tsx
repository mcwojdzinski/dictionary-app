import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 768px;
  }
`;

export const HeaderSettings = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderDivider = styled.div`
  width: 1px;
  height: 32px;
  margin: 0px 15px;
  background-color: ${(props) => props.theme.divider};
`;
