import fetchedUserData from '../constants/userData.js';

export default function userData(state = fetchedUserData, action){
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return action.data
      break;
    default:
      return state;
  }
}
