import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER
} from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("action.payload:", action.payload);
      return { ...state, logged: true, loggedInfo: action.payload }
    case LOGOUT_USER:
      return { ...state, logged: false, loggedInfo: null }
    case REGISTER_USER:
      return { ...state, logged: false, loggedInfo: null, register: action.payload }
    default:
      return { ...state, logged: false, loggedInfo: null }
  }
}