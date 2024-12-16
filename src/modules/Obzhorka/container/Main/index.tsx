import styled, { createGlobalStyle } from 'styled-components';
import { NavBar } from '../../components/NavBar';
import { Header } from '../../components/Header';
import { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useObjorkaStore } from '../../mobx';
import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
import { Profile } from '../Profile';
import { NAVIGATION } from '../../constants';
import { Loader } from '../../../TimeManager/component/UI/Loader';
import { MealEntries } from '../MealEntries';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = observer((props: { currentUserId: number }) => {
  const { currentUserId } = props;
  const {
    userProgram,
    onInitial,
    status: { isLoading, isInitial, isReady },
    setUserProgram,
  } = useObjorkaStore();
  const navigate = useNavigate();

  useEffect(() => {
    onInitial(currentUserId);
  }, [currentUserId]);

  useEffect(() => {
    if (!userProgram && isReady) {
      navigate(NAVIGATION.profile);
    }
  }, [userProgram, isReady]);

  if (isLoading || isInitial) {
    return (
      <MainContainer>
        <Loader />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div style={{ flexGrow: '1' }}>
        <Routes>
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="*"
            element={<MealEntries />}
          />
        </Routes>
      </div>
      <NavBar />
    </MainContainer>
  );
});
