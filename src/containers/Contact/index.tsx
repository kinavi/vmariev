import React from 'react';
import DATA from '../../INITIAL_DATA.json';
import { ContactContainer } from './styled';
import { getIconByType } from './getIconByType';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';

export const Contact = observer(() => {
  const isMobule = window.screen.availWidth <= 756;
  console.log('isMobule', isMobule);
  const { contacts } = DATA;
  return (
    <ContactContainer id="contact">
      <div className="contact__title">{translate.tryTranslate('Контакты')}</div>
      <div className="contact__content">
        <div className="contact__name">
          {translate.tryTranslate('Мариев Владимир')}
        </div>
        <div className="contact__list">
          {contacts.map((item) => (
            <div
              className="contact__item"
              key={item.type}
            >
              {!isMobule ? (
                <>
                  <div className="contact__icon">
                    {getIconByType(item.type, '35px')}
                  </div>
                  <a
                    target="_blank"
                    href={item.url}
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </>
              ) : (
                <a
                  target="_blank"
                  href={item.url}
                  rel="noreferrer"
                >
                  {getIconByType(item.type, '60px')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContactContainer>
  );
});
