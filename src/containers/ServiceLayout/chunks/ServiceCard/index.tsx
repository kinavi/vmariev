import { observer } from 'mobx-react-lite';
import { Icon } from '../../../../ui/components/Icon';
import { Link } from 'react-router-dom';
import { translate } from '../../../../translator';
import { ServiceCardContainer } from './styled';

export const ServiceCard = observer(
  (props: {
    iconType: 'coins' | 'time';
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

    return (
      <ServiceCardContainer>
        <Icon
          type={props.iconType}
          size="50px"
          color="white"
        />
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
