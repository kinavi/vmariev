import PostCard from '../../assets/post-card.webp';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import { WellcomeConainer } from './styled';

export const Wellcome = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [imgHeight, setImgHeight] = useState(400);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.clientWidth < 400) {
      setImgHeight(ref.current.clientWidth);
    }
  }, [ref]);
  return (
    <WellcomeConainer imgHeight={imgHeight}>
      <button
        className={classNames(
          'card  animate__animated animate__zoomInDown animate__delay-2s'
        )}
        onClick={(event) => {
          event.preventDefault();
          setIsRotate((v) => !v);
          console.log('click');
        }}
      >
        <div
          className={classNames('card__content', {
            card__content_rotate: isRotate,
          })}
        >
          <div className="card__front">
            <img
              className="card__img"
              src={PostCard}
              alt="PostCard"
            />
          </div>
          <div
            className="card__back"
            style={{ background: 'white' }}
          >
            <div
              className={classNames('card__text', {
                card__text_collaps: isRotate,
              })}
            >
              <h1>Дорогая Олеся!</h1>
              <p>
                С днём рождения! В этот особенный день хочу сказать тебе, как
                сильно я тебя люблю. Ты — самое ценное, что есть в моей жизни.
                Каждый миг, проведённый с тобой, наполнен счастьем и радостью.
              </p>
              <p>
                Мне очень жаль за все те моменты, когда я мог тебя расстроить
                или обидеть. Пожалуйста, прости меня. Я стремлюсь быть лучше для
                тебя и обещаю делать всё возможное, чтобы ты чувствовала себя
                любимой и счастливой.
              </p>
              <p>
                Я мечтаю прожить с тобой всю свою жизнь, разделить все радости и
                горести, создать множество великолепных моментов, о которых мы
                будем вспоминать с улыбкой. Ты — моя вдохновительница, моя
                поддержка и мой лучший друг.
              </p>
              <p>
                С днём рождения, моя любовь! Пусть каждый день приносит тебе
                счастье, а наша любовь только крепнет с каждым мигом.
              </p>
              <p>
                ❤️Твой всегда и навсегда Вова ❤️
                <br /> (ака Муся, ака Вреднюха)
              </p>
              <Link
                className="card__link"
                onClick={(event) => {
                  event.stopPropagation();
                }}
                to={NAVIGATION.maps}
              >
                Получить подарок
              </Link>
            </div>
          </div>
        </div>
      </button>
    </WellcomeConainer>
  );
};
