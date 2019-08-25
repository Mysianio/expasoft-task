import React, {useState, useEffect } from 'react';
import '../styles/login.css';
import { Redirect } from 'react-router';
import logo from '../img/logo.png';

const Login = () =>{
  const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('userLogged')));
  const [loginError, setLoginError] = useState('')

  useEffect(() =>{
    document.title = 'Login';
  })

  let loginInput = React.createRef()
  let passInput = React.createRef()

  const onLogin = () =>{
    let login = loginInput.current.value.trim();
    let password = passInput.current.value.trim();
    if (login !== '' && password !== '') {
      if(login === 'admin' && password === 'admin'){
        localStorage.setItem('userLogged', true)
        setLogged(true)
      }else{
        setLoginError('Wrong data')
      }
    }
  }
  if (logged){
    return <Redirect to='/profile'/>
  }
  return(
    <div className='loginWrap'>
      <div className='login'>
          <img src={logo} alt='logo'/>
          <h3>Login</h3>
        <div className='dataInput'>
          <input placeholder='Login' ref={loginInput}/>
          <input placeholder='Password' type='password' ref={passInput}/>
        </div>
        <span className='wrongLoginData'> {loginError} &#160;</span>
        <input className='logInput' type='submit' value='Login' onClick={onLogin}/>
      </div>
    </div>
  )
}
export default Login
