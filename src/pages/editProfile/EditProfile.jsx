import './styles/editProfileStyles.css'
import AnimatedPage from "../../components/animator"
import { Helmet } from 'react-helmet'
import { useNavigate } from "react-router-dom"


export default function EditProfile() {
    const navigation = useNavigate()

    return (
        <AnimatedPage>
            <Helmet>
                <title>EDIT PROFILE</title>
            </Helmet>
            <div className="black-bg">
                <div className="edit-profile-container">
                    <div className="edit-profile-navbar">
                        <div className="edit-profile-title-text">
                            <h3>
                                EDIT PROFILE
                            </h3>
                        </div>
                        <div className="edit-profile-options">
                            <i onClick={() => navigation('/Myportfolio')} className="fas fa-arrow-right fa-xl"></i>
                        </div>
                    </div>
                    <div className="profile-edit">
                        <div className="profile-edit-header">
                            <h3>PROFILE</h3>
                        </div>
                        <div className="edit-profile-picture">
                            <img src={require("../../imgs/DP.jpg")} alt="profile picture" />
                            <i className='fas fa-edit fa-xl'></i>
                        </div>
                        <div className="edit-username">
                            <label htmlFor='editusernamefield'>USERNAME</label>
                            <input id='editusernamefield' type="text" required defaultValue='Haseeb Parvaiz Qureshi' />
                        </div>
                        <div className="edit-position">
                            <label htmlFor='editposition'>POSITION</label>
                            <input id='editposition' type="text" required defaultValue='Full Stack Developer' />
                        </div>
                        <div className="edit-bio">
                            <label htmlFor='editbio'>BIO</label>
                            <textarea id='editbio' type="text" required defaultValue={"I'm a UI/UX Designer and a Frontend Developer with an overall experience of over 1 year. I possess abilities like quick adjustment, team management and excellent communication skills."} />
                        </div>
                        <div className="edit-password">
                            <label htmlFor='editpassword'>PASSWORD</label>
                            <input id='editpassword' type="password" required placeholder="Enter New Password" />
                        </div>
                        <div className="edit-conform-password">
                            <label htmlFor='editconformpassword'>CONFIRM PASSWORD</label>
                            <input id='editconformpassword' type="password" required placeholder="Conform New Password" />
                        </div>
                        <div className="conform-changes-btn">
                            <button type='Submit' className="login-btn">UPDATE PROFILE</button>
                        </div>
                    </div>
                    <hr />
                    <div className="edit-projects-container">
                        <div className="edit-projects-header">
                            <h3>PROJECTS</h3>
                        </div>
                        <div className="project-edit-tab">
                            <h3>1</h3>
                            <h3>ZEYMAL EDUCATIONAL ERP</h3>
                            <i className='fas fa-edit fa-xl'></i>
                            <i className="fas fa-trash fa-xl"></i>
                        </div>
                        <div className="project-edit-tab">
                            <h3>2</h3>
                            <h3>PASSIONATE FOR PASHMINA</h3>
                            <i className='fas fa-edit fa-xl'></i>
                            <i className="fas fa-trash fa-xl"></i>
                        </div>
                        <div className="project-edit-tab">
                            <h3>3</h3>
                            <h3>FAKE PROFILES GENERATOR</h3>
                            <i className='fas fa-edit fa-xl'></i>
                            <i className="fas fa-trash fa-xl"></i>
                        </div>
                        <div className="project-edit-tab">
                            <h3>4</h3>
                            <h3>DUCATI SRINAGAR</h3>
                            <i className='fas fa-edit fa-xl'></i>
                            <i className="fas fa-trash fa-xl"></i>
                        </div>
                        <div className="project-edit-tab">
                            <h3>5</h3>
                            <h3>J&K BANK</h3>
                            <i className='fas fa-edit fa-xl'></i>
                            <i className="fas fa-trash fa-xl"></i>
                        </div>
                    </div>
                    <hr />
                    <div className="edit-skills-container">
                        <div className="edit-skills-header">
                            <h3>SKILLS</h3>
                        </div>
                        <div className="edit-skill-tabs">
                            <div className="edit-skill-tab">
                                <h3>HTML</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>SCSS</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>Figma</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>JavaScript</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>React</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>Python</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>Django</h3>
                                <i className="fas fa-trash fa-l"></i>
                            </div>
                            <div className="edit-skill-tab">
                                <h3>Add Skill</h3>
                                <i className="fas fa-plus fa-l"></i>
                            </div>
                        </div>
                        <div className="conform-changes-btn">
                            <button type='Submit' className="login-btn">UPDATE SKILLS</button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}
