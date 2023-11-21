import styled from 'styled-components';

const SVG = styled.svg`
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const IconPlay = () => {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </SVG>
  );
};

export default IconPlay;
