import {
  NavBarStyle,
  PagesContainerStyle,
  ExteralLinksContainerStyle,
} from './NavBar.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import logoNavBar from '../../assets/imgs/logoNavBar.png';
import useMobileCheck from '../../hooks/useMobileCheck';

function LogoSideBarContainer() {
  return (
    <div className="logo-container">
      <img src={logoNavBar} alt="logoNavBar" />
    </div>
  );
}

function PagesSideBarContainer() {
  return (
    <PagesContainerStyle iconSize={'30px'}>
      <div className="icon-button">
        <FontAwesomeIcon className="icon" icon={faHome} />
      </div>
      <div className="icon-button">
        <FontAwesomeIcon className="icon" icon={faUser} />
      </div>
      <div className="icon-button">
        <FontAwesomeIcon className="icon" icon={faSuitcase} />
      </div>
      <div className="icon-button">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </div>
    </PagesContainerStyle>
  );
}

function ExternalLinksSidebarContainer() {
  return (
    <>
      <ExteralLinksContainerStyle>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </ExteralLinksContainerStyle>
    </>
  );
}

export default function NavBar() {
  const isMobile = useMobileCheck(1000);

  return (
    <NavBarStyle>
      {isMobile ? (
        <>
          <PagesSideBarContainer />
        </>
      ) : (
        <>
          <LogoSideBarContainer />
          <PagesSideBarContainer />
          <ExternalLinksSidebarContainer />
        </>
      )}
    </NavBarStyle>
  );
}
