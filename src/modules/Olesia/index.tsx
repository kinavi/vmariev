import styled, { createGlobalStyle } from 'styled-components';
import { TimerPage } from './pages/Timer';
import { redirect, Route, Routes } from 'react-router-dom';
import { Maps } from './pages/Maps';
import { NAVIGATION } from './constants';

const GlobalStyles = createGlobalStyle`
    html body {
        background: white;
        color: #333333;
        overflow: hidden;
    }
    :root {
        --animate-delay: 0.2s;
    }
`;

const OlesiaContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Olesia = () => {
  const dateOpen = new Date(2024, 9, 19);
  return (
    <OlesiaContainer>
      <GlobalStyles />
      <Routes>
        <Route
          path="maps"
          element={<Maps />}
          action={() => {
            console.log('red', dateOpen.getTime() - new Date().getTime());
            if (dateOpen.getTime() - new Date().getTime() > 0) {
              return redirect(NAVIGATION.main);
            }
            return null;
          }}
        />
        <Route
          path="*"
          element={<TimerPage dateOpen={dateOpen.toISOString()} />}
        />
      </Routes>
    </OlesiaContainer>
  );
};
