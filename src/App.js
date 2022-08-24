import GlobalStyle from './global/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
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
  const ProjectsPageRef = useRef();
  const pageRefs = [homePageRef, AboutPageRef, ProjectsPageRef];

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
            <ProjectsPage pageRef={ProjectsPageRef} />
          </>
        )}
      </AppContext.Provider>
    </>
  );
}
