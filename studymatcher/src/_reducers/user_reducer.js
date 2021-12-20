import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER
} from '../_actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log("action.payload:", action.payload);
      return { ...state, isLogged: true, loginState: action.payload }
    case LOGOUT_USER:
      return { ...state, isLogged: false, loginState: null }
    case REGISTER_USER:
      return { ...state, isLogged: false, register: action.payload }
    default:
      return state;
  }
}