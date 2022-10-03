import React from 'react';
import useToggle from '../../../../hooks/useToggle';
import MenuPage from '../../../Menu';

const Menu = (): JSX.Element => {
  const [isMenuVisible, setMenuVisible] = useToggle(false);
  console.log(isMenuVisible);

  return (
    <>
      <span onClick={setMenuVisible}>Menu</span>
      <MenuPage isVisible={isMenuVisible} />
    </>
  );
};

export default Menu;
