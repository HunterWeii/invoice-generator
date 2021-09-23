import React, { useState, useRef } from 'react'
import Logo from 'assets/support.svg';
import './Auth.scss';
import { useAuthContext, ABC } from './AuthProvider'

export default function Auth() {
  const inputRef: any = useRef();

  const { setAuthenticate }: any = useAuthContext();

  const [ hasError, setError ] = useState(false);  

  const onLogin = () => {
    const key = inputRef.current.value;
    const isAuth = key === ABC;

    if (isAuth) {
      localStorage.setItem('risetron_auth', key);
      setAuthenticate(isAuth);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="auth-container">
      <img className="auth-container-img" src={Logo} alt="support" />
      <div className="auth-input-container">
        <input 
          className="auth-input-container_input" 
          type="text"
          placeholder="Please Enter Secret Key"
          ref={inputRef}
        />
        {
          hasError && (
            <div className="auth-input-container_error">
              <span>Woops, wrong secret key !</span>
            </div>
          )
        }
        <button className="auth-input-container_button" onClick={onLogin}>Login</button>
      </div>
    </div>
  )
}
