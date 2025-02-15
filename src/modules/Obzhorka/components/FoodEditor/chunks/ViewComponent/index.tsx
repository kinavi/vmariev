import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { Field } from '../../../Field';
import { translate } from '../../../../../../translator';
import { FoodEditorField } from '../../types';

const ViewComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ViewComponent = observer(
  (props: { food?: FoodEditorField; mode: 'view' }) => {
    const { food } = props;
    if (!food) {
      return (
        <ViewComponentContainer>
          {translate.tryTranslate('Данных по продукту нет')}
        </ViewComponentContainer>
      );
    }
    return (
      <ViewComponentContainer>
        <Field label={translate.tryTranslate('Название')}>{food.title}</Field>
        <Field
          label={translate.tryTranslate('Количество протеина на 100г продукта')}
        >
          {food.proteins}
        </Field>
        <Field
          label={translate.tryTranslate('Количество жиров на 100г продукта')}
        >
          {food.fats}
        </Field>
        <Field
          label={translate.tryTranslate(
            'Количество углеводов на 100г продукта'
          )}
        >
          {food.carbohydrates}
        </Field>
      </ViewComponentContainer>
    );
  }
);
