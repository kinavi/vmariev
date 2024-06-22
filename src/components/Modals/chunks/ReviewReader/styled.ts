import styled from 'styled-components';
import { Modal } from '../../../../ui/components/Modal';

export const ReviewReaderContainer = styled(Modal)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  & .review-reader {
    &__name {
      color: #fff;
      font-size: 20px;
    }
    &__text {
      text-align: start;
      color: var(--gray-text, #97989b);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
