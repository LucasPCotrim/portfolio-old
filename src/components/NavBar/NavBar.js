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
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import logoNavBar from '../../assets/imgs/logoNavBar.png';
import useMobileCheck from '../../hooks/useMobileCheck';

function LogoNavBarContainer() {
  return (
    <div className="logo-container">
      <img src={logoNavBar} alt="logoNavBar" />
    </div>
  );
}

function PagesNavBarContainer({ setSelectedPage }) {
  return (
    <PagesContainerStyle>
      <div
        className="icon-button"
        onClick={() => {
          setSelectedPage(0);
        }}
      >
        <FontAwesomeIcon className="icon" icon={faHome} />
      </div>
      <div
        className="icon-button"
        onClick={() => {
          setSelectedPage(1);
        }}
      >
        <FontAwesomeIcon className="icon" icon={faUser} />
      </div>
      <div
        className="icon-button"
        onClick={() => {
          setSelectedPage(2);
        }}
      >
        <FontAwesomeIcon className="icon" icon={faBook} />
      </div>
      <div
        className="icon-button"
        onClick={() => {
          setSelectedPage(3);
        }}
      >
        <FontAwesomeIcon className="icon" icon={faSuitcase} />
      </div>
      <div
        className="icon-button"
        onClick={() => {
          setSelectedPage(4);
        }}
      >
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </div>
    </PagesContainerStyle>
  );
}

function ExternalLinksNavBarContainer() {
  return (
    <>
      <ExteralLinksContainerStyle>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </ExteralLinksContainerStyle>
    </>
  );
}

export default function NavBar({ setSelectedPage }) {
  const isMobile = useMobileCheck(1000);

  return (
    <NavBarStyle>
      {isMobile ? (
        <>
          <PagesNavBarContainer setSelectedPage={setSelectedPage} />
        </>
      ) : (
        <>
          <LogoNavBarContainer />
          <PagesNavBarContainer setSelectedPage={setSelectedPage} />
          <ExternalLinksNavBarContainer />
        </>
      )}
    </NavBarStyle>
  );
}
