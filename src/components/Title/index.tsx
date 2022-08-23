import React, { useState } from 'react';
import * as styles from './index.module.scss';

interface Props {
  title: string;
  isAnimHover: boolean;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  styles?: string;
}

const Title = (props: Props): JSX.Element => {
  const handleHover = () => {
    return `${styles.title} ${styles.titleClone} ${props.isAnimHover ? styles.titleAnim : null} ${props.styles}`;
  };
  return (
    <div
      className={`${props.styles} ${styles.container}`}
      onMouseEnter={props.handleMouseEnter}
      onMouseLeave={props.handleMouseLeave}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={handleHover()}>{props.title}</div>
    </div>
  );
};

export default Title;
