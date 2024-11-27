import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiSolidVolumeFull, BiVolumeMute } from 'react-icons/bi';
import theme from "../assets/theme.mp3";
import clock from "../assets/clock.mp3";
import Voicy_Confetti from "../assets/Voicy_Confetti.mp3"

// import { Howl, Howler } from 'howler'; // Make sure Howler is imported


const SOUND_FILES = {
  landing: theme,
  trivia: clock,
  winning:Voicy_Confetti // Add your winning sound file
};
const SoundButton = ({page}) => {
  const dispatch = useDispatch();
   const { currentSound, isMuted } = useSelector(state => state); // Access Redux state
  
  // // Define Howl instance for playing sound
  // let soundInstance = null;

  // useEffect(() => {
  //   // If currentSound is set, create a new Howl instance
  //   if (currentSound) {
  //     soundInstance = new Howl({
  //       src: [currentSound],
  //       volume: isMuted ? 0 : 1, // Adjust volume based on mute state
  //       loop: true, // If you want it to loop
  //     });
      
  //     soundInstance.play();
  //   }

  //   return () => {
  //     if (soundInstance) {
  //       soundInstance.stop(); // Stop sound on component unmount
  //     }
  //   };
  // }, [currentSound, isMuted]); // Listen for changes in sound or mute state


  const [audio] = useState(new Audio());

  useEffect(() => {
    audio.src = SOUND_FILES[page];
    audio.loop = true;

    if (!isMuted) {
      audio.play().catch(error => console.error('Audio play failed:', error));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [page, isMuted]);

 
  // Handle mute toggle
  const toggleMute = () => {
    dispatch({ type: 'TOGGLE_MUTE' });
  };

  return (
    <button onClick={toggleMute} className="sound-controls">
      {isMuted ? <BiVolumeMute size={30} /> : <BiSolidVolumeFull size={30} />}
    </button>
  );
};

export default SoundButton;
