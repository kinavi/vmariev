import { observer } from 'mobx-react-lite';
import { translate } from '../../../../translator';
import { token } from '../../../../api/Token';
import { Button } from '../../../../ui/components/Button';

export const AuthMode = observer(
  ({
    userData: { email },
  }: {
    userData: NonNullable<typeof token.userData>;
  }) => {
    return (
      <>
        <div className="service-layout__sign-title">
          {translate.tryTranslate('Вы успешно авторизовались')}
        </div>
        <div>
          email: <span style={{ color: '#C49E6E' }}>{email}</span>
        </div>
        <Button
          onClick={() => {
            token.clear();
            window.location.assign('/');
          }}
          pattern="none"
          className="service-layout__link"
        >
          {translate.tryTranslate('Выйти')}
        </Button>
      </>
    );
  }
);
