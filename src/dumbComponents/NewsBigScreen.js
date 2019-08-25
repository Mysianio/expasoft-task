import React from 'react';

const NewsBigScreen = (props) =>{

  const closeBigScreen = () =>{
      props.setDisplay(false)
      document.body.style.overflowY = 'scroll'
  }
  if(props.display){
    return(
    <div className='newsBigScreenWrap'>
      <div className='blackBackground'>
      </div>
      <div className='newsBigScreen'>
        <input type='submit' value='&#9668;'onClick={closeBigScreen}/>
        <span>{props.date}</span>
        <div className='newsBigScreenInfo'>
          <h2>{props.name}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  )}else{
    return(
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default NewsBigScreen
