import React from 'react';
import MeImg from '../../assets/me.png';
import { Button } from '../../ui/components/Button';
import { Icon } from '../../ui/components/Icon';
import { AboutContainer } from './styled';

export const About = () => {
  return (
    <AboutContainer id="about">
      <div className="about__about-container">
        <div className="about__info-container animate__animated animate__fadeInLeft">
          <div className="about__name">Мариев Владимир</div>
          <div className="about__position">Full-Stack веб-разработчик </div>
          <Button
            className="about__button"
            pattern="fill"
            size="xl"
            isFullWight={false}
          >
            Установить контакт
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
          <div className="advantage__title">Опыт работы более 5 лет</div>
          <div className="advantage__discription">
            Имеется огромное количество наработок, что существенно ускоряет
            процесс разработки
          </div>
        </div>
        <div className="advantage">
          <Icon
            color="hsla(33, 42%, 60%, 1)"
            size="40"
            type="tools"
          />
          <div className="advantage__title">Большой набор нструментов</div>
          <div className="advantage__discription">
            Позволяет быстро и легко адаптироваться под разные условия
            разработки с использование сторонних готовых решений
          </div>
        </div>
        <div className="advantage">
          <Icon
            color="hsla(33, 42%, 60%, 1)"
            size="40"
            type="key"
          />
          <div className="advantage__title">Разработка проекта под ключ</div>
          <div className="advantage__discription">
            Сопровождаю проект на всех этапах разработки. От дизайна и
            проработки идеи, до развертывание проекта на сервере
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};
