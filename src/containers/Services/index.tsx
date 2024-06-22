import React from 'react';
import DATA from '../../INITIAL_DATA.json';
import { BlockHeader } from '../../components/BlockHeader';
import { Button } from '../../ui/components/Button';
import { ServicesContainer } from './styled';
import { Icon } from '../../ui/components/Icon';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';

export const Services = observer(() => {
  return (
    <ServicesContainer id="services">
      <BlockHeader title={translate.tryTranslate('Услуги')}>
        <div className="services__button-container">
          {/* <div className="services__price">1000 руб/час</div> */}
          {/* <a
            href="#contact"
            className="services__button"
          >
            Заказать
          </a> */}
          {/* <Button
            pattern="outline"
            size="xl"
          >
            {translate.tryTranslate('Сделать заказ')}
          </Button> */}
        </div>
      </BlockHeader>
      <div className="services__list">
        {DATA.services.map((item) => (
          <div
            className="services__cell cell"
            key={item.title}
          >
            <div className="cell__header">
              <div className="cell__title">
                {translate.tryTranslate(item.title)}
              </div>
              {item.isPrimary && <Icon type="activeStar" />}
            </div>
            <div className="cell__label-list">
              {item.labes.map((label) => (
                <div
                  className="cell__label"
                  key={label.text}
                >
                  {translate.tryTranslate(label.text)}
                </div>
              ))}
            </div>
            <div className="cell__text">
              {translate.tryTranslate(item.text)}
            </div>
          </div>
        ))}
      </div>
    </ServicesContainer>
  );
});
