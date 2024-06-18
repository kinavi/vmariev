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
    <ServiceLayoutContainer id="my-tools">
      <div className="service-layout__title">
        {translate.tryTranslate('Мои инструменты')}
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
            iconType="coins"
            title={translate.tryTranslate('Монеты')}
            description={translate.tryTranslate(
              'Инструмент для учета расходов и управления личным капиталом'
            )}
          />
        </div>
        <div className="service-layout__left-column">
          {userData ? <AuthMode userData={userData} /> : <PublicMode />}
        </div>
      </div>
    </ServiceLayoutContainer>
  );
});
