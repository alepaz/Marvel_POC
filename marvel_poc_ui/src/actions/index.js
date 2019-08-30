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
import comicServices from '../services/comicServices';
import storyServices from '../services/storyServices';

export const fetchHeroes = (
  { offset, filter, filterBy, orderBy } = { offset: 0 }
) => async dispatch => {
  dispatch({ type: FETCH_HEROES });
  try {
    let characters;
    if (filterBy && filter) {
      if (filterBy === 'name')
        characters = await characterServices.getCharacterById(filter);
      else {
        const params = { offset, filterBy, filter, orderBy };
        characters = await characterServices.getCharacters(params);
      }
    } else {
      const params = { offset, orderBy };
      characters = await characterServices.getCharacters(params);
    }
    dispatch({ type: FETCH_HEROES_SUCCESS, payload: characters.data });
  } catch (err) {
    dispatch({ type: FETCH_HEROES_FAILURE, payload: err.message });
  }
};

export const fetchComics = offset => async dispatch => {
  dispatch({ type: FETCH_COMICS });
  try {
    const comics = await comicServices.getComics({ offset });
    dispatch({ type: FETCH_COMICS_SUCCESS, payload: comics.data });
  } catch (err) {
    dispatch({ type: FETCH_COMICS_FAILURE, payload: err.message });
  }
};

export const fetchStories = offset => async dispatch => {
  dispatch({ type: FETCH_STORIES });
  try {
    const stories = await storyServices.getStories({ offset });
    dispatch({ type: FETCH_STORIES_SUCCESS, payload: stories.data });
  } catch (err) {
    dispatch({ type: FETCH_STORIES_FAILURE, payload: err.message });
  }
};
