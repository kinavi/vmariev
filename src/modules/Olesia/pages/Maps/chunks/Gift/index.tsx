import GiftImg from '../../../../assets/gift_1.png';
import { useEffect, useMemo, useState } from 'react';
import { difDate, distanceBetweenLocations } from './helpers';
import { GiftContainer } from './styled';
import { GiftType } from '../../types';

export const Gift = (props: {
  gift: GiftType;
  myPosiotion: [number, number];
  onCLick(gift: GiftType): void;
}) => {
  const {
    myPosiotion,
    gift: { title, availabilityDate, position },
    onCLick,
  } = props;
  const [time, setTime] = useState(() => {
    return difDate(availabilityDate);
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      const dif = difDate(availabilityDate);
      setTime(dif);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const s = Math.floor(time / 1000) % 60;
  const m = Math.floor(time / 1000 / 60) % 60;
  const h = Math.floor(time / 1000 / 60 / 60);
  const isTimeOut = time < 0;

  const pathSize = useMemo(() => {
    return distanceBetweenLocations(
      { latitude: myPosiotion[0], longitude: myPosiotion[1] },
      { latitude: position[0], longitude: position[1] }
    );
  }, [myPosiotion, position]);

  const isHisPlace = pathSize <= 0.7;

  const isReadyTakeGift = isHisPlace && isTimeOut;

  const renderBody = () => {
    if (isReadyTakeGift) {
      return <div>Получите подарок</div>;
    }
    return (
      <>
        {!isTimeOut && (
          <div>
            {`Через ${h}:${m >= 10 ? m : '0' + m}:${s >= 10 ? s : '0' + s}`}
          </div>
        )}
        <div>{isHisPlace ? 'Вы на месте' : `До ${pathSize.toFixed(2)} км`}</div>
      </>
    );
  };

  return (
    <GiftContainer
      onClick={(e) => {
        e.preventDefault();
        onCLick(props.gift);
      }}
      disabled={!isReadyTakeGift}
      showBorder={isReadyTakeGift}
    >
      <img
        style={{
          width: '40px',
        }}
        src={GiftImg}
        alt="GiftImg"
      />
      <div className="gift__content">
        <div className="gift__title">{title}</div>
        <div className="gift__info-container">{renderBody()}</div>
      </div>
      <div></div>
    </GiftContainer>
  );
};
