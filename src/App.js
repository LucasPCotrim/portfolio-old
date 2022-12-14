import GlobalStyle from './global/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ContactPage from './components/ContactPage/ContactPage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import Background from './components/Background/Background';
import AppContext from './contexts/AppContext';
import { useState, useRef, useEffect } from 'react';
import InitialLoadingScreen from './components/InitialLoadingScreen/InitialLoadingScreen';

export default function App() {
  const [state, setState] = useState({
    page: 'InitialLoadingScreen',
  });
  const [selectedPage, setSelectedPage] = useState(0);
  useEffect(() => {
    pageRefs[selectedPage]?.current?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }, [selectedPage]);

  const homePageRef = useRef();
  const AboutPageRef = useRef();
  const SkillsPageRef = useRef();
  const ProjectsPageRef = useRef();
  const ContactPageRef = useRef();
  const pageRefs = [
    homePageRef,
    AboutPageRef,
    SkillsPageRef,
    ProjectsPageRef,
    ContactPageRef,
  ];

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={{ state, setState }}>
        {state.page === 'InitialLoadingScreen' ? (
          <>
            <InitialLoadingScreen />
          </>
        ) : (
          <>
            <NavBar setSelectedPage={setSelectedPage} />
            <Background />
            <HomePage pageRef={homePageRef} />
            <AboutPage pageRef={AboutPageRef} />
            <SkillsPage pageRef={SkillsPageRef} />
            <ProjectsPage pageRef={ProjectsPageRef} />
            <ContactPage pageRef={ContactPageRef} />
          </>
        )}
      </AppContext.Provider>
    </>
  );
}
