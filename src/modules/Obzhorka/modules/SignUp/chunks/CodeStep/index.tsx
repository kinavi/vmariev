import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { translate } from '../../../../../../translator';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../../../../mobx';

export const CodeStep = observer(
  (props: { onBack?: () => void; onForward: () => void }) => {
    const {
      controllers: { auth },
    } = useStore();
    const { onForward, onBack } = props;
    const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
      useFormik({
        initialValues: {
          code: '',
        },
        onSubmit: async (value, helper) => {
          const isSuccess = await auth.checkCode(value.code);
          if (isSuccess) {
            onForward();
          } else {
            helper.setErrors({
              code: 'Код неверный. Давайте попробуем еще раз!',
            });
          }
        },
        validationSchema: Yup.object().shape({
          code: Yup.string().required('Введи код из письма для продолжения!'),
        }),
        validateOnChange: true,
      });
    const isDisable = !values.code;
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
            'На вашу почту был отправлен код. Введите его для подтверждения почты'
          )}
        </p>
        <div className="sign-up__fields">
          <TextField
            helperText={errors.code}
            error={!!errors.code}
            label={translate.tryTranslate('Код из письма')}
            variant="outlined"
            value={values.code}
            onChange={(event) => setFieldValue('code', event.target.value)}
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
  }
);
