import classNames from 'classnames';
import { useEffect, useState } from 'react';
import DATA from '../../../../INITIAL_DATA.json';
import { MobileMenuContainer } from './styled';
import { getIconByType } from '../../../Contact/getIconByType';

export const MobileMenu = (props: {
  onClose: () => void;
  hash?: string;
  isOpen: boolean;
}) => {
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
            Обо мне
          </a>
          <a
            onClick={onClose}
            href="#services"
            className={classNames('mobile-menu__link', {
              'mobile-menu__link_active': hash === '#services',
            })}
          >
            Услуги
          </a>
          <a
            onClick={onClose}
            href="#review"
            className={classNames('mobile-menu__link', {
              'mobile-menu__link_active': hash === '#review',
            })}
          >
            Отзывы
          </a>
          <a
            onClick={onClose}
            href="#contact"
            className={classNames('mobile-menu__link', {
              'mobile-menu__link_active': hash === '#contact',
            })}
          >
            Контакты
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
      </div>
    </MobileMenuContainer>
  );
};
