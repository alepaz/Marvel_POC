import { FETCH_STORIES, FETCH_STORY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STORIES:
      return action.payload;
    case FETCH_STORY:
        return action.payload;
    default:
      return state;
  }
}
