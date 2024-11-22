import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sampleSize, shuffle } from 'lodash';
import { setQuestion, setAnswer, nextQuestion, gameOver } from '../redux/action';
import randomQuestions from '../data/questions';
import '../styling/trivia.css';
import Timer from './timer'; // Import Timer component
import { useNavigate } from 'react-router-dom';

const Trivia = () => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => state.currentQuestionIndex);
  const prize = useSelector((state) => state.prize);
  const gameOverState = useSelector((state) => state.gameOver);
  const navigate = useNavigate();

  
    
    // Dispatch an action to set game questions in Redux state
  
 

  // Local states
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timerKey, setTimerKey] = useState(Date.now());
  const [timerActive, setTimerActive] = useState(true);
  const [answerStatus, setAnswerStatus] = useState(null); // Track the answer's status

  const questionSet = React.useMemo(() => randomQuestions(), []);
  // const questionSet = randomQuestions();
  const currentQuestion = questionSet[currentQuestionIndex];
  
  console.log(questionSet)

  useEffect(() => {
    if (currentQuestion) {
      dispatch(setQuestion(currentQuestion));
      setTimerActive(true);
      setTimerKey(Date.now());
      setSelectedAnswer(null); // Reset selected answer when a new question loads
      setAnswerStatus(null); // Reset answer status when a new question loads
    }
  }, [dispatch, currentQuestion]);

  const handleAnswerClick = (answer) => 
    {
      
      console.log(answer)
        // const correct = answer[id].correct ||false;
        // console.log(correct)
        
    setSelectedAnswer(answer);
    // console.log(answer.correct)
    setTimerActive(false);
     
    // Check if the answer is correct or incorrect
    if (answer.correct) {
      setAnswerStatus('correct'); // Set answer as correct
     
      setTimeout(() => {
        dispatch(nextQuestion());
        setTimerActive(true);
        setAnswerStatus(null); // Reset the status for the next question
      }, 1000); // Delay to show green box for correct answer
    }

    else {
      setAnswerStatus('incorrect'); // Set answer as incorrect
      setTimeout(() => {
        dispatch(gameOver());
      }, 1000); // Delay to show red box for incorrect answer
    }
  };

  const handleTimeout = () => {
    dispatch(gameOver());

   };

  if (gameOverState) {

    navigate('/Winning-prize');
  }

  if (!currentQuestion) return <p>No more questions!</p>;

  return (
    <div className="trivia-container">
      <div className="timer-container">
        <Timer key={timerKey} timeLimit={40} onTimeout={handleTimeout} timerActive={timerActive} />
      </div>

      <div className="question-box">
        <h2>{currentQuestion.question}</h2>
      </div>

      <div className="answers-container">
        {currentQuestion.answers.map((answer, index) => (
          <div
            key={index}
            className={`answer-box ${
              selectedAnswer === answer
                ? answer.correct
                  ? 'correct' // Apply correct class for green
                  : 'incorrect' // Apply incorrect class for red
                : ''
            }`}
            onClick={(e) => handleAnswerClick(answer)}
          >
            {answer.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;