import React, {useEffect} from 'react';
import { Redirect } from 'react-router';
import Header from '../dumbComponents/Header.js';
import '../styles/profile.css';
import logo from '../img/profilePic.png';
import {connect} from 'react-redux'

const Profile = (props) =>{

  useEffect(() =>{
    document.title = 'Profile'
  })
  if(JSON.parse(localStorage.getItem('userLogged')) === null || JSON.parse(localStorage.getItem('userLogged')) === false){
    return <Redirect to='login'/>
  }
  return(
    <React.Fragment>
      <Header/>
      <div className='userProfileWrap'>
        <div className='userProfile'>
          <div className='userProfilePhotoAndSettings'>
            <img src={logo} alt='profilePhoto'/>
            <input type='submit' value='Settings'/>
          </div>
          <div className='userProfileMain'>
            <h4>{props.user.name} {props.user.surname}</h4>
            <span>{props.user.age} years</span>
            <div className='userProfileInfo'>
              <span>City: <strong>{props.user.city}</strong> </span>
              <span>Email: <strong>{props.user.email}</strong></span>
              <span>Phone number: <strong>{props.user.phone}</strong></span>
              <span>Git hub: <strong><a href='#'>{props.user.github}</a></strong></span>
              <span>Web site: <strong><a href='#'>{props.user.site}</a></strong></span>
            </div>
            <h5>Description</h5>
            <p>{props.user.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connect(
  state =>({
    user: state.userData
  }),
  dispatch =>({

  })
)(Profile)
