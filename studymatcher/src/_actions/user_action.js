import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from './types';

export const apiUrl = 'http://localhost:8080';

export function loginUser(Nickname, Password) {
  const request = axios.post(apiUrl + '/members/login', {
    nickname: Nickname,
    password: Password
  }).then(response => response.data);
  
  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: {success: true}
  }
}

export function registerUser(Name, Nickname, Password, City, Gu) {
  const request = axios.post(apiUrl + '/members/join', {
    name: Name,
    nickname: Nickname,
    password: Password,
    location: {city: City, gu: Gu}
  }).then(response => response.data);

  return {
    type: REGISTER_USER,
    payload: request
  }
}