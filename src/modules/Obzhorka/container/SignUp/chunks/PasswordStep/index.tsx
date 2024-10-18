import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { translate } from '../../../../../../translator';

export const PasswordStep = (props: {
  onBack?: () => void;
  onForward: () => void;
}) => {
  const { onForward, onBack } = props;
  const { values, setFieldValue, handleSubmit, handleReset, isSubmitting } =
    useFormik({
      initialValues: {
        password: '',
        repidPassword: '',
      },
      onSubmit: async (value) => {
        onForward();
        // const isSuccess = await login(value);
        // if (isSuccess) {
        //   navigate(NAVIGATION.main);
        // }
      },
      validationSchema: Yup.object().shape({
        password: Yup.string().required('Required'),
        repidPassword: Yup.string().required('Required'),
      }),
      validateOnMount: true,
    });
  const isDisable = !values.password || !values.repidPassword;
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
          'Чтобы завершить регистрацию установить пароль'
        )}
      </p>
      <div className="sign-up__fields">
        <TextField
          label={translate.tryTranslate('Пароль')}
          variant="outlined"
          value={values.password}
          onChange={(event) => setFieldValue('password', event.target.value)}
          fullWidth
          disabled={isSubmitting}
        />
        <TextField
          label={translate.tryTranslate('Подтвердите пароль')}
          variant="outlined"
          value={values.repidPassword}
          onChange={(event) =>
            setFieldValue('repidPassword', event.target.value)
          }
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
          {translate.tryTranslate('Сохранить')}
        </Button>
      </div>
    </form>
  );
};
