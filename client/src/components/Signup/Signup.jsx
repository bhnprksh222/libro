import React from 'react';

import InputField from '../SharedComponents/InputField/InputField';
import { ReactComponent as SignupIllustration } from '../../assets/signup-illustration.svg';
// import { ReactComponent as Googlesignup } from '../../assets/google-icon.svg';
import './signup.scss';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-content">
        <p className="signup-content--title">Sign up</p>
        <SignupIllustration className="signup-content--illustration" />
      </div>
      <div className="signup-input">
        <form className="signup-input--form">
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
          <InputField
            key="password"
            type="password" 
            id="password" 
            name="password" 
            placeholder="Confirm the password"
          />
          <button type="submit" className="signup-input--form__submitbtn">
            Sign up
          </button>
        </form>
        {/* <p className="signup-input--or">OR</p> */}
        {/* <button className="signup-input--google">
          <Googlesignup className="signup-input--google-btn"/>
        </button> */}
        {/* 
          //! NEED TO ADD A LINK  
        */}
        <p className="signup-input--signup">Already a member? Login here</p>
      </div>
    </div>
  )
}

export default Signup
