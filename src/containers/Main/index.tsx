import React from 'react';
import * as styles from './index.module.scss';

const Main = (): JSX.Element => {
  return (
    <section className={styles.main}>
      <div className="container">
        <h1 className={styles.main__title}>Nina Kraviz</h1>
      </div>
    </section>
  );
};

export default Main;
