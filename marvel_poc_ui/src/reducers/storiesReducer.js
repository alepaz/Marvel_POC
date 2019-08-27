import {
  FETCH_STORIES_FAILURE,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES,
  FETCH_STORY,
} from '../actions/types';

const initialState = {
  isLoading: false,
  errorMsg: '',
  data: { results: [] },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STORIES:
      return { ...state, isLoading: true };
    case FETCH_STORIES_FAILURE:
      return { ...initialState, errorMsg: action.payload };
    case FETCH_STORIES_SUCCESS:
      return { ...initialState, isLoading: false, data: action.payload };
    case FETCH_STORY:
      return action.payload;
    default:
      return state;
  }
}
