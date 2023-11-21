import { useState } from 'react';
import IconPlay from '../Icons/IconPlay';

const AudioButton = ({ audio }: { audio: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioFile = new Audio(audio);

  const togglePlay = () => {
    if (isPlaying) {
      audioFile.pause();
    } else {
      audioFile.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div onClick={togglePlay}>
      <IconPlay />
    </div>
  );
};

export default AudioButton;
