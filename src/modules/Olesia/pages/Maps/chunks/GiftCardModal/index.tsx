import styled from 'styled-components';
import { GiftCard } from '../GiftCard';
import { GiftCardModalContainer } from './styled';
import { GiftType } from '../../types';

export const GiftCardModal = (props: {
  card?: GiftType;
  children: JSX.Element;
  onClose: () => void;
}) => {
  return (
    <GiftCardModalContainer>
      {props.children}
      {props.card && (
        <GiftCard
          gift={props.card}
          onClose={props.onClose}
        />
      )}
      <div
        className="gift-card-modal__overlayer"
        style={{ opacity: props.card ? 1 : 0, zIndex: props.card ? 1 : -1 }}
        onClick={props.onClose}
      />
    </GiftCardModalContainer>
  );
};
