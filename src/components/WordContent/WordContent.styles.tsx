import styled from 'styled-components';

export const StyledWordContentHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledWordContentHead = styled.h1`
  color: ${(props) => props.theme.textPrimary};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledWordContentPron = styled.p`
  color: var(--A445ED, #a445ed);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledWordContentDivider = styled.div`
  color: ${(props) => props.theme.textPrimary};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin-left: 23px;
    background-color: #3a3a3a;
  }
`;

export const StyledWordContentSource = styled.p``;
