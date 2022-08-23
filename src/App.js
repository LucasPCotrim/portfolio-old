import GlobalStyle from './global/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Background from './components/Background/Background';
import AppContext from './contexts/AppContext';
import { useState } from 'react';
import InitialLoadingScreen from './components/InitialLoadingScreen/InitialLoadingScreen';

function App() {
  const [state, setState] = useState({
    page: 'InitialLoadingScreen',
  });

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
            <NavBar />
            <Background />
            <HomePage />
            <HomePage />
          </>
        )}
      </AppContext.Provider>
    </>
  );
}
export default App;
