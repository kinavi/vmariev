import React, { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from './chunks/MobileMenu';
import { Button } from '../../ui/components/Button';
import { Icon } from '../../ui/components/Icon';
import { HeaderContainer } from './styled';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';
import { DropDown } from '../../ui/components/DropDown';
import EnFlagImg from '../../assets/img/en-flag.png';
import RuFlagImg from '../../assets/img/ru-flag.png';
import { Menu } from '../../ui/components/Menu';

export const Header = observer(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { hash } = useLocation();

  const hendle = (event: Event) => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener('scroll', hendle);
    return () => document.removeEventListener('scroll', hendle);
  }, []);

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      className="animate__animated animate__fadeInDown"
    >
      <div className="header__wrapper">
        <div className="header__logo-container">
          <div className="header__logo">
            {translate.tryTranslate('Мариев Владимир')}
          </div>
          <div className="header__position">
            {translate.tryTranslate('Программист')}
          </div>
        </div>
        <div className="header__links-container">
          <a
            href="#about"
            className={classNames('header__link', {
              header__link_active: hash === '#about',
            })}
          >
            {translate.tryTranslate('Обо мне')}
          </a>
          <a
            href="#services"
            className={classNames('header__link', {
              header__link_active: hash === '#services',
            })}
          >
            {translate.tryTranslate('Услуги')}
          </a>
          {/* <a
            href="#tools"
            className={classNames('header__link', {
              header__link_active: hash === '#tools',
            })}
          >
            Инструменты
          </a> */}
          <a
            href="#review"
            className={classNames('header__link', {
              header__link_active: hash === '#review',
            })}
          >
            {translate.tryTranslate('Отзывы')}
          </a>
          <a
            href="#contact"
            className={classNames('header__link', {
              header__link_active: hash === '#contact',
            })}
          >
            {translate.tryTranslate('Контакты')}
          </a>
        </div>
        <DropDown
          className="header__drop-down"
          content={(close) => (
            <Menu
              onClose={close}
              options={[
                {
                  content: (
                    <img
                      src={EnFlagImg}
                      alt="EnFlagImg"
                    />
                  ),
                  onClick: () => translate.setDictionary('en'),
                },
                {
                  content: (
                    <img
                      src={RuFlagImg}
                      alt="RuFlagImg"
                    />
                  ),
                  onClick: () => translate.setDictionary('ru'),
                },
              ]}
            />
          )}
        >
          <>
            {translate.lang === 'en' ? (
              <img
                src={EnFlagImg}
                alt="EnFlagImg"
              />
            ) : (
              <img
                src={RuFlagImg}
                alt="RuFlagImg"
              />
            )}
          </>
        </DropDown>
        <Button
          onClick={() => setIsOpenMenu((v) => !v)}
          className="header__menu-button"
          pattern={isOpenMenu ? 'fill' : 'none'}
        >
          {isOpenMenu ? (
            <Icon type="cross" />
          ) : (
            <BsList
              color="#c49e6e"
              size="2em"
            />
          )}
        </Button>
        <MobileMenu
          isOpen={isOpenMenu}
          hash={hash}
          onClose={() => setIsOpenMenu(!isOpenMenu)}
        />
      </div>
    </HeaderContainer>
  );
});
