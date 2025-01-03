import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { translate } from '../../../../translator';
import { useObjorkaStore } from '../../mobx';
import { Loader } from '../../../TimeManager/component/UI/Loader';
import { FoodList } from './chunks/FoodList';
import { NAVIGATION } from '../../constants';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { withFood } from './hocs/withFood';
import { withLoader } from './hocs/withLoader';
import { DishList } from './chunks/DishList';

const FoodsContainer = styled.div`
  & .foods {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

enum SectionType {
  dish = 'dish',
  food = 'food',
}

const ListComponent = withLoader(
  withFood({
    DishListComponent: DishList,
    FoodListComponent: FoodList,
  })
);

export const Favorites = observer(() => {
  const { foods, dishes, resetDishes, resetFoods } = useObjorkaStore();
  const [section, setSection] = useState<SectionType>(SectionType.food);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: SectionType
  ) => {
    if (newAlignment) {
      setSection(newAlignment);
    }
  };

  useEffect(() => {
    if (section === 'dish') {
      resetFoods();
      dishes.onInitial();
    } else {
      resetDishes();
      foods.onInitial();
    }
  }, [section]);

  return (
    <FoodsContainer>
      <Header>
        <HeaderContentWrapper>
          <div
            style={{
              marginLeft: '34px',
            }}
            className="foods__title-container"
          >
            {translate.tryTranslate('Библиотека')}
          </div>
          <IconButton
            size="small"
            component={Link}
            to={
              section === 'dish'
                ? NAVIGATION.createDishes
                : NAVIGATION.createFoods
            }
          >
            <Icon
              type="CreateNew"
              color="#06B27B"
            />
          </IconButton>
        </HeaderContentWrapper>
      </Header>
      <BodyWrapper>
        <div>
          <ToggleButtonGroup
            value={section}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            fullWidth
            sx={{ marginBottom: '32px' }}
          >
            <ToggleButton
              value="food"
              aria-label="left aligned"
            >
              {translate.tryTranslate('Продукты')}
            </ToggleButton>
            <ToggleButton
              value="dish"
              aria-label="centered"
            >
              {translate.tryTranslate('Блюда')}
            </ToggleButton>
          </ToggleButtonGroup>
          <ListComponent
            status={section === 'dish' ? dishes.status : foods.status}
            componentType={section}
          />
        </div>
      </BodyWrapper>
    </FoodsContainer>
  );
});
