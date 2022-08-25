import {
  AboutPageStyle,
  AboutSectionStyle,
  SkillsSectionStyle,
  IconStyle,
} from './AboutPage.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import pythonIcon from '../../assets/imgs/icons8-python.svg';

export default function AboutPage({ pageRef }) {
  return (
    <>
      <AboutPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>About Me</h1>
        </div>
        <AboutSectionStyle>
          <p>
            My name is Lucas Pereira Cotrim and I'm a full-stack Web Developer
            who is passionate about learning new technologies and using them in
            large-scale projects that impact the world in a positive way.
          </p>
          <br />
          <p>
            I hold an MSc degree in Control and Automation Engineering from
            University of São Paulo and my research areas of interest include
            Data Science, Artificial Intelligence and Reinforcement Learning.
          </p>
        </AboutSectionStyle>
        <SkillsSectionStyle>
          <h1>My Skills</h1>
          <div className="skills-container">
            <IconStyle color={'#e34f26'}>
              <FontAwesomeIcon className="icon" icon={faHtml5} />
            </IconStyle>
            <IconStyle color={'#1572B6'}>
              <FontAwesomeIcon className="icon" icon={faCss3Alt} />
            </IconStyle>
            <IconStyle color={'#F0DB4F'}>
              <FontAwesomeIcon className="icon" icon={faJs} />
            </IconStyle>
            <IconStyle color={'#61DAFB'}>
              <FontAwesomeIcon className="icon" icon={faReact} />
            </IconStyle>
            <IconStyle>
              <img src={pythonIcon} alt="pythonIcon" />
            </IconStyle>
          </div>
        </SkillsSectionStyle>
      </AboutPageStyle>
    </>
  );
}
