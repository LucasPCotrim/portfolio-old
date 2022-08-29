import { SkillsPageStyle, Skill, IconStyle } from './SkillsPage.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import pythonIcon from '../../assets/imgs/python-icon.svg';
import tensorflowIcon from '../../assets/imgs/tensorflow-icon.svg';
import kerasIcon from '../../assets/imgs/keras-icon.png';
import MatplotlibIcon from '../../assets/imgs/matplotlib-icon.png';
import pandasIcon from '../../assets/imgs/pandas-icon.png';
import scikitlearnIcon from '../../assets/imgs/scikit-learn-icon.png';
import figmaIcon from '../../assets/imgs/figma-icon.png';
import gitIcon from '../../assets/imgs/git-icon.png';
import githubIcon from '../../assets/imgs/pinned-octocat.svg';

export default function SkillsPage({ pageRef }) {
  return (
    <>
      <SkillsPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>My Skills</h1>
        </div>
        <div className="skills-container">
          <div className="skills-section">
            <h1>Web Development</h1>
            <Skill width={95}>
              <IconStyle color={'#e34f26'}>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={93}>
              <IconStyle color={'#1572B6'}>
                <FontAwesomeIcon className="icon" icon={faCss3Alt} />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={99}>
              <IconStyle color={'#F0DB4F'}>
                <FontAwesomeIcon className="icon" icon={faJs} />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={96}>
              <IconStyle color={'#61DAFB'}>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={70}>
              <IconStyle color={'#61DAFB'}>
                <img src={figmaIcon} alt="figmaIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
          </div>
          <div className="skills-section">
            <h1>Data Science</h1>
            <Skill width={92}>
              <IconStyle>
                <img src={pythonIcon} alt="pythonIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={55}>
              <IconStyle>
                <img src={tensorflowIcon} alt="tensorflowIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={90}>
              <IconStyle>
                <img src={kerasIcon} alt="kerasIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={85}>
              <IconStyle>
                <img src={MatplotlibIcon} alt="MatplotlibIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={90}>
              <IconStyle>
                <img src={pandasIcon} alt="pandasIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={70}>
              <IconStyle>
                <img src={scikitlearnIcon} alt="scikitlearnIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
          </div>
          <div className="skills-section">
            <h1>Version Control</h1>
            <Skill width={90}>
              <IconStyle color={'#e34f26'}>
                <img src={gitIcon} alt="gitIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
            <Skill width={95}>
              <IconStyle color={'#e34f26'}>
                <img src={githubIcon} alt="githubIcon" />
              </IconStyle>
              <div className="skill-bar">
                <div className="skill-level"></div>
              </div>
            </Skill>
          </div>
        </div>
      </SkillsPageStyle>
    </>
  );
}
