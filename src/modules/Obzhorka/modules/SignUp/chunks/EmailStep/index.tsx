import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { translate } from '../../../../../../translator';
import { useStore } from '../../../../../../mobx';

export const EmailStep = (props: {
  onBack?: () => void;
  onForward: () => void;
}) => {
  const { onForward, onBack } = props;
  const {
    controllers: { auth },
  } = useStore();
  const {
    isValid,
    values,
    setFieldValue,
    handleSubmit,
    handleReset,
    isSubmitting,
    errors,
  } = useFormik({
    initialValues: {
      email: auth.snapshotEmail,
    },
    onSubmit: async (value, helper) => {
      const isSuccess = await auth.createOffer(value.email);
      if (isSuccess) {
        onForward();
      } else {
        helper.setErrors({
          email: 'Не удалось отправить код на почту',
        });
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Введите ваш email')
        .email('Пожалуйста, введите корректный email для продолжения'),
    }),
    validateOnChange: true,
    // validateOnMount: true,
  });
  const isDisable = !values.email || !isValid;
  return (
    <form
      className="sign-up__form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <p className="sign-up__description">
        {translate.tryTranslate(
          'Укажите почту на которую будет отправленная ссылка для регистрации'
        )}
      </p>
      <div className="sign-up__fields">
        <TextField
          error={!!errors.email}
          helperText={errors.email}
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={(event) => setFieldValue('email', event.target.value)}
          fullWidth
          disabled={isSubmitting}
        />
      </div>
      <div className="sign-up__button-contianer">
        {onBack && (
          <Button
            fullWidth
            variant="outlined"
            className="sign-up__button"
            onClick={onBack}
            size="large"
          >
            {translate.tryTranslate('Назад')}
          </Button>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="sign-up__button"
          disabled={isDisable}
          size="large"
        >
          {translate.tryTranslate('Отправить')}
        </Button>
      </div>
    </form>
  );
};
