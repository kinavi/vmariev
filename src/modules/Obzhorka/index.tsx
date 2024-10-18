import {
  ActionFunction,
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { Welcome } from './container/Welcome';
import { createTheme, ThemeProvider } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import { SignIn } from './container/SignIn';
import { SignUp } from './container/SignUp';
import { Main } from './container/Main/ibndex';
import { token } from '../../api/Token';
import { GlobalStyle } from './styled';
import { NAVIGATION } from './constants';
import { observer } from 'mobx-react-lite';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#07C588',
      main: '#06B27B',
      dark: '#07C588',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const mainLoader: ActionFunction = () => {
  console.log('token.userData', token.userData);
  if (!token.userData) {
    return redirect(NAVIGATION.welcome);
  }
  return null;
};

export const Obzhorka = observer(() => {
  const hasUserData = token.userData;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="signIn"
          element={<SignIn />}
        />
        <Route
          path="signUp"
          element={<SignUp />}
        />
        <Route
          path="welcome"
          element={<Welcome />}
        />
        <Route
          path="*"
          element={hasUserData ? <Main /> : <Welcome />}
        />
      </Routes>
    </ThemeProvider>
  );
});
