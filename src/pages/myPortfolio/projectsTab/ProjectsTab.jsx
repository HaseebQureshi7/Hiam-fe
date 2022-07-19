import AnimatedPage from '../../../components/animator'
import './styles/projectsTabStyles.css'

export default function ProjectsTab() {
  return (
    <AnimatedPage>
      <div className="project-tab">
        <div className="project1">
          <img src={require("../../../imgs/projects/Zeymal-banner.jpg")} alt="user-porject" />
        </div>
        <div className="project2">
          <img src={require("../../../imgs/projects/passforpash.jpg")} alt="user-porject" />
        </div>
        <div className="project3">
          <img src={require("../../../imgs/projects/radomprofilesgen.jpg")} alt="user-porject" />
        </div>
        <div className="project4">
          <img src={require("../../../imgs/projects/ducatisxr.jpg")} alt="user-porject" />
        </div>
        <div className="project5">
          <img src={require("../../../imgs/projects/jkbank.jpg")} alt="user-project"/>
        </div>
      </div>
    </AnimatedPage>
  )
}
