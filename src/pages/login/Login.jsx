import React from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/animator';
import "./styles/loginStyles.css";

export default function Login() {
  const navigate = useNavigate()

  function OnSubmit(){
    navigate('/Myportfolio')
  }

  return (
    <AnimatedPage>
    <>
    <Helmet>
      <title>LOGIN</title>
    </Helmet>
      <div className="login-container">
        {/* <div className="bg-animations">
          <div className="circle"></div>
          <div className="circle1"></div>
          <div className="square"></div>
          <div className="square2"></div>
        </div> */}
        <div className="maintext">
          <h1>LOGIN TO <neon>HiAM</neon></h1>
        </div>
        <form onSubmit={OnSubmit}>
          <div className="input-field">
            <label htmlFor='usernamefield'>USERNAME</label>
            <input id='usernamefield' type="text" required placeholder='Enter Your Email or Username'/>
          </div>
          <div className="input-field">
            <label htmlFor='passwordfield'>PASSWORD </label>
            <input id='passwordfield' type="password" required placeholder='Enter Your Password'/>
          </div>
          <br />
          <div className="btn">
            <button type='Submit' className="login-btn">LOGIN</button>
          </div>

        </form>
      </div>
    </>
  </AnimatedPage>
  )
}
