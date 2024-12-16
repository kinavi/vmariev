import styled from 'styled-components';
import { Icon } from '../../../../ui/components/Icon';
import { NavLink, useMatch } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import classNames from 'classnames';

const NavBarContainer = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);
  padding: 0 16px;
  z-index: 1;
  & .nav-bar {
    &__link {
      padding: 16px;
      &_active {
        & svg {
          fill: #06b27b;
        }
      }
    }
  }
`;

export const NavBar = () => {
  const match = useMatch(NAVIGATION.main);
  return (
    <NavBarContainer>
      <NavLink
        to={NAVIGATION.main}
        className={classNames('nav-bar__link', {
          ['nav-bar__link_active']: match,
        })}
      >
        <Icon
          color="#999999"
          type="Eat"
          size="40px"
        />
      </NavLink>
      <NavLink
        to={NAVIGATION.profile}
        className={({ isActive }) =>
          classNames('nav-bar__link', { ['nav-bar__link_active']: isActive })
        }
      >
        <Icon
          color="#999999"
          type="Profile"
          size="40px"
        />
      </NavLink>
    </NavBarContainer>
  );
};
