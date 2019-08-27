import {
  FETCH_HEROE,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES,
} from '../actions/types';

const initialState = {
  isLoading: false,
  errorMsg: '',
  data: { results: [] },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_HEROES:
      return { ...state, isLoading: true };
    case FETCH_HEROES_FAILURE:
      return { ...initialState, errorMsg: action.payload };
    case FETCH_HEROES_SUCCESS:
      return { ...initialState, isLoading: false, data: action.payload };
    case FETCH_HEROE:
      return action.payload;
    default:
      return state;
  }
}
