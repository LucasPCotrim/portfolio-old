import GlobalStyle from './global/GlobalStyle';
import NavBar from './components/NavBar/NavBar';

import InitialLoadingScreen from './components/InitialLoadingScreen/InitialLoadingScreen';

function App() {
  return (
    <>
      <GlobalStyle />
      <InitialLoadingScreen />
      <NavBar />
    </>
  );
}
export default App;
