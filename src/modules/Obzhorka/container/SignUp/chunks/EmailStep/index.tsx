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
  const { values, setFieldValue, handleSubmit, handleReset, isSubmitting } =
    useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: async (value) => {
        onForward();
        // const isSuccess = await login(value);
        // if (isSuccess) {
        //   navigate(NAVIGATION.main);
        // }
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().required('Required'),
      }),
      validateOnMount: true,
    });
  const isDisable = !values.email;
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
