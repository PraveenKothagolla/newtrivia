import {Howl, Howler } from "howler";
import randomQuestions from "../data/questions";
const initialState = {
    prize: 0,
    questionsData: [], // Populate questions on initial state
    currentQuestionIndex: 0,
    gameOver: false,
    currentQuestion: null,
    // isMuted:false
   
    currentSound: null,  // Track current sound
    isMuted: false,      // Track mute state
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION': // Fixed action type
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                prize: state.currentQuestionIndex <=5 
                    ? state.prize + 1000 
                    : state.prize * 2
            };
        
        case 'GAME_OVER':
            return {
                ...state,
                gameOver: true // Changed from isGameOver
            };
        
        case 'SET_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload
            };
        
       
        
        case 'RESET_GAME':
            return {
                ...initialState,
                isMuted:state.isMuted=false,
                questionsData: randomQuestions()
            };


// sounding part
case 'SET_SOUND':
      return {
        ...state,
        currentSound: action.payload,  // Set current sound file path
      };
    case 'TOGGLE_MUTE':
      return {
        ...state,
        isMuted: !state.isMuted,  // Toggle mute state
      };

        default:
            return state;
    }
};

export default rootReducer