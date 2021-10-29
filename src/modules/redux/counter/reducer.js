import {
  INCREMENT,
  DECREMENT
} from './types';

const INITIAL_STATE = {
  counter: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
};