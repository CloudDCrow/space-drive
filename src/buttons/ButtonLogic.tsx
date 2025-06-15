import { useRef } from "react";

const ButtonLogic = () => {
  const audioRef = useRef(new Audio("/sounds/selection_song.wav"));
  audioRef.current.loop = true;
  let isMuted = true;

  const handlePlay = () => {
    if (isMuted === true) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      isMuted = false;
    } else {
        audioRef.current.pause();
        isMuted = true;
    }
  };

  return (
    <button id='muteButton'onClick={handlePlay}>
      Play Song
    </button>
  );
};

export default ButtonLogic;