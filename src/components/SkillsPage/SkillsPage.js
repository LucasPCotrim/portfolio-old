import { SkillsPageStyle, SkillStyle, IconStyle } from './SkillsPage.style';
import { useInView } from 'react-intersection-observer';
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

function Skill({ percentage, iconType, iconSrc, ...otherProps }) {
  const { ref: skillRef, inView: skillIsVisible } = useInView();
  return (
    <>
      <SkillStyle ref={skillRef} width={percentage}>
        <IconStyle color={otherProps.color}>
          {iconType === 'img' ? (
            <img src={iconSrc} alt={iconSrc} />
          ) : (
            <FontAwesomeIcon className="icon" icon={iconSrc} />
          )}
        </IconStyle>
        <div className="skill-bar">
          <div
            className={`skill-level ${skillIsVisible ? 'skill-animation' : ''}`}
          ></div>
        </div>
      </SkillStyle>
    </>
  );
}

function SkillSection({ sectionTitle, children }) {
  return (
    <>
      <div className="skills-section">
        <h1>{sectionTitle}</h1>
        {children}
      </div>
    </>
  );
}

export default function SkillsPage({ pageRef }) {
  return (
    <>
      <SkillsPageStyle ref={pageRef}>
        <div className="title-container">
          <h1>My Skills</h1>
        </div>
        <div className="skills-container">
          <SkillSection sectionTitle={'Web Development'}>
            <Skill percentage={95} iconSrc={faHtml5} color={'#e34f26'} />
            <Skill percentage={93} iconSrc={faCss3Alt} color={'#1572B6'} />
            <Skill percentage={99} iconSrc={faJs} color={'#F0DB4F'} />
            <Skill percentage={96} iconSrc={faReact} color={'#61DAFB'} />
            <Skill percentage={70} iconType={'img'} iconSrc={figmaIcon} />
          </SkillSection>
          <SkillSection sectionTitle={'Data Science'}>
            <Skill percentage={92} iconType={'img'} iconSrc={pythonIcon} />
            <Skill percentage={55} iconType={'img'} iconSrc={tensorflowIcon} />
            <Skill percentage={90} iconType={'img'} iconSrc={kerasIcon} />
            <Skill percentage={85} iconType={'img'} iconSrc={MatplotlibIcon} />
            <Skill percentage={90} iconType={'img'} iconSrc={pandasIcon} />
            <Skill percentage={70} iconType={'img'} iconSrc={scikitlearnIcon} />
          </SkillSection>
          <SkillSection sectionTitle={'Version Control'}>
            <Skill percentage={98} iconType={'img'} iconSrc={gitIcon} />
            <Skill percentage={90} iconType={'img'} iconSrc={githubIcon} />
          </SkillSection>
        </div>
      </SkillsPageStyle>
    </>
  );
}
