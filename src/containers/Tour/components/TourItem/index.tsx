import React from 'react';
import * as styles from './index.module.scss';
import { Tour } from '../../../../common/types';

interface Props {
  items: Tour;
}

const TourItem = (props: Props): JSX.Element => {
  return (
    <li key={props.items.id} className={styles.item}>
      <div>
        <span>{props.items.dayOfTheWeek}</span>
        {props.items.date}
      </div>
      <div>
        <span>{props.items.place}</span>
        <span>
          {props.items.date}, {props.items.country}
        </span>
      </div>
      <div>Tickets</div>
    </li>
  );
};

export default TourItem;
