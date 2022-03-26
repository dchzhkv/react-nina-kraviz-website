import React from 'react';
import * as styles from './index.module.scss';

interface Props {
  title: string;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  styles?: string;
}

const Title = (props: Props): JSX.Element => {
  return (
    <div className={styles.container} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
      <div className={styles.title}>{props.title}</div>
      <div className={`${styles.title} ${styles.titleClone} ${props.styles}`}>{props.title}</div>
    </div>
  );
};

export default Title;
