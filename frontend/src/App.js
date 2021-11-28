import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const Grid = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

const Main = styled.main`
  grid-area: main;
`;

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Grid>
        <Main>
          <Route path="/products/:id" />
        </Main>
        <Navigation />
        <Main />
        <Footer />
      </Grid>
    </>
  );
}

export default App;
