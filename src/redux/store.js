// store.js
import { createStore } from 'redux';
import quizReducer from './reducers'; // Import the quiz reducer

const store = createStore(
  quizReducer // Pass the quizReducer to create the store
);

export default store;
