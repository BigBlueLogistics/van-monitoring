import { useEffect, useRef, useState } from 'react';
import { Howl, HowlOptions } from 'howler';
import { VolumeOffRounded, VolumeUpRounded } from '@mui/icons-material';
import MDButton from '@/components/atoms/MDButton';
import { TAudioPlayer } from './types';

function AudioPlayer({ autoplay, sx, ...rest }: TAudioPlayer) {
  const soundRef = useRef<Howl | null>(null);

  const [isPlaying, setPlay] = useState(autoplay ?? false);

  const pause = () => {
    if (soundRef.current?.playing()) {
      soundRef.current.pause();
    }
  };

  const play = () => {
    if (!soundRef.current?.playing()) {
      soundRef.current?.play();
    }
  };

  const onToggleSound = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    setPlay((prev) => !prev);
  };

  useEffect(() => {
    if (!soundRef.current) {
      soundRef.current = new Howl({ ...rest, autoplay });
    }
  }, [rest, autoplay]);

  return (
    <MDButton onClick={onToggleSound} variant="text" size="large" sx={sx}>
      {isPlaying ? (
        <VolumeUpRounded fontSize="inherit" scale={4} />
      ) : (
        <VolumeOffRounded fontSize="inherit" />
      )}
    </MDButton>
  );
}

export default AudioPlayer;
