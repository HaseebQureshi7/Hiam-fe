import AnimatedPage from '../../../components/animator'
import { motion } from 'framer-motion'
import './styles/projectsTabStyles.css'
import { useNavigate } from 'react-router-dom'

export default function ProjectsTab() {
  const navigation = useNavigate();
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        x: "25vw"
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: "0"
      }}
      exit={{
        opacity: 0,
        scale: 0.7,
        x: "-25vw"
      }}
      transition={{
        duration: 0.5,
        delayChildren:0.5
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          x: "25vw"
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: "0"
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          x: "-25vw"
        }}
        className="project-tab">
        <div className="project1">
          <img onClick={()=> {navigation('/ProjectsPage'); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={require("../../../imgs/projects/Zeymal-banner.jpg")} alt="user-porject" />
        </div>
        <div className="project2">
          <img onClick={()=> {navigation('/ProjectsPage'); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={require("../../../imgs/projects/passforpash.jpg")} alt="user-porject" />
        </div>
        <div className="project3">
          <img onClick={()=> {navigation('/ProjectsPage'); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={require("../../../imgs/projects/radomprofilesgen.jpg")} alt="user-porject" />
        </div>
        <div className="project4">
          <img onClick={()=> {navigation('/ProjectsPage'); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={require("../../../imgs/projects/ducatisxr.jpg")} alt="user-porject" />
        </div>
        <div className="project5">
          <img onClick={()=> {navigation('/ProjectsPage'); window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} src={require("../../../imgs/projects/jkbank.jpg")} alt="user-project" />
        </div>
      </motion.div>
    </motion.div>
  )
}
