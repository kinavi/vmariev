import { observer } from 'mobx-react-lite';
import { Icon } from '../../../../ui/components/Icon';
import { Link } from 'react-router-dom';
import { translate } from '../../../../translator';
import { ServiceCardContainer } from './styled';
import Logo from '../../../../modules/Obzhorka/assets/logo.png';

export const ServiceCard = observer(
  (props: {
    iconType: 'coins' | 'time' | 'obzhorka';
    title: string;
    description: string;
    url?: string;
  }) => {
    const renderTitle = () => {
      if (props.url) {
        return (
          <Link
            className="service-card__link"
            to={props.url}
          >
            {props.title}
          </Link>
        );
      }
      return props.title;
    };

    const renderIcon = () => {
      if (props.iconType === 'obzhorka') {
        return (
          <img
            style={{ width: '50px' }}
            src={Logo}
            alt="obzhorka-logo"
          />
        );
      }
      return (
        <Icon
          type={props.iconType}
          size="50px"
          color="white"
        />
      );
    };

    return (
      <ServiceCardContainer>
        {renderIcon()}
        <div className="service-card__title">{renderTitle()}</div>
        <div className="service-card__description">{props.description}</div>
        {!props.url && (
          <div className="service-card__status">
            {translate.tryTranslate('Инструмент в разработке')}
          </div>
        )}
      </ServiceCardContainer>
    );
  }
);
