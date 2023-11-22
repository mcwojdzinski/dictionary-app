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

export const StyledWordContentSource = styled.p`
  color: var(--757575, #757575);
  font-feature-settings:
    'clig' off,
    'liga' off;

  /* Body S - Mono */
  font-family: Inconsolata;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  align-items: center;
`;

export const StyledWordContentSubHead = styled.h3`
  color: #757575;
  font-feature-settings:
    'clig' off,
    'liga' off;

  /* Heading S - Mono */
  font-family: Inconsolata;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 15px;
`;

export const StyledSynonyms = styled.h3`
  color: var(--757575, #757575);
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & span {
    color: #a445ed;
  }
`;

export const StyledListElement = styled.li`
  color: ${(props) => props.theme.textPrimary};
  padding: 7px 0;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  text-align: justify;

  &::before {
    content: '•';
    margin-right: 5px;
    color: #8f19e8;
    font-weight: bold;
    display: inline-block;
  }
`;
