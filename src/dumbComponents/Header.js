import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/header.css';

const Header = () =>{

  useEffect(()=>{
    window.addEventListener('scroll', toggleHeader)

    return window.removeEventListener('scroll', toggleHeader())
  })

  const toggleHeader = () =>{
    const header = document.querySelector('header');
    const scrolled = header.offsetHeight;
    header.classList.toggle('scrolled', window.pageYOffset >= scrolled+50);
  }

  return(
    <React.Fragment>
      <header>
        <Link to='/'>
          <h3><span>e</span>xpasoft<span>*</span></h3>
        </Link>
        <ul>
          <Link to='/'>
            <button><li>Main page</li></button>
          </Link>
          <Link to='/news'>
            <button><li>News</li></button>
          </Link>
          <Link to='/profile'>
            <button><li>Profile</li></button>
          </Link>
        </ul>
      </header>
      <div className='margin'></div>
    </React.Fragment>
  )
}

export default Header
