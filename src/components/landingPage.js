import React, { useCallback } from 'react';
import "../styling/landingPage.css"; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Import particles-bg
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  // Function to handle button click and navigate to the /game page
  const startGame = () => {
    navigate('/game');  // Navigate to the /game route
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            resize: true,
          },
          particles: {
            color: { value: "#c4b5fd" },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 70,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
      
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="title">TRIVIA TREASURE</h1>
          <p className="description">
            Welcome to trivia treasure, the ultimate trivia game where you get a chance to become a millionaire! 
            Test your knowledge across various categories and win exciting prizes.
          </p>
          <div className="rules">
            <h2 className="rules-title">Game Rules</h2>
            <p>
              Welcome to our free online version of the legendary game show "Kaun Banega Crorepati". <br /><br />
              Test your knowledge and nerves as you take on 16 thrilling questions. With just 40 seconds to answer each question, the pressure is on! You'll be presented with four options (A, B, C, D) for each question, and making the right choice is crucial to moving forward in the game. As you climb higher, the questions become more challenging, offering an electrifying experience that keeps you on the edge of your seat. <br /><br />
              We have also included four powerful lifelines to assist you on your quest for the grand prize. The "Audience Poll" lets you tap into the wisdom of the masses, gaining valuable insights from the virtual audience's votes. "Phone a Friend" allows you to seek help from a trusted confidant, increasing your chances of finding the right answer. Feeling daring? The "Fifty-Fifty" lifeline eliminates two incorrect options, improving your odds. And for those game-changing moments, the "Flip the Question" lifeline lets you trade the current question for a new one. These lifelines are your key to success as you progress through the rounds and inch closer to becoming the next Crorepati!
            </p>
          </div>

          <div>
            <button className="start-button" onClick={startGame}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
