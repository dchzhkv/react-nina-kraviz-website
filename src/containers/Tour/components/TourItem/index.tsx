import React from 'react';
import * as styles from './index.module.scss';
import { Tour } from '../../../../common/types';
import Title from '../../../../components/Title';

interface Props {
  items: Tour;
}

const TourItem = (props: Props): JSX.Element => {
  return (
    <li key={props.items.id} className={styles.item}>
      <div className={`${'container'} ${styles.content}`}>
        <div className={styles.bgImageContainer}>
          <div className={styles.bgImage} />
        </div>

        <div className={styles.dayOfTheWeek}>
          {props.items.dayOfTheWeek}
          <span className={styles.date}>{props.items.date}</span>
        </div>

        <div className={styles.country}>
          <span className={styles.place}>{props.items.place}</span>
          {props.items.city}, {props.items.country}
        </div>

        <Title title="Tickets" styles={styles.title} />
      </div>
    </li>
  );
};

export default TourItem;
