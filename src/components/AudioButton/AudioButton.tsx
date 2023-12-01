import { useState } from 'react';
import IconPlay from '../Icons/IconPlay';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const AudioButton = ({ audio }: { audio: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioFile = new Audio(audio);

  const togglePlay = () => {
    if (isPlaying) {
      audioFile.pause();
    } else {
      audioFile.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <Button aria-label="Play ponetic audio" onClick={togglePlay}>
      <IconPlay />
    </Button>
  );
};

export default AudioButton;
