import React from 'react';
import DATA from '../../INITIAL_DATA.json';
import { BlockHeader } from '../../components/BlockHeader';
import { guid } from '../../helpers/functions/guid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ReviewContainer } from './styled';
import { CustomDot } from './chunks/CustomDot';
import { Rait } from './chunks/Rait';
import { observer } from 'mobx-react-lite';
import { translate } from '../../translator';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 756 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 756, min: 0 },
    items: 1,
  },
};

export const Review = observer(() => {
  return (
    <ReviewContainer id="review">
      <BlockHeader title={translate.tryTranslate("Отзывы")}>
        <div className="review__review-count">
          {DATA.review.length} {translate.tryTranslate('сообщений')}
        </div>
      </BlockHeader>
      <Carousel
        className="review__list"
        showDots
        arrows={false}
        partialVisible={false}
        draggable={true}
        responsive={responsive}
        itemClass="review__item"
        customDot={<CustomDot />}
        renderDotsOutside
      >
        {DATA.review.map((item) => (
          <div
            key={guid()}
            className="review__container"
          >
            <div className="review__header">
              <div className="review__name">{item.name}</div>
              <Rait
                maxRait={5}
                rait={item.rait}
              />
              {/* <div className="review__rait">{item.rait}</div> */}
            </div>
            <div className="review__text">{item.text}</div>
          </div>
        ))}
      </Carousel>
    </ReviewContainer>
  );
});
