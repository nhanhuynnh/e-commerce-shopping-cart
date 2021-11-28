import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import styled from 'styled-components';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ToastContainer } from 'react-toastify';

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
      <ReactNotification />
      <Grid>
        <Navigation />
        <Main>
          <Route path="/products/:id" />
        </Main>
        <Footer />
      </Grid>
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default App;
