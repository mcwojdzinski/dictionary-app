import styled from 'styled-components';
import IconPreview from '../Icons/IconPreview';

const StyledSourceLink = styled.a`
  color: ${(props) => props.theme.textPrimary};
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-family: Inconsolata;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  display: inline-flex;
  column-gap: 5px;
  padding-left: 10px;
`;

export const SourceLink = ({ link, text }: { link: string; text: string }) => {
  return (
    <StyledSourceLink href={link}>
      {text} <IconPreview />
    </StyledSourceLink>
  );
};
