import { motion } from 'framer-motion';
import AnimatedPage from '../../../components/animator';
import './styles/skillTabstyles.css';

export default function SkillsTab() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        x: "-25vw"
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
          x: "-25vw"
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
        className="skills-tab">
        <div className="skill">
          <div className="skill-name">
            <h1>HTML</h1>
          </div>
          <div className="skill-level">
            <h1>ADVANCED</h1>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">
            <h1>SCSS</h1>
          </div>
          <div className="skill-level">
            <h1>ADVANCED</h1>
          </div>
        </div>
        <div className="skill intermediate">
          <div className="skill-name">
            <h1>FIGMA</h1>
          </div>
          <div className="skill-level">
            <h1>INTERMEDIATE</h1>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">
            <h1>JAVASCRIPT</h1>
          </div>
          <div className="skill-level">
            <h1>ADVANCED</h1>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">
            <h1>REACT</h1>
          </div>
          <div className="skill-level">
            <h1>ADVANCED</h1>
          </div>
        </div>
        <div className="skill intermediate">
          <div className="skill-name">
            <h1>PYTHON</h1>
          </div>
          <div className="skill-level">
            <h1>INTERMEDIATE</h1>
          </div>
        </div>
        <div className="skill intermediate">
          <div className="skill-name">
            <h1>DJANGO</h1>
          </div>
          <div className="skill-level">
            <h1>INTERMEDIATE</h1>
          </div>
        </div>
        <div className="skill beginner">
          <div className="skill-name">
            <h1>MYSQL</h1>
          </div>
          <div className="skill-level">
            <h1>BEGINNER</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
