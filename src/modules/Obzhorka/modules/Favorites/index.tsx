import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { BodyWrapper, HeaderContentWrapper } from '../../styled';
import {
  FormControlLabel,
  IconButton,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { Icon } from '../../../../ui/components/Icon';
import { translate } from '../../../../translator';
import { useObjorkaStore } from '../../mobx';
import { FoodList } from './chunks/FoodList';
import { NAVIGATION } from '../../constants';
import { Link, useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [section, setSection] = useState<SectionType>(
    (searchParams.get('tab') as SectionType) || SectionType.food
  );
  const [showOnlyCloseDishies, setShowOnlyCloseDishies] = useState(false);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: SectionType
  ) => {
    if (newAlignment) {
      setSection(newAlignment);
      setSearchParams((prev) => ({ ...prev, tab: newAlignment }));
    }
  };

  useEffect(() => {
    if (section === 'dish') {
      resetFoods();
      dishes.onInitial(showOnlyCloseDishies);
    } else {
      resetDishes();
      foods.onInitial();
    }
  }, [section, showOnlyCloseDishies]);

  return (
    <FoodsContainer>
      <Header>
        <HeaderContentWrapper>
          <div
            style={{
              marginLeft: '24px',
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
              disabled={section === SectionType.food}
              value="food"
              aria-label="left aligned"
            >
              {translate.tryTranslate('Продукты')}
            </ToggleButton>
            <ToggleButton
              disabled={section === SectionType.dish}
              value="dish"
              aria-label="centered"
            >
              {translate.tryTranslate('Блюда')}
            </ToggleButton>
          </ToggleButtonGroup>
          {section === SectionType.dish && (
            <FormControlLabel
              sx={{
                marginBottom: '10px',
              }}
              control={
                <Switch
                  checked={showOnlyCloseDishies}
                  onChange={(event) => {
                    console.log(event.target.checked);
                    setShowOnlyCloseDishies(event.target.checked);
                  }}
                />
              }
              label={translate.tryTranslate('Показать архивные')}
            />
          )}
          <ListComponent
            status={section === 'dish' ? dishes.status : foods.status}
            componentType={section}
          />
        </div>
      </BodyWrapper>
    </FoodsContainer>
  );
});
