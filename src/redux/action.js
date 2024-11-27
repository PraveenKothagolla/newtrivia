
export const setPrizeMoney = (amount) => ({
  type: 'SET_PRIZE_MONEY',
  payload: amount,
});

export const setQuestion = (question) => ({
  type: 'SET_QUESTION',
  payload: question,
});

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION',
});


export const gameOver = () => ({
  type: 'GAME_OVER',
});
export const resetGame = () => ({
  type: 'RESET_GAME',
});

export const updateQuestionIndex = () => ({
  type: 'UPDATE_QUESTION_INDEX'
});

export const newGame = () => ({
  type: 'NEW_GAME',
});



// Sounding Part


// Action types
export const SET_SOUND = 'SET_SOUND';
export const TOGGLE_MUTE = 'TOGGLE_MUTE';

// Action to set the current sound
export const setSound = (sound) => ({
  type: SET_SOUND,
  payload: sound,
  
});

// Action to toggle mute state
export const toggleMute = () => ({
  type: TOGGLE_MUTE,
});

