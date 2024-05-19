import React from 'react';
import MeImg from '../../assets/me.png';
import { Button } from '../../ui/components/Button';
import { Icon } from '../../ui/components/Icon';
import { AboutContainer } from './styled';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';

export const About = observer(() => {
  return (
    <AboutContainer id="about">
      <div className="about__about-container">
        <div className="about__info-container animate__animated animate__fadeInLeft">
          <div className="about__name">
            {translate.tryTranslate('Мариев Владимир')}
          </div>
          <div className="about__position">
            {translate.tryTranslate('Full-Stack веб-разработчик')}
          </div>
          <Button
            className="about__button"
            pattern="fill"
            size="xl"
            isFullWight={false}
          >
            {translate.tryTranslate('Установить контакт')}
          </Button>
        </div>
        <div className="about__img-container animate__animated animate__fadeIn animate__slow">
          <img
            src={MeImg}
            alt="me"
          />
        </div>
      </div>
      <div className="about__advantages-container animate__animated animate__fadeInUp ">
        <div className="advantage">
          <Icon
            color="hsla(33, 42%, 60%, 1)"
            size="40"
            type="backpack"
          />
          <div className="advantage__title">
            {translate.tryTranslate('Опыт работы более 5 лет')}
          </div>
          <div className="advantage__discription">
            {translate.tryTranslate(
              'Имею опыт решения задач различных сложностей. Более подробно о моей карьере смотрите на'
            )}{' '}
            <a href="https://www.linkedin.com/in/vladimir-mariev-3436561a6/">
              linkedin
            </a>
          </div>
        </div>
        <div className="advantage">
          <Icon
            color="hsla(33, 42%, 60%, 1)"
            size="40"
            type="tools"
          />
          <div className="advantage__title">
            {translate.tryTranslate('Большой набор инструментов')}
          </div>
          <div className="advantage__discription">
            {translate.tryTranslate(
              'Позволяет мне быстро и легко адаптироваться под разные условия разработки с использование сторонних готовых решений'
            )}
          </div>
        </div>
        <div className="advantage">
          <Icon
            color="hsla(33, 42%, 60%, 1)"
            size="40"
            type="key"
          />
          <div className="advantage__title">
            {translate.tryTranslate('Разработка проекта под ключ')}
          </div>
          <div className="advantage__discription">
            {translate.tryTranslate(
              'Сопровождаю проект на всех этапах разработки. От дизайна и проработки идеи, до запуска проекта на сервере'
            )}
          </div>
        </div>
      </div>
    </AboutContainer>
  );
});
