import styled from 'styled-components';

import Logo from '../../assets/logo.png';
import { observer } from 'mobx-react-lite';
import { translate } from '../../../../translator';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background: white;
  filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1));
  & .header {
    &__title {
    }
    &__logo {
      width: 30px;
    }
    &__sub-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
    }
  }
`;

export const Header = observer(
  (props: { title?: string; children?: React.JSX.Element | string }) => {
    const { title, children } = props;
    const tryTranslate = translate.tryTranslate;
    return (
      <HeaderContainer>
        <div className="header__sub-header">
          <img
            className="header__logo"
            src={Logo}
            alt="logo"
          />{' '}
          <div>{tryTranslate('Обжорка')}</div>
        </div>
        {title && <div className="header__title">{title}</div>}
        {children}
      </HeaderContainer>
    );
  }
);
