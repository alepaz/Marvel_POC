import { FETCH_HEROES, FETCH_HEROE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HEROES:
      return action.payload;
    case FETCH_HEROE:
        return action.payload;
    default:
      return state;
  }
}
