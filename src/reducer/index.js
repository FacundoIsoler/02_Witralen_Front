import { combineReducers } from 'redux';
import userReducer from './loginReducer.js';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
