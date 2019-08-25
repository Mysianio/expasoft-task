import React, {useState} from 'react';
import '../styles/news.css';
import logo from '../img/news.png';
import NewsBigScreen from './NewsBigScreen.js';

const NewsElement = (props) =>{

  const [display, setDisplay] = useState(false);

  const openBigScreen = () =>{
      document.body.style.overflow = 'hidden';
      setDisplay('true')
    }

  return(
    <React.Fragment>
      <NewsBigScreen display={display} setDisplay={setDisplay} name={props.name} text={props.text} date={props.date}/>
      <div className='newsElement' onClick={openBigScreen}>
        <h2>{props.name}</h2>
        <img src={logo} />
        <p> {props.description}</p>
      </div>
    </React.Fragment>
  )
}

export default NewsElement
