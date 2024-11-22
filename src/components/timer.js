import React, { useEffect, useState } from 'react';

const Timer = ({ timeLimit, onTimeout, timerActive, key }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timerActive) {
      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timerInterval);
            onTimeout();
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval); // Cleanup on component unmount or key change
    }
  }, [timerActive, onTimeout]);

  useEffect(() => {
    setTimeLeft(timeLimit); // Reset the timer to the initial time limit when a new question is loaded
  }, [timeLimit, key]);

  return (
    <div className="timer-display">
      {timeLeft} {/* Display the remaining time */}
    </div>
  );
};

export default Timer;
