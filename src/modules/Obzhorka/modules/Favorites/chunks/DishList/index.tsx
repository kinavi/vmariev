import { observer } from 'mobx-react-lite';
import { useObjorkaStore } from '../../../../mobx';
import { ViewComponentPlaceholderContainer } from '../../../../components/UserProgramEditor/chunks/ViewComponent/styled';
import { Button } from '@mui/material';
import { NAVIGATION } from '../../../../constants';
import { Link } from 'react-router-dom';
import { translate } from '../../../../../../translator';
import { FoodListContainer } from '../FoodList';
import { DishItem } from '../DishItem';

export const DishList = observer(() => {
  const {
    dishes: { list },
  } = useObjorkaStore();

  const renderPlaceholder = () => (
    <ViewComponentPlaceholderContainer>
      <div>{translate.tryTranslate('Нет блюд')}</div>
      <Button
        component={Link}
        to={NAVIGATION.createDishes}
        variant="outlined"
        size="large"
      >
        {translate.tryTranslate('Создать')}
      </Button>
    </ViewComponentPlaceholderContainer>
  );
  return (
    <FoodListContainer>
      {!list.length && renderPlaceholder()}
      {list.map((item) => (
        <DishItem
          value={item}
          key={`dish-${item.id}`}
        />
      ))}
    </FoodListContainer>
  );
});
