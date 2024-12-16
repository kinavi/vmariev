import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { translate } from '../../../../../../translator';
import { useStore } from '../../../../../../mobx';
import { observer } from 'mobx-react-lite';

export const PasswordStep = observer(
  (props: { onBack?: () => void; onForward: () => void }) => {
    const { onForward, onBack } = props;
    const {
      controllers: { auth },
    } = useStore();
    const {
      values,
      setFieldValue,
      handleSubmit,
      handleReset,
      isSubmitting,
      errors,
    } = useFormik({
      initialValues: {
        password: '',
        repidPassword: '',
      },
      onSubmit: async (value, helper) => {
        const isSuccess = await auth.register({
          password: value.password,
          code: Number(auth.snapshotCode),
          email: auth.snapshotEmail,
        });
        if (isSuccess) {
          onForward();
        } else {
          helper.setErrors({
            password: 'Не удалось установить пароль',
          });
        }
      },
      validationSchema: Yup.object().shape({
        password: Yup.string().required('Введите пароль, чтобы продолжить'),
        repidPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
          .required('Подтверждение пароля обязательно'),
      }),
      validateOnChange: true,
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
            error={!!errors.password}
            helperText={errors.password}
            label={translate.tryTranslate('Пароль')}
            variant="outlined"
            value={values.password}
            onChange={(event) => setFieldValue('password', event.target.value)}
            fullWidth
            disabled={isSubmitting}
            type="password"
          />
          <TextField
            error={!!errors.repidPassword}
            helperText={errors.repidPassword}
            label={translate.tryTranslate('Подтвердите пароль')}
            variant="outlined"
            value={values.repidPassword}
            onChange={(event) =>
              setFieldValue('repidPassword', event.target.value)
            }
            fullWidth
            disabled={isSubmitting}
            type="password"
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
  }
);
