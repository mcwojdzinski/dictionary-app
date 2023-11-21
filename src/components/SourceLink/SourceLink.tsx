import styled from 'styled-components';

const StyledSourceLink = styled.a``;

export const SourceLink = ({ link, text }: { link: string; text: string }) => {
  return <StyledSourceLink href={link}>{text}</StyledSourceLink>;
};
