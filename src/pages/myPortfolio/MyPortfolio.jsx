import "./styles/myPortfolioStyles.css"
import AnimatedPage from "../../components/animator"
import { Helmet } from "react-helmet"
import SkillsTab from "./skillsTab/SkillsTab"
import ProjectsTab from "./projectsTab/ProjectsTab"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function MyPortfolio() {
    const [activeTab, setActiveTab] = useState(<ProjectsTab/>);
    const [isProjectActive, setIsProjectsActive] = useState("");
    const [isSkillsActive, setIsSkillsActive] = useState("disabled");
    const navigation = useNavigate();
    
    return (
        <AnimatedPage>
            <Helmet>
                <title>PORTFOLIO</title>
            </Helmet>
            <div className="black-bg">
                <div className="portfolio-container">
                    <div className="navbar">
                        <div className="title-text">
                            <h3>
                                MY PORTFOLIO
                            </h3>
                        </div>
                        <div className="options">
                            <i className="fas fa-external-link fa-xl"></i>
                            <i className="fas fa-home fa-xl"></i>
                            <i onClick={()=> navigation('/EditProfile')} className="fas fa-edit fa-xl"></i>
                        </div>
                    </div>
                    <div className="upper-profile">
                        <div className="profile-picture">
                            <img src={require("../../imgs/DP.jpg")} alt="" />
                        </div>
                        <div className="profile-stats">
                            <div className="user-name">
                                <h1>
                                    HASEEB PARVAIZ QURESHI
                                </h1>
                            </div>
                            <div className="user-profile">
                                <h3>
                                    FULL STACK DEVELOPER
                                </h3>
                            </div>
                            <div className="user-bio">
                                <p>
                                    I'm a UI/UX Designer and a Frontend Developer with an overall experience of over 1 year. I possess abilities like quick adjustment, team management and excellent communication skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="personal-data">
                        <div className="qualification">
                            <h6>QUALIFICATION</h6>
                            <h1>BCA</h1>
                        </div>
                        <div className="experience">
                            <h6>TOTAL EXPERIENCE</h6>
                            <h1>1 YEAR</h1>
                        </div>
                        <div className="location">
                            <h6>LOCATION</h6>
                            <h1>INDIA</h1>
                        </div>
                    </div>
                    <div className="project_skill-bar">
                        <div className="bar-headings">
                            <div className={"projects-heading "+isProjectActive}>
                                <h1 onClick={()=> {setActiveTab(<ProjectsTab/>); setIsProjectsActive(""); setIsSkillsActive("disabled")}}>PROJECTS</h1>
                            </div>
                            <div className={"skills-heading "+ isSkillsActive}>
                                <h1 onClick={()=> {setActiveTab(<SkillsTab/>); setIsSkillsActive(""); setIsProjectsActive("disabled") }}>SKILLS</h1>
                            </div>
                        </div>
                        {activeTab}
                    {/* <SkillsTab/> */}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
