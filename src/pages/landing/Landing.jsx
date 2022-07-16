import "./styles/landingStyles.css";
import { useNavigate } from 'react-router-dom'
import AnimatedPage from "../../components/animator";

export default function Landing() {
    const navigate = useNavigate()
    return (
        <AnimatedPage>
        <>
            <div className="landing-container">
                <div className="bg-animations">
                    <div className="circle"></div>
                    <div className="circle1"></div>
                    <div className="square"></div>
                    <div className="square2"></div>
                </div>
                <div className="logo">
                    <img src={require("../../imgs/Logo-tagged.png")} alt="logo-img" />
                </div>
                <div className="quotes">
                    <h1> </h1>
                </div>
                <div className="btns">
                        <button onClick={()=> navigate('/login')} className="login-btn">LOGIN</button>
                        <button onClick={()=> navigate('/signup')} className="signup-btn">SIGNUP</button>
                </div>
            </div>
        </>
    </AnimatedPage>
    )

}

