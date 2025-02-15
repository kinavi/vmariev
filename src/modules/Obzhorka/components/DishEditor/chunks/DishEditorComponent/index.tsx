import { observer } from 'mobx-react-lite';
import { DishEditorField } from '../../types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { translate } from '../../../../../../translator';
import styled from 'styled-components';
import { useObjorkaStore } from '../../../../mobx';
import { DishEditorFoodItem } from '../DishEditorFoodItem';

const DishEditorComponentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const DishEditorComponent = observer(
  (props: {
    mode: 'editor';
    dish?: DishEditorField;
    onEdit: (fields: DishEditorField) => Promise<void>;
  }) => {
    const { dish, onEdit } = props;
    const { modal } = useObjorkaStore();

    const { values, setFieldValue, isSubmitting, handleSubmit } = useFormik({
      initialValues: {
        title: dish?.title || '',
        foods: dish?.foods || [],
      },
      onSubmit: async (values) => {
        return onEdit({ ...values, status: dish?.status || 'ACTIVE' });
      },
      validationSchema: Yup.object().shape({
        title: Yup.string().required(),
      }),
      validateOnMount: true,
      validateOnChange: true,
    });

    const handleRemoveFood = (foodKey: string) => {
      const updatedFood = values.foods.filter((item) => item.key !== foodKey);
      setFieldValue('foods', updatedFood);
    };

    const isDisableSubmit = !values.title || !values.foods.length;

    return (
      <DishEditorComponentContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="dish-title-field"
          label={translate.tryTranslate('Название блюда')}
          variant="outlined"
          value={values.title || null}
          onChange={(e) => {
            const value = e.target.value;
            setFieldValue('title', value);
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
        >
          <Typography variant="h6">
            {translate.tryTranslate('Список продуктов')}
          </Typography>
          {!values.foods.length && (
            <Box>
              <Typography variant="body1">
                {translate.tryTranslate('Продукты не выбранны')}
              </Typography>
            </Box>
          )}
          {!!values.foods.length && (
            <Box
              display="flex"
              flexDirection="column"
              gap="10px"
            >
              {values.foods.map((item) => (
                <DishEditorFoodItem
                  key={`food-${item.food.id}`}
                  value={item}
                  onRemove={handleRemoveFood}
                />
              ))}
            </Box>
          )}
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              modal.onOpenModal('selectFoods', {
                onSubmit: (selectedFood) => {
                  console.log('selectedFood', selectedFood);
                  setFieldValue('foods', [...values.foods, selectedFood]);
                  modal.onCloseLastModal();
                },
              });
            }}
          >
            {translate.tryTranslate('Добавить')}
          </Button>
        </Box>
        <Button
          type="submit"
          variant="contained"
          disabled={isDisableSubmit}
        >
          {translate.tryTranslate('Сохранить')}
        </Button>
      </DishEditorComponentContainer>
    );
  }
);
