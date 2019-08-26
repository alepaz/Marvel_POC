import {
    FETCH_HEROES,
    FETCH_HEROE
  } from "./types";

export const fetchHeroes = offset => async dispatch => {
    
    const res = await axios.get("/api/characters/", {
      params: {
        offset
      }
    });
    dispatch({ type: FETCH_HEROES, payload: res.data });
};