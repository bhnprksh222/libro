import React from 'react';

import InputField from '../SharedComponents/InputField/InputField';
import { ReactComponent as LoginIllustration } from '../../assets/login-illustration.svg';
// import { ReactComponent as GoogleLogin } from '../../assets/google-icon.svg';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <p className="login-content--title">Login</p>
        <LoginIllustration className="login-content--illustration" />
      </div>
      <div className="login-input">
        <form className="login-input--form">
          <InputField
            key="email"
            type="email" 
            id="email" 
            name="email" 
            placeholder="example@example.com"
          />
          <InputField
            key="password"
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter the password"
          />
          <button type="submit" className="login-input--form__submitbtn">
            Login
          </button>
        </form>
        {/* <p className="login-input--or">OR</p> */}
        {/* <button className="login-input--google">
          <GoogleLogin className="login-input--google-btn"/>
        </button> */}
        {/* 
          //! NEED TO ADD A LINK  
        */}
        <p className="login-input--signup">Are you new to Libro? Sign up here</p>
      </div>
    </div>
  )
}

export default Login;
