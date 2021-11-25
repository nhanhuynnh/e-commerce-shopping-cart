import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const Main = styled.main`
  grid-area: main;
`;

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Main />
      <Footer />
    </>
  );
}

export default App;
