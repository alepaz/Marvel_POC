import axios from 'axios';
import {
    FETCH_HEROES,
    FETCH_HEROE,
    FETCH_COMICS,
    FETCH_COMIC,
    FETCH_STORIES,
    FETCH_STORY
  } from "./types";

export const fetchHeroes = offset => async dispatch => {
    
    const res = await axios.get("/api/characters/", {
      params: {
        offset
      }
    });
    dispatch({ type: FETCH_HEROES, payload: res.data });
};

export const fetchComics = offset => async dispatch => {
    
  const res = await axios.get("/api/comics/", {
    params: {
      offset
    }
  });
  dispatch({ type: FETCH_COMICS, payload: res.data });
};

export const fetchStories = offset => async dispatch => {
    
  const res = await axios.get("/api/stories/", {
    params: {
      offset
    }
  });
  dispatch({ type: FETCH_STORIES, payload: res.data });
};