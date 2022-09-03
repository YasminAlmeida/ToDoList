import './App.css';
// import * as S from './Styled/styleHeader.js';
import GlobalStyle from './Styled/global.js';
import Header from './Component/Header.js';
import Main from './Component/Main.js';

function App() {
  return (
    <section>
      <Header />
      <Main />
      <GlobalStyle />
    </section>
  );
}

export default App;
