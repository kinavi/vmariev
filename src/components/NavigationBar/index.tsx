import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../routs/constants';
import { observer } from 'mobx-react-lite';
import { NavigationBarContainer } from './styled';
import { Icon } from '../../ui/components/Icon';

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
        <NavLink to={NAVIGATION.time}>
          {({ isActive }) => (
            <Icon
              type="time"
              size="30px"
              color={isActive ? '#c49e6e' : 'white'}
            />
          )}
        </NavLink>
        <NavLink to={NAVIGATION.coins}>
          {({ isActive }) => (
            <Icon
              type="coins"
              size="30px"
              color={isActive ? '#c49e6e' : 'white'}
            />
          )}
        </NavLink>
      </nav>
    </NavigationBarContainer>
  );
});
