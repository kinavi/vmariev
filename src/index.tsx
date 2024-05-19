import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import 'animate.css';
import { StateContext, store } from './mobx';
import { routers } from './routs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { translate } from './translator';
import './index.css';
import './loader.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#c49e6e',
      main: '#c49e6e',
      dark: '#c49e6e',
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

window.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('root');
  if (container === null) {
    throw new Error('root container did not find');
  }
  document.title = 'VMariev';
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <StateContext.Provider value={store}>
          <CssBaseline />
          <RouterProvider router={routers(store)} />
        </StateContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
