import React from 'react'
import AnimatedPage from '../../components/animator';
import "./styles/pageNotFoundStyles.css";

export default function PageNotFound() {
  return (
    <AnimatedPage>
    <>
      <div className="container">
        <div className="bg-animations">
          <div className="circle"></div>
          <div className="circle1"></div>
          <div className="square"></div>
          <div className="square2"></div>
        </div>
        <div className="maintext">
          <h1>PAGE NOT FOUND</h1>
        </div>
      </div>
    </>
  </AnimatedPage>
  )
}
