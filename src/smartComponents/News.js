import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../dumbComponents/Header.js';
import NewsElement from '../dumbComponents/NewsElement.js';

const News = (props) =>{

  useEffect(() =>{
    document.title = 'News'
  })

  let newsList = props.news.map((item, index) =>{
    return <NewsElement key={item.id} name={item.name} description={item.description} text={item.text} date={item.date}/>
  })

  return(
    <React.Fragment>
      <Header/>
      <div className='newsBlock'>
        {newsList}
      </div>
    </React.Fragment>
  )
}

export default connect(
  state =>({
    news: state.newsData
  }),
  dispatch =>({

  })
)(News)
