import { AuthContainer } from '../SignIn/styled';
import React from 'react';
import { translate } from '../../translator';
import { observer } from 'mobx-react-lite';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useStore } from '../../mobx';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../routs/constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        {...props}
        variant="determinate"
        value={Math.round((props.value / 30) * 100)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}s`}</Typography>
      </Box>
    </Box>
  );
}

const SignUp = observer(() => {
  const {
    controllers: {
      auth: {
        error,
        createOffer,
        register,
        isSendedCode,
        codeTimer,
        updateCodeTime,
      },
    },
  } = useStore();

  React.useEffect(() => {
    if (isSendedCode && codeTimer > 0) {
      const timer = setInterval(() => {
        updateCodeTime(codeTimer - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [codeTimer, isSendedCode, updateCodeTime]);

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
      code: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (value) => {
      const isSuccess = await register({ ...value, code: Number(value.code) });
      if (isSuccess) {
        nav(NAVIGATION.main);
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Required'),
      code: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    validateOnMount: true,
  });
  const isDisable =
    !values.email || !isValid || values.password !== values.repeatPassword;
  const emailError = error?.field === 'email' ? error.message : '';
  console.log('emailError', emailError, error);
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
      </div>
      <form
        className="auth__form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h1>{translate.tryTranslate('Регистрация')}</h1>
        <span>
          {translate.tryTranslate(
            'Только зарегистрированным пользователям доступны мои инструменты'
          )}
        </span>
        <div className="auth__row">
          <TextField
            label="Email"
            variant="outlined"
            value={values.email}
            onChange={(event) => setFieldValue('email', event.target.value)}
            fullWidth
            disabled={isSubmitting || (isSendedCode && codeTimer > 0)}
            error={!!emailError}
          />
          {isSendedCode && codeTimer > 0 ? (
            <CircularProgressWithLabel value={codeTimer} />
          ) : (
            <div className="auth__send-button">
              <IconButton
                aria-label="send-code"
                size="small"
                onClick={() => createOffer(values.email)}
                disabled={!values.email}
              >
                <EmailIcon fontSize="medium" />
              </IconButton>
            </div>
          )}
        </div>
        {isSendedCode && (
          <>
            <TextField
              label="Email code"
              variant="outlined"
              value={values.code}
              onChange={(event) => setFieldValue('code', event.target.value)}
              fullWidth
              disabled={isSubmitting}
            />
            <TextField
              label={translate.tryTranslate('Пароль')}
              variant="outlined"
              value={values.password}
              onChange={(event) =>
                setFieldValue('password', event.target.value)
              }
              fullWidth
              type="password"
              disabled={isSubmitting}
            />
            <TextField
              label={translate.tryTranslate('Повторите пароль')}
              variant="outlined"
              value={values.repeatPassword}
              onChange={(event) =>
                setFieldValue('repeatPassword', event.target.value)
              }
              fullWidth
              type="password"
              disabled={isSubmitting}
            />
          </>
        )}
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

export default SignUp;
