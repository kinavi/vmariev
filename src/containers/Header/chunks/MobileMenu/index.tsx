import classNames from 'classnames';
import { useEffect, useState } from 'react';
import DATA from '../../../../INITIAL_DATA.json';
import { MobileMenuContainer } from './styled';
import { getIconByType } from '../../../Contact/getIconByType';
import { DropDown } from '../../../../ui/components/DropDown';
import { Menu } from '../../../../ui/components/Menu';
import EnFlagImg from '../../../../assets/img/en-flag.png';
import RuFlagImg from '../../../../assets/img/ru-flag.png';
import { translate } from '../../../../translator';
import { observer } from 'mobx-react-lite';

export const MobileMenu = observer(
  (props: { onClose: () => void; hash?: string; isOpen: boolean }) => {
    const { onClose, hash, isOpen } = props;
    const [isShow, setIsShow] = useState(isOpen);
    const { contacts } = DATA;

    useEffect(() => {
      if (!isOpen) {
        setTimeout(() => {
          setIsShow(false);
        }, 500);
      } else {
        setIsShow(true);
      }
    }, [isOpen]);

    if (!isShow) {
      return null;
    }

    return (
      <MobileMenuContainer>
        <div
          className={classNames(
            'mobile-menu__overlayer',
            `animate__animated`,
            isOpen
              ? 'animate__fadeIn animate__fast'
              : 'animate__fadeOut animate__faster'
          )}
          onClick={() => {
            onClose();
            console.log('click');
          }}
        />
        <div
          className={classNames(
            'mobile-menu__contents animate__animated',
            isOpen
              ? 'animate__fadeInLeft animate__fast'
              : 'animate__fadeOutLeft animate__faster'
          )}
        >
          <div className="mobile-menu__links">
            <a
              onClick={onClose}
              href="#about"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#about',
              })}
            >
              {translate.tryTranslate('Обо мне')}
            </a>
            <a
              onClick={onClose}
              href="#services"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#services',
              })}
            >
              {translate.tryTranslate('Услуги')}
            </a>
            <a
              onClick={onClose}
              href="#how-i-work"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#how-i-work',
              })}
            >
              {translate.tryTranslate('Как я работаю')}
            </a>
            <a
              onClick={onClose}
              href="#review"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#review',
              })}
            >
              {translate.tryTranslate('Отзывы')}
            </a>
            <a
              onClick={onClose}
              href="#contact"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#contact',
              })}
            >
              {translate.tryTranslate('Контакты')}
            </a>
            <a
              onClick={onClose}
              href="#my-tools"
              className={classNames('mobile-menu__link', {
                'mobile-menu__link_active': hash === '#my-tools',
              })}
            >
              {translate.tryTranslate('Инструменты')}
            </a>
          </div>
          <div className="mobile-menu__contacts">
            {contacts.map((item) => (
              <div
                className="mobile-menu__contact"
                key={item.type}
              >
                <a
                  target="_blank"
                  href={item.url}
                  rel="noreferrer"
                >
                  {getIconByType(item.type, '50px')}
                </a>
              </div>
            ))}
          </div>
          <DropDown
            className="mobile-menu__drop-down"
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
        </div>
      </MobileMenuContainer>
    );
  }
);
