import { observer } from 'mobx-react-lite';
import { translate } from '../../../../translator';
import { Button } from '../../../../ui/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { NAVIGATION } from '../../../../routs/constants';

export const PublicMode = observer(() => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation(NAVIGATION.signUp);
  };
  return (
    <>
      <div className="service-layout__sign-title">
        {translate.tryTranslate(
          'Для использовании инструментов нужна учетная запись'
        )}
      </div>
      <Button
        className="service-layout__button"
        pattern="fill"
        size="xl"
        onClick={handleClick}
      >
        {translate.tryTranslate('Регистрация')}
      </Button>
      <Link
        to={NAVIGATION.signIn}
        className="service-layout__link"
      >
        {translate.tryTranslate('Войти')}
      </Link>
    </>
  );
});
