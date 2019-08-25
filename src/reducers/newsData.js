import news from '../constants/news.js'
export default function newsData(state = news, action){
  switch (action.type) {
    case 'FETCH_NEWS_DATA':
      return action.data
      break;
    default:
      return state;
  }
}
