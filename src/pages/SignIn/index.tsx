import React from 'react';
import { translate } from '../../translator';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useStore } from '../../mobx';
import { token } from '../../api/Token';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../routs/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AuthContainer } from './styled';

const SignIn = observer(() => {
  const {
    controllers: {
      auth: { login },
    },
  } = useStore();
  const user = token.userData;
  const nav = useNavigate();
  const {
    values,
    setFieldValue,
    handleSubmit,
    handleReset,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (value) => {
      const isSuccess = await login(value);
      if (isSuccess) {
        nav(NAVIGATION.main);
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
    <AuthContainer>
      <div className="auth__navigation">
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => nav(NAVIGATION.main)}
        >
          <ArrowBackIcon />
        </IconButton>
        {user?.email && (
          <div>
            {translate.tryTranslate('текущий пользоветель')} {user?.email}
          </div>
        )}
      </div>
      <form
        className="auth__form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h1>{translate.tryTranslate('Авторизация')}</h1>
        <span>
          {translate.tryTranslate(
            'Пройдя авторизацию вы сможете использовать мои сервисы'
          )}
        </span>
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
        <div>
          <Button
            disabled={isDisable || isSubmitting}
            type="submit"
            variant="contained"
            sx={{
              marginTop: '10px',
            }}
          >
            {translate.tryTranslate('Войти')}
          </Button>
        </div>
      </form>
    </AuthContainer>
  );
});

export default SignIn;
