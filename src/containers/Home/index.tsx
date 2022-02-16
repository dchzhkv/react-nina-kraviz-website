import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Header, Main, Tour, Contacts, About } from '../';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />

      <ReactFullpage
        fixedElements={'header'}
        normalScrollElements={'.normalScroll'}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Main />
              </div>
              <div className="section">
                <Tour />
              </div>
              <div className="section">
                <Contacts />
              </div>
              <div className="section">
                <About />
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
