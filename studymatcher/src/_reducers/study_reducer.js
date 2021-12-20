import {
  SEARCH_STUDY,
  CREATE_STUDY
} from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_STUDY:
      return { ...state, payload: action.payload }
    case CREATE_STUDY:
      return { ...state, createstudy: action.payload }
    default:
      return state;
  }
}