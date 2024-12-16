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
import { Main } from './container/Main';
import { token } from '../../api/Token';
import { GlobalStyle } from './styled';
import { NAVIGATION } from './constants';
import { observer } from 'mobx-react-lite';
import { ObjorkaStateContext } from './mobx';
import { Store } from './mobx/store';

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

const store = new Store();

export const Obzhorka = observer(() => {
  const currentUser = token.userData;
  return (
    <ObjorkaStateContext.Provider value={store}>
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
          {/* <Route
          path="welcome"

          
          element={<Welcome />}
        /> */}
          <Route
            path="*"
            element={
              currentUser ? (
                <Main currentUserId={currentUser.id} />
              ) : (
                <Welcome />
              )
            }
          />
        </Routes>
      </ThemeProvider>
    </ObjorkaStateContext.Provider>
  );
});
