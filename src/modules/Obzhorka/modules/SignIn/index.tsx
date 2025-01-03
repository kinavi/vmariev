import Logo from '../../assets/logo.png';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { translate } from '../../../../translator';
import * as Yup from 'yup';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../mobx';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import { GlobalStyle, SignInContainer } from './styled';

export const SignIn = observer(() => {
  const {
    controllers: {
      auth: { login },
    },
  } = useStore();
  const navigate = useNavigate();
  const { values, setFieldValue, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (value) => {
      const isSuccess = await login(value);
      if (isSuccess) {
        navigate(NAVIGATION.main);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    validateOnMount: true,
  });
  const isDisable = !values.email || !values.password;
  return (
    <SignInContainer>
      <GlobalStyle />
      <img
        className="sign-in__logo"
        src={Logo}
        alt="Logo"
      />
      <h1 className="sign-in__title">{translate.tryTranslate('Вход')}</h1>
      <p className="sign-in__description">
        Авторизайтесь и получите доступ к сервису
      </p>
      <form
        className="sign-in__form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <div className="sign-in__fields">
          <TextField
            label="Email"
            variant="outlined"
            value={values.email}
            onChange={(event) => setFieldValue('email', event.target.value)}
            fullWidth
            disabled={isSubmitting}
          />
          <TextField
            label={translate.tryTranslate('Пароль')}
            variant="outlined"
            value={values.password}
            onChange={(event) => setFieldValue('password', event.target.value)}
            fullWidth
            type="password"
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="sign-in__button"
          disabled={isDisable}
          size="large"
        >
          {translate.tryTranslate('Войти')}
        </Button>
        <div className="sign-in__footer">
          <div>Если у вас нет учетной записи, вы можете ее создать</div>
          <Link
            to={NAVIGATION.signUp}
            className="sign-in__link"
          >
            {translate.tryTranslate('Регистрация')}
          </Link>
        </div>
      </form>
    </SignInContainer>
  );
});
