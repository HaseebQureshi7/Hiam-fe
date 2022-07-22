import "./styles/homeStyles.css"
import AnimatedPage from "../../components/animator"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigation = useNavigate();
    return (
        <AnimatedPage>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <div className="black-bg">
                <div className="home-container">
                    <div className="home-navbar">
                        <div className="home-title-text">
                            <h1><span>HiAM</span></h1>
                        </div>
                        <div className="home-options">
                            {/* <i className="far fa-bell fa-xl"></i> */}
                            {/* <i className="far fa-user fa-xl"></i> */}
                            <img onClick={() => navigation('/Myportfolio')} src={require("../../imgs/DP.jpg")} alt="user-profile" />
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search People" />
                        <i className="far fa-user fa-xl"></i>
                    </div>
                    <AnimatedPage>
                        <div className="people-like-you-container">
                            <div className="people-like-you-title-text">
                                <h3>PEOPLE LIKE YOU</h3>
                            </div>
                            <div className="people-tab">
                                <div className="person-dp">
                                    <img src={require("../../imgs/aquib.jpg")} alt="user-profile-picture" />
                                </div>
                                <h4>AQUIB BHAT</h4>
                                <h4>FRONTEND DEVELOPER</h4>
                                <h4>5 YEARS</h4>
                                <i className="far fa-heart fa-xl"></i>
                            </div>
                            <div className="people-tab">
                                <div className="person-dp">
                                    <img src={require("../../imgs/aaliya.jpg")} alt="user-profile-picture" />
                                </div>
                                <h4>ALIYA QADRI</h4>
                                <h4>FULL STACK DEVELOPER</h4>
                                <h4>2 YEARS</h4>
                                <i className="far fa-heart fa-xl"></i>
                            </div>
                            <div className="people-tab">
                                <div className="person-dp">
                                    <img src={require("../../imgs/hiba.jpg")} alt="user-profile-picture" />
                                </div>
                                <h4>SYED HIBA</h4>
                                <h4>AUTOMATION TESTER</h4>
                                <h4>1 YEARS</h4>
                                <i className="far fa-heart fa-xl"></i>
                            </div>
                            <div className="people-tab">
                                <div className="person-dp">
                                    <img src={require("../../imgs/mehreen.jpg")} alt="user-profile-picture" />
                                </div>
                                <h4>MEHREEN KHAN</h4>
                                <h4>UI/UX DESIGNER</h4>
                                <h4>1 YEARS</h4>
                                <i className="far fa-heart fa-xl"></i>
                            </div>
                        </div>
                    </AnimatedPage>
                </div>
            </div>
        </AnimatedPage>
    )
}
