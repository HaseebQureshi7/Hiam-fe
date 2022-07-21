import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import AnimatedPage from "../../components/animator"
import { motion } from 'framer-motion'
import "./styles/projectsPageStyles.css"
import { useEffect } from "react"

export default function ProjectsPage() {
    const navigation = useNavigate()
    
    // useEffect(() => {
    //     // 👇️ scroll to top on page load
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    //   }, []);

    return (
        <AnimatedPage>
            <Helmet>
                <title>Zeymal Educational ERP</title>
            </Helmet>
            <div className="black-bg">
                <div className="project-page-container">
                    <div className="project-page-navbar">
                        <div className="project-page-title-text">
                            <h1>
                                MY PROJECTS
                            </h1>
                        </div>
                        <div className="project-page-options">
                            <i className="fas fa-external-link fa-xl"></i>
                            <i className="fas fa-edit fa-xl"></i>
                            <i onClick={() => navigation("/MyPortfolio")} className="fas fa-arrow-right fa-xl"></i>
                        </div>
                    </div>
                    <div className="project-page-title">
                        <h1>ZEYMAL EDUCATIONAL ERP</h1>
                    </div>
                    <motion.div
                        initial={{scale:1, y:-50, opacity:0}}
                        animate={{scale:1, y:0, opacity:1}}
                        exit={{scale:1, y:200, opacity:0}}
                        transition={{duration:1}}
                    className="project-page-hero-image">
                        <img src={require("../../imgs/projects/Zeymal-banner.jpg")} alt="" />
                    </motion.div>
                    <div className="project-page-stats">
                        <div className="project-page-role">
                            <h3>ROLE : FRONTEND DEVELOPER</h3>
                        </div>
                        <div className="project-page-tech-stack">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>BOOTSTRAP</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                        <div className="project-page-responsibilities">
                            <h3>Responsibilities</h3>
                            <ul>
                                <li>Responsible for building and designing the frontend part of the Zeymal Administrator website.</li>
                                <li>Responsible for low and high level linkage of the web pages of the website</li>
                                <li>I developed in-total of 4 modules or 250 pages of the website</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
