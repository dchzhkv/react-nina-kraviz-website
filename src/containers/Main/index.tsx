import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import * as styles from './index.module.scss';

const Main = (): JSX.Element => {
  return (
    <section data-scroll-section>
      <div className={styles.main}>
        <Header />
        <div className="container">
          <h1 className={styles.main__title}>Nina Kraviz</h1>
        </div>
      </div>
    </section>
  );
};

export default Main;
