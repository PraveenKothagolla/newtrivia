import randomQuestions from "../data/questions";
const initialState = {
    prize: 0,
    questionsData: [], // Populate questions on initial state
    currentQuestionIndex: 0,
    gameOver: false,
    currentQuestion: null
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
                questionsData: randomQuestions()
            };
        
        default:
            return state;
    }
};

export default rootReducer