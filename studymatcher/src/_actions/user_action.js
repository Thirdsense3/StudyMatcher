import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, SEARCH_STUDY, CREATE_STUDY } from './types';

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
    type: LOGIN_USER,
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

export function searchStudy(Name, Category, Leader) {
  var url = apiUrl + '/study';
  var check = false;
  if (Name && Name.length > 0) {
    url += '?name=' + Name;
    check = true;
  }

  if (Category && Category.length > 0) {
    if (check) {
      url += '&category=';
    } else {
      url += '?category=';
    }
    url += Category;
    check = true;
  }

  if (Leader && Leader.length > 0) {
    if (check) {
      url += '&leader=';
    } else {
      url += '?leader=';
    }
    url += Leader;
  }

  const request = axios.get(url).then(response => response.data);

  return {
    type: SEARCH_STUDY,
    payload: request
  }
}

export function createStudyPage(StudyName, Text, LeaderId, Level, Type) {
  const request = axios.post(apiUrl + '/members/createStudyPage', {
    name: StudyName,
    text: Text,
    leader_id: LeaderId,
    level: Level,
    type: Type
  }).then(response => response.data);

  return {
    type: CREATE_STUDY,
    payload: request
  }
}