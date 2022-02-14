import React from 'react';
import { Logo, Menu, SocialLink } from './components';
import * as styles from './index.module.scss';

interface Props {
  isLogoImg?: boolean;
}

const Header = ({ isLogoImg }: Props): JSX.Element => {
  return (
    <header className={styles.header}>
      <Menu />
      <Logo />
      <SocialLink />
    </header>
  );
};

export default Header;
