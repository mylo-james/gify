// TODO: Import the `RECEIVE_GIFS` constant
import { RECEIVE_GIFS } from '../actions/gifActions';

const gifsReducer = (state = { gifs: [] }, action) => {
  switch (action.type) {
    case RECEIVE_GIFS: {
      return {
        ...state,
        gifs: action.gifs,
      };
    }
    default:
      return state;
  }

  // TODO: Return the GIFs from the action object if the action type is `RECEIVE_GIFS`
  // TODO: Return the previous state by default
};

export default gifsReducer;
