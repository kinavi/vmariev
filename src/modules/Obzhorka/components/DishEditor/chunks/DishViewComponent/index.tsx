import { observer } from 'mobx-react-lite';
import { DishEditorField } from '../../types';
import { ViewComponentContainer } from '../../../UserProgramEditor/chunks/ViewComponent/styled';
import { Field } from '../../../Field';
import { translate } from '../../../../../../translator';
import { FoodItem } from '../../../../modules/Favorites/chunks/FoodItem';
import { Box } from '@mui/material';

export const DishViewComponent = observer(
  (props: { dish?: DishEditorField }) => {
    const { dish } = props;
    if (!dish) {
      return (
        <ViewComponentContainer>
          {translate.tryTranslate('данны по продукту нет')}
        </ViewComponentContainer>
      );
    }

    const _proteins = dish.foods.reduce((acc, item) => {
      return acc + item.food.proteins;
    }, 0);

    const _fats = dish.foods.reduce((acc, item) => {
      return acc + item.food.fats;
    }, 0);

    const _carbohydrates = dish.foods.reduce((acc, item) => {
      return acc + item.food.carbohydrates;
    }, 0);

    const _weight = dish.foods.reduce((acc, item) => {
      return acc + item.weight;
    }, 0);

    const totalCal = dish.foods.reduce((acc, item) => {
      const result =
        ((item.food.carbohydrates * 4 +
          item.food.fats * 9 +
          item.food.proteins * 4) *
          item.weight) /
        100;
      return acc + result;
    }, 0);

    return (
      <ViewComponentContainer>
        <Field label={translate.tryTranslate('Название')}>{dish.title}</Field>
        <Field
          label={translate.tryTranslate('Общее количество протеина, грамм')}
        >
          {_proteins}
        </Field>
        <Field label={translate.tryTranslate('Общее количество жиров, грамм')}>
          {_fats}
        </Field>
        <Field
          label={translate.tryTranslate('Общее количество углеводов, грамм')}
        >
          {_carbohydrates}
        </Field>
        <Field label={translate.tryTranslate('Общее вес, грамм')}>
          {_weight}
        </Field>
        <Field
          label={translate.tryTranslate('Общее количество каллориев, ккал')}
        >
          {totalCal.toFixed(2)}
        </Field>
        <Field label={translate.tryTranslate('Список продуктов')}>
          <Box
            display="flex"
            flexDirection="column"
            gap="8px"
          >
            {dish.foods.map((item) => (
              <FoodItem
                value={item.food}
                isReadonly
                key={item.key}
              />
            ))}
          </Box>
        </Field>
      </ViewComponentContainer>
    );
  }
);
