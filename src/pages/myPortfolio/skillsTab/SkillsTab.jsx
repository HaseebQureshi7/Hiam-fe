import AnimatedPage from '../../../components/animator';
import './styles/skillTabstyles.css';

export default function SkillsTab() {
  return (
    <AnimatedPage>
      <div className="skills-tab">
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
      </div>
    </AnimatedPage>
  )
}
