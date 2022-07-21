import "./styles/landingStyles.css";
import { useNavigate } from 'react-router-dom'
import AnimatedPage from "../../components/animator";
import { Helmet } from "react-helmet";

export default function Landing() {
    const navigate = useNavigate()
    return (
        <AnimatedPage>
            <>
                <Helmet>
                    <title>WELCOME TO HiAM</title>
                </Helmet>
                <div className="landing-container">
                    {/* <div className="bg-animations">
                        <div className="circle"></div>
                        <div className="circle1"></div>
                        <div className="square"></div>
                        <div className="square2"></div>
                    </div> */}
                    <div className="logo">
                        <img src={require("../../imgs/Logo-tagged.png")} alt="logo-img" />
                    </div>
                    <div className="quotes">
                        <h1> </h1>
                    </div>
                    <AnimatedPage>
                    <div className="btns">
                        <button onClick={() => navigate('/login')} className="login-btn">LOGIN</button>
                        <button onClick={() => navigate('/signup')} className="signup-btn">SIGNUP</button>
                    </div>
                    </AnimatedPage>
                </div>
            </>
        </AnimatedPage>
    )

}

