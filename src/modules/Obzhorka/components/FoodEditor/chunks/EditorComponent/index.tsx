import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { translate } from '../../../../../../translator';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { FoodEditorField } from '../../types';

const EditorComponentContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const EditorComponent = observer(
  (props: {
    food?: FoodEditorField;
    onEdit: (value: FoodEditorField) => Promise<void>;
  }) => {
    const { food, onEdit } = props;
    const { values, setFieldValue, isSubmitting, isValid, handleSubmit } =
      useFormik({
        initialValues: {
          title: food?.title || '',
          proteins: food?.proteins || NaN,
          fats: food?.fats || NaN,
          carbohydrates: food?.carbohydrates || NaN,
        },
        onSubmit: async (values) => {
          return onEdit(values);
        },
        validationSchema: Yup.object().shape({
          title: Yup.string().required(),
          proteins: Yup.number().required(),
          fats: Yup.number().required(),
          carbohydrates: Yup.number().required(),
        }),
        validateOnMount: true,
        validateOnChange: true,
      });
    const hasChange =
      food?.title !== values.title ||
      +food.proteins !== +values.proteins ||
      +food.fats !== +values.fats ||
      +food.carbohydrates !== +values.carbohydrates;
    return (
      <EditorComponentContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="food-title-field"
          label={translate.tryTranslate('Название продукта')}
          variant="outlined"
          value={values.title || null}
          onChange={(e) => {
            const value = e.target.value;
            setFieldValue('title', value);
          }}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="food-proteins-field"
          label={translate.tryTranslate('Белков на 100 грамм продукта')}
          variant="outlined"
          value={values.proteins || null}
          onChange={(e) => {
            const value = e.target.value;
            setFieldValue('proteins', value);
          }}
          error={typeof Number(values.proteins) !== 'number'}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="food-fats-field"
          label={translate.tryTranslate('Жиров на 100 грамм продукта')}
          variant="outlined"
          value={values.fats || null}
          onChange={(e) => {
            const value = e.target.value;
            setFieldValue('fats', value);
          }}
          error={typeof Number(values.fats) !== 'number'}
        />
        <TextField
          disabled={isSubmitting}
          fullWidth
          id="food-carbohydrates-field"
          label={translate.tryTranslate('Углеводов на 100 грамм продукта')}
          variant="outlined"
          value={values.carbohydrates || null}
          onChange={(e) => {
            const value = e.target.value;
            setFieldValue('carbohydrates', value);
          }}
          error={typeof Number(values.carbohydrates) !== 'number'}
        />
        <LoadingButton
          loading={isSubmitting}
          disabled={!isValid || !hasChange}
          variant="contained"
          size="large"
          type="submit"
        >
          {translate.tryTranslate('Сохранить')}
        </LoadingButton>
      </EditorComponentContainer>
    );
  }
);
