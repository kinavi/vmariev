import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../routs/constants';
import { observer } from 'mobx-react-lite';
import { MdMoreTime } from 'react-icons/md';
import { NavigationBarContainer } from './styled';
import { GiCoins } from 'react-icons/gi';

export const NavigationBar = observer((props: { children: JSX.Element }) => {
  return (
    <NavigationBarContainer>
      {props.children}
      <nav className="navigation-bar__nav-links">
        <NavLink to={NAVIGATION.main}>
          {({ isActive }) => (
            <FaHome
              size="30px"
              color={isActive ? '#c49e6e' : 'white'}
            />
          )}
        </NavLink>
        <NavLink to={NAVIGATION.timeManager}>
          {({ isActive }) => (
            <MdMoreTime
              size="30px"
              color={isActive ? '#c49e6e' : 'white'}
            />
          )}
        </NavLink>
        <NavLink to={NAVIGATION.coins}>
          {({ isActive }) => (
            <GiCoins
              size="30px"
              color={isActive ? '#c49e6e' : 'white'}
            />
          )}
        </NavLink>
      </nav>
    </NavigationBarContainer>
  );
});
