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
import { Favorites } from '../Favorites';
import { CreateFood } from '../CreateFood';
import { Food } from '../Food';
import { CreateMealEntry } from '../CreateMealEntry';
import { CreateDishes } from '../CreateDishes';
import { Dish } from '../Dish';
import { Faq } from '../Faq';

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
    foods,
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
            path="/"
            element={<MealEntries />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="favorites"
            element={<Favorites />}
          />
          <Route
            path={'dishes/new'}
            element={<CreateDishes />}
          />
          <Route
            path={'dishes/:foodId'}
            element={<Dish />}
          />
          <Route
            path={'foods/new'}
            element={<CreateFood />}
          />
          <Route
            path={'foods/:foodId'}
            element={<Food />}
          />
          <Route
            path={'createMealEntry'}
            element={<CreateMealEntry />}
          />
          <Route
            path={'faq'}
            element={<Faq />}
          />
          <Route
            path="*"
            element={<div>404</div>}
          />
        </Routes>
      </div>
      <NavBar />
    </MainContainer>
  );
});
