import React from 'react'
import { Helmet } from 'react-helmet';
import AnimatedPage from '../../components/animator';
import "./styles/pageNotFoundStyles.css";

export default function PageNotFound() {
  return (
    <AnimatedPage>
      <>
        <Helmet>
          <title>Page Not Found!</title>
        </Helmet>
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
