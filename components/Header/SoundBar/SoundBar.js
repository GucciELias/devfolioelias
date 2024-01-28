import React, { useState, useRef, useEffect } from 'react'; // Importation de useEffect
import audio1 from "../../../public/sounds/pflayton.mp3";
import audio2 from "../../../public/sounds/gravityfalls.mp3";
import audio3 from "../../../public/sounds/pokemon.mp3";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSources = [audio1, audio2, audio3]; // Ajout de la troisième musique

  const togglePlayPause = () => {
    if (!isPlaying) {
      const randomAudioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
      soundBarEl.current.src = randomAudioSource;
      soundBarEl.current.play();
    } else {
      soundBarEl.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    document.querySelector(".soundBars").onclick = function () {
      this.classList.toggle("play");
    };
  }, []);

  return (
      <div
          className="soundBars link absolute top-3 right-14 flex items-center justify-center"
          onClick={togglePlayPause}
      >

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <audio ref={soundBarEl} loop preload="auto" />
      </div>
  );
};

export default SoundBar;
