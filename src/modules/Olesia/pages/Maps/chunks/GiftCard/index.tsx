import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import classNames from 'classnames';
import { GiftCardContainer } from './styled';
import { GiftType } from '../../types';

export const GiftCard = (props: { gift: GiftType; onClose: () => void }) => {
  const {
    gift: {
      content: { img, text },
      title,
    },
    onClose,
  } = props;
  // const [isReceived, setIsReceived] = useState(props.gift.isReceived);
  const [needClose, setNeedClose] = useState(false);
  useEffect(() => {
    if (needClose) {
      const timeId = setTimeout(onClose, 600);
      return () => clearTimeout(timeId);
    }
  }, [needClose, onClose]);
  return (
    <GiftCardContainer
      className={classNames(
        'animate__animated',
        'animate__bounceIn',
        needClose ? 'animate__bounceOut' : ''
      )}
    >
      <img
        src={img}
        alt="img"
      />
      <div className="gift-card__content">
        <div className="gift-card__title">{title}</div>
        <div className="gift-card__text">{text}</div>
      </div>
      <Button
        variant="outlined"
        onClick={() => setNeedClose((v) => !v)}
      >
        Закрыть
      </Button>
    </GiftCardContainer>
  );
};
