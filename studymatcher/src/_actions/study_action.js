import axios from 'axios';
import { SEARCH_STUDY, CREATE_STUDY } from './types';

export const apiUrl = 'http://localhost:8080';

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
  const request = axios.post(apiUrl + '/createstudy', {
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