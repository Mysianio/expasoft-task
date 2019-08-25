import React, {useEffect} from 'react';
import Header from './Header.js';
import '../styles/main.css';
import aboutUsPic1 from '../img/aboutUsPic1.png';
import aboutUsPic2 from '../img/aboutUsPic2.png';
import aboutUsPic3 from '../img/aboutUsPic3.png';
import aboutUsPic4 from '../img/aboutUsPic4.png';
import officePic1 from '../img/officePic1.jpg';
import officePic2 from '../img/officePic2.jpg';
import officePic3 from '../img/officePic3.jpg';
import locationPic from '../img/locationPicture.jpg';

const Main = () =>{
  useEffect(() =>{
    document.title = 'Main'
  })
  return(
    <React.Fragment>
      <Header/>
      <div className='mainPageWrap'>
        <div className='mainPage'>
          <h1>Lorem ipsum</h1>
          <h3>dolor sit amet, consectetur adipiscing</h3>
        </div>
      </div>
      <section className='aboutPageWrap'>
        <h3>About us</h3>
        <div className='aboutPage'>
          <div className='aboutItem'>
            <h4>Ut enim ad minim</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse</p>
            <img src={aboutUsPic1} alt=''/>
          </div>
          <div className='aboutItem'>
            <h4>Velit esse cillum dolore </h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse</p>
            <img src={aboutUsPic2} alt=''/>
          </div>
          <div className='aboutItem'>
            <h4>Pariatur</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse</p>
            <img src={aboutUsPic3} alt=''/>
          </div>
          <div className='aboutItem'>
            <h4>Enim</h4>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse</p>
            <img src={aboutUsPic4} alt=''/>
          </div>
        </div>
      </section>
      <section className='officePageWrap'>
          <h3>Our office</h3>
        <div className='officePage'>
          <img src={officePic1} alt='Picture of office'/>
          <img src={officePic2} alt='Picture of office'/>
          <img src={officePic3} alt='Picture of office'/>
        </div>
        <p>Novosibirsk, Hmeleva street, 9</p>
        <img src={locationPic} alt='Location'/>
      </section>
    </React.Fragment>
  )
}

export default Main
