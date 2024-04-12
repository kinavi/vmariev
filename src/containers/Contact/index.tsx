import React from 'react';
import DATA from '../../INITIAL_DATA.json';
import { ContactContainer } from './styled';
import { getIconByType } from './getIconByType';

export const Contact = () => {
  const isMobule = window.screen.availWidth <= 756;
  console.log('isMobule', isMobule);
  const { contacts } = DATA;
  return (
    <ContactContainer id="contact">
      <div className="contact__title">Контакты</div>
      <div className="contact__content">
        <div className="contact__name">Мариев Владимир</div>
        <div className="contact__list">
          {contacts.map((item) => (
            <div
              className="contact__item"
              key={item.type}
            >
              {!isMobule ? (
                <>
                  <div className="contact__icon">
                    {getIconByType(item.type)}
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
};
