import React, { useState } from 'react';
import { Main, Tour, Contacts, About, Music } from '../';
import useLocoScroll from '../../hooks/useLocoScroll';

const Home = (): JSX.Element => {
  const [preloader, setPreload] = useState(false);

  useLocoScroll(!preloader);

  return (
    <div id="main-container" data-scroll-container>
      <Main />
      <Tour />
      <Contacts />
      <About />
      <Music />
    </div>
  );
};

export default Home;
