import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/animator';
import "./styles/signupStyles.css";

export default function Signup() {
  const navigate = useNavigate()

  function OnSubmit(){
    navigate('/Myportfolio')
  }

  return (
    <AnimatedPage>
    <>
    <Helmet>
      <title>SIGNUP</title>
    </Helmet>
      <div className="signup-container">
        {/* <div className="bg-animations">
          <div className="circle"></div>
          <div className="circle1"></div>
          <div className="square"></div>
          <div className="square2"></div>
        </div> */}
        <div className="maintext">
          <h1>SIGNUP TO <neon>HiAM</neon></h1>
        </div>
        <form onSubmit={OnSubmit}>
          <div className="input-field">
            <label htmlFor='fnamefield'>FIRST NAME</label>
            <input id='fnamefield' type="text" required placeholder='Enter Your First Name'/>
          </div>
          <div className="input-field">
            <label htmlFor='lnamefield'>LAST NAME</label>
            <input id='lnamefield' type="text" required placeholder='Enter Your Last Name'/>
          </div>
          <div className="input-field">
            <label htmlFor='emailfield'>EMAIL</label>
            <input id='emailfield' type="email" required placeholder='Enter Your Email'/>
          </div>
          <div className="input-field">
            <label htmlFor='passwordfield'>PASSWORD </label>
            <input id='passwordfield' type="password" required placeholder='Enter Your Password'/>
          </div>
          <div className="input-field">
            <label htmlFor='conformpasswordfield'>CONFORM PASSWORD </label>
            <input id='conformpasswordfield' type="password" required placeholder='Enter Password Again'/>
          </div>
          <br />
          <div className="btn">
            <button type='Submit' className="login-btn">SIGNUP</button>
          </div>

        </form>
      </div>
    </>
  </AnimatedPage>
  )
}
