import { observer } from 'mobx-react-lite';
import { DishEditorField } from '../../types';
import { ViewComponentContainer } from '../../../UserProgramEditor/chunks/ViewComponent/styled';
import { Field } from '../../../Field';
import { translate } from '../../../../../../translator';
import { FoodItem } from '../../../../modules/Favorites/chunks/FoodItem';
import { Box, Button } from '@mui/material';
import { DishEditorFoodItem } from '../DishEditorFoodItem';
import { useState } from 'react';

export const DishViewComponent = observer(
  (props: {
    mode: 'view';
    dish?: DishEditorField;
    onChangeStatus: (updatedFields: DishEditorField) => Promise<void>;
  }) => {
    const { dish, onChangeStatus } = props;
    const [isSubmitStatus, setIsSubmitStatus] = useState(false);
    if (!dish) {
      return (
        <ViewComponentContainer>
          {translate.tryTranslate('данны по продукту нет')}
        </ViewComponentContainer>
      );
    }

    const _proteins = dish.foods.reduce((acc, item) => {
      return acc + (item.food.proteins * item.weight) / 100;
    }, 0);

    const _fats = dish.foods.reduce((acc, item) => {
      return acc + (item.food.fats * item.weight) / 100;
    }, 0);

    const _carbohydrates = dish.foods.reduce((acc, item) => {
      return acc + (item.food.carbohydrates * item.weight) / 100;
    }, 0);

    const _weight = dish.foods.reduce((acc, item) => {
      return acc + item.weight;
    }, 0);

    const totalCal = dish.foods.reduce((acc, item) => {
      const pfc =
        item.food.carbohydrates * 4 +
        item.food.fats * 9 +
        item.food.proteins * 4;
      const result = (pfc * item.weight) / 100;
      return acc + result;
    }, 0);

    return (
      <ViewComponentContainer>
        <Field label={translate.tryTranslate('Название')}>{dish.title}</Field>
        <Field
          label={translate.tryTranslate('Общее количество протеина, грамм')}
        >
          {_proteins.toFixed(2)}
        </Field>
        <Field label={translate.tryTranslate('Общее количество жиров, грамм')}>
          {_fats.toFixed(2)}
        </Field>
        <Field
          label={translate.tryTranslate('Общее количество углеводов, грамм')}
        >
          {_carbohydrates.toFixed(2)}
        </Field>
        <Field label={translate.tryTranslate('Общее вес, грамм')}>
          {_weight.toFixed(2)}
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
              <DishEditorFoodItem
                value={item}
                key={item.key}
              />
            ))}
          </Box>
        </Field>
        <Button
          variant="outlined"
          color="error"
          disabled={isSubmitStatus}
          onClick={() => {
            const updatedStatus = dish.status === 'ACTIVE' ? 'CLOSE' : 'ACTIVE';
            setIsSubmitStatus(true);
            onChangeStatus({
              ...dish,
              status: updatedStatus,
            }).finally(() => {
              setIsSubmitStatus(false);
            });
          }}
        >
          {dish.status === 'ACTIVE'
            ? translate.tryTranslate('Перенести в архив')
            : translate.tryTranslate('Перенести из архива')}
        </Button>
      </ViewComponentContainer>
    );
  }
);
