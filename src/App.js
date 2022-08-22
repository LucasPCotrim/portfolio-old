import GlobalStyle from './global/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

import InitialLoadingScreen from './components/InitialLoadingScreen/InitialLoadingScreen';

function App() {
  return (
    <>
      <GlobalStyle />
      <InitialLoadingScreen />
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
}
export default App;
