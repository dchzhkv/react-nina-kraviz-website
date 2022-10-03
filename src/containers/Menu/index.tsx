import React from 'react';
import * as styles from './index.module.scss';

interface Props {
  isVisible: boolean;
}

const MenuPage = (props: Props): JSX.Element => {
  const handleClassName = () => {
    return props.isVisible ? styles.visible : styles.hidden;
  };

  return <div className={`${handleClassName()} ${styles.container}`}>Menu</div>;
};

export default MenuPage;
