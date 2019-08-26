import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';

export default combineReducers({
    //Reducers are assign to keys
    heroes: heroesReducer
});
