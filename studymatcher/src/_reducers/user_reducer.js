import {
  LOGIN_USER,
  REGISTER_USER,
  SEARCH_STUDY,
  CREATE_STUDY
} from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload }
    case REGISTER_USER:
      return { ...state, register: action.payload }
    case SEARCH_STUDY:
      return { ...state, payload: action.payload }
    case CREATE_STUDY:
      return { ...state, createstudy: action.payload }
    default:
      return state;
  }
}