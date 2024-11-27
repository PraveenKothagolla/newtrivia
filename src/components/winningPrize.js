import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styling/winningPrize.css";
import Confetti from 'react-confetti';
import { useSelector, useDispatch } from 'react-redux';
import { setPrizeMoney,resetGame } from "../redux/action.js";
import SoundButton from './soundButton.js';

const WinningPrize = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButton, setShowButton] = useState(true); // Set initial state to true for the button
  const navigate = useNavigate();
  const prize = useSelector((state) => state.prize);
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    // Show confetti immediately after the page loads
    setShowConfetti(true);
  }, []);

  const goToLandingPage = () => {
    dispatch(resetGame()); // Use new reset action
    navigate('/'); // Navigate to the landing page
};

  return (
    <div className="winning-prize-container">
      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} />}
      <div>
        <SoundButton page="winning"/>
        </div>
      <div className="content">
        <h1 className="congratulations-text">Congratulations!</h1>
        <p className="you-won-text">You have won:</p>
        <h2 className="prize-amount">{`₹${prize}`}</h2>
        {showButton && (
          <button className="start-btn" onClick={goToLandingPage}>Start Game</button>
        )}
      </div>
    </div>
  );
};

export default WinningPrize;
