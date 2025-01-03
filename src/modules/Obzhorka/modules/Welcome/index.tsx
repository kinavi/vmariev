import styled, { createGlobalStyle } from 'styled-components';
import Logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import { GlobalStyle, WelcomeContainer } from './styled';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../constants';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <WelcomeContainer>
      <GlobalStyle />
      <img
        className="welcome__logo"
        src={Logo}
        alt="Logo"
      />
      <div className="welcome__header">
        <h1 className="welcome__title">Обжорка</h1>
        <p className="welcome__slogan">
          твой персональный дневник питания и здоровья!
        </p>
      </div>
      <div className="welcome__text">
        Сервис “Обжорка” помогает контролировать питание и достигать целей по
        здоровью. Вноси свои ежедневные приёмы пищи, считай белки, жиры,
        углеводы и калории. Следи за прогрессом, будь то похудение, набор
        мышечной массы или поддержание формы.
      </div>
      <Button
        onClick={() => {
          navigate(NAVIGATION.signIn);
        }}
        fullWidth
        variant="contained"
        className="welcome__button"
      >
        Войти
      </Button>
    </WelcomeContainer>
  );
};
