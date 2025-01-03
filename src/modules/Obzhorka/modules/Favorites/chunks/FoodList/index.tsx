import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { useObjorkaStore } from '../../../../mobx';
import { translate } from '../../../../../../translator';
import { ViewComponentPlaceholderContainer } from '../../../../components/UserProgramEditor/chunks/ViewComponent/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../../../constants';
import { FoodItem } from '../FoodItem';

export const FoodListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FoodList = observer(() => {
  const {
    foods: { list: foods },
  } = useObjorkaStore();

  const renderPlaceholder = () => (
    <ViewComponentPlaceholderContainer>
      <div>{translate.tryTranslate('Нет продуктов')}</div>
      <Button
        component={Link}
        to={NAVIGATION.createFoods}
        variant="outlined"
        size="large"
      >
        {translate.tryTranslate('Создать')}
      </Button>
    </ViewComponentPlaceholderContainer>
  );

  return (
    <FoodListContainer>
      {!foods.length && renderPlaceholder()}
      {foods.map((item) => (
        <FoodItem
          value={item}
          key={`food-${item.id}`}
        />
      ))}
    </FoodListContainer>
  );
});
