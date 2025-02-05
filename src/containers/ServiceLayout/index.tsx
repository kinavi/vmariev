import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';
import { token } from '../../api/Token';
import { AuthMode } from './chunks/AuthMode';
import { PublicMode } from './chunks/PublicMode';
import { ServiceCard } from './chunks/ServiceCard';
import { ServiceLayoutContainer } from './styled';
import { NAVIGATION } from '../../routs/constants';

export const ServiceLayout = observer(() => {
  const userData = token.userData;

  return (
    <ServiceLayoutContainer id="pet-projects">
      <div className="service-layout__title">
        {translate.tryTranslate('Личные проекты')}
      </div>
      <div className="service-layout__body">
        <div className="service-layout__right-column">
          <ServiceCard
            url={NAVIGATION.time}
            iconType="time"
            title={translate.tryTranslate('Время')}
            description={translate.tryTranslate(
              'Инструмент для отслеживания времени потраченного на задачи'
            )}
          />
          <ServiceCard
            iconType="obzhorka"
            title={translate.tryTranslate('Обжорка')}
            description={translate.tryTranslate(
              'Сервис для ведения дневников питания'
            )}
            url={NAVIGATION.obzhorka}
          />
        </div>
        <div className="service-layout__left-column">
          {userData ? <AuthMode userData={userData} /> : <PublicMode />}
        </div>
      </div>
    </ServiceLayoutContainer>
  );
});
