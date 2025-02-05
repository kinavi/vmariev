import styled from 'styled-components';
import { Icon } from '../../../../ui/components/Icon';
import { NavLink, useMatch } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import classNames from 'classnames';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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

  @media screen and (max-width: 374px) {
    & svg {
      width: 100%;
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
          'nav-bar__link_active': match,
        })}
      >
        <Icon
          color="#999999"
          type="Eat"
          size="40px"
        />
      </NavLink>
      <NavLink
        to={NAVIGATION.foods}
        className={({ isActive }) =>
          classNames('nav-bar__link', { 'nav-bar__link_active': isActive })
        }
      >
        <BookmarkIcon sx={{ fontSize: 40, color: '#999999' }} />
      </NavLink>
      <NavLink
        to={NAVIGATION.profile}
        className={({ isActive }) =>
          classNames('nav-bar__link', { 'nav-bar__link_active': isActive })
        }
      >
        <PersonIcon sx={{ fontSize: 40, color: '#999999' }} />
      </NavLink>
      <NavLink
        to={NAVIGATION.faq}
        className={({ isActive }) =>
          classNames('nav-bar__link', { 'nav-bar__link_active': isActive })
        }
      >
        <QuestionMarkIcon sx={{ fontSize: 40, color: '#999999' }} />
      </NavLink>
    </NavBarContainer>
  );
};
