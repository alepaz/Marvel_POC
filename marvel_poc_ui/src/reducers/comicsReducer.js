import {
  FETCH_COMIC,
  FETCH_COMICS_FAILURE,
  FETCH_COMICS_SUCCESS,
  FETCH_COMICS,
} from '../actions/types';

const initialState = {
  isLoading: false,
  errorMsg: '',
  data: { results: [] },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMICS:
      return { ...state, isLoading: true };
    case FETCH_COMICS_FAILURE:
      return { ...initialState, errorMsg: action.payload };
    case FETCH_COMICS_SUCCESS:
      return { ...initialState, isLoading: false, data: action.payload };
    case FETCH_COMIC:
      return action.payload;
    default:
      return state;
  }
}
