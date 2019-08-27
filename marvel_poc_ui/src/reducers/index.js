import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import comicsReducer from './comicsReducer';
import storiesReducer from './storiesReducer';

export default combineReducers({
    //Reducers are assign to keys
    heroes: heroesReducer,
    comics: comicsReducer,
    stories: storiesReducer
});
