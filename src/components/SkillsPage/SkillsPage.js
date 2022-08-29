import { SkillsPageStyle, IconStyle } from './SkillsPage.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import pythonIcon from '../../assets/imgs/icons8-python.svg';

export default function SkillsPage({ pageRef }) {
  return (
    <>
      <SkillsPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>My Skills</h1>
        </div>
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
      </SkillsPageStyle>
    </>
  );
}
