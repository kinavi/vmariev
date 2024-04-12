import React, { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from './chunks/MobileMenu';
import { Button } from '../../ui/components/Button';
import { Icon } from '../../ui/components/Icon';
import { HeaderContainer } from './styled';

export const Header = () => {
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
          <div className="header__logo">Мариев Владимир</div>
          <div className="header__position">Программист</div>
        </div>
        <div className="header__links-container">
          <a
            href="#about"
            className={classNames('header__link', {
              header__link_active: hash === '#about',
            })}
          >
            Обо мне
          </a>
          <a
            href="#services"
            className={classNames('header__link', {
              header__link_active: hash === '#services',
            })}
          >
            Услуги
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
            Отзывы
          </a>
          <a
            href="#contact"
            className={classNames('header__link', {
              header__link_active: hash === '#contact',
            })}
          >
            Контакты
          </a>
        </div>
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
};
