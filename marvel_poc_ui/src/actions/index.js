import axios from 'axios';
import {
  FETCH_COMICS,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES,
  FETCH_STORIES,
} from './types';

export const fetchHeroes = offset => async dispatch => {
  dispatch({ type: FETCH_HEROES });
  try {
    const res = await axios.get('/api/characters/', {
      params: {
        offset,
      },
    });
    dispatch({ type: FETCH_HEROES_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: FETCH_HEROES_FAILURE, payload: err.message });
  }
};

export const fetchComics = offset => async dispatch => {
  const res = await axios.get('/api/comics/', {
    params: {
      offset,
    },
  });
  dispatch({ type: FETCH_COMICS, payload: res.data });
};

export const fetchStories = offset => async dispatch => {
  const res = await axios.get('/api/stories/', {
    params: {
      offset,
    },
  });
  dispatch({ type: FETCH_STORIES, payload: res.data });
};
