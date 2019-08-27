import { FETCH_COMICS, FETCH_COMIC } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMICS:
      return action.payload;
    case FETCH_COMIC:
        return action.payload;
    default:
      return state;
  }
}
