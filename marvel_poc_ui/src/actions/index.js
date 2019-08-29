import axios from 'axios';
import {
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES,
  FETCH_STORIES_FAILURE,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES,
} from './types';
import characterServices from '../services/characterServices';

export const fetchHeroes = (offset = 0) => async dispatch => {
  dispatch({ type: FETCH_HEROES });
  try {
    const characters = await characterServices.getCharacters(offset); 
    dispatch({ type: FETCH_HEROES_SUCCESS, payload: characters.data });
  } catch (err) {
    dispatch({ type: FETCH_HEROES_FAILURE, payload: err.message });
  }
};

export const fetchComics = offset => async dispatch => {
  dispatch({ type: FETCH_COMICS });
  try {
    const res = await axios.get('/api/comics/', {
      params: {
        offset,
      },
    });
    dispatch({ type: FETCH_COMICS_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: FETCH_COMICS_FAILURE, payload: err.message });
  }
};

export const fetchStories = offset => async dispatch => {
  dispatch({ type: FETCH_STORIES });
  try {
    const res = await axios.get('/api/stories/', {
      params: {
        offset,
      },
    });

    dispatch({ type: FETCH_STORIES_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: FETCH_STORIES_FAILURE, payload: err.message });
  }
};
